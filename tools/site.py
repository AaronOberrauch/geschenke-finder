"""Werkzeug für den Geschenke-Finder.

    python tools/site.py build   erzeugt index.html, ideen/*.html, sitemap.xml und robots.txt
    python tools/site.py check   prüft Daten und erzeugte Dateien; Exit-Code 1 bei Fehlern

Der Bot (siehe BOT.md) ändert nur daten/*.js, ruft danach build und check auf
und veröffentlicht nur, wenn check fehlerfrei ist.
"""
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE = ROOT / 'tools' / 'vorlage.html'
PAGES_DIR = ROOT / 'ideen'

RECIPIENTS = {'household', 'teenager', 'parents', 'kids'}
BUDGETS = {'under15', '15to50', '50to150', 'over150'}
CATEGORIES = {'kitchen', 'tech', 'beauty', 'home', 'fun'}
OCCASIONS = {'weihnachten', 'geburtstag', 'wichteln', 'nikolaus', 'valentinstag',
             'ostern', 'muttertag', 'vatertag', 'schulanfang'}
UNIVERSAL_OCCASIONS = {'geburtstag', 'weihnachten'}  # muss zu assets/app.js passen
DOMAINS = {'www.amazon.de', 'www.amazon.it'}
PLACEHOLDER_TAG = 'DEINTAG-21'

# Behauptungen, die wir nicht belegen können, und Preisangaben sind verboten
FORBIDDEN = re.compile(r'bestseller|testsieger|nr\.?\s*1\b|#\s*1\b|\d[.,]?\d*\s*sterne|bewertung|rezension|\d+[.,]?\d*\s*€|€\s*\d', re.I)
ASIN = re.compile(r'^(B0[A-Z0-9]{8}|\d{9}[\dX])$')
SLUG = re.compile(r'^[a-z0-9]+(-[a-z0-9]+)*$')

INDEX = {
    'TITLE': 'Geschenke-Finder – in 3 Klicks zur passenden Geschenkidee',
    'DESCRIPTION': 'Geschenkideen für Teenager, Eltern, Kinder und den Haushalt – nach Budget und Bereich filtern und direkt auf Amazon ansehen.',
    'PILL': 'Schnell & treffsicher',
    'H1': 'Egal ob Teenager, Eltern, Kinder oder für den Haushalt',
    'INTRO': 'Wähle aus, für wen, wie viel und welcher Bereich – wir zeigen dir passende Ideen.',
    'OCC_HEADING': 'Geschenkideen nach Anlass',
}


def load_js(name, var):
    text = (ROOT / 'daten' / name).read_text(encoding='utf-8')
    marker = f'window.{var} ='
    start = text.index(marker) + len(marker)
    body = text[start:].strip()
    if body.endswith(';'):
        body = body[:-1]
    return json.loads(body)


def render(values, root):
    out = TEMPLATE.read_text(encoding='utf-8')
    values = dict(values, ROOT=root)
    for key, value in values.items():
        out = out.replace('{{' + key + '}}', value if key == 'ROOT' else html.escape(value))
    leftover = re.findall(r'\{\{[A-Z_]+\}\}', out)
    if leftover:
        raise ValueError(f'Platzhalter ohne Wert in vorlage.html: {leftover}')
    return out


def expected_files():
    """Alle Dateien, die build erzeugt: {Pfad: Inhalt}."""
    config = load_js('config.js', 'CONFIG')
    pages = load_js('seiten.js', 'PAGES')
    site = config['siteUrl']
    files = {ROOT / 'index.html': render(dict(INDEX, CANONICAL=site, PAGE='',
                                              OG_IMAGE=f'{site}assets/social/start-og.png'), '')}
    for p in pages:
        files[PAGES_DIR / f"{p['slug']}.html"] = render({
            'TITLE': f"{p['titel']} – Geschenke-Finder",
            'DESCRIPTION': p['beschreibung'],
            'CANONICAL': f"{site}ideen/{p['slug']}.html",
            'OG_IMAGE': f"{site}assets/social/{p['slug']}-og.png",
            'PAGE': p['slug'],
            'PILL': f"{p['emoji']} Geschenkideen",
            'H1': p['titel'],
            'INTRO': p['intro'],
            'OCC_HEADING': 'Weitere Anlässe',
        }, '../')
    urls = [site] + [f"{site}ideen/{p['slug']}.html" for p in pages]
    files[ROOT / 'sitemap.xml'] = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + ''.join(f'  <url><loc>{html.escape(u)}</loc></url>\n' for u in urls)
        + '</urlset>\n')
    files[ROOT / 'robots.txt'] = f'User-agent: *\nAllow: /\nSitemap: {site}sitemap.xml\n'
    return files


def build():
    files = expected_files()
    PAGES_DIR.mkdir(exist_ok=True)
    for path, content in files.items():
        path.write_text(content, encoding='utf-8', newline='\n')
    for orphan in PAGES_DIR.glob('*.html'):
        if orphan not in files:
            orphan.unlink()
            print(f'entfernt: {orphan.relative_to(ROOT)}')
    print(f'{len(files)} Dateien erzeugt.')


def product_fits(prod, page):
    occ = page['anlass']
    if occ not in UNIVERSAL_OCCASIONS and occ not in prod.get('occasions', []):
        return False
    f = page.get('filter', {})
    if 'recipient' in f and f['recipient'] not in prod['recipients']:
        return False
    if 'budget' in f and f['budget'] != prod['budget']:
        return False
    if 'category' in f and f['category'] != prod['category']:
        return False
    return True


def check():
    errors, warnings = [], []
    err, warn = errors.append, warnings.append

    try:
        config = load_js('config.js', 'CONFIG')
        products = load_js('produkte.js', 'PRODUCTS')
        pages = load_js('seiten.js', 'PAGES')
    except (ValueError, KeyError, json.JSONDecodeError) as e:
        print(f'FEHLER: Datendatei kaputt: {e}')
        return 1

    # --- Konfiguration ---
    if config.get('partnerTag') in ('', None, PLACEHOLDER_TAG):
        warn('Partner-ID fehlt in daten/config.js – Links bringen keine Provision.')
    if config.get('amazonDomain') not in DOMAINS:
        err(f"amazonDomain muss eines von {sorted(DOMAINS)} sein.")
    if not str(config.get('siteUrl', '')).startswith('https://') or not config['siteUrl'].endswith('/'):
        err('siteUrl muss mit https:// beginnen und mit / enden.')

    # --- Produkte ---
    titles = set()
    for i, p in enumerate(products):
        where = f"Produkt {i + 1} ({p.get('title', '?')})"
        for key in ('title', 'query', 'emoji', 'category', 'budget', 'recipients', 'badge', 'highlights'):
            if not p.get(key):
                err(f'{where}: Feld "{key}" fehlt.')
        unknown = set(p) - {'title', 'query', 'emoji', 'category', 'budget', 'recipients', 'occasions', 'badge', 'highlights', 'asin'}
        if unknown:
            err(f'{where}: unbekannte Felder {sorted(unknown)}.')
        if p.get('title', '').lower() in titles:
            err(f'{where}: Titel doppelt.')
        titles.add(p.get('title', '').lower())
        if p.get('category') not in CATEGORIES:
            err(f'{where}: category muss eines von {sorted(CATEGORIES)} sein.')
        if p.get('budget') not in BUDGETS:
            err(f'{where}: budget muss eines von {sorted(BUDGETS)} sein.')
        if not set(p.get('recipients', [])) <= RECIPIENTS:
            err(f'{where}: recipients nur aus {sorted(RECIPIENTS)}.')
        if not set(p.get('occasions', [])) <= OCCASIONS:
            err(f'{where}: occasions nur aus {sorted(OCCASIONS)}.')
        if 'asin' in p and not ASIN.match(str(p['asin'])):
            err(f'{where}: asin "{p["asin"]}" ist keine gültige Amazon-Produktnummer.')
        if not 2 <= len(p.get('highlights', [])) <= 4:
            err(f'{where}: 2 bis 4 highlights.')
        texts = [p.get('title', ''), p.get('badge', '')] + list(p.get('highlights', []))
        for t in texts:
            if FORBIDDEN.search(t):
                err(f'{where}: "{t}" enthält eine Preisangabe oder unbelegte Behauptung (Bestseller, Testsieger, Bewertungen …).')
        if len(p.get('badge', '')) > 28:
            err(f'{where}: badge zu lang (max. 28 Zeichen).')
        if any(len(h) > 40 for h in p.get('highlights', [])):
            err(f'{where}: highlight zu lang (max. 40 Zeichen).')

    for r in RECIPIENTS:
        for b in BUDGETS:
            if not any(r in p['recipients'] and p['budget'] == b for p in products):
                warn(f'Keine Produkte für Zielgruppe "{r}" mit Budget "{b}".')

    # --- Themen-Seiten ---
    slugs = set()
    for p in pages:
        where = f"Seite {p.get('slug', '?')}"
        for key in ('slug', 'titel', 'kurztitel', 'emoji', 'anlass', 'monate', 'beschreibung', 'intro'):
            if not p.get(key):
                err(f'{where}: Feld "{key}" fehlt.')
        if not SLUG.match(p.get('slug', '')):
            err(f'{where}: slug nur aus Kleinbuchstaben, Ziffern und Bindestrichen.')
        if p.get('slug') in slugs:
            err(f'{where}: slug doppelt.')
        slugs.add(p.get('slug'))
        if p.get('anlass') not in OCCASIONS:
            err(f'{where}: anlass muss eines von {sorted(OCCASIONS)} sein.')
        if not all(isinstance(m, int) and 1 <= m <= 12 for m in p.get('monate', [])):
            err(f'{where}: monate nur Zahlen von 1 bis 12.')
        allowed = {'recipient': RECIPIENTS, 'budget': BUDGETS, 'category': CATEGORIES}
        for k, v in p.get('filter', {}).items():
            if k not in allowed or v not in allowed[k]:
                err(f'{where}: ungültiger filter {k}={v}.')
        if not 50 <= len(p.get('beschreibung', '')) <= 160:
            warn(f'{where}: beschreibung sollte 50–160 Zeichen lang sein (für Google).')
        if not errors:
            n = sum(product_fits(prod, p) for prod in products)
            if n < 4:
                err(f'{where}: nur {n} passende Produkte – mindestens 4 nötig (occasions ergänzen).')

    # --- Erzeugte Dateien aktuell? ---
    if not errors:
        files = expected_files()
        for path, content in files.items():
            if not path.exists() or path.read_text(encoding='utf-8') != content:
                err(f'{path.relative_to(ROOT)} ist nicht aktuell – "python tools/site.py build" ausführen.')
        for f in PAGES_DIR.glob('*.html'):
            if f not in files:
                err(f'{f.relative_to(ROOT)} gehört zu keiner Seite in daten/seiten.js.')
        social = ROOT / 'assets' / 'social'
        for slug in ['start'] + [p['slug'] for p in pages]:
            for kind in ('pin', 'story', 'og'):
                if not (social / f'{slug}-{kind}.png').exists():
                    err(f'Grafik assets/social/{slug}-{kind}.png fehlt – "python -P tools/grafiken.py" ausführen.')

    # --- Rechtliches ---
    for legal in ('impressum.html', 'datenschutz.html'):
        if '<mark>' in (ROOT / legal).read_text(encoding='utf-8'):
            warn(f'{legal} enthält noch Platzhalter (gelb markiert).')

    for w in warnings:
        print(f'WARNUNG: {w}')
    for e in errors:
        print(f'FEHLER:  {e}')
    print(f'{len(products)} Produkte, {len(pages)} Themen-Seiten, {len(errors)} Fehler, {len(warnings)} Warnungen.')
    return 1 if errors else 0


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    command = sys.argv[1] if len(sys.argv) > 1 else ''
    if command == 'build':
        build()
    elif command == 'check':
        sys.exit(check())
    else:
        print(__doc__)
        sys.exit(2)
