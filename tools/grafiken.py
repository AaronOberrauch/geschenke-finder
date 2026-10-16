"""Erzeugt Social-Media-Grafiken für jede Seite des Geschenke-Finders.

    python -P tools/grafiken.py

Pro Seite (Startseite = "start", Themen-Seiten = ihr slug) entstehen in assets/social/:
    <slug>-pin.png    1000 x 1500  Pinterest-Pin
    <slug>-story.png  1080 x 1920  Instagram-/Facebook-Story, TikTok-Titelbild
    <slug>-og.png     1200 x 630   Vorschaubild, wenn der Link in WhatsApp/Facebook geteilt wird

Braucht Pillow und die Windows-Schriften Segoe UI / Segoe UI Emoji.
"""
import importlib.util
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

# tools/site.py laden (der Name "site" ist in Python schon belegt, daher über den Pfad)
_spec = importlib.util.spec_from_file_location('sitetool', Path(__file__).resolve().parent / 'site.py')
sitetool = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(sitetool)

ROOT = sitetool.ROOT
OUT = ROOT / 'assets' / 'social'
FONTS = Path('C:/Windows/Fonts')

BRAND = (234, 88, 12)
BRAND_LIGHT = (245, 158, 11)
INK = (15, 23, 42)
MUTED = (100, 116, 139)
CREAM = (255, 247, 237)
WHITE = (255, 255, 255)
TILE = {
    'kitchen': (254, 215, 170), 'tech': (199, 210, 254), 'beauty': (251, 207, 232),
    'home': (187, 247, 208), 'fun': (253, 230, 138), 'pets': (231, 216, 195), 'sport': (153, 246, 228),
}
BUDGET_TEXT = {'under15': 'unter 15 €', '15to50': '15 bis 50 €', '50to150': '50 bis 150 €', 'over150': 'über 150 €'}


def font(size, bold=False):
    return ImageFont.truetype(str(FONTS / ('segoeuib.ttf' if bold else 'segoeui.ttf')), size)


def emoji_font(size):
    return ImageFont.truetype(str(FONTS / 'seguiemj.ttf'), size)


def wrap(draw, text, fnt, width):
    lines, line = [], ''
    for word in text.split():
        test = f'{line} {word}'.strip()
        if draw.textlength(test, font=fnt) <= width:
            line = test
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def fit_title(draw, text, width, max_lines, start, minimum, max_height=None):
    """Größte Schrift, bei der der Titel in max_lines Zeilen (und max_height Pixel) passt."""
    size = start
    while size > minimum:
        fnt = font(size, bold=True)
        lines = wrap(draw, text, fnt, width)
        if len(lines) <= max_lines and (max_height is None or len(lines) * size * 1.15 <= max_height):
            return fnt, lines
        size -= 4
    fnt = font(minimum, bold=True)
    return fnt, wrap(draw, text, fnt, width)[:max_lines]


def gradient(img, box, top, bottom):
    x0, y0, x1, y1 = box
    draw = ImageDraw.Draw(img)
    for y in range(y0, y1):
        t = (y - y0) / max(1, y1 - y0 - 1)
        color = tuple(round(a + (b - a) * t) for a, b in zip(top, bottom))
        draw.line([(x0, y), (x1, y)], fill=color)


def centered(draw, y, text, fnt, fill, width):
    w = draw.textlength(text, font=fnt)
    draw.text(((width - w) / 2, y), text, font=fnt, fill=fill)


def emoji(draw, center, char, size):
    """Emoji mittig um den Punkt `center` zeichnen."""
    fnt = emoji_font(size)
    char = char.replace('️', '')  # Variantenzeichen verschiebt sonst die Breite (z. B. 🛏️)
    x0, y0, x1, y1 = draw.textbbox((0, 0), char, font=fnt, embedded_color=True)
    cx, cy = center
    draw.text((cx - (x1 - x0) / 2 - x0, cy - (y1 - y0) / 2 - y0), char, font=fnt, embedded_color=True)


def pick_products(products, limit):
    """Bis zu `limit` Produkte, abwechselnd aus verschiedenen Bereichen (stabile Reihenfolge)."""
    by_cat = {}
    for p in products:
        by_cat.setdefault(p['category'], []).append(p)
    picked = []
    while len(picked) < limit and any(by_cat.values()):
        for cat in list(by_cat):
            if by_cat[cat] and len(picked) < limit:
                picked.append(by_cat[cat].pop(0))
    return picked


def short_url(config):
    return config['siteUrl'].replace('https://', '').rstrip('/')


def subtitle_for(page, count, extra_filter=None):
    budget = dict(page.get('filter', {}) if page else {}, **(extra_filter or {})).get('budget')
    if budget:
        return f'{count} Ideen {BUDGET_TEXT[budget]}'
    return f'{count} Geschenkideen für jedes Budget'


def tall(info, size, list_count):
    """Pinterest-Pin und Story: Titel oben, Produktliste, Hinweis unten."""
    w, h = size
    img = Image.new('RGB', size, CREAM)
    head_h = int(h * 0.36)
    gradient(img, (0, 0, w, head_h), BRAND, BRAND_LIGHT)
    draw = ImageDraw.Draw(img)
    pad = int(w * 0.07)

    big = int(w * 0.15)
    top = int(h * 0.03)
    emoji(draw, (w / 2, top + big * 0.6), info['emoji'], big)
    sub_font = font(int(w * 0.042))
    y = top + int(big * 1.35)
    title_font, lines = fit_title(draw, info['title'], w - 2 * pad, 3, int(w * 0.095), int(w * 0.055),
                                  max_height=head_h - sub_font.size * 2 - y)
    for line in lines:
        centered(draw, y, line, title_font, WHITE, w)
        y += int(title_font.size * 1.15)
    centered(draw, y + int(w * 0.015), info['subtitle'], sub_font, (255, 237, 213), w)

    # Produktliste
    y = head_h + int(h * 0.03)
    row_h = int((h * 0.44) / list_count)
    tile = int(row_h * 0.8)
    name_font = font(int(min(w * 0.05, row_h * 0.36)), bold=True)
    for p in info['products'][:list_count]:
        radius = int(tile * 0.25)
        draw.rounded_rectangle([pad, y, w - pad, y + tile], radius=radius, fill=WHITE)
        draw.rounded_rectangle([pad, y, pad + tile, y + tile], radius=radius, fill=TILE[p['category']])
        emoji(draw, (pad + tile / 2, y + tile / 2), p['emoji'], int(tile * 0.6))
        text_x = pad + tile + int(tile * 0.3)
        name = wrap(draw, p['title'], name_font, w - pad - text_x - 20)[0]
        draw.text((text_x, y + (tile - name_font.size * 1.3) / 2), name, font=name_font, fill=INK)
        y += row_h

    # Fuß: Button, Adresse, Werbehinweis
    cta_font = font(int(w * 0.05), bold=True)
    cta = 'Alle Ideen ansehen  →'
    cta_w = draw.textlength(cta, font=cta_font) + 2 * int(w * 0.06)
    cta_h = int(cta_font.size * 2.1)
    cta_y = int(h * 0.845)
    draw.rounded_rectangle([(w - cta_w) / 2, cta_y, (w + cta_w) / 2, cta_y + cta_h], radius=cta_h // 2, fill=BRAND)
    centered(draw, cta_y + (cta_h - cta_font.size * 1.33) / 2, cta, cta_font, WHITE, w)
    url_font = font(int(w * 0.03))
    url_y = cta_y + cta_h + int(h * 0.015)
    centered(draw, url_y, short_url(info['config']), url_font, MUTED, w)
    centered(draw, url_y + int(url_font.size * 1.6), 'Anzeige · enthält Amazon-Partnerlinks', font(int(w * 0.024)), MUTED, w)
    return img


def footer(draw, info, w, h, cta_y, button=BRAND, text=WHITE, muted=MUTED):
    """Button „Alle Ideen ansehen“, Adresse und Werbehinweis – gleich für alle Pin-Designs."""
    cta_font = font(int(w * 0.05), bold=True)
    cta = 'Alle Ideen ansehen  →'
    cta_w = draw.textlength(cta, font=cta_font) + 2 * int(w * 0.06)
    cta_h = int(cta_font.size * 2.1)
    draw.rounded_rectangle([(w - cta_w) / 2, cta_y, (w + cta_w) / 2, cta_y + cta_h], radius=cta_h // 2, fill=button)
    centered(draw, cta_y + (cta_h - cta_font.size * 1.33) / 2, cta, cta_font, text, w)
    url_font = font(int(w * 0.03))
    url_y = cta_y + cta_h + int(h * 0.015)
    centered(draw, url_y, short_url(info['config']), url_font, muted, w)
    centered(draw, url_y + int(url_font.size * 1.6), 'Anzeige · enthält Amazon-Partnerlinks', font(int(w * 0.024)), muted, w)


def grid_pin(info, size=(1000, 1500)):
    """Design B: Titel oben auf Weiß, darunter 2 × 3 große bunte Kacheln mit Emoji und Namen."""
    w, h = size
    img = Image.new('RGB', size, CREAM)
    gradient(img, (0, 0, w, int(h * 0.05)), BRAND, BRAND_LIGHT)
    draw = ImageDraw.Draw(img)
    pad = int(w * 0.06)
    y = int(h * 0.075)
    pill_font = font(int(w * 0.032), bold=True)
    pill = f"{info['subtitle']}"
    pw = draw.textlength(pill, font=pill_font) + 40
    draw.rounded_rectangle([(w - pw) / 2, y, (w + pw) / 2, y + pill_font.size * 1.7], radius=30, fill=(255, 237, 213))
    centered(draw, y + pill_font.size * 0.25, pill, pill_font, (194, 65, 12), w)
    y += int(pill_font.size * 2.4)
    title_font, lines = fit_title(draw, info['title'], w - 2 * pad, 3, int(w * 0.085), int(w * 0.055),
                                  max_height=int(h * 0.24))
    for line in lines:
        centered(draw, y, line, title_font, INK, w)
        y += int(title_font.size * 1.15)
    # 2 × 3 Kacheln
    top = max(y + int(h * 0.03), int(h * 0.33))
    gap = int(w * 0.035)
    cols, rows = 2, 3
    tile_w = (w - 2 * pad - gap) / cols
    tile_h = (int(h * 0.80) - top - gap * (rows - 1)) / rows
    name_font = font(int(min(w * 0.034, tile_h * 0.125)), bold=True)
    for i, p in enumerate(info['products'][:6]):
        cx = pad + (i % cols) * (tile_w + gap)
        cy = top + (i // cols) * (tile_h + gap)
        draw.rounded_rectangle([cx, cy, cx + tile_w, cy + tile_h], radius=int(tile_w * 0.09), fill=TILE[p['category']])
        emoji(draw, (cx + tile_w / 2, cy + tile_h * 0.33), p['emoji'], int(tile_h * 0.36))
        name_lines = wrap(draw, p['title'], name_font, tile_w - 30)[:2]
        # Namen im unteren Teil der Kachel senkrecht mittig, egal ob 1 oder 2 Zeilen
        block = len(name_lines) * name_font.size * 1.15
        ny = cy + tile_h * 0.80 - block / 2
        for nl in name_lines:
            nw = draw.textlength(nl, font=name_font)
            draw.text((cx + (tile_w - nw) / 2, ny), nl, font=name_font, fill=INK)
            ny += name_font.size * 1.15
    footer(draw, info, w, h, int(h * 0.835))
    return img


def list_pin(info, size=(1000, 1500)):
    """Design C: dunkler Hintergrund, nummerierte Liste mit orangen Ziffern."""
    w, h = size
    dark, amber = (15, 23, 42), (251, 191, 36)
    img = Image.new('RGB', size, dark)
    draw = ImageDraw.Draw(img)
    pad = int(w * 0.08)
    emoji(draw, (w / 2, int(h * 0.09)), info['emoji'], int(w * 0.12))
    y = int(h * 0.16)
    title_font, lines = fit_title(draw, info['title'], w - 2 * pad, 3, int(w * 0.08), int(w * 0.052),
                                  max_height=int(h * 0.22))
    for line in lines:
        centered(draw, y, line, title_font, WHITE, w)
        y += int(title_font.size * 1.15)
    centered(draw, y + int(h * 0.01), info['subtitle'], font(int(w * 0.038)), amber, w)
    top = max(y + int(h * 0.06), int(h * 0.38))
    items = info['products'][:6]
    row_h = (int(h * 0.80) - top) / max(1, len(items))
    num_font = font(int(min(row_h * 0.5, w * 0.075)), bold=True)
    name_font = font(int(min(row_h * 0.32, w * 0.045)), bold=True)
    for i, p in enumerate(items):
        ry = top + i * row_h
        draw.line([(pad, ry), (w - pad, ry)], fill=(30, 41, 59), width=2)
        draw.text((pad, ry + (row_h - num_font.size * 1.3) / 2), str(i + 1), font=num_font, fill=amber)
        text_x = pad + int(w * 0.11)
        name = wrap(draw, p['title'], name_font, w - pad - text_x - int(row_h * 0.9))[0]
        draw.text((text_x, ry + (row_h - name_font.size * 1.3) / 2), name, font=name_font, fill=WHITE)
        emoji(draw, (w - pad - row_h * 0.35, ry + row_h / 2), p['emoji'], int(row_h * 0.5))
    footer(draw, info, w, h, int(h * 0.835), button=amber, text=dark, muted=(148, 163, 184))
    return img


DESIGNS = {'a': lambda info: tall(info, (1000, 1500), 6), 'b': grid_pin, 'c': list_pin}


def wide(info):
    """Vorschaubild 1200 x 630 für geteilte Links."""
    w, h = 1200, 630
    img = Image.new('RGB', (w, h), CREAM)
    gradient(img, (0, 0, w, h), BRAND, BRAND_LIGHT)
    draw = ImageDraw.Draw(img)
    emoji(draw, (160, 170), info['emoji'], 150)
    title_font, lines = fit_title(draw, info['title'], 760, 3, 76, 50)
    y = 80
    for line in lines:
        draw.text((280, y), line, font=title_font, fill=WHITE)
        y += int(title_font.size * 1.15)
    draw.text((280, y + 14), info['subtitle'], font=font(36), fill=(255, 237, 213))
    # Reihe mit Produkt-Kacheln
    tile, gap = 150, 30
    items = info['products'][:6]
    x = (w - (len(items) * tile + (len(items) - 1) * gap)) / 2
    for p in items:
        draw.rounded_rectangle([x, 390, x + tile, 390 + tile], radius=34, fill=WHITE)
        emoji(draw, (x + tile / 2, 390 + tile / 2), p['emoji'], 84)
        x += tile + gap
    centered(draw, 565, f"Geschenke-Finder · {short_url(info['config'])}", font(28, bold=True), WHITE, w)
    return img


def page_infos():
    config = sitetool.load_js('config.js', 'CONFIG')
    products = sitetool.load_js('produkte.js', 'PRODUCTS')
    pages = sitetool.load_js('seiten.js', 'PAGES')
    yield {
        'slug': 'start', 'emoji': '🎁', 'config': config,
        'title': 'Geschenkideen für die ganze Familie',
        'subtitle': f'{len(products)} Ideen – in 3 Klicks gefunden',
        'products': pick_products(products, 6),
    }
    for page in pages:
        fitting = [p for p in products if sitetool.product_fits(p, page)]
        yield {
            'slug': page['slug'], 'emoji': page['emoji'], 'config': config,
            'title': page['titel'], 'subtitle': subtitle_for(page, len(fitting)),
            'products': pick_products(fitting, 6),
        }


def pin_infos():
    """Eine Grafik pro Eintrag in daten/pins.js (für den Pinterest-Feed)."""
    config = sitetool.load_js('config.js', 'CONFIG')
    products = sitetool.load_js('produkte.js', 'PRODUCTS')
    pages = {p['slug']: p for p in sitetool.load_js('seiten.js', 'PAGES')}
    for pin in sitetool.load_js('pins.js', 'PINS'):
        page = pages.get(pin.get('seite', ''))
        fitting = [p for p in products if sitetool.product_fits(p, page, pin.get('filter'))]
        # Vom Bot ausgewählte Produkte zuerst, Rest automatisch auffüllen
        chosen = [p for t in pin.get('produkte', []) for p in fitting if p['title'] == t]
        rest = pick_products([p for p in fitting if p not in chosen], 6)
        yield pin, {
            'emoji': pin['emoji'], 'config': config, 'title': pin['titel'],
            'subtitle': subtitle_for(page, len(fitting), pin.get('filter')),
            'products': (chosen + rest)[:6],
        }


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    wanted = set()
    for info in page_infos():
        for kind, img in (('pin', tall(info, (1000, 1500), 6)),
                          ('story', tall(info, (1080, 1920), 6)),
                          ('og', wide(info))):
            path = OUT / f"{info['slug']}-{kind}.png"
            img.save(path, optimize=True)
            wanted.add(path)
    for pin, info in pin_infos():
        path = sitetool.pin_image(pin)
        DESIGNS[pin.get('design', 'a')](info).save(path, optimize=True)
        wanted.add(path)
    for old in OUT.glob('*.png'):
        if old not in wanted:
            old.unlink()
    print(f'{len(wanted)} Grafiken in assets/social/ erzeugt.')


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    main()
