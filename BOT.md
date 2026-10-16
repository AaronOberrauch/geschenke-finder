# Anleitung für den Content-Bot

Du pflegst die Website „Geschenke-Finder“ (Amazon-Partnerseite) in diesem Ordner.
Du läufst **dreimal pro Woche ohne Aufsicht: Sonntag, Dienstag und Donnerstag um 17 Uhr** – kurz vor den
Abendstunden (19–22 Uhr), in denen am meisten online eingekauft wird. Make.com veröffentlicht deine neuen Pins
um 18 Uhr. Arbeite vorsichtig: Lieber eine kleine, fehlerfreie Änderung als eine große, die etwas kaputt macht.

**Was in welchem Lauf passiert:**

| | Sonntag | Dienstag | Donnerstag |
|---|---|---|---|
| Trend-Recherche (2b) | ausführlich (5–8 Suchen) | kurz (2–3 Suchen) | kurz (2–3 Suchen) |
| Neue Themen- oder Nischen-Seite mit Ratgeber (3, 3b) | ja, max. 1 | nein | nein |
| Ratgeber für 1 bestehende Seite ohne Ratgeber (3c) | ja | ja | ja |
| Produkte (4) | 2–3 | 2–3 | 2–3 |
| Pins (4b), davon 1 Video-Pin | 5 | 5 | 5 |
| Social-Media-Entwürfe (7) | 5 für die Woche | nein | nein |

Bei den kurzen Läufen liest du die letzte `_entwuerfe/trends-*.md` und ergänzt sie nur. Sonntagspins dürfen
etwas allgemeiner sein (Wochenend-Stöbern), Dienstag und Donnerstag eher konkrete Budget-Themen („unter 15 €“).

## Was du ändern darfst

- `daten/produkte.js` – Produkte hinzufügen oder verbessern
- `daten/seiten.js` – Themen-Seiten (Anlässe) hinzufügen
- `daten/pins.js` – neue Pinterest-Pins hinzufügen (bestehende nie ändern oder löschen)
- `_entwuerfe/` – Social-Media-Entwürfe (wird nicht veröffentlicht)
- Erzeugte Dateien über `python -I tools/site.py build` (nie von Hand)

**Nicht anfassen:** `daten/config.js`, `impressum.html`, `datenschutz.html`, `google*.html` (Google-Bestätigung),
die IndexNow-Schlüsseldatei `<32 Zeichen>.txt`,
`assets/`, `tools/`, `BOT.md`, `README.md`. Nie `git push --force`, nie Historie umschreiben.

## Ablauf

1. `git pull --ff-only`. Wenn das scheitert: abbrechen und melden.
2. `python -I tools/site.py check`. Wenn schon vorher Fehler da sind: nichts ändern, abbrechen und melden.
2b. **Trend-Recherche (Umfang laut Tabelle oben).** Finde heraus, welche Geschenke und Produktarten im deutschsprachigen
   Raum gerade und in den nächsten Wochen gefragt sind. Gute Quellen:
   - Pinterest Trends (trends.pinterest.com, Region Deutschland) und Google Trends (Deutschland)
   - aktuelle Geschenk-Ratgeber und Trend-Artikel deutscher Medien und Blogs zur kommenden Saison
   - Suchen wie „Geschenkideen <Anlass> <Jahr>“, „Trend-Geschenke <Monat> <Jahr>“, „Geschenke für Hundebesitzer <Jahr>“
   **Nicht verwenden:** Amazon-Seiten auslesen (Bestseller-Listen, Produktseiten) – das verbieten die Partner-Regeln.
   Übernimm aus Artikeln nur Ideen und Suchbegriffe, nie Texte. Schreib die Ergebnisse kurz in
   `_entwuerfe/trends-JJJJ-MM-TT.md`: 5–10 Trend-Produktarten mit Quelle, und 10–15 Suchbegriffe, nach denen
   Leute gerade suchen (z. B. „wichtelgeschenke für kollegen“, „geschenk für hundebesitzer“).
   Nutze diese Liste in den Schritten 3, 4 und 4b. Wenn keine Websuche möglich ist: Schritt überspringen,
   mit Saison und Anlässen weiterarbeiten und das im Bericht erwähnen.
3. **Anlässe prüfen (nur sonntags).** Schau aufs heutige Datum. Für jeden Anlass, der in den nächsten
   **8 Wochen** ansteht und noch keine Seite in `daten/seiten.js` hat, lege eine an –
   **höchstens eine neue Seite pro Lauf**. Termine (Shop laut `amazonDomain` in `daten/config.js`):

   | Anlass (`anlass`) | Deutschland / Österreich (amazon.de) | Italien (amazon.it) |
   |---|---|---|
   | valentinstag | 14. Februar | 14. Februar |
   | ostern | Ostersonntag (beweglich) | Ostersonntag |
   | muttertag | 2. Sonntag im Mai | 2. Sonntag im Mai |
   | vatertag | DE: Christi Himmelfahrt, AT: 2. Sonntag im Juni | 19. März |
   | schulanfang | August/September | September |
   | nikolaus | 6. Dezember | 6. Dezember |
   | wichteln | Dezember | Dezember |
   | weihnachten | 24. Dezember | 25. Dezember |
   | geburtstag | ganzjährig – darf jederzeit, z. B. „Geschenke für Teenager“ | |

   Alle Texte auf Deutsch (die Seite ist deutschsprachig, auch bei amazon.it).

   Felder einer Seite: `slug` (Kleinbuchstaben, Bindestriche, Suchbegriff den Leute googeln,
   z. B. `muttertagsgeschenke`), `titel`, `kurztitel`, `emoji`, `anlass`, `monate` (Monate, in denen
   die Seite vorne angezeigt wird; `[]` = ganzjährige Seite, z. B. „Geschenke für Tierfreunde“ mit `anlass` geburtstag), `beschreibung` (50–160 Zeichen, für Google), `intro` (1–2 Sätze),
   `filter` (optional: `recipient`, `budget`, `category`).
3b. **Nischen-Seite (nur sonntags, nur wenn in Schritt 3 keine Anlass-Seite nötig war).** Damit Google die Seite
   findet, sind spezielle Suchen die beste Chance für eine kleine Website („Geschenke für Hobbybäcker“,
   „Geschenke für Gamer“, „Geschenke für Gartenfreunde“, „Geschenke für Katzenbesitzer“). Wähle ein Thema aus den
   Suchbegriffen von Schritt 2b, für das es noch keine Seite gibt. Die Seite bekommt `anlass` geburtstag, `monate` `[]`
   und das Feld **`produkte`**: eine Liste von 6–12 Produkttiteln aus `daten/produkte.js`, die genau zum Thema passen
   (fehlende passende Produkte vorher in Schritt 4 anlegen). Jede neue Seite – Anlass oder Nische – bekommt sofort
   einen **Ratgeber** (siehe 3c). Ein Titel wie „Geschenke für Hobbybäcker: Ideen für alle, die gerne backen“ ist gut;
   „Die 5 besten …“ ist verboten.
3c. **Ratgeber.** Jede Themen-Seite soll einen Ratgeber haben – er steht unter den Produkten und ist das, was Google
   wirklich liest. In jedem Lauf ergänzt du **eine** bestehende Seite ohne `ratgeber` (bis alle einen haben).
   Vorbilder: die Seiten `wichtelgeschenke-unter-15-euro` und `geschenke-fuer-tierfreunde` in `daten/seiten.js`.
   Aufbau des Felds `ratgeber`:
   - `titel`: „Ratgeber: …“
   - `abschnitte`: 2–4 Einträge mit `ueberschrift` und `text` (je mindestens 300 Zeichen, Absätze mit Leerzeile
     `\n\n` trennen). Inhalt: echte Hilfe bei der Auswahl – worauf man achten sollte, was zu wem passt, typische Fehler.
   - `produkttexte`: 4–12 Einträge `"Produkttitel": "2–3 Sätze, für wen und warum"` (80–400 Zeichen). Nur Produkte,
     die auf dieser Seite angezeigt werden.
   - `faq`: 3–5 Fragen, die Leute wirklich suchen (aus Schritt 2b), mit Antworten von mindestens 80 Zeichen.
   Schreibregeln: Du-Form, freundlich, konkret, insgesamt 400–900 Wörter. Ehrlich bleiben: **wir haben nichts
   getestet** – keine Wörter wie „getestet“, „Testsieger“, „die besten“, „unser Favorit“, „garantiert“, keine
   Bewertungen, keine Preise einzelner Produkte (Budget-Angaben wie „unter 15 €“ sind okay), keine Gesundheits-
   versprechen. Keine Texte aus dem Internet übernehmen, nur eigene Formulierungen. Suchbegriffe natürlich im Text
   verwenden, nicht aneinanderreihen. `tools/site.py check` prüft Länge, Produkte und verbotene Wörter.
4. **Produkte ergänzen: 2 bis 3 neue pro Lauf.** Bevorzuge, in dieser Reihenfolge:
   Trend-Produktarten aus Schritt 2b, Produkte für anstehende Anlässe (mit passenden `occasions`), dann Lücken, die `check`
   als WARNUNG meldet („Keine Produkte für Zielgruppe …“). Regeln:
   - Nur echte, gängige Produktarten, die es auf Amazon sicher gibt. Allgemein benennen
     („Kabellose Ohrhörer“), keine Fantasie-Produkte.
   - `query` = deutscher Suchbegriff, der auf Amazon gute Treffer bringt (2–5 Wörter).
   - **Keine `asin` erfinden.** Das Feld nur setzen, wenn der Nutzer dir eine echte Nummer gegeben hat.
   - **Keine Preise, keine Bewertungen, keine Behauptungen** wie „Bestseller“, „Testsieger“,
     „Nr. 1“, „beliebteste“. `badge` ist ein neutraler Anlass oder Nutzen („Für Gamer“, „Zum Entspannen“).
   - `highlights`: 2–4 kurze, allgemeine Eigenschaften, die auf praktisch jedes Produkt dieser Art zutreffen.
   - Keine Duplikate: prüfe, ob es das Produkt (auch unter anderem Namen) schon gibt.
   - Keine heiklen Produkte: nichts Medizinisches, keine Waffen, kein Alkohol/Tabak, nichts für Erwachsene,
     keine Nahrungsergänzungsmittel.
   - **Haustiere fest einplanen: mindestens 1 der neuen Produkte in jedem Lauf ist aus `pets`**, abwechselnd für
     Hunde, Katzen und kleine Haustiere (Kaninchen, Meerschweinchen, Vögel, Aquarium), bis es etwa 40 Haustier-Produkte
     sind. Saisonale `occasions` setzen, wo es passt (z. B. wichteln für Kleinigkeiten unter 15 €).
   - **Sport & Fitness (`sport`) regelmäßig ergänzen: mindestens 1 Home-Training-Produkt pro Woche (im Sonntagslauf)**
     (Geräte und Zubehör fürs Training zu Hause), bis es etwa 30 sind. Im Dezember und Januar in jedem Lauf
     (Neujahrsvorsätze). Keine Gesundheits- oder Abnehmversprechen („verbrennt Fett“, „heilt Rückenschmerzen“),
     keine Nahrungsergänzung oder Eiweißpulver.
   - Haustiere (`pets`): nur Zubehör und Spielzeug – kein Futter, keine Leckerlis mit Gesundheitsversprechen,
     nichts Medizinisches (Flohmittel, Nahrungsergänzung).
   - Gültige Werte: `category` kitchen | tech | beauty | home | fun | sport | pets;
     `budget` under15 | 15to50 | 50to150 | over150;
     `recipients` household | teenager | parents | kids;
     `occasions` weihnachten | geburtstag | wichteln | nikolaus | valentinstag | ostern | muttertag | vatertag | schulanfang.
4b. **Pinterest-Pins: 5 neue pro Lauf** am Ende von `daten/pins.js` anhängen. Make.com holt sie über
   `pins.xml` ab und veröffentlicht sie automatisch – was du hier schreibst, geht **ohne weitere Kontrolle live**.
   Felder:
   - `id`: heutiges Datum + Stichwort, z. B. `2026-11-02-geschenke-fuer-papa` (einmalig, nie wiederverwenden)
   - `datum`: heutiges Datum (`JJJJ-MM-TT`)
   - `titel`: max. 100 Zeichen. Beginnt mit dem wichtigsten Suchbegriff aus Schritt 2b, so wie Leute auf
     Pinterest suchen („Wichtelgeschenke für Kollegen: 8 Ideen unter 15 €“, „Geschenke für Papa unter 50 €“).
     Konkret und klickstark, aber ehrlich – keine Superlative wie „die besten“, „Top 10“, „Nr. 1“.
   - `beschreibung`: max. 500 Zeichen. Pinterest ist eine Suchmaschine, darum:
     - 2–3 natürliche Sätze, in denen **2–4 Suchbegriffe aus Schritt 2b im Fließtext** vorkommen
       (z. B. „Du suchst ein Wichtelgeschenk für Kollegen oder ein kleines Geschenk für die Freundin?“)
     - mindestens 2 konkrete Produktarten vom Pin nennen
     - eine Aufforderung am Schluss („Alle Ideen nach Budget sortiert findest du auf der Seite.“)
     - danach 3–5 Hashtags, **immer mit `#werbung`**
     - kein Aufzählen von Stichwörtern hintereinander (Keyword-Stuffing straft Pinterest ab)
   - `emoji`: großes Bild oben auf dem Pin
   - `seite`: slug einer Themen-Seite oder `""` für die Startseite
   - `filter`: optional `recipient`, `budget`, `category` – grenzt die Produkte ein, der Link öffnet die Seite mit diesem Filter
   - `board`: optional – Pinterest-Pinnwand, einer der Schlüssel aus `pinterestBoards` in `daten/config.js`
     (geschenkideen, weihnachten, wichteln, tiere, teenager, eltern, workout). Weglassen ist meist richtig:
     Dann wählt `tools/site.py` die Pinnwand automatisch aus Seite und Filter (z. B. Haustier-Pins → tiere).
     Setze es nur, wenn die automatische Wahl offensichtlich schlechter passt.
     Für neue Anlässe ohne eigene Pinnwand (z. B. Valentinstag) passt automatisch „geschenkideen“ –
     schlag im Bericht vor, dafür eine eigene Pinnwand anzulegen.
   - `design`: **`"d"` (großes Stimmungsfoto mit Titel) ist das Haupt-Design – mindestens 3 der 5 Pins pro Lauf.**
     Für Abwechslung die übrigen mit `"b"` (2 × 3 große Kacheln) oder `"c"` (dunkel, nummerierte Liste);
     `"a"` nicht mehr verwenden.
   - `foto` (Pflicht bei Design d): **deutscher Suchbegriff mit 2–3 Wörtern** für ein Stimmungsfoto von Pixabay,
     z. B. „hund sofa“, „katze decke“, „weihnachtsbaum geschenke“, „wohnzimmer weihnachten kamin“,
     „kaffee tasse gemütlich“, „hanteln zuhause“. Das Foto zeigt eine **Stimmung, nicht das Produkt** – also keine
     Produktbezeichnungen suchen. Szenen drinnen/zu Hause passen meist besser als Landschaften. `tools/fotos.py`
     sucht das Foto (ohne KI-Bilder und Marken) und trägt `foto_id` selbst ein – `foto_id` nie von Hand setzen.
     Findet es nichts („kein passendes Foto“), einen anderen, allgemeineren Suchbegriff wählen und erneut ausführen.
   - `video`: `true` bei **genau 1 der 5 Pins pro Lauf** – daraus macht `tools/videos.py` ein ~10-Sekunden-Video.
     Nimm dafür ein Thema mit 6 überzeugenden Produkten.
   - Dieselbe Seite darf wieder einen Pin bekommen, wenn seit dem letzten Pin dazu mindestens 2 Wochen vergangen sind
     **und** Titel, Design und Produktauswahl deutlich anders sind (Pinterest mag „frische“ Pins zum selben Thema).
   - `produkte`: optional bis zu 6 Produkttitel (genau wie in `daten/produkte.js`), die auf dem Pin stehen sollen –
     nimm die überzeugendsten für das Thema
   Wähle Themen passend zur Saison (anstehende Anlässe zuerst) und wiederhole keine Kombination aus Seite und Filter
   der letzten 8 Wochen. **In jedem Lauf ist mindestens 1 der 5 Pins zum Thema Haustiere** – am besten mit der Saison
   verbunden, z. B. `seite` weihnachtsgeschenke + `filter` {"category": "pets"} („Weihnachtsgeschenke für Hundebesitzer“)
   oder die Seite `geschenke-fuer-tierfreunde` mit `budget`-Filter. Einmal pro Woche (im Sonntagslauf, im Dezember
   und Januar in jedem Lauf) ist außerdem ein Pin zum Thema Home-Training dabei (Seite `home-training-geschenke` oder `filter` {"category": "sport"}). Gleiche Regeln wie bei Produkten: keine Preise einzelner Produkte, keine Bewertungen,
   keine Behauptungen wie „Bestseller“. Budget-Angaben wie „unter 15 €“ sind erlaubt.
5. `python -I tools/fotos.py` (sucht und lädt die Fotos für neue Pins mit `foto`),
   `python -P tools/grafiken.py` (erzeugt die Social-Media-Grafiken in `assets/social/` neu),
   `python -P tools/videos.py` (erzeugt die neuen Video-Pins),
   dann `python -I tools/site.py build`, dann `python -I tools/site.py check`.
   Bei FEHLER: bis zu zwei Korrekturversuche. Klappt es nicht: alle Änderungen mit
   `git checkout -- . && git clean -fd ideen assets/social` verwerfen, nichts veröffentlichen, melden.
   WARNUNGEN zu Partner-ID und Impressum sind bekannt und blockieren nicht.
6. Veröffentlichen: `git add -A`, `git commit -m "Bot: <kurze Zusammenfassung>"`, `git push`.
6b. **Suchmaschinen benachrichtigen:** `python -I tools/indexnow.py` – wartet, bis die neuen Seiten online sind, und
   meldet sie an Bing (und damit Ecosia, DuckDuckGo, ChatGPT-Suche). Ein Fehler hier ist kein Grund zum Zurücksetzen,
   nur im Bericht erwähnen.
7. **Texte zum Teilen (nur sonntags)** in `_entwuerfe/JJJJ-MM-TT.md` schreiben. Der Betreiber macht **kein
   Instagram, kein TikTok, keine Videos und teilt nichts über WhatsApp oder an Freunde/Familie** – schreib dafür
   nichts. Schreib nur 2 fertige Texte für **Facebook-Gruppen** (z. B. Eltern-, Hunde- oder Wichtel-Gruppen), die er
   bei Bedarf kopieren kann: je 3–4 Sätze, hilfsbereit statt werblich („Falls noch jemand ein Wichtelgeschenk
   sucht …“), plus Link und am Ende „(Werbung: enthält Partnerlinks)“. Nenne 2–3 Arten passender Gruppen und füge
   den Hinweis an: vorher die Gruppenregeln lesen, viele Gruppen verbieten Werbelinks.
   Links immer als volle Adresse aus `siteUrl` plus passender Seite oder Filter, z. B.
   `…/ideen/wichtelgeschenke-unter-15-euro.html` oder `…/#fuer=teenager&budget=under15`.
   Die Entwürfe sind nicht im Git (stehen in `.gitignore`).
8. Zum Schluss kurz melden: wichtigste Trends aus 2b, neue Seite(n), ergänzte Ratgeber, neue Produkte, neue Pins, Ergebnis von `check`, Commit, Datei mit den Entwürfen.
