"""Meldet neue und geänderte Seiten per IndexNow an Bing (und damit Ecosia, DuckDuckGo, Yandex, ChatGPT-Suche …).

    python -I tools/indexnow.py          meldet die Seiten, die sich im letzten Commit geändert haben
    python -I tools/indexnow.py --all    meldet alle Seiten aus der Sitemap (nur einmalig sinnvoll)

Wartet vorher, bis GitHub Pages die neue Fassung ausliefert – sonst würde Bing die alte Seite abholen.
Google nutzt IndexNow nicht; dafür ist die Sitemap in der Google Search Console da.
"""
import importlib.util
import json
import subprocess
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

_spec = importlib.util.spec_from_file_location('sitetool', Path(__file__).resolve().parent / 'site.py')
sitetool = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(sitetool)
ROOT = sitetool.ROOT
ENDPOINT = 'https://api.indexnow.org/indexnow'


def page_urls(site):
    """Alle HTML-Seiten der Website: {lokale Datei: öffentliche Adresse}."""
    pages = {ROOT / 'index.html': site}
    for f in sorted((ROOT / 'ideen').glob('*.html')):
        pages[f] = f'{site}ideen/{f.name}'
    return pages


def changed_files():
    out = subprocess.run(['git', 'diff', '--name-only', 'HEAD~1', 'HEAD'], cwd=ROOT,
                         capture_output=True, text=True, check=True).stdout
    return {(ROOT / line.strip()).resolve() for line in out.splitlines() if line.strip()}


def fetch(url):
    req = urllib.request.Request(url + ('&' if '?' in url else '?') + f'nocache={int(time.time())}',
                                 headers={'User-Agent': 'geschenke-finder-indexnow'})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read().decode('utf-8', errors='replace')


def wait_until_live(files_to_urls, timeout=600):
    """Wartet, bis jede gemeldete Seite online genau so aussieht wie die lokale Datei."""
    pending = dict(files_to_urls)
    deadline = time.time() + timeout
    while pending and time.time() < deadline:
        for f, url in list(pending.items()):
            try:
                if fetch(url).strip() == f.read_text(encoding='utf-8').strip():
                    del pending[f]
            except (urllib.error.URLError, TimeoutError):
                pass
        if pending:
            time.sleep(15)
    return list(pending.values())


def main():
    config = sitetool.load_js('config.js', 'CONFIG')
    site, key = config['siteUrl'], config.get('indexNowKey', '')
    if not key or not (ROOT / f'{key}.txt').exists():
        print('FEHLER: indexNowKey fehlt in daten/config.js oder die Schlüsseldatei fehlt.')
        return 1
    pages = page_urls(site)
    if '--all' not in sys.argv:
        changed = changed_files()
        pages = {f: u for f, u in pages.items() if f.resolve() in changed}
    if not pages:
        print('Keine geänderten Seiten – nichts zu melden.')
        return 0
    not_live = wait_until_live(pages)
    if not_live:
        print(f'WARNUNG: noch nicht online, wird trotzdem gemeldet: {not_live}')
    host = site.split('/')[2]
    body = json.dumps({'host': host, 'key': key, 'keyLocation': f'{site}{key}.txt',
                       'urlList': list(pages.values())}).encode('utf-8')
    req = urllib.request.Request(ENDPOINT, data=body, method='POST',
                                 headers={'Content-Type': 'application/json; charset=utf-8'})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            print(f'IndexNow: {len(pages)} Seiten gemeldet (Antwort {r.status}).')
            return 0
    except urllib.error.HTTPError as e:
        print(f'IndexNow-FEHLER {e.code}: {e.read().decode("utf-8", errors="replace")[:300]}')
        return 1


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.exit(main())
