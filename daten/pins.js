// Pinterest-Pins. Der Bot fügt jede Woche neue hinzu (siehe BOT.md).
// Aus dieser Liste entstehen die Pin-Grafiken (tools/grafiken.py) und der Feed pins.xml (tools/site.py build),
// den Make.com abholt und auf Pinterest veröffentlicht. Bereits veröffentlichte Pins nie ändern oder löschen.
window.PINS = [
  {
    "id": "2026-10-16-wichteln-unter-15",
    "datum": "2026-10-16",
    "titel": "8 Wichtelgeschenke unter 15 €, die nicht nach Verlegenheit aussehen",
    "beschreibung": "Wichteln im Büro, in der Klasse oder mit Freunden? Hier sind kleine Geschenke unter 15 €, über die sich jeder freut – vom Thermobecher bis zum Party-Kartenspiel. #wichteln #wichtelgeschenk #geschenkideen #weihnachten #werbung",
    "emoji": "🎅",
    "seite": "wichtelgeschenke-unter-15-euro",
    "filter": {}
  },
  {
    "id": "2026-10-16-teenager-weihnachten",
    "datum": "2026-10-16",
    "titel": "Weihnachtsgeschenke für Teenager: Ideen, die wirklich ankommen",
    "beschreibung": "Was schenkt man Teenagern zu Weihnachten? Von LED-Strips fürs Zimmer über Gaming-Headsets bis zur Sofortbildkamera – Ideen für jedes Budget. #geschenkefürteenager #weihnachtsgeschenke #geschenkideen #gaming #werbung",
    "emoji": "🎮",
    "seite": "weihnachtsgeschenke",
    "filter": {
      "recipient": "teenager"
    },
    "produkte": [
      "LED-Strip mit App-Steuerung",
      "Gaming-Headset",
      "Sofortbildkamera",
      "Bluetooth-Lautsprecher wasserdicht",
      "Powerbank 20.000 mAh",
      "Spielkonsole"
    ]
  },
  {
    "id": "2026-10-16-nikolaus-kinder",
    "datum": "2026-10-16",
    "titel": "Was kommt in den Nikolausstiefel? Kleine Ideen für Kinder und Teens",
    "beschreibung": "Mehr als nur Schokolade: kleine Nikolausgeschenke für Kinder und Teenager, vom Knete-Set bis zum Sternenhimmel-Projektor fürs Kinderzimmer. #nikolaus #nikolausgeschenke #geschenkideenkinder #advent #werbung",
    "emoji": "🥾",
    "seite": "nikolausgeschenke",
    "filter": {}
  },
  {
    "id": "2026-10-16-tierfreunde",
    "datum": "2026-10-16",
    "titel": "Geschenke für Hunde- und Katzenbesitzer, über die sich auch das Tier freut",
    "beschreibung": "Vom Schnüffelteppich über den Kratzbaum bis zum GPS-Tracker für den Hund: Geschenkideen für alle, deren bester Freund vier Pfoten hat. #hundeliebe #katzenliebe #geschenkideen #hundezubehör #werbung",
    "emoji": "🐾",
    "seite": "geschenke-fuer-tierfreunde",
    "filter": {},
    "produkte": [
      "Intelligenzspielzeug für Hunde",
      "Katzen-Kratzbaum",
      "Schnüffelteppich für Hunde",
      "Interaktives Katzenspielzeug",
      "GPS-Tracker für Hunde",
      "Hundebett mit erhöhtem Rand"
    ]
  },
  {
    "id": "2026-10-16-home-training",
    "datum": "2026-10-16",
    "titel": "Home-Training: Geschenkideen für alle, die zu Hause fit bleiben wollen",
    "beschreibung": "Kein Fitnessstudio nötig: Von Yogamatte und Fitnessbändern über Kettlebell und Hantel-Set bis zum Walking Pad fürs Homeoffice – Geschenke für Sportler und gute Vorsätze. #hometraining #homeworkout #fitnessgeschenk #geschenkideen #werbung",
    "emoji": "🏋️",
    "seite": "home-training-geschenke",
    "filter": {},
    "produkte": [
      "Yogamatte rutschfest",
      "Verstellbares Kurzhantel-Set",
      "Fitnessbänder-Set",
      "Kettlebell",
      "Walking Pad (Laufband klappbar)",
      "Klimmzugstange für den Türrahmen"
    ]
  },
  {
    "id": "2026-10-16-weihnachten-hundebesitzer",
    "datum": "2026-10-16",
    "titel": "Weihnachtsgeschenke für Hundebesitzer und Katzenfans: Ideen mit Herz",
    "beschreibung": "Du suchst ein Weihnachtsgeschenk für Hundebesitzer oder ein Geschenk für Katzenliebhaber? Vom LED-Leuchthalsband für dunkle Gassi-Runden über die Katzenhöhle bis zum Schnüffelteppich ist für jedes Budget etwas dabei. Alle Ideen für Tierfreunde findest du auf der Seite. #weihnachtsgeschenke #hundebesitzer #katzenliebe #geschenkideen #werbung",
    "emoji": "🐶",
    "seite": "weihnachtsgeschenke",
    "filter": {
      "category": "pets"
    },
    "produkte": [
      "LED-Leuchthalsband für Hunde",
      "Katzenhöhle zum Kuscheln",
      "Schnüffelteppich für Hunde",
      "Katzen-Kratzbaum",
      "Hunde-Regenmantel",
      "Katzen-Trinkbrunnen"
    ]
  },
  {
    "id": "2026-10-16-geschenke-fuer-teenager",
    "datum": "2026-10-16",
    "titel": "Geschenke für Teenager: Ideen von Retro-Sound bis Zimmer-Deko",
    "beschreibung": "Was schenkt man Teenagern zum Geburtstag oder zu Weihnachten? Ob Plattenspieler für Vinyl-Fans, Sunset-Lampe fürs Zimmer oder Bullet-Journal für Kreative – hier findest du Geschenke für Jugendliche, die wirklich ankommen. Alle Ideen nach Budget sortiert findest du auf der Seite. #geschenkefürteenager #geschenkideen #teenager #weihnachtsgeschenke #werbung",
    "emoji": "🎧",
    "seite": "geschenke-fuer-teenager",
    "filter": {},
    "produkte": [
      "Plattenspieler mit Lautsprechern",
      "Sunset-Lampe",
      "Bullet-Journal-Notizbuch",
      "Sofortbildkamera",
      "LED-Strip mit App-Steuerung",
      "Noise-Cancelling-Kopfhörer"
    ]
  },
  {
    "id": "2026-10-16-weihnachten-eltern",
    "datum": "2026-10-16",
    "titel": "Weihnachtsgeschenke für Eltern: Ideen zum Entspannen und Genießen",
    "beschreibung": "Du suchst Weihnachtsgeschenke für Eltern oder ein Geschenk für Mama und Papa, das wirklich genutzt wird? Vom Milchaufschäumer für Kaffee-Fans über das Nackenmassagegerät bis zum digitalen Bilderrahmen mit Familienfotos gibt es hier Ideen für jedes Budget. Schau dir alle Geschenke auf der Seite an. #weihnachtsgeschenke #geschenkfürmama #geschenkfürpapa #geschenkideen #werbung",
    "emoji": "🎁",
    "seite": "weihnachtsgeschenke",
    "filter": {
      "recipient": "parents"
    },
    "produkte": [
      "Digitaler Bilderrahmen mit WLAN",
      "Shiatsu-Nackenmassagegerät",
      "Elektrischer Milchaufschäumer",
      "Kuscheldecke mit Ärmeln",
      "Elektrische Heizdecke",
      "Aroma-Diffuser"
    ]
  },
  {
    "id": "2026-10-16-wichteln-kollegen",
    "datum": "2026-10-16",
    "titel": "Wichtelgeschenke für Kollegen: 6 Ideen unter 15 €, die gut ankommen",
    "beschreibung": "Du suchst ein Wichtelgeschenk für Kollegen und kennst die Person kaum? Vom Thermobecher über das Bullet Journal bis zum Party-Kartenspiel sind das kleine Geschenke unter 15 €, die jeder gebrauchen kann. Alle Wichtel-Ideen findest du auf der Seite. #wichteln #wichtelgeschenk #büro #geschenkideen #werbung",
    "emoji": "🎅",
    "seite": "wichtelgeschenke-unter-15-euro",
    "filter": {},
    "design": "b",
    "produkte": [
      "Edelstahl-Thermobecher",
      "Bullet-Journal-Notizbuch",
      "Kartenspiel für Partys",
      "Kräutergarten-Anzuchtset",
      "Puzzle 1000 Teile",
      "Sunset-Lampe"
    ]
  },
  {
    "id": "2026-10-16-geschenk-hundebesitzer",
    "datum": "2026-10-16",
    "titel": "Geschenk für Hundebesitzer: 6 Ideen für Gassi, Spiel und Kuscheln",
    "beschreibung": "Was schenkt man Hundebesitzern? Ein Leuchthalsband für dunkle Gassi-Runden, ein Schnüffelteppich gegen Langeweile oder ein gemütliches Hundebett – Geschenke für Hund und Herrchen in jedem Budget. Alle Ideen für Tierfreunde gibt es auf der Seite. #hundebesitzer #hundeliebe #geschenkideen #hundezubehör #werbung",
    "emoji": "🐕",
    "seite": "geschenke-fuer-tierfreunde",
    "filter": {},
    "design": "d",
    "produkte": [
      "LED-Leuchthalsband für Hunde",
      "Schnüffelteppich für Hunde",
      "Intelligenzspielzeug für Hunde",
      "Hundebett mit erhöhtem Rand",
      "Hunde-Regenmantel",
      "GPS-Tracker für Hunde"
    ],
    "foto": "hund sofa",
    "foto_id": 2561134
  },
  {
    "id": "2026-10-16-technik-teenager-video",
    "datum": "2026-10-16",
    "titel": "Technik-Geschenke für Teenager: von der Drohne bis zum Plattenspieler",
    "beschreibung": "Du suchst Technik-Geschenke für Teenager? Eine Kamera-Drohne für Fotos von oben, ein Plattenspieler für Vinyl-Fans oder eine Sofortbildkamera für Erinnerungen zum Anfassen – Ideen für Jugendliche in jedem Budget. Alle Geschenke für Teenager findest du auf der Seite. #geschenkefürteenager #technikgeschenke #drohne #geschenkideen #werbung",
    "emoji": "🚁",
    "seite": "geschenke-fuer-teenager",
    "filter": {
      "category": "tech"
    },
    "video": true,
    "produkte": [
      "Kamera-Drohne für Einsteiger",
      "Plattenspieler mit Lautsprechern",
      "Sofortbildkamera",
      "LED-Strip mit App-Steuerung",
      "Gaming-Headset",
      "Mini-Drohne für Kinder"
    ]
  },
  {
    "id": "2026-10-17-adventskalender",
    "datum": "2026-10-17",
    "titel": "Adventskalender 2026: Ideen für Kinder, Erwachsene, Hund und Katze",
    "beschreibung": "Du suchst einen Adventskalender für Kinder, für die Freundin oder sogar für Hund und Katze? Vom Spielzeug- und Beauty-Adventskalender über Tee und Grillgewürze bis zum Kalender zum Selbstbefüllen findest du hier Ideen für jedes Budget – rechtzeitig vor dem 1. Dezember. #adventskalender #weihnachten #advent #geschenkideen #werbung",
    "emoji": "📅",
    "seite": "adventskalender",
    "filter": {},
    "design": "d",
    "foto": "adventskalender",
    "board": "weihnachten",
    "produkte": [
      "Spielzeug-Adventskalender für Kinder",
      "Beauty-Adventskalender",
      "Tee-Adventskalender",
      "Adventskalender für Hunde",
      "Puzzle-Adventskalender",
      "Adventskalender zum Befüllen"
    ],
    "foto_id": 3858327
  },
  {
    "id": "2026-10-17-geschenke-maenner",
    "datum": "2026-10-17",
    "titel": "Geschenke für Männer, die angeblich nichts brauchen: Ideen für jedes Budget",
    "beschreibung": "Was schenkt man Männern zum Geburtstag oder zu Weihnachten? Ein Multitool für Heimwerker, ein Grillthermometer für Grillfans oder Noise-Cancelling-Kopfhörer für Technik-Fans – praktische Geschenke für Männer in jedem Budget. Alle Ideen findest du auf der Seite. #geschenkefürmänner #geschenkideen #weihnachtsgeschenke #geschenkfürihn #werbung",
    "emoji": "🧔",
    "seite": "geschenke-fuer-maenner",
    "filter": {},
    "design": "d",
    "foto": "werkzeug werkbank",
    "produkte": [
      "Multitool",
      "Digitales Grillthermometer",
      "Noise-Cancelling-Kopfhörer",
      "Bestückter Werkzeugkoffer",
      "Bartpflege-Set",
      "Aufladbare LED-Taschenlampe"
    ],
    "foto_id": 7092687
  },
  {
    "id": "2026-10-17-geschenke-frauen",
    "datum": "2026-10-17",
    "titel": "Geschenke für Frauen und die Freundin: Ideen zum Verwöhnen",
    "beschreibung": "Du suchst ein Geschenk für die Freundin, die Partnerin oder die Schwester? Vom Duftkerzen-Set über den flauschigen Bademantel bis zum Schmuckkästchen sind das Ideen zum Verwöhnen und Wohlfühlen – für jedes Budget. Schau dir alle Geschenke auf der Seite an. #geschenkefürfrauen #geschenkfürsie #geschenkideen #weihnachtsgeschenke #werbung",
    "emoji": "💐",
    "seite": "geschenke-fuer-frauen",
    "filter": {},
    "design": "d",
    "foto": "kerzen gemütlich",
    "produkte": [
      "Duftkerzen-Set",
      "Flauschiger Bademantel",
      "Schmuckkästchen",
      "Seidenkissenbezug",
      "Aroma-Diffuser",
      "Sofortbildkamera"
    ],
    "foto_id": 8454262
  },
  {
    "id": "2026-10-18-adventskalender-erwachsene",
    "datum": "2026-10-18",
    "titel": "Adventskalender für Erwachsene: Ideen mit Tee, Beauty, Puzzle und Grillgewürzen",
    "beschreibung": "Du suchst einen Adventskalender für Erwachsene, für die Freundin oder für Mama und Papa? Vom Tee-Adventskalender für gemütliche Abende über den Beauty-Adventskalender bis zum Grillgewürz-Kalender für Grillfans ist für jeden Geschmack etwas dabei. Alle Adventskalender-Ideen findest du rechtzeitig vor dem 1. Dezember auf der Seite. #adventskalender #adventskalenderfürerwachsene #advent #geschenkideen #werbung",
    "emoji": "📅",
    "seite": "adventskalender",
    "filter": {
      "recipient": "parents"
    },
    "design": "d",
    "foto": "tee kerze gemütlich",
    "board": "weihnachten",
    "produkte": [
      "Tee-Adventskalender",
      "Beauty-Adventskalender",
      "Grillgewürz-Adventskalender",
      "Puzzle-Adventskalender",
      "Adventskalender zum Befüllen",
      "Adventskalender für Katzen"
    ],
    "foto_id": 7968441
  },
  {
    "id": "2026-10-18-geschenke-fuer-gamer",
    "datum": "2026-10-18",
    "titel": "Geschenke für Gamer: Ideen von Headset bis Retro-Konsole",
    "beschreibung": "Du suchst Geschenke für Gamer oder ein Weihnachtsgeschenk für Zocker? Ein Gaming-Headset für Online-Runden, eine Retro-Spielkonsole mit Klassikern oder LED-Licht fürs Gaming-Zimmer kommen bei PC- und Konsolenfans gut an. Alle Ideen nach Budget sortiert findest du auf der Seite. #gamer #geschenkefürgamer #gaming #geschenkideen #werbung",
    "emoji": "🎮",
    "seite": "geschenke-fuer-gamer",
    "filter": {},
    "design": "d",
    "foto": "videospiel controller",
    "produkte": [
      "Gaming-Headset",
      "Retro-Spielkonsole mit Klassikern",
      "Gaming-Maus",
      "LED-Strip mit App-Steuerung",
      "Gaming-Mauspad XXL",
      "USB-Mikrofon für Streaming"
    ],
    "foto_id": 3597331
  },
  {
    "id": "2026-10-18-home-workout-15-50",
    "datum": "2026-10-18",
    "titel": "Home-Workout-Geschenke unter 50 €: Ideen fürs Training im Wohnzimmer",
    "beschreibung": "Du suchst ein Fitness-Geschenk für jemanden, der zu Hause trainiert? Eine rutschfeste Yogamatte, eine Kettlebell oder ein höhenverstellbarer Aerobic-Stepper bringen Abwechslung ins Home-Workout – ganz ohne Fitnessstudio. Alle Ideen fürs Home-Training findest du auf der Seite. #hometraining #homeworkout #fitnessgeschenk #geschenkideen #werbung",
    "emoji": "🧘",
    "seite": "home-training-geschenke",
    "filter": {
      "budget": "15to50"
    },
    "design": "d",
    "foto": "yoga matte",
    "produkte": [
      "Yogamatte rutschfest",
      "Kettlebell",
      "Aerobic-Stepper höhenverstellbar",
      "Klimmzugstange für den Türrahmen",
      "Gymnastikball",
      "Isolierte Trinkflasche"
    ],
    "foto_id": 3053487
  },
  {
    "id": "2026-10-18-tierfreunde-unter-15",
    "datum": "2026-10-18",
    "titel": "Kleine Geschenke für Hundebesitzer und Katzenliebhaber unter 15 €",
    "beschreibung": "Du suchst ein kleines Geschenk für Hundebesitzer oder ein Wichtelgeschenk für Katzenliebhaber? Ein Schnüffelteppich, ein LED-Leuchthalsband für dunkle Gassi-Runden oder ein Katzentunnel machen Tier und Mensch Freude – alles unter 15 €. Alle Ideen für Tierfreunde findest du auf der Seite. #hundebesitzer #katzenliebe #wichtelgeschenk #geschenkideen #werbung",
    "emoji": "🐾",
    "seite": "geschenke-fuer-tierfreunde",
    "filter": {
      "budget": "under15"
    },
    "design": "b",
    "produkte": [
      "Schnüffelteppich für Hunde",
      "LED-Leuchthalsband für Hunde",
      "Katzentunnel",
      "Interaktives Katzenspielzeug",
      "Leckerli-Beutel für Spaziergänge",
      "Robustes Kauspielzeug für Hunde"
    ]
  },
  {
    "id": "2026-10-18-geschenk-fuer-ihn-15-50",
    "datum": "2026-10-18",
    "titel": "Geschenk für ihn unter 50 €: 6 praktische Ideen für Männer",
    "beschreibung": "Du suchst ein Geschenk für den Freund, den Papa oder den Bruder, das nicht im Schrank verstaubt? Ein Multitool, ein digitales Grillthermometer oder ein Bartpflege-Set sind praktische Geschenke für Männer unter 50 €. Alle Geschenkideen für ihn findest du auf der Seite. #geschenkfürihn #geschenkefürmänner #weihnachtsgeschenke #geschenkideen #werbung",
    "emoji": "🧔",
    "seite": "geschenke-fuer-maenner",
    "filter": {
      "budget": "15to50"
    },
    "design": "c",
    "produkte": [
      "Multitool",
      "Digitales Grillthermometer",
      "Bartpflege-Set",
      "Schlüsselfinder-Set",
      "Aufladbare LED-Taschenlampe",
      "Uhrenbox aus Holz"
    ]
  },
  {
    "id": "2026-10-21-adventskalender-hund-katze",
    "datum": "2026-10-21",
    "titel": "Adventskalender für Hunde und Katzen: 24 Türchen für Fellnasen",
    "beschreibung": "Du suchst einen Adventskalender für Hunde oder einen Adventskalender für Katzen? Mit Spielzeug-Türchen wird die Adventszeit auch für Fellnasen spannend – und für Frauchen und Herrchen gibt es Tee- oder Beauty-Adventskalender dazu. Alle Adventskalender-Ideen findest du auf der Seite. #adventskalender #hundeliebe #katzenliebe #weihnachten #werbung",
    "emoji": "🐶",
    "seite": "adventskalender",
    "filter": {
      "recipient": "household"
    },
    "design": "d",
    "foto": "hund weihnachten",
    "produkte": [
      "Adventskalender für Hunde",
      "Adventskalender für Katzen",
      "Tee-Adventskalender",
      "Beauty-Adventskalender",
      "Adventskalender zum Befüllen"
    ],
    "foto_id": 5793625
  },
  {
    "id": "2026-10-21-geschenk-fuer-sie-15-50",
    "datum": "2026-10-21",
    "titel": "Geschenk für sie unter 50 €: 6 Ideen zum Verwöhnen für die Freundin",
    "beschreibung": "Du suchst ein Weihnachtsgeschenk für die Freundin oder ein kleines Geschenk für sie, das von Herzen kommt? Ein Seidenkissenbezug, ein flauschiger Bademantel oder ein Tee-Geschenkset machen gemütliche Winterabende noch schöner. Alle Geschenke für Frauen nach Budget findest du auf der Seite. #geschenkfürsie #geschenkfürfreundin #weihnachtsgeschenke #geschenkideen #werbung",
    "emoji": "💐",
    "seite": "geschenke-fuer-frauen",
    "filter": {
      "budget": "15to50"
    },
    "design": "c",
    "produkte": [
      "Seidenkissenbezug",
      "Flauschiger Bademantel",
      "Tee-Geschenkset",
      "Schmuckkästchen",
      "Duftkerzen-Set",
      "Wellness-Geschenkset"
    ]
  },
  {
    "id": "2026-10-21-weihnachtsgeschenke-kaffeeliebhaber",
    "datum": "2026-10-21",
    "titel": "Weihnachtsgeschenke für Kaffeeliebhaber: Ideen von Handmühle bis Milchschaum",
    "beschreibung": "Du suchst Geschenke für Kaffeeliebhaber zu Weihnachten? Eine Handkaffeemühle für frisch gemahlene Bohnen, ein elektrischer Milchaufschäumer für Cappuccino zu Hause oder ein Thermobecher für unterwegs machen jeden Kaffeefan glücklich. Alle Küchen-Ideen findest du auf der Seite. #kaffeeliebe #kaffeeliebhaber #weihnachtsgeschenke #geschenkideen #werbung",
    "emoji": "☕",
    "seite": "weihnachtsgeschenke",
    "filter": {
      "category": "kitchen"
    },
    "design": "d",
    "foto": "kaffee tasse gemütlich",
    "produkte": [
      "Handkaffeemühle",
      "Elektrischer Milchaufschäumer",
      "Edelstahl-Thermobecher",
      "Kaffeevollautomat",
      "Tee-Geschenkset",
      "Waffeleisen"
    ],
    "foto_id": 1974841
  },
  {
    "id": "2026-10-21-nikolausstiefel-kinder-unter-15",
    "datum": "2026-10-21",
    "titel": "Nikolausstiefel füllen: kleine Nikolausgeschenke für Kinder unter 15 €",
    "beschreibung": "Du willst den Nikolausstiefel füllen und suchst neben Nüssen und Schokolade noch eine Kleinigkeit? Nikolausgeschenke für Kinder wie Knete, ein Vorlese-Bilderbuch oder eine Taschenlampe mit Projektor passen genau in den Stiefel. Alle kleinen Ideen für den 6. Dezember findest du auf der Seite. #nikolaus #nikolausstiefel #nikolausgeschenk #kinder #werbung",
    "emoji": "🥾",
    "seite": "nikolausgeschenke",
    "filter": {
      "recipient": "kids",
      "budget": "under15"
    },
    "design": "b",
    "produkte": [
      "Knete-Set für Kinder",
      "Vorlese-Bilderbuch zu Weihnachten",
      "Kinder-Taschenlampe als Projektor",
      "Springseil mit Zähler"
    ]
  },
  {
    "id": "2026-10-21-tierfreunde-15-50-katze",
    "datum": "2026-10-21",
    "titel": "Weihnachtsgeschenke für Katzenliebhaber und Hundebesitzer unter 50 €",
    "beschreibung": "Du suchst ein Geschenk für Katzenliebhaber oder Weihnachtsgeschenke für Hundebesitzer? Eine Katzen-Fensterliege zum Sonnen, eine Katzenhöhle zum Kuscheln oder ein Intelligenzspielzeug für Hunde machen Tier und Mensch Freude. Alle Ideen für Tierfreunde nach Budget findest du auf der Seite. #katzenliebe #hundebesitzer #weihnachtsgeschenke #geschenkideen #werbung",
    "emoji": "🐈",
    "seite": "geschenke-fuer-tierfreunde",
    "filter": {
      "budget": "15to50"
    },
    "design": "d",
    "foto": "katze decke",
    "produkte": [
      "Katzen-Fensterliege",
      "Katzenhöhle zum Kuscheln",
      "Katzen-Trinkbrunnen",
      "Intelligenzspielzeug für Hunde",
      "Hundedecke fürs Auto",
      "Kuschelhaus für Meerschweinchen und Kaninchen"
    ],
    "foto_id": 7139626
  },
  {
    "id": "2026-10-22-adventskalender-maenner",
    "datum": "2026-10-22",
    "titel": "Adventskalender für Männer: Ideen mit Werkzeug, Grillgewürzen und Puzzle",
    "beschreibung": "Du suchst einen Adventskalender für Männer, der mehr ist als Schokolade? Ein Werkzeug-Adventskalender für Heimwerker oder ein Grillgewürz-Kalender für Grillfans macht 24 Tage lang Freude – und auch als Adventskalender für Erwachsene zum Selbstbefüllen gibt es schöne Ideen. Alle Kalender findest du auf der Seite. #adventskalender #adventskalenderfürmänner #weihnachten #geschenkideen #werbung",
    "emoji": "🔧",
    "seite": "adventskalender",
    "filter": {
      "budget": "15to50"
    },
    "design": "d",
    "foto": "advent kerzen holz",
    "produkte": [
      "Werkzeug-Adventskalender",
      "Grillgewürz-Adventskalender",
      "Puzzle-Adventskalender",
      "Adventskalender zum Befüllen"
    ],
    "foto_id": 4673311
  },
  {
    "id": "2026-10-22-weihnachtsgeschenke-maenner-150",
    "datum": "2026-10-22",
    "titel": "Weihnachtsgeschenke für Männer bis 150 €: Ideen für Technik, Werkstatt und Sport",
    "beschreibung": "Du suchst ein Weihnachtsgeschenk für ihn, das richtig genutzt wird? Ob Noise-Cancelling-Kopfhörer für den Pendler, ein bestückter Werkzeugkoffer für den Heimwerker oder eine Retro-Spielkonsole für Zocker – hier findest du Geschenke für Männer, die angeblich schon alles haben. Alle Ideen nach Budget sortiert findest du auf der Seite. #geschenkefürmänner #geschenkfürihn #weihnachtsgeschenke #werbung",
    "emoji": "🎁",
    "seite": "geschenke-fuer-maenner",
    "filter": {
      "budget": "50to150"
    },
    "design": "d",
    "foto": "kamin sessel winter",
    "produkte": [
      "Noise-Cancelling-Kopfhörer",
      "Bestückter Werkzeugkoffer",
      "Retro-Spielkonsole mit Klassikern",
      "Beheizbare Weste",
      "Verstellbares Kurzhantel-Set",
      "Dashcam fürs Auto"
    ],
    "foto_id": 3950679
  },
  {
    "id": "2026-10-22-wichteln-tierfreunde-unter-15",
    "datum": "2026-10-22",
    "titel": "Wichtelgeschenke für Hundebesitzer und Katzenliebhaber unter 15 €",
    "beschreibung": "Beim Wichteln einen Hundebesitzer oder Katzenfreund gezogen? Ein Schnüffelteppich für Hunde, ein Katzentunnel oder ein LED-Leuchthalsband für dunkle Gassi-Runden sind kleine Geschenke für Hundebesitzer und Katzenliebhaber, über die sich Mensch und Tier freuen. Alle Wichtelideen unter 15 € findest du auf der Seite. #wichteln #hundebesitzer #katzenliebe #wichtelgeschenk #werbung",
    "emoji": "🐾",
    "seite": "wichtelgeschenke-unter-15-euro",
    "filter": {
      "category": "pets"
    },
    "design": "d",
    "foto": "hund geschenk",
    "produkte": [
      "Schnüffelteppich für Hunde",
      "Katzentunnel",
      "LED-Leuchthalsband für Hunde",
      "Interaktives Katzenspielzeug",
      "Robustes Kauspielzeug für Hunde",
      "Leckerli-Beutel für Spaziergänge"
    ],
    "foto_id": 4712928
  },
  {
    "id": "2026-10-22-wichteln-kollegen-unter-15",
    "datum": "2026-10-22",
    "titel": "Wichtelgeschenke für Kollegen unter 15 €: kleine Ideen fürs Büro",
    "beschreibung": "Wichteln im Büro steht an und du hast keine Idee? Kleine Wichtelgeschenke für Kollegen wie ein Thermobecher für den Arbeitsweg, ein Bullet-Journal-Notizbuch oder eine Wärmflasche mit Strickbezug passen fast immer. Alle Ideen unter 15 € findest du auf der Seite. #wichteln #wichtelgeschenk #büro #weihnachten #werbung",
    "emoji": "🎅",
    "seite": "wichtelgeschenke-unter-15-euro",
    "filter": {
      "recipient": "household"
    },
    "design": "b",
    "produkte": [
      "Edelstahl-Thermobecher",
      "Bullet-Journal-Notizbuch",
      "Wärmflasche mit Strickbezug",
      "Kräutergarten-Anzuchtset",
      "Puzzle 1000 Teile",
      "Badebomben-Set"
    ]
  },
  {
    "id": "2026-10-22-nikolaus-erwachsene-unter-15",
    "datum": "2026-10-22",
    "titel": "Nikolausgeschenke für Erwachsene unter 15 €: kleine Ideen für den Stiefel",
    "beschreibung": "Nicht nur Kinder freuen sich am 6. Dezember: Nikolausgeschenke für Erwachsene wie ein Badebomben-Set, ein Bullet-Journal-Notizbuch oder eine Wärmflasche mit Strickbezug machen den Nikolausstiefel auch für Partner, Eltern oder Freunde besonders. Alle kleinen Ideen findest du auf der Seite. #nikolaus #nikolausgeschenk #nikolausstiefel #geschenkideen #werbung",
    "emoji": "🥾",
    "seite": "nikolausgeschenke",
    "filter": {
      "recipient": "parents",
      "budget": "under15"
    },
    "design": "c",
    "produkte": [
      "Badebomben-Set",
      "Bullet-Journal-Notizbuch",
      "Wärmflasche mit Strickbezug",
      "Schnüffelteppich für Hunde"
    ]
  },
  {
    "id": "2026-10-25-geschenke-fuer-kaffeeliebhaber",
    "datum": "2026-10-25",
    "titel": "Geschenke für Kaffeeliebhaber: Ideen von der Handkaffeemühle bis Latte Art",
    "beschreibung": "Du suchst ein Geschenk für Kaffeeliebhaber oder Kaffeetrinker, die schon eine Maschine haben? Eine Handkaffeemühle für frisch gemahlene Bohnen, eine French Press fürs Wochenend-Frühstück oder ein Milchkännchen für Latte Art kommen bei Hobby-Baristas gut an. Alle Ideen nach Budget sortiert findest du auf der Seite. #kaffeeliebhaber #kaffee #geschenkideen #weihnachtsgeschenke #werbung",
    "emoji": "☕",
    "seite": "geschenke-fuer-kaffeeliebhaber",
    "filter": {},
    "design": "d",
    "foto": "kaffee tasse morgen",
    "produkte": [
      "Handkaffeemühle",
      "French Press",
      "Milchkännchen für Latte Art",
      "Elektrischer Milchaufschäumer",
      "Edelstahl-Thermobecher",
      "Kaffeevollautomat"
    ],
    "foto_id": 2714970
  },
  {
    "id": "2026-10-25-adventskalender-frauen-tee",
    "datum": "2026-10-25",
    "titel": "Adventskalender für Frauen: Ideen mit Beauty, Tee und Puzzle",
    "beschreibung": "Du suchst einen Adventskalender für Frauen oder einen Adventskalender für Erwachsene, der nicht nur Schokolade enthält? Ein Beauty-Adventskalender für kleine Wellness-Momente, ein Tee-Adventskalender für gemütliche Abende oder ein Puzzle-Adventskalender machen die Adventszeit für die Freundin, Mama oder Schwester besonders. Alle Kalender findest du auf der Seite. #adventskalender #adventskalenderfürfrauen #weihnachten #selfcare #werbung",
    "emoji": "📅",
    "seite": "adventskalender",
    "filter": {
      "recipient": "household",
      "budget": "15to50"
    },
    "design": "d",
    "foto": "adventskranz kerzen",
    "produkte": [
      "Beauty-Adventskalender",
      "Tee-Adventskalender",
      "Puzzle-Adventskalender",
      "Adventskalender zum Befüllen"
    ],
    "foto_id": 7660345
  },
  {
    "id": "2026-10-25-weihnachten-haustiere-unter-15",
    "datum": "2026-10-25",
    "titel": "Weihnachtsgeschenke für Haustiere unter 15 €: Hund, Katze und Kaninchen",
    "beschreibung": "Auch Hund, Katze und Kaninchen dürfen sich auf Weihnachten freuen: Ein Schnüffelteppich für Hunde, ein Katzentunnel oder Knabberspielzeug für Kleintiere sind kleine Weihnachtsgeschenke für Haustiere, über die sich auch die Besitzer freuen. Alle Ideen unter 15 € findest du auf der Seite. #haustiere #weihnachten #hundeliebe #kaninchen #werbung",
    "emoji": "🐾",
    "seite": "weihnachtsgeschenke",
    "filter": {
      "category": "pets",
      "budget": "under15"
    },
    "design": "d",
    "foto": "katze weihnachtsbaum",
    "produkte": [
      "Knabberspielzeug für Kleintiere",
      "Schnüffelteppich für Hunde",
      "Katzentunnel",
      "Interaktives Katzenspielzeug",
      "LED-Leuchthalsband für Hunde",
      "Robustes Kauspielzeug für Hunde"
    ],
    "foto_id": 6894854
  },
  {
    "id": "2026-10-25-fitness-geschenke-unter-15",
    "datum": "2026-10-25",
    "titel": "Fitness Geschenke unter 15 €: kleine Ideen fürs Home-Workout",
    "beschreibung": "Du suchst ein kleines Fitness-Geschenk für zu Hause? Ein Pilates-Ring, ein Fitnessbänder-Set oder ein Springseil mit Zähler brauchen kaum Platz und passen gut zum Wichteln oder als Geschenk für alle, die im neuen Jahr mehr Sport machen wollen. Alle Ideen unter 15 € findest du auf der Seite. #homeworkout #fitness #pilates #wichteln #werbung",
    "emoji": "🏋️",
    "seite": "home-training-geschenke",
    "filter": {
      "budget": "under15"
    },
    "design": "b",
    "produkte": [
      "Pilates-Ring",
      "Fitnessbänder-Set",
      "Springseil mit Zähler",
      "Faszienrolle",
      "Bauchroller"
    ]
  },
  {
    "id": "2026-10-25-kleine-geschenke-fuer-sie",
    "datum": "2026-10-25",
    "titel": "Kleine Geschenke für sie unter 15 €: Ideen für Freundin, Schwester und Kollegin",
    "beschreibung": "Du suchst ein kleines Geschenk für die Freundin oder ein Wichtelgeschenk für die Kollegin? Ein Badebomben-Set für den Wellness-Abend, Briefpapier zum Schreiben oder ein Gesichtsmasken-Set sind kleine Geschenke für sie, die von Herzen kommen. Alle Ideen findest du auf der Seite. #geschenkfürsie #geschenkefürfrauen #selfcare #wichteln #werbung",
    "emoji": "💝",
    "seite": "geschenke-fuer-frauen",
    "filter": {
      "budget": "under15"
    },
    "design": "d",
    "foto": "kerzen handtuch wellness",
    "produkte": [
      "Badebomben-Set",
      "Gesichtsmasken-Set",
      "Briefpapier-Set",
      "Wärmflasche mit Strickbezug"
    ],
    "foto_id": 7313380
  },
  {
    "id": "2026-10-27-adventskalender-fuer-kinder",
    "datum": "2026-10-27",
    "titel": "Adventskalender für Kinder: Ideen zum Öffnen und Befüllen",
    "beschreibung": "Du suchst einen Adventskalender für Kinder, der nicht nur aus Schokolade besteht? Ein Spielzeug-Adventskalender oder ein Kalender zum Befüllen mit kleinen Überraschungen macht die 24 Tage bis Weihnachten spannend. Alle Ideen findest du auf der Seite. #adventskalender #adventskalenderkinder #weihnachten #werbung",
    "emoji": "🎁",
    "seite": "adventskalender",
    "filter": {
      "recipient": "kids"
    },
    "design": "d",
    "foto": "kinder weihnachten fenster",
    "foto_id": 1053463,
    "produkte": [
      "Spielzeug-Adventskalender für Kinder",
      "Adventskalender zum Befüllen",
      "Puzzle-Adventskalender"
    ]
  },
  {
    "id": "2026-10-27-nikolaus-hund-katze-unter-15",
    "datum": "2026-10-27",
    "titel": "Nikolausgeschenke für Hund und Katze unter 15 €",
    "beschreibung": "Der Nikolaus darf auch an die Haustiere denken: Ein Schnüffelteppich für Hunde, ein Kratzbrett aus Wellpappe oder interaktives Katzenspielzeug passen gut neben den Stiefel. Kleine Geschenke für Hundebesitzer und Katzenfreunde unter 15 € findest du auf der Seite. #nikolaus #hund #katze #haustiere #werbung",
    "emoji": "🐾",
    "seite": "nikolausgeschenke",
    "filter": {
      "category": "pets",
      "budget": "under15"
    },
    "design": "d",
    "foto": "hund decke winter",
    "produkte": [
      "Kratzbrett aus Wellpappe",
      "Schnüffelteppich für Hunde",
      "Interaktives Katzenspielzeug",
      "Knabberspielzeug für Kleintiere"
    ],
    "foto_id": 10024592
  },
  {
    "id": "2026-10-27-weihnachtsgeschenke-fuer-papa",
    "datum": "2026-10-27",
    "titel": "Weihnachtsgeschenke für Papa: Ideen für Werkstatt, Grill und Auto",
    "beschreibung": "Du suchst ein Weihnachtsgeschenk für Papa, das nicht im Schrank verschwindet? Ein bestückter Werkzeugkoffer, ein digitales Grillthermometer oder eine Uhrenbox aus Holz sind Geschenke für Männer, die man wirklich nutzt. Alle Geschenkideen für ihn findest du auf der Seite. #geschenkfürpapa #geschenkefürmänner #weihnachtsgeschenke #werbung",
    "emoji": "🎁",
    "seite": "geschenke-fuer-maenner",
    "filter": {
      "recipient": "parents"
    },
    "design": "d",
    "foto": "werkzeug werkbank",
    "produkte": [
      "Bestückter Werkzeugkoffer",
      "Digitales Grillthermometer",
      "Multitool",
      "Uhrenbox aus Holz",
      "Grillbesteck-Set im Koffer",
      "Dashcam fürs Auto"
    ],
    "foto_id": 7092687
  },
  {
    "id": "2026-10-27-nikolausgeschenke-teenager-unter-15",
    "datum": "2026-10-27",
    "titel": "Nikolausgeschenke für Teenager unter 15 €: kleine Ideen fürs Zimmer",
    "beschreibung": "Was passt für Teenager in den Nikolausstiefel? Eine Sunset-Lampe, LED-Lichter fürs Zimmer oder ein Notizbuch zum Planen sind kleine Nikolausgeschenke, die nicht nach Kinderkram aussehen. Alle Ideen unter 15 € findest du auf der Seite. #nikolaus #nikolausgeschenke #teenager #werbung",
    "emoji": "🥾",
    "seite": "nikolausgeschenke",
    "filter": {
      "recipient": "teenager",
      "budget": "under15"
    },
    "design": "b",
    "produkte": [
      "Sunset-Lampe",
      "LED-Strip mit App-Steuerung",
      "Bullet-Journal-Notizbuch",
      "Handcreme-Set",
      "Springseil mit Zähler",
      "Gaming-Mauspad XXL"
    ]
  },
  {
    "id": "2026-10-27-wichteln-kollegen-kueche-unter-15",
    "datum": "2026-10-27",
    "titel": "Wichtelgeschenke für Kollegen unter 15 €: Ideen für Küche und Kaffeepause",
    "beschreibung": "Du suchst ein Wichtelgeschenk für Kollegen, das wirklich genutzt wird? Ein Thermobecher für den Weg zur Arbeit, ein Milchkännchen für Latte Art oder Ausstecher für die Weihnachtsbäckerei sind praktische Wichtelgeschenke unter 15 €. Alle Ideen findest du auf der Seite. #wichteln #wichtelgeschenke #büro #werbung",
    "emoji": "☕",
    "seite": "wichtelgeschenke-unter-15-euro",
    "filter": {
      "category": "kitchen"
    },
    "design": "c",
    "produkte": [
      "Edelstahl-Thermobecher",
      "Milchkännchen für Latte Art",
      "Plätzchen-Ausstecher-Set",
      "Silikon-Backmatten-Set"
    ]
  },
  {
    "id": "2026-10-31-adventskalender-geniesser",
    "datum": "2026-10-31",
    "titel": "Adventskalender für Erwachsene unter 50 €: Tee, Grillgewürze und Werkzeug",
    "beschreibung": "Du suchst einen Adventskalender für Erwachsene, der nicht nur aus Schokolade besteht? Ein Tee-Adventskalender für gemütliche Abende, ein Grillgewürz-Adventskalender oder ein Werkzeug-Adventskalender für Bastler bringt jeden Tag eine kleine Überraschung. Alle Adventskalender unter 50 € findest du auf der Seite. #adventskalender #adventskalenderfürerwachsene #advent #werbung",
    "emoji": "📅",
    "seite": "adventskalender",
    "filter": {
      "recipient": "parents",
      "budget": "15to50"
    },
    "design": "d",
    "foto": "tee kekse winter",
    "produkte": [
      "Tee-Adventskalender",
      "Grillgewürz-Adventskalender",
      "Werkzeug-Adventskalender",
      "Beauty-Adventskalender",
      "Puzzle-Adventskalender"
    ],
    "foto_id": 8020912
  },
  {
    "id": "2026-10-31-weihnachtsgeschenke-hundebesitzer-unter-50",
    "datum": "2026-10-31",
    "titel": "Weihnachtsgeschenke für Hundebesitzer unter 50 €: Ideen für Hund und Katze",
    "beschreibung": "Du suchst ein Weihnachtsgeschenk für Hundebesitzer oder eine Hundemama? Ein gepolstertes Hundegeschirr für die Winterspaziergänge, eine Hundedecke fürs Auto oder eine Katzen-Fensterliege sind Geschenke für Tierfreunde, die im Alltag benutzt werden. Alle Ideen unter 50 € findest du auf der Seite. #hundebesitzer #weihnachtsgeschenke #hund #katze #werbung",
    "emoji": "🐶",
    "seite": "weihnachtsgeschenke",
    "filter": {
      "category": "pets",
      "budget": "15to50"
    },
    "design": "d",
    "foto": "hund weihnachtsbaum",
    "produkte": [
      "Gepolstertes Hundegeschirr",
      "Hundedecke fürs Auto",
      "Intelligenzspielzeug für Hunde",
      "Katzen-Fensterliege",
      "Katzenhöhle zum Kuscheln",
      "Kuschelhaus für Meerschweinchen und Kaninchen"
    ],
    "foto_id": 5932577
  },
  {
    "id": "2026-10-31-fitness-geschenke-zuhause-eltern",
    "datum": "2026-10-31",
    "titel": "Fitness-Geschenke für zu Hause: Ideen für Eltern, die aktiv bleiben wollen",
    "beschreibung": "Mama oder Papa trainiert gerne zu Hause? Verstellbare Kurzhanteln, eine Kettlebell oder ein klappbares Walking Pad sind Home-Workout-Geschenke, die ohne Fitnessstudio auskommen. Im Ratgeber auf der Seite erfährst du, was zu wem passt und worauf du bei wenig Platz achten solltest. #homeworkout #fitnessgeschenke #geschenkefürsportler #werbung",
    "emoji": "🏋️",
    "seite": "home-training-geschenke",
    "filter": {
      "recipient": "parents"
    },
    "design": "d",
    "foto": "fitness training",
    "produkte": [
      "Verstellbares Kurzhantel-Set",
      "Kettlebell",
      "Walking Pad (Laufband klappbar)",
      "Rudergerät",
      "Gymnastikball",
      "Faszienrolle"
    ],
    "foto_id": 2604149
  },
  {
    "id": "2026-10-31-self-care-geschenke-frauen",
    "datum": "2026-10-31",
    "titel": "Self-Care-Geschenke für Frauen: Ideen zum Verwöhnen an Winterabenden",
    "beschreibung": "Du suchst ein Self-Care-Geschenk für die Freundin, Schwester oder Mama? Ein Wellness-Geschenkset, ein Seidenkissenbezug oder ein Mani- und Pediküre-Set sind Weihnachtsgeschenke für Frauen, die sich eine Pause gönnen möchten. Alle Geschenkideen für sie findest du auf der Seite. #selfcare #geschenkfürsie #weihnachtsgeschenke #werbung",
    "emoji": "💆",
    "seite": "geschenke-fuer-frauen",
    "filter": {
      "category": "beauty"
    },
    "design": "b",
    "produkte": [
      "Wellness-Geschenkset",
      "Seidenkissenbezug",
      "Mani- und Pediküre-Set",
      "Flauschiger Bademantel",
      "Gesichtsmasken-Set",
      "Badebomben-Set"
    ]
  },
  {
    "id": "2026-10-31-weihnachtsgeschenke-unter-50",
    "datum": "2026-10-31",
    "titel": "Weihnachtsgeschenke unter 50 €: Ideen für die ganze Familie zum Merken",
    "beschreibung": "Du willst die Weihnachtsgeschenke 2026 dieses Jahr früh erledigen? Ein Nadelfilz-Set für kreative Abende, eine Handkaffeemühle, eine Kuscheldecke mit Ärmeln oder ein Familien-Brettspiel sind Geschenke unter 50 € für Eltern, Freunde und Familie. Alle Ideen nach Empfänger sortiert findest du auf der Seite. #weihnachtsgeschenke #geschenkideen #weihnachten #werbung",
    "emoji": "🎄",
    "seite": "weihnachtsgeschenke",
    "filter": {
      "budget": "15to50"
    },
    "design": "c",
    "produkte": [
      "Nadelfilz-Set für Anfänger",
      "Handkaffeemühle",
      "Kuscheldecke mit Ärmeln",
      "Familien-Brettspiel",
      "Duftkerzen-Set",
      "Multitool"
    ]
  },
  {
    "id": "2026-11-01-geschenke-fuer-kinder-bauen-basteln",
    "datum": "2026-11-01",
    "titel": "Geschenke für Kinder: Ideen zum Bauen, Basteln und Entdecken",
    "beschreibung": "Du suchst Weihnachtsgeschenke für Kinder oder ein Geschenk zum Kindergeburtstag? Ein Experimentierkasten, Klemmbausteine, Bügelperlen oder Walkie-Talkies beschäftigen Kinder auch ohne Bildschirm. Alle Ideen vom Kleinkind bis zum Schulkind findest du auf der Seite. #geschenkefürkinder #weihnachtsgeschenke #kindergeburtstag #werbung",
    "emoji": "🧸",
    "seite": "geschenke-fuer-kinder",
    "filter": {},
    "design": "d",
    "foto": "kinder spielen zimmer",
    "produkte": [
      "Experimentierkasten für Kinder",
      "Klemmbaustein-Set",
      "Bügelperlen-Set",
      "Walkie-Talkies für Kinder",
      "Malset im Koffer",
      "Balance Board aus Holz"
    ],
    "foto_id": 5022349
  },
  {
    "id": "2026-11-01-adventskalender-zum-befuellen-familie",
    "datum": "2026-11-01",
    "titel": "Adventskalender zum Befüllen: Ideen für Kinder und die ganze Familie",
    "beschreibung": "Du möchtest dieses Jahr einen Adventskalender zum Befüllen statt Schokolade? Mit Leerkalender, Puzzle-Adventskalender oder Spielzeug-Adventskalender findest du für Kinder und Familie etwas Passendes. Jetzt ist noch Zeit, die 24 Türchen entspannt vorzubereiten – alle Ideen stehen auf der Seite. #adventskalender #adventskalenderbefüllen #weihnachten #werbung",
    "emoji": "🎁",
    "seite": "adventskalender",
    "filter": {
      "recipient": "kids",
      "budget": "15to50"
    },
    "design": "d",
    "foto": "weihnachten basteln",
    "produkte": [
      "Adventskalender zum Befüllen",
      "Puzzle-Adventskalender",
      "Spielzeug-Adventskalender für Kinder"
    ],
    "foto_id": 7649621
  },
  {
    "id": "2026-11-01-geschenke-tierliebe-kinder",
    "datum": "2026-11-01",
    "titel": "Geschenke für tierliebe Kinder: Ideen für Katze, Kaninchen und Meerschweinchen",
    "beschreibung": "Dein Kind liebt sein Haustier? Ein Katzentunnel, ein Kuschelhaus für Meerschweinchen oder ein Pfotenabdruck-Set sind schöne Geschenke für Tierfreunde. So werden Weihnachtsgeschenke für Katzenliebhaber und kleine Tierfans zum gemeinsamen Erlebnis. Alle Ideen findest du auf der Seite. #geschenkefürtierfreunde #haustiere #geschenkefürkinder #werbung",
    "emoji": "🐱",
    "seite": "geschenke-fuer-tierfreunde",
    "filter": {
      "recipient": "kids"
    },
    "design": "d",
    "foto": "kind katze",
    "produkte": [
      "Katzentunnel",
      "Kuschelhaus für Meerschweinchen und Kaninchen",
      "Pfotenabdruck-Set",
      "Interaktives Katzenspielzeug",
      "Knabberspielzeug für Kleintiere",
      "Katzenhöhle zum Kuscheln"
    ],
    "foto_id": 4097327
  },
  {
    "id": "2026-11-01-sportgeschenke-maenner-zuhause",
    "datum": "2026-11-01",
    "titel": "Geschenke für Männer, die zu Hause trainieren: Ideen fürs Home-Workout",
    "beschreibung": "Du suchst ein Geschenk für ihn, der gern zu Hause trainiert? Ein verstellbares Kurzhantel-Set, eine Massagepistole oder eine beheizbare Weste sind Sportgeschenke für Männer, die auch im Winter genutzt werden. Mehr Weihnachtsgeschenke für Männer findest du auf der Seite. #homeworkout #geschenkefürmänner #geschenkefürsportler #werbung",
    "emoji": "🏋️",
    "seite": "geschenke-fuer-maenner",
    "filter": {
      "category": "sport"
    },
    "design": "d",
    "foto": "hantel gewichte",
    "produkte": [
      "Verstellbares Kurzhantel-Set",
      "Massagepistole",
      "Beheizbare Weste"
    ],
    "foto_id": 595529
  },
  {
    "id": "2026-11-01-geschenke-teenager-unter-15-euro",
    "datum": "2026-11-01",
    "titel": "Geschenke für Teenager unter 15 €: kleine Ideen fürs Zimmer und für Freunde",
    "beschreibung": "Du suchst kleine Geschenke für Teenager oder Nikolausgeschenke für Jugendliche? Eine Sunset-Lampe, ein Bullet-Journal-Notizbuch oder ein Kartenspiel für Partys passen zu vielen Interessen. Im Ratgeber auf der Seite erfährst du, was zu wem passt und welche Fehler du vermeiden kannst. #geschenkefürteenager #kleinegeschenke #nikolaus #werbung",
    "emoji": "🎧",
    "seite": "geschenke-fuer-teenager",
    "filter": {
      "budget": "under15"
    },
    "design": "b",
    "produkte": [
      "Sunset-Lampe",
      "Bullet-Journal-Notizbuch",
      "Kartenspiel für Partys",
      "LED-Strip mit App-Steuerung",
      "Gaming-Mauspad XXL",
      "Badebomben-Set"
    ]
  },
  {
    "id": "2026-11-03-geschenke-fuer-gamer-unter-50",
    "datum": "2026-11-03",
    "titel": "Geschenke für Gamer unter 50 €: Ideen von Headset bis Neonschild",
    "beschreibung": "Du suchst Geschenke für Gamer unter 50 Euro oder ein Geschenk für Zocker zu Weihnachten? Ein Gaming-Headset, eine Gaming-Maus oder ein USB-Mikrofon fürs Streaming passen zu vielen, die gern am PC oder an der Konsole spielen. Alle Ideen findest du auf der Seite. #geschenkefürgamer #gaming #weihnachtsgeschenke #werbung",
    "emoji": "🎮",
    "seite": "geschenke-fuer-gamer",
    "filter": {
      "budget": "15to50"
    },
    "design": "d",
    "foto": "gaming zimmer",
    "produkte": [
      "Gaming-Headset",
      "Gaming-Maus",
      "USB-Mikrofon für Streaming",
      "LED-Neonschild fürs Zimmer",
      "Ringlicht mit Handyhalter"
    ],
    "foto_id": 3264751
  },
  {
    "id": "2026-11-03-kaffeeliebhaber-unter-50",
    "datum": "2026-11-03",
    "titel": "Geschenke für Kaffeeliebhaber unter 50 €: Handmühle, French Press und mehr",
    "beschreibung": "Du suchst Geschenke für Kaffeeliebhaber oder ein kleines Weihnachtsgeschenk für alle, die morgens nicht ohne Tasse starten? Eine Handkaffeemühle, eine French Press oder ein Milchaufschäumer machen die Kaffeepause zu Hause schöner. Alle Ideen unter 50 € findest du auf der Seite. #kaffeeliebe #geschenkefürkaffeeliebhaber #weihnachtsgeschenke #werbung",
    "emoji": "☕",
    "seite": "geschenke-fuer-kaffeeliebhaber",
    "filter": {
      "budget": "15to50"
    },
    "design": "d",
    "foto": "kaffee tasse bohnen",
    "produkte": [
      "Handkaffeemühle",
      "French Press",
      "Elektrischer Milchaufschäumer"
    ],
    "foto_id": 2714970
  },
  {
    "id": "2026-11-03-wichtelgeschenke-zuhause-unter-15",
    "datum": "2026-11-03",
    "titel": "Wichtelgeschenke fürs Zuhause unter 15 €: Ideen für gemütliche Winterabende",
    "beschreibung": "Du suchst Wichtelgeschenke unter 15 Euro, die nicht im Schrank verschwinden? Ein Windlicht-Set aus Glas, eine Wärmflasche mit Strickbezug oder ein Kräutergarten-Anzuchtset sind kleine Geschenke für Kollegen und Freunde, die zu Hause gern genutzt werden. Alle Ideen nach Budget findest du auf der Seite. #wichtelgeschenke #wichteln #kleinegeschenke #werbung",
    "emoji": "🕯️",
    "seite": "wichtelgeschenke-unter-15-euro",
    "filter": {
      "category": "home"
    },
    "design": "d",
    "produkte": [
      "Windlicht-Set aus Glas",
      "Wärmflasche mit Strickbezug",
      "Kräutergarten-Anzuchtset"
    ],
    "foto": "kerzen winter gemütlich",
    "foto_id": 8512488
  },
  {
    "id": "2026-11-03-nikolausgeschenke-unter-50",
    "datum": "2026-11-03",
    "titel": "Nikolausgeschenke unter 50 €: Ideen für Kinder und Erwachsene",
    "beschreibung": "Darf es zum Nikolaus etwas mehr sein als Schokolade? Eine Kuscheldecke mit Ärmeln, ein Sternenhimmel-Projektor oder ein Malset im Koffer sind Nikolausgeschenke für Kinder und Erwachsene, die auch nach dem 6. Dezember Freude machen. Alle Ideen findest du auf der Seite. #nikolaus #nikolausgeschenke #geschenkideen #werbung",
    "emoji": "🎅",
    "seite": "nikolausgeschenke",
    "filter": {
      "budget": "15to50"
    },
    "design": "d",
    "foto": "nikolaus stiefel",
    "produkte": [
      "Kuscheldecke mit Ärmeln",
      "Sternenhimmel-Projektor",
      "Malset im Koffer"
    ],
    "foto_id": 3009717
  },
  {
    "id": "2026-11-03-katzenbesitzer-hundebesitzer-bis-150",
    "datum": "2026-11-03",
    "titel": "Geschenke für Katzenbesitzer und Hundebesitzer bis 150 €: größere Ideen",
    "beschreibung": "Du suchst ein größeres Geschenk für Katzenbesitzer oder Hundebesitzer? Ein Katzen-Kratzbaum, ein Hundebett mit erhöhtem Rand oder ein automatischer Futterspender sind Weihnachtsgeschenke für Katzenliebhaber und Hundefans, die im Alltag gebraucht werden. Alle Ideen findest du auf der Seite. #geschenkefürtierfreunde #katzenliebe #hundeliebe #werbung",
    "emoji": "🐱",
    "seite": "geschenke-fuer-tierfreunde",
    "filter": {
      "budget": "50to150"
    },
    "design": "d",
    "foto": "katze fenster",
    "produkte": [
      "Katzen-Kratzbaum",
      "Hundebett mit erhöhtem Rand",
      "Automatischer Futterspender"
    ],
    "foto_id": 10110760
  },
  {
    "id": "2026-11-05-weihnachtsgeschenke-eltern-bis-150",
    "datum": "2026-11-05",
    "titel": "Weihnachtsgeschenke für Eltern bis 150 €: Ideen zum Merken vor der Black Week",
    "beschreibung": "Du suchst Weihnachtsgeschenke für Eltern und willst dich mit den Geschwistern zusammentun? Ein digitaler Bilderrahmen, eine Heißluftfritteuse oder ein Gusseisentopf sind größere Geschenke für Mama und Papa, die im Alltag wirklich benutzt werden. Merk dir die Ideen schon vor dem Black Friday – alle findest du nach Budget sortiert auf der Seite. #weihnachtsgeschenke #geschenkefüreltern #blackweek #werbung",
    "emoji": "🎄",
    "seite": "weihnachtsgeschenke",
    "filter": {
      "recipient": "parents",
      "budget": "50to150"
    },
    "design": "d",
    "foto": "wohnzimmer weihnachtsbaum sofa",
    "produkte": [
      "Digitaler Bilderrahmen mit WLAN",
      "Heißluftfritteuse",
      "Gusseisentopf mit Deckel",
      "Elektrische Heizdecke"
    ],
    "foto_id": 6905872
  },
  {
    "id": "2026-11-05-geschenke-fuer-mama-unter-50",
    "datum": "2026-11-05",
    "titel": "Geschenke für Mama unter 50 €: Teekanne, Fotoalbum und Kuscheldecke",
    "beschreibung": "Du suchst ein Geschenk für Mama oder ein Weihnachtsgeschenk für die Oma? Eine Teekanne aus Glas mit Stövchen, ein Fotoalbum zum Einkleben oder eine Kuscheldecke mit Ärmeln sind persönliche Geschenke für gemütliche Winterabende. Alle Ideen unter 50 Euro findest du auf der Seite. #geschenkefürmama #geschenkefürfrauen #weihnachtsgeschenke #werbung",
    "emoji": "🫖",
    "seite": "geschenke-fuer-frauen",
    "filter": {
      "recipient": "parents",
      "budget": "15to50"
    },
    "design": "d",
    "foto": "tee buch gemütlich",
    "produkte": [
      "Teekanne aus Glas mit Stövchen",
      "Fotoalbum zum Einkleben",
      "Kuscheldecke mit Ärmeln",
      "Duftkerzen-Set",
      "Tee-Geschenkset"
    ],
    "foto_id": 8295812
  },
  {
    "id": "2026-11-05-geschenke-fuer-papa-black-friday",
    "datum": "2026-11-05",
    "titel": "Geschenke für Papa unter 50 €: Ideen für Grill und Werkstatt vor dem Black Friday",
    "beschreibung": "Du brauchst noch ein Geschenk für Papa oder ein Weihnachtsgeschenk für den Opa? Ein Multitool, ein digitales Grillthermometer oder ein Grillbesteck-Set im Koffer sind Geschenke für Männer, die gern anpacken. Merk dir die Ideen schon vor dem Black Friday. Alle findest du auf der Seite. #geschenkefürpapa #geschenkefürmänner #blackfriday #werbung",
    "emoji": "🔧",
    "seite": "geschenke-fuer-maenner",
    "filter": {
      "recipient": "parents",
      "budget": "15to50"
    },
    "design": "d",
    "foto": "werkzeug holz tisch",
    "produkte": [
      "Multitool",
      "Digitales Grillthermometer",
      "Grillbesteck-Set im Koffer",
      "Aufladbare LED-Taschenlampe",
      "Uhrenbox aus Holz"
    ],
    "foto_id": 4070631
  },
  {
    "id": "2026-11-05-geschenke-fuer-hundebesitzer-unter-50",
    "datum": "2026-11-05",
    "titel": "Geschenke für Hundebesitzer unter 50 €: Pullover, Geschirr und Decke fürs Auto",
    "beschreibung": "Du suchst ein Geschenk für Hundebesitzer, das auch im Winter gebraucht wird? Ein Hundepullover, ein gepolstertes Hundegeschirr oder eine Hundedecke fürs Auto passen zu kalten Spaziergängen und sind schöne Weihnachtsgeschenke für Tierfreunde. Alle Ideen für Hund und Katze findest du auf der Seite. #geschenkefürhundebesitzer #hundeliebe #tierfreunde #werbung",
    "emoji": "🐕",
    "seite": "geschenke-fuer-tierfreunde",
    "filter": {
      "recipient": "household",
      "budget": "15to50"
    },
    "design": "d",
    "foto": "hund winter spaziergang",
    "produkte": [
      "Hundepullover für den Winter",
      "Gepolstertes Hundegeschirr",
      "Hundedecke fürs Auto",
      "Hunde-Regenmantel",
      "Intelligenzspielzeug für Hunde"
    ],
    "foto_id": 6884916
  },
  {
    "id": "2026-11-05-fitness-geschenke-unter-50",
    "datum": "2026-11-05",
    "titel": "Fitness-Geschenke für Eltern unter 50 €: Yogamatte, Kettlebell und Stepper",
    "beschreibung": "Du suchst Fitness-Geschenke für Mama und Papa, die zu Hause trainieren? Eine rutschfeste Yogamatte, eine Kettlebell oder ein Aerobic-Stepper sind Geschenke fürs Home-Workout, die wenig Platz brauchen. Alle Ideen für das Training zu Hause findest du auf der Seite. #fitnessgeschenke #homeworkout #geschenkideen #werbung",
    "emoji": "🏋️",
    "seite": "home-training-geschenke",
    "filter": {
      "recipient": "parents",
      "budget": "15to50"
    },
    "design": "c",
    "produkte": [
      "Yogamatte rutschfest",
      "Kettlebell",
      "Gymnastikball",
      "Klimmzugstange für den Türrahmen",
      "Aerobic-Stepper höhenverstellbar"
    ]
  },
  {
    "id": "2026-11-09-geschenke-fuer-eltern-oma-opa",
    "datum": "2026-11-09",
    "titel": "Geschenke für Eltern, Oma und Opa: Fotoalbum, Rezeptbuch und mehr zu Weihnachten",
    "beschreibung": "Du suchst Weihnachtsgeschenke für Eltern oder ein persönliches Geschenk für Oma und Opa? Ein Fotoalbum zum Einkleben, ein digitaler Bilderrahmen oder ein Rezeptbuch zum Selbstschreiben halten Erinnerungen fest und passen auch zu Großeltern, die schon alles haben. Alle Ideen nach Budget sortiert findest du auf der Seite. #geschenkefüreltern #geschenkefüromaundopa #weihnachtsgeschenke #werbung",
    "emoji": "👵",
    "seite": "geschenke-fuer-eltern-und-grosseltern",
    "filter": {},
    "board": "eltern",
    "design": "d",
    "foto": "großeltern enkel",
    "produkte": [
      "Fotoalbum zum Einkleben",
      "Digitaler Bilderrahmen mit WLAN",
      "Rezeptbuch zum Selbstschreiben",
      "Teekanne aus Glas mit Stövchen",
      "Kuscheldecke mit Ärmeln",
      "Familien-Brettspiel"
    ],
    "foto_id": 373441
  },
  {
    "id": "2026-11-09-kaffeeliebhaber-eltern",
    "datum": "2026-11-09",
    "titel": "Geschenke für Kaffeeliebhaber: Ideen für Mama, Papa und alle, die morgens Kaffee brauchen",
    "beschreibung": "Du suchst ein Weihnachtsgeschenk für Kaffeeliebhaber oder ein Geschenk für Eltern, die ohne Kaffee nicht in den Tag starten? Eine French Press, ein elektrischer Milchaufschäumer oder eine Handkaffeemühle bringen Abwechslung ins Frühstück. Alle Ideen für Kaffeetrinker findest du auf der Seite. #geschenkefürkaffeeliebhaber #kaffeeliebe #weihnachtsgeschenke #werbung",
    "emoji": "☕",
    "seite": "geschenke-fuer-kaffeeliebhaber",
    "filter": {
      "recipient": "parents"
    },
    "design": "d",
    "foto": "kaffee kekse weihnachten",
    "produkte": [
      "French Press",
      "Elektrischer Milchaufschäumer",
      "Handkaffeemühle",
      "Milchkännchen für Latte Art",
      "Edelstahl-Thermobecher",
      "Kaffeevollautomat"
    ],
    "foto_id": 1891445
  },
  {
    "id": "2026-11-09-geschenke-oma-opa-mit-haustier",
    "datum": "2026-11-09",
    "titel": "Geschenke für Hundebesitzer und Katzenfreunde: Ideen für Eltern, Oma und Opa mit Haustier",
    "beschreibung": "Du suchst ein Geschenk für Hundebesitzer oder ein Geschenk für Katzenbesitzer in der Familie? Für Eltern, Oma und Opa mit Haustier passen eine Hundedecke fürs Auto, ein Schnüffelteppich oder eine Katzen-Fensterliege, und für Kaninchen und Meerschweinchen eine Heuraufe. Alle Ideen für Tierfreunde findest du auf der Seite. #geschenkefürhundebesitzer #geschenkefürkatzenbesitzer #tierfreunde #werbung",
    "emoji": "🐶",
    "seite": "geschenke-fuer-tierfreunde",
    "filter": {
      "recipient": "parents"
    },
    "design": "d",
    "foto": "senior hund sofa",
    "produkte": [
      "Hundedecke fürs Auto",
      "Schnüffelteppich für Hunde",
      "Katzen-Fensterliege",
      "Katzenhöhle zum Kuscheln",
      "Fellpflegebürste für Hunde",
      "Heuraufe für Kaninchen und Meerschweinchen"
    ],
    "foto_id": 2579885
  },
  {
    "id": "2026-11-09-home-workout-geschenke-bis-150",
    "datum": "2026-11-09",
    "titel": "Home-Workout Geschenke bis 150 €: Ideen fürs Training zu Hause vor dem Black Friday",
    "beschreibung": "Du suchst Fitness-Geschenke für alle, die lieber zu Hause trainieren? Eine klappbare Hantelbank oder ein verstellbares Kurzhantel-Set brauchen wenig Platz und passen gut in die Ecke im Wohnzimmer oder Keller. Merk dir die Ideen schon vor dem Black Friday. Alle Geschenke fürs Home-Workout findest du auf der Seite. #homeworkout #fitnessgeschenke #homegym #werbung",
    "emoji": "🏋️",
    "seite": "home-training-geschenke",
    "filter": {
      "budget": "50to150"
    },
    "design": "d",
    "foto": "gewichte sport",
    "produkte": [
      "Klappbare Hantelbank",
      "Verstellbares Kurzhantel-Set",
      "Massagepistole"
    ],
    "foto_id": 3324977
  },
  {
    "id": "2026-11-09-geschenke-teenager-unter-50",
    "datum": "2026-11-09",
    "titel": "Geschenke für Teenager unter 50 €: Ideen zum Merken vor dem Black Friday",
    "beschreibung": "Du suchst ein Weihnachtsgeschenk für Teenager, das nicht nur im Regal steht? Ein Sternenhimmel-Projektor, ein LED-Neonschild fürs Zimmer oder ein Handlettering-Set sind Geschenke für Jugendliche, die zu Hause wirklich genutzt werden. Alle Ideen unter 50 € findest du auf der Seite. #geschenkefürteenager #geschenkefürjugendliche #weihnachtsgeschenke #werbung",
    "emoji": "🎧",
    "seite": "geschenke-fuer-teenager",
    "filter": {
      "budget": "15to50"
    },
    "design": "b",
    "produkte": [
      "Sternenhimmel-Projektor",
      "LED-Neonschild fürs Zimmer",
      "Handlettering-Set",
      "Bluetooth-Lautsprecher wasserdicht",
      "Klemmbaustein-Set",
      "Kuscheldecke mit Ärmeln"
    ]
  }
];
