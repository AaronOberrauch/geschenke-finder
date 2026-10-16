# Geschenke-Finder

Amazon-Partnerseite mit Geschenkideen. Ein Bot pflegt sie jede Woche automatisch (siehe `BOT.md`).

## Was du einmalig machen musst

1. **Partner-ID:** in `daten/config.js` `DEINTAG-21` durch deine ID aus Amazon PartnerNet ersetzen.
   Für amazon.it außerdem `amazonDomain` auf `www.amazon.it` ändern.
2. **Impressum und Datenschutz:** in `impressum.html` und `datenschutz.html` alle gelb markierten Stellen ausfüllen.
3. Danach: `python tools/site.py build`, `python tools/site.py check`, dann committen und pushen.
   Ein paar Minuten später ist alles online.

## Aufbau

| Datei | Inhalt |
|---|---|
| `daten/config.js` | Partner-ID, Amazon-Shop, Adresse der Seite, Pinterest-Pinnwände (Name + ID) |
| `daten/produkte.js` | alle Produkte |
| `daten/seiten.js` | Themen-Seiten (Weihnachten, Muttertag …) |
| `daten/pins.js` | Pinterest-Pins; daraus entsteht `pins.xml`, den Make.com auf Pinterest postet |
| `assets/` | Aussehen (`style.css`) und Logik (`app.js`) |
| `tools/vorlage.html` | Vorlage für alle Seiten |
| `tools/site.py` | `build` erzeugt die Seiten, `check` prüft alles |
| `tools/grafiken.py` | erzeugt Pinterest-Pins (Designs a/b/c), Stories und Vorschaubilder in `assets/social/` |
| `tools/fotos.py` | sucht Stimmungsfotos bei Pixabay für Pins mit `"foto"` (Schlüssel in `C:\Users\aaron\.geschenke-finder\pixabay.txt`, Fotos im lokalen Zwischenspeicher) |
| `tools/videos.py` | erzeugt Video-Pins (MP4) für Pins mit `"video": true`; daraus entsteht `videos.xml` |
| `tools/indexnow.py` | meldet neue Seiten an Bing, Ecosia, DuckDuckGo & Co. |
| `index.html`, `ideen/`, `sitemap.xml`, `robots.txt`, `pins.xml` | werden von `build` erzeugt – nicht von Hand ändern |
| `_entwuerfe/` | Social-Media-Entwürfe vom Bot (nicht online) |

## Themen-Seiten und Ratgeber

Jede Seite in `daten/seiten.js` kann ein Feld `ratgeber` haben (Abschnitte, Texte zu einzelnen Produkten, häufige
Fragen). Es erscheint unter den Produkten und hilft, bei Google gefunden zu werden. Nischen-Seiten wie
„Geschenke für Hobbybäcker“ zeigen über das Feld `produkte` nur eine feste Auswahl. Produkte und Links stehen
schon fertig im HTML, damit Suchmaschinen sie ohne JavaScript lesen.

## Felder eines Produkts

| Feld | Bedeutung |
|---|---|
| `title` | Name auf der Karte |
| `query` | Suchbegriff – der Link führt zur Amazon-Suche danach |
| `asin` | optional: echte Amazon-Produktnummer (steht in der Produkt-URL nach `/dp/`); dann führt der Link direkt zum Produkt |
| `emoji` | Bild auf der Karte |
| `category` | `kitchen`, `tech`, `beauty`, `home`, `fun`, `sport` (Sport & Fitness), `pets` (Haustiere) |
| `budget` | `under15`, `15to50`, `50to150`, `over150` |
| `recipients` | `household`, `teenager`, `parents`, `kids` |
| `occasions` | optional: `wichteln`, `nikolaus`, `valentinstag`, `ostern`, `muttertag`, `vatertag`, `schulanfang` (Weihnachten und Geburtstag passen immer) |
| `badge` | kurzes Etikett oben auf der Karte |
| `highlights` | 2–4 kurze Vorteile |

Teilbare Links: Jede Filter-Auswahl steht in der Adresse, z. B. `…/#fuer=teenager&budget=under15`.
