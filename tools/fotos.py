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


def search(term):
    """Bestes Foto zum Suchbegriff: muss zu allen Suchwörtern passen (Schlagwörter des Fotos), keine KI-Bilder,
    keine schlechte Qualität, groß genug; unter den passenden gewinnt Pixabays Reihenfolge (beliebt + relevant)."""
    data = api({'q': term, 'lang': 'de', 'per_page': 60, 'order': 'popular'})
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


def save_pins(pins):
    path = sitetool.ROOT / 'daten' / 'pins.js'
    head = path.read_text(encoding='utf-8').split('window.PINS =', 1)[0]
    path.write_text(head + 'window.PINS = ' + json.dumps(pins, ensure_ascii=False, indent=2) + ';\n',
                    encoding='utf-8', newline='\n')


def main():
    if not KEY_FILE.exists():
        print(f'FEHLER: Pixabay-Schlüssel fehlt ({KEY_FILE}).')
        return 1
    pins = sitetool.load_js('pins.js', 'PINS')
    changed = False
    for pin in pins:
        if pin.get('foto') and not pin.get('foto_id'):
            hit = search(pin['foto'])
            if not hit:
                print(f'WARNUNG: kein passendes Foto für „{pin["foto"]}“ (Pin {pin["id"]}) – anderen Suchbegriff wählen.')
                continue
            pin['foto_id'] = hit['id']
            changed = True
            print(f'Pin {pin["id"]}: Foto {hit["id"]} ({hit["tags"][:60]})')
        if pin.get('foto_id'):
            download(pin['foto_id'])
    if changed:
        save_pins(pins)
    print('Fotos bereit.')
    return 0


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.exit(main())
