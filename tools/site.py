"""Werkzeug für den Geschenke-Finder (Deutsch und – wenn aktiviert – Italienisch).

    python tools/site.py build   erzeugt alle Seiten, sitemap.xml, robots.txt und die Pinterest-Feeds
    python tools/site.py check   prüft Daten und erzeugte Dateien; Exit-Code 1 bei Fehlern

Deutsch:      Daten in daten/,    Seiten im Hauptordner und in ideen/, Feed pins.xml
Italienisch:  Daten in daten/it/, Seiten in it/ und it/idee/,          Feed pins-it.xml
              (nur wenn in daten/config.js "it": {"aktiv": true} gesetzt ist)

Der Bot (siehe BOT.md) ändert nur Dateien in daten/, ruft danach build und check auf
und veröffentlicht nur, wenn check fehlerfrei ist.
"""
import hashlib
import html
import importlib.util
import json
import re
import sys
from datetime import date, timedelta
from pathlib import Path
from urllib.parse import quote, urlencode

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE = ROOT / 'tools' / 'vorlage.html'

_spec = importlib.util.spec_from_file_location('texte', Path(__file__).resolve().parent / 'texte.py')
texte = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(texte)
LANGS, T = texte.LANGS, texte.T

PAGES_DIR = ROOT / LANGS['de']['pages_dir']  # für ältere Werkzeuge, die nur Deutsch kennen

RECIPIENTS = {'household', 'teenager', 'parents', 'kids'}
BUDGETS = {'under15', '15to50', '50to150', 'over150'}
CATEGORIES = {'kitchen', 'tech', 'beauty', 'home', 'fun', 'sport', 'pets'}
OCCASIONS = LANGS['de']['occasions']
UNIVERSAL_OCCASIONS = LANGS['de']['universal']  # muss zu assets/app.js passen
DOMAINS = {'www.amazon.de', 'www.amazon.it'}
PLACEHOLDER_TAG = 'DEINTAG-21'

# Behauptungen, die wir nicht belegen können, und Preisangaben sind verboten (deutsch und italienisch)
CLAIMS = re.compile(r'bestseller|testsieger|nr\.?\s*1\b|#\s*1\b|\d[.,]?\d*\s*sterne|bewertung|rezension'
                    r'|beliebteste|die besten|top[\s-]*\d+'
                    r'|più vendut|i migliori|le migliori|\d[.,]?\d*\s*stelle|recension|numero\s*1|n\.\s*1\b', re.I)
TESTED = re.compile(r'getestet|im test|testurteil|unser favorit|garantiert|testato|provato da noi|garantit', re.I)
PRICE = re.compile(r'\d+[.,]?\d*\s*€|€\s*\d')
PIN_ID = re.compile(r'^\d{4}-\d{2}-\d{2}-[a-z0-9]+(-[a-z0-9]+)*$')
ASIN = re.compile(r'^(B0[A-Z0-9]{8}|\d{9}[\dX])$')
SLUG = re.compile(r'^[a-z0-9]+(-[a-z0-9]+)*$')

INDEX = T['de']['INDEX']  # für ältere Werkzeuge


# ---------------------------------------------------------------- Daten und Einstellungen

def load_js(name, var, lang='de'):
    folder = 'daten' if name == 'config.js' else LANGS[lang]['data']
    text = (ROOT / folder / name).read_text(encoding='utf-8')
    marker = f'window.{var} ='
    start = text.index(marker) + len(marker)
    body = text[start:].strip()
    if body.endswith(';'):
        body = body[:-1]
    return json.loads(body)


def lang_config(config, lang):
    """Einstellungen einer Sprache: Deutsch = Hauptebene, Italienisch = Abschnitt "it" (erbt siteUrl usw.)."""
    if lang == 'de':
        return config
    return dict(config, **config.get(lang, {}))


def active_langs(config):
    return ['de'] + [lg for lg in LANGS if lg != 'de' and config.get(lg, {}).get('aktiv')]


def lang_url(config, lang):
    return config['siteUrl'] + LANGS[lang]['out']


# ---------------------------------------------------------------- HTML-Bausteine

# Platzhalter, die fertiges HTML enthalten (alle anderen werden als Text maskiert)
RAW_KEYS = {'ROOT', 'HOME', 'STATIC_GRID', 'STATIC_OCCASIONS', 'RATGEBER', 'HERO_CLASS', 'HERO_STYLE', 'HERO_CREDIT',
            'HREFLANG', 'LANG_SWITCH'}


def hero_values(slug, root, lang='de'):
    """Kopfbild der Seite (erzeugt von tools/grafiken.py) – ohne Bild bleibt der schlichte Kopf."""
    rel = f"{LANGS[lang]['hero']}/{slug}.jpg"
    path = ROOT / rel
    if not path.exists():
        return {'HERO_CLASS': '', 'HERO_STYLE': '', 'HERO_CREDIT': ''}
    version = hashlib.sha1(path.read_bytes()).hexdigest()[:8]
    return {'HERO_CLASS': ' hero-foto',
            'HERO_STYLE': f' style="--hero: url(\'{root}{rel}?v={version}\')"',
            'HERO_CREDIT': f'<span class="hero-credit">{T[lang]["PHOTO_CREDIT"]}</span>'}


def page_tag(config, slug):
    """Tracking-ID für eine Seite ("start" = Startseite); ohne eigene ID gilt die Haupt-Partner-ID."""
    return config.get('trackingIds', {}).get(slug) or config.get('partnerTag')


def amazon_url(prod, config, slug='start'):
    base = f"https://{config.get('amazonDomain', 'www.amazon.de')}"
    if prod.get('asin'):
        url = f"{base}/dp/{quote(prod['asin'])}"
        params = {}
    else:
        url = f'{base}/s'
        params = {'k': prod['query']}
    tag = page_tag(config, slug)
    if tag and tag != PLACEHOLDER_TAG:
        params['tag'] = tag
    return url + ('?' + urlencode(params) if params else '')


def card_html(p, config, slug='start', lang='de'):
    esc, t = html.escape, T[lang]
    return (
        '\n            <article class="card">'
        f'\n                <div class="card-visual cat-{p["category"]}">'
        f'\n                    <span aria-hidden="true">{p["emoji"]}</span>'
        f'\n                    <span class="badge">{esc(p["badge"])}</span>'
        '\n                </div>'
        '\n                <div class="card-body">'
        f'\n                    <h3>{esc(p["title"])}</h3>'
        f'\n                    <p class="for">{t["FOR"]}: {", ".join(esc(t["RECIPIENT"][r]) for r in p["recipients"])}</p>'
        f'\n                    <ul>{"".join(f"<li>{esc(h)}</li>" for h in p["highlights"])}</ul>'
        '\n                    <div class="card-foot">'
        f'\n                        <div class="price-band">{t["PRICE_BAND"]}<strong>{t["BUDGET"][p["budget"]]}</strong></div>'
        f'\n                        <a class="cta" href="{esc(amazon_url(p, config, slug))}" target="_blank" rel="sponsored noopener">{t["CTA"]}</a>'
        '\n                    </div>'
        '\n                </div>'
        '\n            </article>')


def occasions_html(pages, current, home, lang='de'):
    pages_dir = LANGS[lang]['pages_dir']
    return ''.join(
        f'\n                    <a class="occasion" href="{home}{pages_dir}/{quote(p["slug"])}.html">'
        f'<span aria-hidden="true">{p["emoji"]}</span> {html.escape(p.get("kurztitel") or p["titel"])}</a>'
        for p in pages if not current or p['slug'] != current['slug'])


def paragraphs(text):
    return ''.join(f'<p>{html.escape(t.strip())}</p>' for t in text.split('\n\n') if t.strip())


def ratgeber_html(page, products, config, lang='de'):
    """Ratgeber-Teil unter den Produkten einer Themen-Seite: Abschnitte, Produktideen mit Text, häufige Fragen."""
    r = page.get('ratgeber')
    if not r:
        return ''
    esc, t = html.escape, T[lang]
    by_title = {p['title']: p for p in products}
    out = ['\n            <section class="ratgeber" aria-labelledby="ratgeber-titel">',
           f'\n                <h2 id="ratgeber-titel">{esc(r.get("titel") or t["RATGEBER_PREFIX"] + page["kurztitel"])}</h2>']
    for a in r.get('abschnitte', []):
        out.append(f'\n                <h3>{esc(a["ueberschrift"])}</h3>{paragraphs(a["text"])}')
    texts = r.get('produkttexte', {})
    if texts:
        out.append(f'\n                <h3>{t["IDEAS_OVERVIEW"]}</h3>')
        for title, text in texts.items():
            prod = by_title[title]
            out.append(f'\n                <div class="idee"><h4><span aria-hidden="true">{prod["emoji"]}</span> {esc(title)}</h4>'
                       f'<p>{esc(text)} <a href="{esc(amazon_url(prod, config, page["slug"]))}" target="_blank" rel="sponsored noopener">'
                       f'{t["CTA"]}</a></p></div>')
    if r.get('faq'):
        out.append(f'\n                <h3>{t["FAQ"]}</h3>')
        for q in r['faq']:
            out.append(f'\n                <details><summary>{esc(q["frage"])}</summary>{paragraphs(q["antwort"])}</details>')
    out.append('\n            </section>')
    return ''.join(out)


def alternates(config, de_path, it_path):
    """hreflang-Verweise und Sprachumschalter für ein Seitenpaar (Pfade relativ zur Website, '' = Startseite)."""
    site = config['siteUrl']
    links = {'de': de_path, 'it': it_path}
    links = {lg: p for lg, p in links.items() if p is not None and lg in active_langs(config)}
    if len(links) < 2:
        return '', {}
    tags = ''.join(f'\n    <link rel="alternate" hreflang="{lg}" href="{html.escape(site + p)}">' for lg, p in links.items())
    tags += f'\n    <link rel="alternate" hreflang="x-default" href="{html.escape(site + links["de"])}">'
    return tags, links


def lang_switch(current, links, root):
    """Kleiner Umschalter DE ⇄ IT oben rechts (nur wenn es die Seite in der anderen Sprache gibt)."""
    others = [(lg, p) for lg, p in links.items() if lg != current]
    if not others:
        return ''
    return ''.join(
        f'\n            <a class="lang-switch" href="{root}{html.escape(p or "index.html")}" hreflang="{lg}" lang="{lg}">'
        f'{lg.upper()}<span class="lang-name"> · {T[lg]["LANG_SWITCH"]}</span></a>'
        for lg, p in others)


def render(values, root, lang='de'):
    out = TEMPLATE.read_text(encoding='utf-8')
    t = {f'T_{k}': v for k, v in T[lang].items() if isinstance(v, str)}
    values = dict(t, **values, ROOT=root, LANG=lang, DATA=LANGS[lang]['data'], PAGES_DIR=LANGS[lang]['pages_dir'])
    values.setdefault('HREFLANG', '')
    values.setdefault('LANG_SWITCH', '')
    for key, value in values.items():
        out = out.replace('{{' + key + '}}', value if key in RAW_KEYS else html.escape(value))
    leftover = re.findall(r'\{\{[A-Z_]+\}\}', out)
    if leftover:
        raise ValueError(f'Platzhalter ohne Wert in vorlage.html: {leftover}')
    # Versionsnummern (?v=…), die sich mit dem Inhalt ändern – so laden Browser sofort die neue Fassung
    data = LANGS[lang]['data']
    for rel in ['assets/style.css', 'assets/app.js', 'daten/config.js', f'{data}/produkte.js', f'{data}/seiten.js']:
        version = hashlib.sha1((ROOT / rel).read_bytes()).hexdigest()[:8]
        out = out.replace(f'"{root}{rel}"', f'"{root}{rel}?v={version}"')
    return out


# ---------------------------------------------------------------- Seiten einer Sprache

def pair_slug(page, lang):
    """Gegenstück einer Themen-Seite in der anderen Sprache (Feld "gegenstueck" in den italienischen Seiten)."""
    return page.get('gegenstueck') if lang == 'it' else None


def lang_files(config, lang):
    lc = lang_config(config, lang)
    L, t = LANGS[lang], T[lang]
    out, pages_dir = L['out'], L['pages_dir']
    pages = load_js('seiten.js', 'PAGES', lang)
    products = load_js('produkte.js', 'PRODUCTS', lang)
    site = config['siteUrl']
    root_index = '../' * out.count('/')
    root_page = root_index + '../'
    social_url = f"{site}{L['social']}"

    # Gegenstücke für Sprachumschalter: de-slug → it-slug
    it_pairs = {}
    if 'it' in active_langs(config):
        it_pairs = {p.get('gegenstueck'): p['slug'] for p in load_js('seiten.js', 'PAGES', 'it') if p.get('gegenstueck')}

    def page_paths(slug):
        if lang == 'de':
            it_slug = it_pairs.get(slug)
            return f'ideen/{slug}.html', (f"it/idee/{it_slug}.html" if it_slug else None)
        page = next(p for p in pages if p['slug'] == slug)
        de_slug = pair_slug(page, 'it')
        return (f'ideen/{de_slug}.html' if de_slug else None), f'it/idee/{slug}.html'

    files = {}
    tags, links = alternates(config, '', 'it/')
    files[ROOT / out / 'index.html'] = render(dict(
        t['INDEX'], CANONICAL=site + out, PAGE='', HOME='', OG_IMAGE=f'{social_url}/start-og.png',
        STATIC_GRID=''.join(card_html(prod, lc, 'start', lang) for prod in products),
        STATIC_OCCASIONS=occasions_html(pages, None, '', lang), RATGEBER='',
        HREFLANG=tags, LANG_SWITCH=lang_switch(lang, links, root_index),
        **hero_values('start', root_index, lang)), root_index, lang)
    for p in pages:
        de_path, it_path = page_paths(p['slug'])
        tags, links = alternates(config, de_path, it_path)
        files[ROOT / out / pages_dir / f"{p['slug']}.html"] = render({
            'STATIC_GRID': ''.join(card_html(prod, lc, p['slug'], lang) for prod in products if product_fits(prod, p, lang=lang)),
            'STATIC_OCCASIONS': occasions_html(pages, p, '../', lang),
            'RATGEBER': ratgeber_html(p, products, lc, lang),
            **hero_values(p['slug'], root_page, lang),
            'TITLE': p['titel'] + t['PAGE_TITLE_SUFFIX'],
            'DESCRIPTION': p['beschreibung'],
            'CANONICAL': f"{site}{out}{pages_dir}/{p['slug']}.html",
            'OG_IMAGE': f"{social_url}/{p['slug']}-og.png",
            'PAGE': p['slug'],
            'HOME': '../',
            'PILL': f"{p['emoji']} {t['PAGE_PILL']}",
            'H1': p['titel'],
            'INTRO': p['intro'],
            'OCC_HEADING': t['MORE_OCCASIONS'],
            'HREFLANG': tags,
            'LANG_SWITCH': lang_switch(lang, links, root_page),
        }, root_page, lang)
    pins = load_js('pins.js', 'PINS', lang)
    files[ROOT / L['feed']] = pin_feed(lc, pins, lang=lang)
    if lang == 'de':
        files[ROOT / 'videos.xml'] = pin_feed(lc, pins, video=True)
    urls = [site + out] + [f"{site}{out}{pages_dir}/{p['slug']}.html" for p in pages] + [f"{site}{out}{t['FILE_ABOUT']}"]
    return files, urls


def expected_files():
    """Alle Dateien, die build erzeugt: {Pfad: Inhalt}."""
    config = load_js('config.js', 'CONFIG')
    site = config['siteUrl']
    files, urls = {}, []
    for lang in active_langs(config):
        f, u = lang_files(config, lang)
        files.update(f)
        urls += u
    files[ROOT / 'sitemap.xml'] = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + ''.join(f'  <url><loc>{html.escape(u)}</loc></url>\n' for u in urls)
        + '</urlset>\n')
    files[ROOT / 'robots.txt'] = f'User-agent: *\nAllow: /\nSitemap: {site}sitemap.xml\n'
    return files


# ---------------------------------------------------------------- Pinterest

HASH_NAMES = LANGS['de']['hash']  # wie in assets/app.js


def pin_link(pin, site, lang='de'):
    L = LANGS[lang]
    url = f"{site}{L['out']}{L['pages_dir']}/{pin['seite']}.html" if pin.get('seite') else site + L['out']
    params = [f'{L["hash"][k]}={v}' for k, v in pin.get('filter', {}).items()]
    return url + ('#' + '&'.join(params) if params else '')


def pin_image(pin, lang='de'):
    return ROOT / LANGS[lang]['social'] / f"pin-{pin['id']}.png"


def pin_board(pin):
    """Schlüssel der Pinterest-Pinnwand für einen Pin: ausdrücklich gesetzt oder aus Seite und Filter abgeleitet."""
    if pin.get('board'):
        return pin['board']
    seite, f = pin.get('seite', ''), pin.get('filter', {})
    by_page = {'wichtelgeschenke-unter-15-euro': 'wichteln', 'geschenke-fuer-tierfreunde': 'tiere',
               'geschenke-fuer-teenager': 'teenager', 'home-training-geschenke': 'workout'}
    if seite in by_page:
        return by_page[seite]
    if f.get('category') in ('pets', 'sport'):
        return {'pets': 'tiere', 'sport': 'workout'}[f['category']]
    if f.get('recipient') in ('teenager', 'parents'):
        return {'teenager': 'teenager', 'parents': 'eltern'}[f['recipient']]
    if seite in ('weihnachtsgeschenke', 'nikolausgeschenke'):
        return 'weihnachten'
    return 'geschenkideen'


def board_id(config, pin):
    """Interne Pinterest-ID der Pinnwand (Make.com liest sie aus <category>); Rückfall: allgemeine Pinnwand."""
    boards = config.get('pinterestBoards', {})
    board = boards.get(pin.get('board') or pin_board(pin)) or boards.get('geschenkideen') or boards.get('idee-regalo') or {}
    return board.get('id', '')


def video_file(pin):
    return ROOT / 'assets' / 'social' / f"video-{pin['id']}.mp4"


def pin_feed(config, pins, video=False, lang='de'):
    """RSS-Feed mit den neuesten 50 Pins – Make.com liest ihn und postet neue Einträge auf Pinterest.

    video=False: Bild-Pins. Video-Pins sind hier nur drin, solange das Video-Scenario noch nicht läuft.
    video=True:  videos.xml mit den Video-Pins (MP4 plus Bild als Titelbild) für ein zweites Make-Scenario.
    """
    site = config['siteUrl']
    esc, L, t = html.escape, LANGS[lang], T[lang]
    if video:
        pins = [p for p in pins if p.get('video') and video_file(p).exists()]
    elif config.get('videoScenarioAktiv'):
        pins = [p for p in pins if not p.get('video')]
    items = []
    for pin in sorted(pins, key=lambda p: (p['datum'], p['id']), reverse=True)[:50]:
        y, m, d = (int(x) for x in pin['datum'].split('-'))
        weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][date(y, m, d).weekday()]
        month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]
        image = pin_image(pin, lang)
        image_url = f"{site}{L['social']}/{image.name}"
        size = image.stat().st_size if image.exists() else 0
        if video:
            vid = video_file(pin)
            vid_url = f"{site}assets/social/{vid.name}"
            media = (f'      <enclosure url="{esc(vid_url)}" length="{vid.stat().st_size}" type="video/mp4"/>\n'
                     f'      <media:content url="{esc(vid_url)}" medium="video" type="video/mp4"/>\n'
                     f'      <media:thumbnail url="{esc(image_url)}"/>\n')
        else:
            media = (f'      <enclosure url="{esc(image_url)}" length="{size}" type="image/png"/>\n'
                     f'      <media:content url="{esc(image_url)}" medium="image" type="image/png"/>\n')
        items.append(
            '    <item>\n'
            f'      <title>{esc(pin["titel"])}</title>\n'
            f'      <link>{esc(pin_link(pin, site, lang))}</link>\n'
            f'      <guid isPermaLink="false">{esc(pin["id"])}{"-video" if video else ""}</guid>\n'
            f'      <category>{esc(board_id(config, pin))}</category>\n'
            f'      <pubDate>{weekday}, {d:02d} {month} {y} 08:00:00 +0000</pubDate>\n'
            f'      <description>{esc(pin["beschreibung"])}</description>\n'
            + media +
            '    </item>\n')
    title = f'{t["FEED_TITLE"]}' if not video else 'Geschenke-Finder – Pinterest-Videos'
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">\n'
        '  <channel>\n'
        f'    <title>{title}</title>\n'
        f'    <link>{esc(site + L["out"])}</link>\n'
        f'    <description>{t["FEED_DESC"]}</description>\n'
        f'    <language>{lang}</language>\n'
        + ''.join(items)
        + '  </channel>\n'
        '</rss>\n')


# ---------------------------------------------------------------- Bauen

def build():
    config = load_js('config.js', 'CONFIG')
    files = expected_files()
    for path, content in files.items():
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding='utf-8', newline='\n')
    for lang in active_langs(config):
        L = LANGS[lang]
        for orphan in (ROOT / L['out'] / L['pages_dir']).glob('*.html'):
            if orphan not in files:
                orphan.unlink()
                print(f'entfernt: {orphan.relative_to(ROOT)}')
    print(f'{len(files)} Dateien erzeugt ({", ".join(active_langs(config))}).')


def product_fits(prod, page, extra_filter=None, lang='de'):
    """Passt das Produkt zur Themen-Seite (page=None: Startseite) plus optionalem Zusatzfilter?"""
    if page and page.get('produkte') and prod['title'] not in page['produkte']:
        return False
    if page:
        occ = page['anlass']
        if occ not in LANGS[lang]['universal'] and occ not in prod.get('occasions', []):
            return False
    f = dict(page.get('filter', {}) if page else {}, **(extra_filter or {}))
    if 'recipient' in f and f['recipient'] not in prod['recipients']:
        return False
    if 'budget' in f and f['budget'] != prod['budget']:
        return False
    if 'category' in f and f['category'] != prod['category']:
        return False
    return True


# ---------------------------------------------------------------- Prüfen

def check_ratgeber(page, products, where, err, lang='de'):
    """Ratgeber-Teil: genug echter Text, passende Produkte, keine unbelegten Behauptungen."""
    r = page.get('ratgeber')
    if not r:
        return
    unknown = set(r) - {'titel', 'abschnitte', 'produkttexte', 'faq'}
    if unknown:
        err(f'{where}: ratgeber hat unbekannte Felder {sorted(unknown)}.')
    abschnitte, texts, faq = r.get('abschnitte', []), r.get('produkttexte', {}), r.get('faq', [])
    if len(abschnitte) < 2:
        err(f'{where}: ratgeber braucht mindestens 2 abschnitte.')
    if not 4 <= len(texts) <= 12:
        err(f'{where}: ratgeber braucht 4 bis 12 produkttexte.')
    if len(faq) < 3:
        err(f'{where}: ratgeber braucht mindestens 3 Fragen (faq).')
    fitting = {prod['title'] for prod in products if product_fits(prod, page, lang=lang)}
    for t in texts:
        if t not in fitting:
            err(f'{where}: produkttexte "{t}" gibt es nicht oder es wird auf dieser Seite nicht angezeigt.')
    all_text = [r.get('titel', '')]
    for a in abschnitte:
        if not a.get('ueberschrift') or len(a.get('text', '')) < 300:
            err(f'{where}: jeder ratgeber-Abschnitt braucht eine ueberschrift und mindestens 300 Zeichen text.')
        all_text += [a.get('ueberschrift', ''), a.get('text', '')]
    for t, text in texts.items():
        if not 80 <= len(text) <= 400:
            err(f'{where}: produkttext für "{t}" sollte 80–400 Zeichen lang sein.')
        all_text.append(text)
    for q in faq:
        if not q.get('frage') or len(q.get('antwort', '')) < 80:
            err(f'{where}: jede faq braucht eine frage und eine antwort mit mindestens 80 Zeichen.')
        all_text += [q.get('frage', ''), q.get('antwort', '')]
    words = len(' '.join(all_text).split())
    if words < 400:
        err(f'{where}: ratgeber hat nur {words} Wörter – mindestens 400.')
    for t in all_text:
        if CLAIMS.search(t) or TESTED.search(t):
            err(f'{where}: ratgeber-Text enthält eine unbelegte Behauptung: „{t[:50]}…“')


def check_config(config, lang, pages, err, warn):
    lc = lang_config(config, lang)
    label = '' if lang == 'de' else f'[{lang}] '
    if lc.get('partnerTag') in ('', None, PLACEHOLDER_TAG):
        warn(f'{label}Partner-ID fehlt in daten/config.js – Links bringen keine Provision.')
    if lc.get('amazonDomain') not in DOMAINS:
        err(f"{label}amazonDomain muss eines von {sorted(DOMAINS)} sein.")
    page_slugs = {'start'} | {p.get('slug') for p in pages}
    for slug, tag in lc.get('trackingIds', {}).items():
        if slug not in page_slugs:
            err(f'{label}trackingIds: "{slug}" ist keine Seite (erlaubt: start oder ein slug der Themen-Seiten).')
        if not re.fullmatch(r'[a-z0-9-]+-2[01]', str(tag)):
            err(f'{label}trackingIds: "{tag}" sieht nicht wie eine Amazon-Tracking-ID aus (z. B. "geschenkef0f0wi-21").')
    missing_ids = sorted(page_slugs - set(lc.get('trackingIds', {})))
    if lc.get('trackingIds') and missing_ids:
        warn(f'{label}Ohne eigene Tracking-ID (nutzen partnerTag): {", ".join(missing_ids)}')
    boards = lc.get('pinterestBoards', {})
    for key, b in boards.items():
        if not re.fullmatch(r'\d{6,25}', str(b.get('id', ''))):
            err(f'{label}pinterestBoards "{key}": id muss die Zahl aus Make → Pinterest → List Boards sein.')
    return lc, boards


def check_lang(config, lang, errors, warnings):
    err, warn = errors.append, warnings.append
    L = LANGS[lang]
    label = '' if lang == 'de' else f'[{lang}] '
    try:
        products = load_js('produkte.js', 'PRODUCTS', lang)
        pages = load_js('seiten.js', 'PAGES', lang)
        pins = load_js('pins.js', 'PINS', lang)
    except (ValueError, KeyError, json.JSONDecodeError, FileNotFoundError) as e:
        err(f'{label}Datendatei in {L["data"]}/ kaputt oder fehlt: {e}')
        return 0, 0, 0
    lc, boards = check_config(config, lang, pages, err, warn)
    if lang == 'de' and 'geschenkideen' not in boards:
        err('pinterestBoards braucht die allgemeine Pinnwand "geschenkideen" (Rückfall für alle Pins).')
    if lang != 'de' and pins and not boards:
        warn(f'{label}Noch keine Pinterest-Pinnwände eingetragen – die Pins in {L["feed"]} haben keine Pinnwand.')
    occasions = L['occasions']

    # --- Produkte ---
    titles = set()
    for i, p in enumerate(products):
        where = f"{label}Produkt {i + 1} ({p.get('title', '?')})"
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
        if not set(p.get('occasions', [])) <= occasions:
            err(f'{where}: occasions nur aus {sorted(occasions)}.')
        if 'asin' in p and not ASIN.match(str(p['asin'])):
            err(f'{where}: asin "{p["asin"]}" ist keine gültige Amazon-Produktnummer.')
        if not 2 <= len(p.get('highlights', [])) <= 4:
            err(f'{where}: 2 bis 4 highlights.')
        for t in [p.get('title', ''), p.get('badge', '')] + list(p.get('highlights', [])):
            if CLAIMS.search(t) or PRICE.search(t):
                err(f'{where}: "{t}" enthält eine Preisangabe oder unbelegte Behauptung (Bestseller, Testsieger, Bewertungen …).')
        if len(p.get('badge', '')) > 28:
            err(f'{where}: badge zu lang (max. 28 Zeichen).')
        if any(len(h) > 40 for h in p.get('highlights', [])):
            err(f'{where}: highlight zu lang (max. 40 Zeichen).')
    for r in RECIPIENTS:
        for b in BUDGETS:
            if not any(r in p['recipients'] and p['budget'] == b for p in products):
                warn(f'{label}Keine Produkte für Zielgruppe "{r}" mit Budget "{b}".')

    # --- Themen-Seiten ---
    slugs = set()
    titles_all = {prod['title'] for prod in products}
    de_slugs = {p['slug'] for p in load_js('seiten.js', 'PAGES', 'de')} if lang != 'de' else set()
    for p in pages:
        where = f"{label}Seite {p.get('slug', '?')}"
        for key in ('slug', 'titel', 'kurztitel', 'emoji', 'anlass', 'beschreibung', 'intro'):
            if not p.get(key):
                err(f'{where}: Feld "{key}" fehlt.')
        if not isinstance(p.get('monate'), list):
            err(f'{where}: Feld "monate" fehlt (Liste, leer = ganzjährig).')
        if not SLUG.match(p.get('slug', '')):
            err(f'{where}: slug nur aus Kleinbuchstaben, Ziffern und Bindestrichen.')
        if p.get('slug') in slugs:
            err(f'{where}: slug doppelt.')
        slugs.add(p.get('slug'))
        if p.get('anlass') not in occasions:
            err(f'{where}: anlass muss eines von {sorted(occasions)} sein.')
        if not all(isinstance(m, int) and 1 <= m <= 12 for m in p.get('monate', [])):
            err(f'{where}: monate nur Zahlen von 1 bis 12.')
        allowed = {'recipient': RECIPIENTS, 'budget': BUDGETS, 'category': CATEGORIES}
        for k, v in p.get('filter', {}).items():
            if k not in allowed or v not in allowed[k]:
                err(f'{where}: ungültiger filter {k}={v}.')
        if not 50 <= len(p.get('beschreibung', '')) <= 160:
            warn(f'{where}: beschreibung sollte 50–160 Zeichen lang sein (für Google).')
        if p.get('gegenstueck') and p['gegenstueck'] not in de_slugs:
            err(f'{where}: gegenstueck "{p["gegenstueck"]}" gibt es nicht in daten/seiten.js.')
        if p.get('foto') and not p.get('foto_id'):
            err(f'{where}: Foto noch nicht gesucht – "python -I tools/fotos.py" ausführen (oder anderen Suchbegriff wählen).')
        elif p.get('foto_id') and not (ROOT / L['hero'] / f"{p.get('slug')}.jpg").exists():
            err(f'{where}: Kopfbild fehlt – "python -P tools/grafiken.py" ausführen.')
        elif not p.get('foto'):
            warn(f'{where}: kein Kopfbild – Feld "foto" mit Suchbegriff setzen.')
        for t in p.get('produkte', []):
            if t not in titles_all:
                err(f'{where}: produkte "{t}" gibt es nicht in {L["data"]}/produkte.js.')
        if not errors:
            n = sum(product_fits(prod, p, lang=lang) for prod in products)
            if n < 4:
                err(f'{where}: nur {n} passende Produkte – mindestens 4 nötig (occasions oder produkte ergänzen).')
            check_ratgeber(p, products, where, err, lang)

    # --- Pinterest-Pins ---
    pin_ids = set()
    pages_by_slug = {p.get('slug'): p for p in pages}
    for pin in pins:
        where = f"{label}Pin {pin.get('id', '?')}"
        for key in ('id', 'datum', 'titel', 'beschreibung', 'emoji'):
            if not pin.get(key):
                err(f'{where}: Feld "{key}" fehlt.')
        if not PIN_ID.match(pin.get('id', '')) or not pin.get('id', '').startswith(pin.get('datum', '?')):
            err(f'{where}: id muss mit dem Datum beginnen, z. B. "2026-11-02-geschenke-fuer-papa".')
        if pin.get('id') in pin_ids:
            err(f'{where}: id doppelt.')
        pin_ids.add(pin.get('id'))
        try:
            date.fromisoformat(pin.get('datum', ''))
        except ValueError:
            err(f'{where}: datum im Format JJJJ-MM-TT.')
        if len(pin.get('titel', '')) > 100:
            err(f'{where}: titel max. 100 Zeichen (Pinterest).')
        if len(pin.get('beschreibung', '')) > 500:
            err(f'{where}: beschreibung max. 500 Zeichen (Pinterest).')
        if L['hashtag'] not in pin.get('beschreibung', '').lower():
            err(f'{where}: beschreibung muss {L["hashtag"]} enthalten.')
        for t in (pin.get('titel', ''), pin.get('beschreibung', '')):
            if CLAIMS.search(t):
                err(f'{where}: "{t[:40]}…" enthält eine unbelegte Behauptung (Bestseller, Testsieger …).')
        if pin.get('video') and date.fromisoformat(pin.get('datum', '2000-01-01')) >= date.today() - timedelta(days=60) \
                and not video_file(pin).exists():
            err(f'{where}: Video fehlt – "python -P tools/videos.py" ausführen.')
        if pin.get('design', 'a') not in ('a', 'b', 'c', 'd'):
            err(f'{where}: design muss "a", "b", "c" oder "d" sein.')
        if pin.get('design') == 'd' and not pin.get('foto'):
            err(f'{where}: design "d" braucht einen Foto-Suchbegriff im Feld "foto".')
        if pin.get('foto') and not pin.get('foto_id'):
            err(f'{where}: Foto noch nicht gesucht – "python -I tools/fotos.py" ausführen (oder anderen Suchbegriff wählen).')
        if pin.get('board') and pin['board'] not in boards:
            err(f'{where}: board "{pin["board"]}" gibt es nicht – erlaubt: {sorted(boards)}.')
        seite = pin.get('seite', '')
        if seite and seite not in pages_by_slug:
            err(f'{where}: seite "{seite}" gibt es nicht.')
        allowed = {'recipient': RECIPIENTS, 'budget': BUDGETS, 'category': CATEGORIES}
        bad_filter = False
        for k, v in pin.get('filter', {}).items():
            if k not in allowed or v not in allowed[k]:
                err(f'{where}: ungültiger filter {k}={v}.')
                bad_filter = True
        if not bad_filter and (not seite or seite in pages_by_slug):
            fitting = {prod['title'] for prod in products
                       if product_fits(prod, pages_by_slug.get(seite), pin.get('filter'), lang=lang)}
            if len(fitting) < 3:
                err(f'{where}: nur {len(fitting)} passende Produkte – mindestens 3 nötig.')
            for t in pin.get('produkte', []):
                if t not in fitting:
                    err(f'{where}: produkte "{t}" gibt es nicht oder es passt nicht zu Seite/Filter des Pins.')
        if pin.get('id') and not pin_image(pin, lang).exists():
            err(f'{where}: Grafik fehlt – "python -P tools/grafiken.py" ausführen.')

    # --- Grafiken und verwaiste Seiten ---
    if not errors:
        social = ROOT / L['social']
        for slug in ['start'] + [p['slug'] for p in pages]:
            for kind in ('pin', 'story', 'og'):
                if not (social / f'{slug}-{kind}.png').exists():
                    err(f'Grafik {L["social"]}/{slug}-{kind}.png fehlt – "python -P tools/grafiken.py" ausführen.')
        for f in (ROOT / L['out'] / L['pages_dir']).glob('*.html'):
            if f.stem not in slugs:
                err(f'{f.relative_to(ROOT)} gehört zu keiner Seite in {L["data"]}/seiten.js.')

    # --- Rechtliches ---
    legal = [T[lang]['FILE_IMPRINT'], T[lang]['FILE_PRIVACY'], T[lang]['FILE_ABOUT']]
    for name in legal:
        path = ROOT / L['out'] / name
        if not path.exists():
            err(f'{label}{L["out"]}{name} fehlt.')
        elif '<mark>' in path.read_text(encoding='utf-8'):
            warn(f'{label}{name} enthält noch Platzhalter (gelb markiert).')
    return len(products), len(pages), len(pins)


def check():
    errors, warnings = [], []
    try:
        config = load_js('config.js', 'CONFIG')
    except (ValueError, KeyError, json.JSONDecodeError) as e:
        print(f'FEHLER: daten/config.js kaputt: {e}')
        return 1
    if not str(config.get('siteUrl', '')).startswith('https://') or not config['siteUrl'].endswith('/'):
        errors.append('siteUrl muss mit https:// beginnen und mit / enden.')
    key = config.get('indexNowKey', '')
    key_file = ROOT / f'{key}.txt'
    if not re.fullmatch(r'[0-9a-f]{32}', key) or not key_file.exists() or key_file.read_text(encoding='utf-8').strip() != key:
        errors.append('indexNowKey in daten/config.js und die Datei <Schlüssel>.txt im Hauptordner müssen zusammenpassen.')

    summary = []
    for lang in active_langs(config):
        n_prod, n_pages, n_pins = check_lang(config, lang, errors, warnings)
        summary.append(f'{lang}: {n_prod} Produkte, {n_pages} Themen-Seiten, {n_pins} Pins')

    # --- Erzeugte Dateien aktuell? ---
    if not errors:
        for path, content in expected_files().items():
            if not path.exists() or path.read_text(encoding='utf-8') != content:
                errors.append(f'{path.relative_to(ROOT)} ist nicht aktuell – "python tools/site.py build" ausführen.')

    for w in warnings:
        print(f'WARNUNG: {w}')
    for e in errors:
        print(f'FEHLER:  {e}')
    print(f'{" | ".join(summary)} – {len(errors)} Fehler, {len(warnings)} Warnungen.')
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
