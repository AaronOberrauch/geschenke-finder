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
    "filter": {"recipient": "teenager"},
    "produkte": ["LED-Strip mit App-Steuerung", "Gaming-Headset", "Sofortbildkamera", "Bluetooth-Lautsprecher wasserdicht", "Powerbank 20.000 mAh", "Spielkonsole"]
  },
  {
    "id": "2026-10-16-nikolaus-kinder",
    "datum": "2026-10-16",
    "titel": "Was kommt in den Nikolausstiefel? Kleine Ideen für Kinder und Teens",
    "beschreibung": "Mehr als nur Schokolade: kleine Nikolausgeschenke für Kinder und Teenager, vom Knete-Set bis zum Sternenhimmel-Projektor fürs Kinderzimmer. #nikolaus #nikolausgeschenke #geschenkideenkinder #advent #werbung",
    "emoji": "🥾",
    "seite": "nikolausgeschenke",
    "filter": {}
  }
];
