"""Erzeugt kurze Video-Pins (MP4, 1000 x 1500, ohne Ton) aus den Pins mit "video": true in daten/pins.js.

    python -P tools/videos.py

Ablauf eines Videos (~9 s): Titel → 6 Produkte nacheinander mit leichtem Zoom → Schluss mit „Alle Ideen ansehen“.
Videos von Pins, die älter als 60 Tage sind, werden gelöscht (Pinterest hat sie dann längst übernommen) –
so wächst die Website nicht endlos. Braucht Pillow und imageio-ffmpeg.
"""
import importlib.util
import sys
from datetime import date, timedelta
from pathlib import Path

import imageio_ffmpeg
from PIL import Image, ImageDraw

_here = Path(__file__).resolve().parent
_spec = importlib.util.spec_from_file_location('grafiken', _here / 'grafiken.py')
g = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(g)
sitetool = g.sitetool

W, H, FPS = 1000, 1500, 30
KEEP_DAYS = 60


def video_path(pin):
    return sitetool.ROOT / 'assets' / 'social' / f"video-{pin['id']}.mp4"


def intro_slide(info):
    img = Image.new('RGB', (W, H), g.CREAM)
    g.gradient(img, (0, 0, W, H), g.BRAND, g.BRAND_LIGHT)
    draw = ImageDraw.Draw(img)
    g.emoji(draw, (W / 2, H * 0.27), info['emoji'], int(W * 0.26))
    title_font, lines = g.fit_title(draw, info['title'], W - 120, 4, int(W * 0.09), int(W * 0.055), max_height=H * 0.33)
    y = H * 0.44
    for line in lines:
        g.centered(draw, y, line, title_font, g.WHITE, W)
        y += title_font.size * 1.15
    g.centered(draw, y + 30, info['subtitle'], g.font(int(W * 0.045)), (255, 237, 213), W)
    g.centered(draw, H - 70, 'Anzeige · enthält Amazon-Partnerlinks', g.font(26), (255, 237, 213), W)
    return img


def product_slide(info, prod, index, total):
    img = Image.new('RGB', (W, H), g.CREAM)
    draw = ImageDraw.Draw(img)
    g.gradient(img, (0, 0, W, 150), g.BRAND, g.BRAND_LIGHT)
    head_font, head_lines = g.fit_title(draw, info['title'], W - 100, 2, 38, 26)
    hy = (150 - len(head_lines) * head_font.size * 1.2) / 2
    for line in head_lines:
        g.centered(draw, hy, line, head_font, g.WHITE, W)
        hy += head_font.size * 1.2
    tile = 560
    x0, y0 = (W - tile) / 2, 250
    draw.rounded_rectangle([x0, y0, x0 + tile, y0 + tile], radius=70, fill=g.TILE[prod['category']])
    g.emoji(draw, (W / 2, y0 + tile / 2), prod['emoji'], 330)
    badge_font = g.font(32, bold=True)
    bw = draw.textlength(prod['badge'], font=badge_font) + 44
    draw.rounded_rectangle([(W - bw) / 2, y0 + tile + 50, (W + bw) / 2, y0 + tile + 105], radius=28, fill=g.INK)
    g.centered(draw, y0 + tile + 57, prod['badge'], badge_font, g.WHITE, W)
    name_font, lines = g.fit_title(draw, prod['title'], W - 140, 2, 72, 46)
    y = y0 + tile + 150
    for line in lines:
        g.centered(draw, y, line, name_font, g.INK, W)
        y += name_font.size * 1.15
    info_font = g.font(34)
    info_line = ' · '.join(prod['highlights'][:2])
    if draw.textlength(info_line, font=info_font) > W - 80:
        info_line = prod['highlights'][0]
    g.centered(draw, y + 20, info_line, info_font, g.MUTED, W)
    g.centered(draw, H - 120, f'{index} / {total}', g.font(34, bold=True), g.BRAND, W)
    g.centered(draw, H - 70, 'Anzeige · enthält Amazon-Partnerlinks', g.font(26), g.MUTED, W)
    return img


def outro_slide(info):
    img = Image.new('RGB', (W, H), g.CREAM)
    g.gradient(img, (0, 0, W, H), g.BRAND, g.BRAND_LIGHT)
    draw = ImageDraw.Draw(img)
    g.emoji(draw, (W / 2, H * 0.3), '🎁', 300)
    g.centered(draw, H * 0.47, 'Alle Ideen nach Budget', g.font(66, bold=True), g.WHITE, W)
    g.centered(draw, H * 0.47 + 85, 'und Empfänger sortiert', g.font(66, bold=True), g.WHITE, W)
    g.footer(draw, info, W, H, int(H * 0.68), button=g.WHITE, text=g.BRAND, muted=(255, 237, 213))
    return img


def zoom(img, t):
    """Leichter Zoom von 100 % auf 106 % über die Dauer eines Bildes (t von 0 bis 1)."""
    s = 1 + 0.06 * t
    w, h = int(W * s), int(H * s)
    big = img.resize((w, h), Image.BILINEAR)
    left, top = (w - W) // 2, (h - H) // 2
    return big.crop((left, top, left + W, top + H))


def frames(slides, durations, fade=0.3):
    """Alle Einzelbilder: jedes Bild mit Zoom, Übergänge als Überblendung."""
    for i, (slide, dur) in enumerate(zip(slides, durations)):
        n = int(dur * FPS)
        for f in range(n):
            frame = zoom(slide, f / n)
            remaining = (n - f) / FPS
            if i + 1 < len(slides) and remaining < fade:
                nxt = zoom(slides[i + 1], 0)
                frame = Image.blend(frame, nxt, 1 - remaining / fade)
            yield frame.tobytes()


def render(info, path):
    products = info['products'][:6]
    slides = [intro_slide(info)] + [product_slide(info, p, i + 1, len(products)) for i, p in enumerate(products)] \
        + [outro_slide(info)]
    durations = [1.8] + [1.1] * len(products) + [2.0]
    writer = imageio_ffmpeg.write_frames(str(path), (W, H), fps=FPS, codec='libx264', quality=None,
                                         pix_fmt_out='yuv420p', macro_block_size=2,
                                         output_params=['-crf', '26', '-preset', 'medium', '-movflags', '+faststart'])
    writer.send(None)
    for frame in frames(slides, durations):
        writer.send(frame)
    writer.close()


def main():
    today = date.today()
    wanted = set()
    made = 0
    for pin, info in g.pin_infos():
        if not pin.get('video'):
            continue
        if date.fromisoformat(pin['datum']) < today - timedelta(days=KEEP_DAYS):
            continue
        path = video_path(pin)
        wanted.add(path)
        if not path.exists():  # fertige Videos nicht neu rendern – das dauert und ändert nichts
            render(info, path)
            made += 1
    for old in (sitetool.ROOT / 'assets' / 'social').glob('video-*.mp4'):
        if old not in wanted:
            old.unlink()
            print(f'altes Video entfernt: {old.name}')
    print(f'{made} neue Videos erzeugt, {len(wanted)} Videos aktiv.')


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    main()
