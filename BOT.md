# Anleitung für den Content-Bot

Du pflegst die Website „Geschenke-Finder“ (Amazon-Partnerseite) in diesem Ordner.
Du läufst einmal pro Woche ohne Aufsicht. Arbeite vorsichtig: Lieber eine kleine,
fehlerfreie Änderung als eine große, die etwas kaputt macht.

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
3. **Anlässe prüfen.** Schau aufs heutige Datum. Für jeden Anlass, der in den nächsten
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
4. **Produkte ergänzen: 2 bis 4 neue pro Lauf.** Bevorzuge, in dieser Reihenfolge:
   Produkte für anstehende Anlässe (mit passenden `occasions`), dann Lücken, die `check`
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
   - **Haustiere fest einplanen: mindestens 1 der neuen Produkte jede Woche ist aus `pets`**, abwechselnd für
     Hunde, Katzen und kleine Haustiere (Kaninchen, Meerschweinchen, Vögel, Aquarium), bis es etwa 40 Haustier-Produkte
     sind. Saisonale `occasions` setzen, wo es passt (z. B. wichteln für Kleinigkeiten unter 15 €).
   - **Sport & Fitness (`sport`) regelmäßig ergänzen: jede zweite Woche mindestens 1 Home-Training-Produkt**
     (Geräte und Zubehör fürs Training zu Hause), bis es etwa 30 sind. Im Dezember und Januar jede Woche
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
   - `titel`: max. 100 Zeichen, so formuliert, wie Leute auf Pinterest suchen („Geschenke für Papa unter 50 €“)
   - `beschreibung`: 2–3 Sätze (max. 500 Zeichen), dann 4–6 Hashtags, **immer mit `#werbung`**
   - `emoji`: großes Bild oben auf dem Pin
   - `seite`: slug einer Themen-Seite oder `""` für die Startseite
   - `filter`: optional `recipient`, `budget`, `category` – grenzt die Produkte ein, der Link öffnet die Seite mit diesem Filter
   - `produkte`: optional bis zu 6 Produkttitel (genau wie in `daten/produkte.js`), die auf dem Pin stehen sollen –
     nimm die überzeugendsten für das Thema
   Wähle Themen passend zur Saison (anstehende Anlässe zuerst) und wiederhole keine Kombination aus Seite und Filter
   der letzten 8 Wochen. **Mindestens 1 der 3 Pins jede Woche ist zum Thema Haustiere** – am besten mit der Saison
   verbunden, z. B. `seite` weihnachtsgeschenke + `filter` {"category": "pets"} („Weihnachtsgeschenke für Hundebesitzer“)
   oder die Seite `geschenke-fuer-tierfreunde` mit `budget`-Filter. Jede zweite Woche (im Dezember und Januar jede
   Woche) ist außerdem ein Pin zum Thema Home-Training dabei (Seite `home-training-geschenke` oder `filter` {"category": "sport"}). Gleiche Regeln wie bei Produkten: keine Preise einzelner Produkte, keine Bewertungen,
   keine Behauptungen wie „Bestseller“. Budget-Angaben wie „unter 15 €“ sind erlaubt.
5. `python -P tools/grafiken.py` (erzeugt die Social-Media-Grafiken in `assets/social/` neu),
   dann `python -I tools/site.py build`, dann `python -I tools/site.py check`.
   Bei FEHLER: bis zu zwei Korrekturversuche. Klappt es nicht: alle Änderungen mit
   `git checkout -- . && git clean -fd ideen assets/social` verwerfen, nichts veröffentlichen, melden.
   WARNUNGEN zu Partner-ID und Impressum sind bekannt und blockieren nicht.
6. Veröffentlichen: `git add -A`, `git commit -m "Bot: <kurze Zusammenfassung>"`, `git push`.
7. **Social-Media-Entwürfe** in `_entwuerfe/JJJJ-MM-TT.md` schreiben: 5 Posts, passend zur Saison
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
8. Zum Schluss kurz melden: neue Seite(n), neue Produkte, neue Pins, Ergebnis von `check`, Commit, Datei mit den Entwürfen.
