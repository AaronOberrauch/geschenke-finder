// Themen-Seiten (Anlässe). Wird vom Bot gepflegt (siehe BOT.md).
// Nach jeder Änderung: python tools/site.py build
window.PAGES = [
  {
    "slug": "weihnachtsgeschenke",
    "titel": "Weihnachtsgeschenke für die ganze Familie",
    "kurztitel": "Weihnachten",
    "emoji": "🎄",
    "anlass": "weihnachten",
    "monate": [11, 12],
    "beschreibung": "Weihnachtsgeschenke für Teenager, Eltern, Kinder und den Haushalt – nach Budget filtern und direkt auf Amazon ansehen.",
    "intro": "Noch keine Idee für Weihnachten? Wähle aus, für wen du suchst und wie viel du ausgeben willst – hier findest du passende Geschenke für alle unterm Baum.",
    "filter": {}
  },
  {
    "slug": "wichtelgeschenke-unter-15-euro",
    "titel": "Wichtelgeschenke unter 15 Euro",
    "kurztitel": "Wichteln unter 15 €",
    "emoji": "🎅",
    "anlass": "wichteln",
    "monate": [11, 12],
    "beschreibung": "Wichtelgeschenke unter 15 € für Büro, Schule und Freunde – kleine Ideen, die trotzdem Freude machen.",
    "intro": "Für das Wichteln im Büro, in der Klasse oder im Freundeskreis: kleine Geschenke unter 15 €, die nicht nach Verlegenheit aussehen.",
    "filter": {"budget": "under15"}
  },
  {
    "slug": "nikolausgeschenke",
    "titel": "Nikolausgeschenke für Kinder und Teenager",
    "kurztitel": "Nikolaus",
    "emoji": "🥾",
    "anlass": "nikolaus",
    "monate": [11, 12],
    "beschreibung": "Kleine Nikolausgeschenke für den Stiefel – Ideen für Kinder und Teenager.",
    "intro": "Was passt in den Nikolausstiefel außer Schokolade? Hier sind kleine Ideen für Kinder und Teenager.",
    "filter": {}
  }
];
