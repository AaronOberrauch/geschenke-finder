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
  }
];
