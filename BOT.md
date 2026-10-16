# Anleitung für den Content-Bot

Du pflegst die Website „Geschenke-Finder“ (Amazon-Partnerseite) in diesem Ordner.
Du läufst **dreimal pro Woche ohne Aufsicht: Sonntag, Dienstag und Donnerstag um 17 Uhr** – kurz vor den
Abendstunden (19–22 Uhr), in denen am meisten online eingekauft wird. Make.com veröffentlicht deine neuen Pins
um 18 Uhr. Arbeite vorsichtig: Lieber eine kleine, fehlerfreie Änderung als eine große, die etwas kaputt macht.

**Was in welchem Lauf passiert:**

| | Sonntag | Dienstag | Donnerstag |
|---|---|---|---|
| Trend-Recherche (2b) | ausführlich (5–8 Suchen) | kurz (2–3 Suchen) | kurz (2–3 Suchen) |
| Themen-Seite (3) | ja, max. 1 | nein | nein |
| Produkte (4) | 2–3 | 2–3 | 2–3 |
| Pins (4b) | 3 | 3 | 3 |
| Social-Media-Entwürfe (7) | 5 für die Woche | nein | nein |

Bei den kurzen Läufen liest du die letzte `_entwuerfe/trends-*.md` und ergänzt sie nur. Sonntagspins dürfen
etwas allgemeiner sein (Wochenend-Stöbern), Dienstag und Donnerstag eher konkrete Budget-Themen („unter 15 €“).

## Was du ändern darfst

- `daten/produkte.js` – Produkte hinzufügen oder verbessern
- `daten/seiten.js` – Themen-Seiten (Anlässe) hinzufügen
- `daten/pins.js` – neue Pinterest-Pins hinzufügen (bestehende nie ändern oder löschen)
- `_entwuerfe/` – Social-Media-Entwürfe (wird nicht veröffentlicht)
- Erzeugte Dateien über `python -I tools/site.py build` (nie von Hand)

**Nicht anfassen:** `daten/config.js`, `impressum.html`, `datenschutz.html`,
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
4b. **Pinterest-Pins: 3 neue pro Lauf** am Ende von `daten/pins.js` anhängen. Make.com holt sie über
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
   - `produkte`: optional bis zu 6 Produkttitel (genau wie in `daten/produkte.js`), die auf dem Pin stehen sollen –
     nimm die überzeugendsten für das Thema
   Wähle Themen passend zur Saison (anstehende Anlässe zuerst) und wiederhole keine Kombination aus Seite und Filter
   der letzten 8 Wochen. **In jedem Lauf ist mindestens 1 der 3 Pins zum Thema Haustiere** – am besten mit der Saison
   verbunden, z. B. `seite` weihnachtsgeschenke + `filter` {"category": "pets"} („Weihnachtsgeschenke für Hundebesitzer“)
   oder die Seite `geschenke-fuer-tierfreunde` mit `budget`-Filter. Einmal pro Woche (im Sonntagslauf, im Dezember
   und Januar in jedem Lauf) ist außerdem ein Pin zum Thema Home-Training dabei (Seite `home-training-geschenke` oder `filter` {"category": "sport"}). Gleiche Regeln wie bei Produkten: keine Preise einzelner Produkte, keine Bewertungen,
   keine Behauptungen wie „Bestseller“. Budget-Angaben wie „unter 15 €“ sind erlaubt.
5. `python -P tools/grafiken.py` (erzeugt die Social-Media-Grafiken in `assets/social/` neu),
   dann `python -I tools/site.py build`, dann `python -I tools/site.py check`.
   Bei FEHLER: bis zu zwei Korrekturversuche. Klappt es nicht: alle Änderungen mit
   `git checkout -- . && git clean -fd ideen assets/social` verwerfen, nichts veröffentlichen, melden.
   WARNUNGEN zu Partner-ID und Impressum sind bekannt und blockieren nicht.
6. Veröffentlichen: `git add -A`, `git commit -m "Bot: <kurze Zusammenfassung>"`, `git push`.
7. **Social-Media-Entwürfe (nur sonntags)** in `_entwuerfe/JJJJ-MM-TT.md` schreiben: 5 Posts, passend zur Saison
   und zu den Produkten auf der Seite. Pro Post:
   - Plattform (Instagram/TikTok-Video, Pinterest-Pin oder Facebook)
   - Hook (erste Zeile, die zum Weiterlesen bringt)
   - Text (kurz, locker, Du-Form)
   - Link: volle Adresse aus `siteUrl` plus passender Filter, z. B.
     `…/ideen/wichtelgeschenke-unter-15-euro.html` oder `…/#fuer=teenager&budget=under15`
   - Grafik: passende Datei aus `assets/social/` mit vollem Pfad
     (`<slug>-pin.png` für Pinterest, `<slug>-story.png` für Stories/TikTok, `start-…` für die Startseite)
   - Bei Videos: Idee in 3–5 Szenen (was man filmt)
   - Hashtags (5–8), **immer mit `#werbung`**, weil die Links Provision bringen
   Die Entwürfe sind nicht im Git (stehen in `.gitignore`).
8. Zum Schluss kurz melden: wichtigste Trends aus 2b, neue Seite(n), neue Produkte, neue Pins, Ergebnis von `check`, Commit, Datei mit den Entwürfen.
