// Themen-Seiten (Anlässe). Wird vom Bot gepflegt (siehe BOT.md).
// Nach jeder Änderung: python tools/site.py build
window.PAGES = [
  {
    "slug": "weihnachtsgeschenke",
    "titel": "Weihnachtsgeschenke für die ganze Familie",
    "kurztitel": "Weihnachten",
    "emoji": "🎄",
    "anlass": "weihnachten",
    "monate": [
      11,
      12
    ],
    "beschreibung": "Weihnachtsgeschenke für Teenager, Eltern, Kinder und den Haushalt – nach Budget filtern und direkt auf Amazon ansehen.",
    "intro": "Noch keine Idee für Weihnachten? Wähle aus, für wen du suchst und wie viel du ausgeben willst – hier findest du passende Geschenke für alle unterm Baum.",
    "filter": {},
    "foto": "weihnachtsbaum geschenke",
    "foto_id": 6883858
  },
  {
    "slug": "wichtelgeschenke-unter-15-euro",
    "titel": "Wichtelgeschenke unter 15 Euro",
    "kurztitel": "Wichteln unter 15 €",
    "emoji": "🎅",
    "anlass": "wichteln",
    "monate": [
      11,
      12
    ],
    "beschreibung": "Wichtelgeschenke unter 15 € für Büro, Schule und Freunde – kleine Ideen, die trotzdem Freude machen.",
    "intro": "Für das Wichteln im Büro, in der Klasse oder im Freundeskreis: kleine Geschenke unter 15 €, die nicht nach Verlegenheit aussehen.",
    "filter": {
      "budget": "under15"
    },
    "ratgeber": {
      "titel": "Ratgeber: Wichtelgeschenke, die gut ankommen",
      "abschnitte": [
        {
          "ueberschrift": "Worauf es beim Wichteln ankommt",
          "text": "Beim Wichteln kennst du die beschenkte Person oft nur flüchtig – manchmal weißt du nicht einmal, wen du am Ende beschenkst. Darum funktionieren Geschenke am besten, die fast jeder gebrauchen kann: etwas für den Alltag, etwas zum Entspannen oder eine Kleinigkeit, die man gemeinsam ausprobiert.\n\nZu persönliche Dinge wie Parfüm, Kleidung oder Schmuck sind dagegen riskant, weil Geschmack und Größe schwer zu treffen sind. Halte dich außerdem an das vereinbarte Budget. Wer deutlich mehr ausgibt, bringt andere in Verlegenheit – wer viel weniger ausgibt, wirkt schnell lieblos."
        },
        {
          "ueberschrift": "Büro, Schule oder Freundeskreis: Was passt wo?",
          "text": "Im Büro sind praktische Geschenke eine sichere Wahl: ein Thermobecher für den Weg zur Arbeit, ein schönes Notizbuch oder etwas für die Mittagspause. Scherzgeschenke können lustig sein, sollten aber niemanden bloßstellen – im Zweifel lieber neutral bleiben.\n\nIn der Schulklasse kommen Dinge gut an, die Spaß machen und Teenager-Zimmer verschönern, zum Beispiel eine Sunset-Lampe oder LED-Lichter. Unter Freunden darf es persönlicher werden: Wenn du weißt, dass jemand gerne backt, puzzelt oder einen Hund hat, triffst du mit einem passenden Geschenk für dieses Hobby fast immer ins Schwarze."
        },
        {
          "ueberschrift": "Kleine Extras, die das Geschenk persönlicher machen",
          "text": "Ein kleines Geschenk wirkt sofort wertiger, wenn es liebevoll verpackt ist. Ein Stück Packpapier, ein Band und ein Zweig Tanne reichen schon. Eine kurze handgeschriebene Karte mit einem netten Satz macht aus einer Kleinigkeit ein echtes Geschenk.\n\nDu kannst auch zwei Dinge kombinieren, solange das Budget passt: einen Thermobecher mit einer Packung Tee oder Kaffee, ein Notizbuch mit einem schönen Stift oder ein Kartenspiel mit einer Tüte Süßigkeiten für die erste Spielrunde."
        }
      ],
      "produkttexte": {
        "Edelstahl-Thermobecher": "Ein Klassiker, der fast immer passt: Jeder trinkt irgendwann Kaffee oder Tee unterwegs. Achte darauf, dass der Deckel gut schließt, damit nichts in die Tasche läuft.",
        "Kartenspiel für Partys": "Ideal für Büro und Freundeskreis, weil das Geschenk gleich gemeinsam genutzt werden kann. Kurze Partyspiele sind schnell erklärt und sorgen beim nächsten Treffen für Gesprächsstoff.",
        "Bullet-Journal-Notizbuch": "Für alle, die gerne planen, Listen schreiben oder zeichnen. Gepunktete Seiten lassen viel Freiheit – ein neutrales Geschenk, das trotzdem nicht langweilig ist.",
        "Sunset-Lampe": "Besonders bei Teenagern beliebt, weil sie ein warmes Licht wie bei Sonnenuntergang an die Wand wirft. Schön für Zimmer, Fotos und gemütliche Abende.",
        "Kräutergarten-Anzuchtset": "Ein kleines Projekt zum Mitnehmen: Samen und Töpfe sind dabei, und nach ein paar Wochen gibt es frische Kräuter für die Küche. Passt gut für Leute, die gerne kochen.",
        "Puzzle 1000 Teile": "Für ruhige Winterabende und alle, die gerne abschalten. Ein schönes Motiv macht das Puzzle zu einem Geschenk, das man gerne auf dem Tisch liegen lässt.",
        "Schnüffelteppich für Hunde": "Wenn du weißt, dass die Person einen Hund hat, ist das eine sympathische Wahl: Darin werden Leckerli versteckt, und der Hund sucht sie mit der Nase.",
        "Fitnessbänder-Set": "Klein, leicht und vielseitig – passend für alle, die zu Hause etwas Sport machen möchten. Ein Set mit verschiedenen Stärken eignet sich auch für Einsteiger."
      },
      "faq": [
        {
          "frage": "Wie viel gibt man beim Wichteln normalerweise aus?",
          "antwort": "Üblich sind 5 bis 15 Euro. Wichtig ist vor allem, dass sich alle an dieselbe Grenze halten – sprecht das Budget am besten vorher gemeinsam ab."
        },
        {
          "frage": "Was schenke ich, wenn ich die Person kaum kenne?",
          "antwort": "Wähle etwas Praktisches oder Gemütliches, das zu fast jedem passt: einen Thermobecher, ein Notizbuch, ein Puzzle oder ein Spiel. Persönliche Dinge wie Kleidung oder Parfüm lässt du besser weg."
        },
        {
          "frage": "Sind Scherzgeschenke beim Wichteln in Ordnung?",
          "antwort": "Ja, wenn alle Spaß verstehen und niemand bloßgestellt wird. Gerade im Büro ist ein lustiges, aber nützliches Geschenk die sicherere Wahl als ein reiner Gag."
        },
        {
          "frage": "Wie lange dauert die Lieferung, wenn ich online bestelle?",
          "antwort": "Das hängt vom Händler und vom Produkt ab. Schau kurz vor der Bestellung auf Amazon nach dem angegebenen Liefertermin und bestell in der Vorweihnachtszeit lieber ein paar Tage früher."
        }
      ]
    },
    "foto": "geschenk verpackung",
    "foto_id": 1867323
  },
  {
    "slug": "nikolausgeschenke",
    "titel": "Nikolausgeschenke für Kinder und Teenager",
    "kurztitel": "Nikolaus",
    "emoji": "🥾",
    "anlass": "nikolaus",
    "monate": [
      11,
      12
    ],
    "beschreibung": "Kleine Nikolausgeschenke für den Stiefel – Ideen für Kinder und Teenager.",
    "intro": "Was passt in den Nikolausstiefel außer Schokolade? Hier sind kleine Ideen für Kinder und Teenager.",
    "filter": {},
    "foto": "nikolaus stiefel",
    "foto_id": 3009717
  },
  {
    "slug": "geschenke-fuer-tierfreunde",
    "titel": "Geschenke für Hunde- und Katzenbesitzer",
    "kurztitel": "Für Tierfreunde",
    "emoji": "🐾",
    "anlass": "geburtstag",
    "monate": [],
    "beschreibung": "Geschenkideen für Hunde- und Katzenbesitzer: Spielzeug, Kuschelplätze und praktisches Zubehör für jedes Budget.",
    "intro": "Für alle, deren bester Freund vier Pfoten hat: Geschenke, über die sich Herrchen, Frauchen und Haustier gleichermaßen freuen.",
    "filter": {
      "category": "pets"
    },
    "ratgeber": {
      "titel": "Ratgeber: Geschenke für Hunde- und Katzenbesitzer",
      "abschnitte": [
        {
          "ueberschrift": "Geschenk für das Tier oder für den Menschen?",
          "text": "Wer ein Haustier hat, freut sich oft am meisten über Geschenke, die dem Tier guttun – denn damit zeigst du, dass du an beide gedacht hast. Spielzeug, ein gemütlicher Schlafplatz oder praktisches Zubehör für den Spaziergang werden im Alltag tatsächlich benutzt.\n\nGenauso schön sind Geschenke für den Menschen mit Tierbezug, zum Beispiel ein Pfotenabdruck-Set als Erinnerung. Überlege dir einfach, ob die Person eher praktisch denkt oder sich über etwas Persönliches freut."
        },
        {
          "ueberschrift": "Worauf du bei Haustier-Geschenken achten solltest",
          "text": "Größe und Gewicht des Tieres sind wichtig: Ein Hundebett, ein Regenmantel oder ein Halsband muss passen. Wenn du dir unsicher bist, frag beiläufig nach oder wähle Produkte, die sich verstellen lassen.\n\nBei Futter und Leckerlis ist Vorsicht angebracht, weil viele Tiere Unverträglichkeiten haben oder eine bestimmte Ernährung bekommen. Zubehör und Spielzeug sind deshalb meist die bessere Wahl. Achte bei Spielzeug außerdem auf robuste Verarbeitung und frag im Zweifel nach, ob das Tier gerne kaut oder zerlegt."
        },
        {
          "ueberschrift": "Hund oder Katze – was passt?",
          "text": "Hunde freuen sich über Beschäftigung: Intelligenzspielzeug und Schnüffelteppiche lasten den Kopf aus, besonders an Regentagen. Für die dunkle Jahreszeit sind Leuchthalsband und Regenmantel nützliche Begleiter beim Gassigehen.\n\nKatzen lieben erhöhte Plätze, Verstecke und Spiel, das den Jagdtrieb anspricht. Ein Kratzbaum, eine Katzenhöhle oder interaktives Spielzeug sind deshalb gute Ideen – vor allem für Wohnungskatzen, die wenig Abwechslung von draußen bekommen."
        }
      ],
      "produkttexte": {
        "Intelligenzspielzeug für Hunde": "Der Hund muss Leckerli unter Klappen oder in Fächern finden. Das beschäftigt ihn eine Weile und eignet sich gut für Tage, an denen der Spaziergang kürzer ausfällt.",
        "Schnüffelteppich für Hunde": "Ein günstiges Geschenk mit viel Wirkung: Futter oder Leckerli werden zwischen den Stoffstreifen versteckt, und der Hund sucht mit der Nase. Waschbar und leicht zu verstauen.",
        "LED-Leuchthalsband für Hunde": "Macht den Hund im Dunkeln gut sichtbar – praktisch für Herbst und Winter. Modelle zum Aufladen per USB ersparen den Batteriewechsel.",
        "Hunde-Regenmantel": "Für Hunde mit kurzem Fell oder Besitzer, die nach dem Spaziergang nicht jedes Mal das ganze Tier trocknen möchten. Reflektierende Streifen sind ein schöner Zusatz.",
        "Katzen-Kratzbaum": "Bietet Klettern, Kratzen und Ausruhen an einem Ort und schont nebenbei die Möbel. Wichtig ist ein stabiler Stand, damit die Katze ihn gerne nutzt.",
        "Katzenhöhle zum Kuscheln": "Viele Katzen ziehen sich gerne zurück. Eine weiche Höhle wird schnell zum Lieblingsplatz und passt in jede Ecke der Wohnung.",
        "GPS-Tracker für Hunde": "Gibt Hundebesitzern ein gutes Gefühl, wenn der Hund gerne eigene Wege geht. Der Standort lässt sich per App anzeigen; bei vielen Modellen fällt dafür ein Abo an.",
        "Pfotenabdruck-Set": "Eine Erinnerung für den Menschen: Der Abdruck der Pfote wird festgehalten und kann aufbewahrt oder aufgehängt werden. Ein persönliches Geschenk, das wenig kostet."
      },
      "faq": [
        {
          "frage": "Was schenkt man Hundebesitzern, die schon alles haben?",
          "antwort": "Beschäftigung geht immer: Intelligenzspielzeug oder ein Schnüffelteppich werden selten doppelt verschenkt. Auch ein Pfotenabdruck-Set als Erinnerung ist eine persönliche Idee für Leute, die schon gut ausgestattet sind."
        },
        {
          "frage": "Kann ich Futter oder Leckerlis verschenken?",
          "antwort": "Nur, wenn du weißt, was das Tier verträgt. Viele Hunde und Katzen bekommen spezielles Futter oder reagieren empfindlich. Zubehör und Spielzeug sind deshalb die unkompliziertere Wahl."
        },
        {
          "frage": "Was eignet sich für Wohnungskatzen?",
          "antwort": "Alles, was Abwechslung in die Wohnung bringt: ein Kratzbaum zum Klettern, eine Höhle zum Zurückziehen und interaktives Spielzeug, mit dem Katze und Mensch gemeinsam spielen."
        },
        {
          "frage": "Woher weiß ich, welche Größe passt?",
          "antwort": "Frag beiläufig nach Rasse oder Gewicht des Tieres oder schau dir Fotos an. Bei Halsbändern und Mänteln helfen verstellbare Modelle, beim Hundebett lieber eine Nummer größer wählen."
        }
      ]
    },
    "foto": "hund katze",
    "foto_id": 7174266
  },
  {
    "slug": "home-training-geschenke",
    "titel": "Home-Training: Geschenke für Sportler und alle, die fit werden wollen",
    "kurztitel": "Home-Training",
    "emoji": "🏋️",
    "anlass": "geburtstag",
    "monate": [
      1
    ],
    "beschreibung": "Geschenkideen fürs Training zu Hause: von Yogamatte und Fitnessbändern bis zu Hantel-Set, Rudergerät und Walking Pad.",
    "intro": "Ob gute Vorsätze fürs neue Jahr oder Sport-Fan: Mit diesen Geräten klappt das Training auch ohne Fitnessstudio – für jedes Budget.",
    "filter": {
      "category": "sport"
    },
    "foto": "hanteln training",
    "foto_id": 6975177
  },
  {
    "slug": "geschenke-fuer-teenager",
    "titel": "Geschenke für Teenager: Ideen für Jugendliche",
    "kurztitel": "Für Teenager",
    "emoji": "🎧",
    "anlass": "geburtstag",
    "monate": [],
    "beschreibung": "Geschenke für Teenager zum Geburtstag oder zu Weihnachten: Zimmer-Deko, Gaming, Musik und Kreatives – nach Budget filtern.",
    "intro": "Teenager zu beschenken ist nicht leicht. Hier findest du Ideen von Zimmer-Deko über Gaming bis Retro-Sound – sortiert nach Budget.",
    "filter": {
      "recipient": "teenager"
    },
    "foto": "teenager musik",
    "foto_id": 6981830
  },
  {
    "slug": "adventskalender",
    "titel": "Adventskalender: Ideen für Kinder, Erwachsene und Haustiere",
    "kurztitel": "Adventskalender",
    "emoji": "📅",
    "anlass": "weihnachten",
    "monate": [
      9,
      10,
      11
    ],
    "beschreibung": "Adventskalender für Kinder, Erwachsene, Hunde und Katzen – vom Beauty- und Tee-Kalender bis zum Kalender zum Selbstbefüllen.",
    "intro": "Rechtzeitig zum 1. Dezember: Adventskalender für Kinder, Beauty-Fans, Teetrinker, Grillfans und sogar für Hund und Katze.",
    "filter": {},
    "foto": "adventskalender",
    "produkte": [
      "Spielzeug-Adventskalender für Kinder",
      "Adventskalender für Hunde",
      "Adventskalender für Katzen",
      "Beauty-Adventskalender",
      "Tee-Adventskalender",
      "Puzzle-Adventskalender",
      "Grillgewürz-Adventskalender",
      "Adventskalender zum Befüllen"
    ],
    "foto_id": 3858327
  },
  {
    "slug": "geschenke-fuer-maenner",
    "titel": "Geschenke für Männer: Ideen für Technik-, Sport- und Grillfans",
    "kurztitel": "Für Männer",
    "emoji": "🧔",
    "anlass": "geburtstag",
    "monate": [],
    "beschreibung": "Geschenke für Männer zum Geburtstag oder zu Weihnachten: Technik, Werkzeug, Grill, Sport und Pflege – nach Budget filtern.",
    "intro": "Was schenkt man Männern, die angeblich nichts brauchen? Hier sind praktische Ideen für Technik-Fans, Heimwerker, Grillmeister und Sportler.",
    "filter": {},
    "foto": "werkzeug werkbank",
    "produkte": [
      "Multitool",
      "Bartpflege-Set",
      "Digitales Grillthermometer",
      "Aufladbare LED-Taschenlampe",
      "Bestückter Werkzeugkoffer",
      "Powerbank 20.000 mAh",
      "Bluetooth-Lautsprecher wasserdicht",
      "Noise-Cancelling-Kopfhörer",
      "Massagepistole",
      "Verstellbares Kurzhantel-Set",
      "Kamera-Drohne für Einsteiger",
      "Edelstahl-Thermobecher",
      "Grillbesteck-Set im Koffer",
      "Dashcam fürs Auto",
      "Akku-Autostaubsauger",
      "Uhrenbox aus Holz",
      "Schlüsselfinder-Set",
      "Beheizbare Weste",
      "Retro-Spielkonsole mit Klassikern"
    ],
    "foto_id": 7092687
  },
  {
    "slug": "geschenke-fuer-frauen",
    "titel": "Geschenke für Frauen: Ideen zum Verwöhnen und Wohlfühlen",
    "kurztitel": "Für Frauen",
    "emoji": "💐",
    "anlass": "geburtstag",
    "monate": [],
    "beschreibung": "Geschenke für Frauen und die Freundin: Wellness, Schönes für zu Hause, Pflege und kleine Alltagshelfer – nach Budget filtern.",
    "intro": "Für die Freundin, die Partnerin, die Schwester oder die Mama: Ideen zum Verwöhnen, Entspannen und Genießen – für jedes Budget.",
    "filter": {},
    "foto": "kerzen gemütlich",
    "produkte": [
      "Seidenkissenbezug",
      "Schmuckkästchen",
      "Duftkerzen-Set",
      "Flauschiger Bademantel",
      "Warmluftbürste",
      "Aroma-Diffuser",
      "Shiatsu-Nackenmassagegerät",
      "Gesichtsmasken-Set",
      "Sofortbildkamera",
      "Kuscheldecke mit Ärmeln",
      "Elektrischer Milchaufschäumer",
      "Yogamatte rutschfest",
      "Mani- und Pediküre-Set",
      "Wellness-Geschenkset",
      "Lockenstab",
      "Tee-Geschenkset",
      "Wärmflasche mit Strickbezug",
      "Hängesessel",
      "Briefpapier-Set",
      "Diamond-Painting-Set"
    ],
    "foto_id": 8431871
  }
];
