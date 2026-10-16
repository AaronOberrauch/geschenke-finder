"""Sucht und lädt Stimmungsfotos von Pixabay für Pins mit dem Feld "foto" (Suchbegriff) in daten/pins.js.

    python -I tools/fotos.py

- Für jeden Pin mit "foto", aber ohne "foto_id": sucht das beste passende Foto (keine KI-Bilder, keine schlechte
  Qualität, die meisten Likes) und trägt dessen Nummer als "foto_id" in daten/pins.js ein – so bleibt das Foto
  bei späteren Läufen dasselbe.
- Lädt jedes benötigte Foto in den lokalen Zwischenspeicher C:\\Users\\aaron\\.geschenke-finder\\foto-cache\\.
  Die Original-Fotos kommen NICHT auf die Website (Pixabay-Lizenz: keine unveränderte Weitergabe) –
  veröffentlicht wird nur der fertige Pin.

Der Pixabay-Schlüssel liegt in C:\\Users\\aaron\\.geschenke-finder\\pixabay.txt (nie ins Repository!).
"""
import importlib.util
import json
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

_spec = importlib.util.spec_from_file_location('sitetool', Path(__file__).resolve().parent / 'site.py')
sitetool = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(sitetool)

HOME = Path.home() / '.geschenke-finder'
KEY_FILE = HOME / 'pixabay.txt'
CACHE = HOME / 'foto-cache'
# Fotos mit Marken haben auf unseren Pins nichts zu suchen (Markenrecht, und es wirkt wie Werbung für die Marke)
BRANDS = ['lego', 'apple', 'iphone', 'ipad', 'macbook', 'samsung', 'nike', 'adidas', 'puma', 'coca', 'pepsi',
          'starbucks', 'disney', 'marvel', 'playstation', 'xbox', 'nintendo', 'amazon', 'ikea', 'barbie', 'playmobil']
UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) geschenke-finder/1.0'}


def api(params):
    key = KEY_FILE.read_text(encoding='utf-8').strip()
    query = urllib.parse.urlencode(dict(params, key=key, image_type='photo', safesearch='true'))
    req = urllib.request.Request('https://pixabay.com/api/?' + query, headers=UA)
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        raise RuntimeError(f'Pixabay-Fehler {e.code}: {e.read()[:150].decode("utf-8", "replace").replace(key, "<KEY>")}')


def search(term, orientation='all', lang='de'):
    """Bestes Foto zum Suchbegriff: muss zu allen Suchwörtern passen (Schlagwörter des Fotos), keine KI-Bilder,
    keine schlechte Qualität, groß genug; unter den passenden gewinnt Pixabays Reihenfolge (beliebt + relevant).
    orientation='horizontal' für Kopfbilder der Seiten. Sucht zuerst in der Sprache der Daten, dann auf Deutsch."""
    for search_lang in dict.fromkeys([lang, 'de']):
        hit = _search(term, orientation, search_lang)
        if hit:
            return hit
    return None


def _search(term, orientation, lang):
    data = api({'q': term, 'lang': lang, 'per_page': 60, 'order': 'popular', 'orientation': orientation})
    words = [w for w in term.lower().split() if len(w) > 2]

    def matches(hit):
        tags = hit['tags'].lower()
        return sum(w[:5] in tags for w in words)  # Wortanfang reicht: "kuscheln" passt zu "kuschelig"

    hits = [h for h in data.get('hits', [])
            if not h.get('isAiGenerated') and not h.get('isLowQuality') and h['imageWidth'] >= 1600
            and not any(b in h['tags'].lower() for b in BRANDS)]
    best = max((matches(h) for h in hits), default=0)
    if best < min(2, len(words)):
        return None
    return next(h for h in hits if matches(h) == best)


def cache_path(foto_id):
    return CACHE / f'{foto_id}.jpg'


def download(foto_id):
    """Lädt ein Foto über seine Nummer (Bildadressen von Pixabay sind nur befristet gültig)."""
    path = cache_path(foto_id)
    if path.exists():
        return path
    data = api({'id': foto_id})
    if not data.get('hits'):
        raise RuntimeError(f'Foto {foto_id} gibt es bei Pixabay nicht mehr.')
    req = urllib.request.Request(data['hits'][0]['largeImageURL'], headers=UA)
    with urllib.request.urlopen(req, timeout=60) as r:
        content = r.read()
    CACHE.mkdir(parents=True, exist_ok=True)
    path.write_bytes(content)
    return path


def save_js(name, var, data, lang='de'):
    path = sitetool.ROOT / sitetool.LANGS[lang]['data'] / name
    head = path.read_text(encoding='utf-8').split(f'window.{var} =', 1)[0]
    path.write_text(head + f'window.{var} = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n',
                    encoding='utf-8', newline='\n')


def resolve(entries, label, orientation='all', lang='de'):
    """Sucht für Einträge mit "foto" ohne "foto_id" ein Foto und lädt alle benötigten Fotos. True = etwas geändert."""
    changed = False
    for entry in entries:
        if entry.get('foto') and not entry.get('foto_id'):
            hit = search(entry['foto'], orientation, lang)
            if not hit:
                print(f'WARNUNG: kein passendes Foto für „{entry["foto"]}“ ({label} {entry.get("id") or entry.get("slug")})'
                      ' – anderen Suchbegriff wählen.')
                continue
            entry['foto_id'] = hit['id']
            changed = True
            print(f'{label} {entry.get("id") or entry.get("slug")}: Foto {hit["id"]} ({hit["tags"][:60]})')
        if entry.get('foto_id'):
            download(entry['foto_id'])
    return changed


def main():
    if not KEY_FILE.exists():
        print(f'FEHLER: Pixabay-Schlüssel fehlt ({KEY_FILE}).')
        return 1
    config = sitetool.load_js('config.js', 'CONFIG')
    for lang in sitetool.active_langs(config):
        pins = sitetool.load_js('pins.js', 'PINS', lang)
        if resolve(pins, f'[{lang}] Pin', lang=lang):
            save_js('pins.js', 'PINS', pins, lang)
        pages = sitetool.load_js('seiten.js', 'PAGES', lang)
        if resolve(pages, f'[{lang}] Seite', orientation='horizontal', lang=lang):
            save_js('seiten.js', 'PAGES', pages, lang)
    start_id = config.get('startFotoId')
    if start_id:
        download(start_id)
    print('Fotos bereit.')
    return 0


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.exit(main())
