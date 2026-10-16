// Einstellungen der Seite. Nur die Werte zwischen den Anführungszeichen ändern.
// partnerTag:       deine Partner-ID aus Amazon PartnerNet, z. B. "meinname-21"
// amazonDomain:     "www.amazon.de" oder "www.amazon.it" – der Shop, für den dein Partnerkonto gilt
// siteUrl:          die Adresse, unter der die Seite online ist (mit / am Ende)
// pinterestBoards:  deine Pinterest-Pinnwände (Name und interne ID aus Make → Pinterest → List Boards).
//                   Der Schlüssel links (z. B. "tiere") wird in daten/pins.js als "board" verwendet.
// indexNowKey:      Schlüssel, mit dem tools/indexnow.py neue Seiten an Bing, Ecosia, DuckDuckGo & Co. meldet
//                   (die Datei <Schlüssel>.txt im Hauptordner muss genau diesen Text enthalten).
// trackingIds:      optionale eigene Amazon-Tracking-ID je Seite (in PartnerNet unter „Tracking-IDs verwalten“
//                   angelegt). Schlüssel: "start" für die Startseite, sonst der slug der Themen-Seite.
//                   Seiten ohne Eintrag nutzen partnerTag. So zeigt PartnerNet, welche Seite Klicks und Verkäufe bringt.
// videoScenarioAktiv: false = Video-Pins gehen vorerst als normale Bild-Pins über pins.xml raus.
//                   true  = sobald das zweite Make-Scenario (videos.xml → Video-Pin) läuft; dann nur noch als Video.
window.CONFIG = {
  "indexNowKey": "bb7c77ebce127199306bf33e2fbb169b",
  "videoScenarioAktiv": false,
  "partnerTag": "geschenkef0f0-21",
  "trackingIds": {
    "start": "geschenkef0f0st-21",
    "weihnachtsgeschenke": "geschenkef0f0we-21",
    "wichtelgeschenke-unter-15-euro": "geschenkef0f0wi-21",
    "nikolausgeschenke": "geschenkef0f0ni-21",
    "geschenke-fuer-tierfreunde": "geschenkef0f0ti-21",
    "home-training-geschenke": "geschenkef0f0ht-21"
  },
  "amazonDomain": "www.amazon.de",
  "siteUrl": "https://geschenkidee-finden.com/",
  "pinterestBoards": {
    "geschenkideen": {"name": "Geschenkideen", "id": "376261812558071901"},
    "weihnachten": {"name": "Weihnachtsgeschenke Ideen", "id": "376261812558071907"},
    "wichteln": {"name": "Wichtelgeschenke unter 15 Euro", "id": "376261812558071910"},
    "tiere": {"name": "Geschenke für Hundebesitzer und Katzenliebhaber", "id": "376261812558071911"},
    "teenager": {"name": "Geschenke für Teenager", "id": "376261812558071912"},
    "eltern": {"name": "Geschenke für Mama und Papa", "id": "376261812558071913"},
    "workout": {"name": "Home Workout Geschenke", "id": "376261812558071914"}
  }
};
