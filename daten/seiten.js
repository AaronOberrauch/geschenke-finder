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
      "Retro-Spielkonsole mit Klassikern",
      "Gaming-Mauspad XXL"
    ],
    "foto_id": 7092687,
    "ratgeber": {
      "titel": "Ratgeber: Geschenke für Männer, die angeblich nichts brauchen",
      "abschnitte": [
        {
          "ueberschrift": "Erst das Hobby, dann das Geschenk",
          "text": "Der Satz „Ich brauche nichts“ heißt meistens nur, dass ihm gerade nichts einfällt. Am leichtesten findest du ein Geschenk für Männer, wenn du vom Alltag und den Hobbys ausgehst: Was macht er am Wochenende, worüber erzählt er gerne, was nervt ihn regelmäßig? Wer gerne grillt, freut sich über ein Grillthermometer oder ordentliches Grillbesteck. Wer viel unterwegs ist, nutzt eine Powerbank oder einen Thermobecher jeden Tag.\n\nHör in den Wochen vor Geburtstag oder Weihnachten einfach genauer hin. Oft fallen Sätze wie „Meine Taschenlampe ist schon wieder leer“ – daraus wird ein Geschenk, das wirklich gebraucht wird."
        },
        {
          "ueberschrift": "Praktisch schlägt Deko",
          "text": "Viele Männer freuen sich über Dinge, die sie benutzen können, mehr als über reine Deko. Ein Multitool für die Hosentasche, ein bestückter Werkzeugkoffer für die erste eigene Wohnung oder eine Dashcam fürs Auto lösen ein konkretes Problem. Das heißt nicht, dass es langweilig sein muss: Eine Retro-Spielkonsole mit Klassikern oder eine Kamera-Drohne verbinden Technik mit Spaß.\n\nWenn du etwas Persönliches suchst, ist eine Uhrenbox aus Holz oder ein Bartpflege-Set eine gute Mitte zwischen nützlich und besonders. Achte bei Pflegeprodukten darauf, ob er überhaupt Bart trägt und welche Düfte er mag."
        },
        {
          "ueberschrift": "Typische Fehler beim Geschenk für ihn",
          "text": "Der häufigste Fehler ist ein Geschenk, das eher zu dir passt als zu ihm – etwa ein Fitnessgerät, obwohl er nie Sport macht. Das wirkt schnell wie ein Wink mit dem Zaunpfahl. Auch bei Technik lohnt ein kurzer Blick, was schon da ist: Ein zweiter Bluetooth-Lautsprecher ist selten eine Überraschung.\n\nBeim Budget musst du nicht übertreiben. Gerade Kleinigkeiten unter 50 € wie ein Schlüsselfinder-Set oder eine aufladbare LED-Taschenlampe kommen oft besser an als teure Geräte, die dann im Schrank liegen. Und wenn du gar nicht weiterweißt, filtere oben nach Budget und lass dich von der Liste inspirieren."
        }
      ],
      "produkttexte": {
        "Multitool": "Zange, Messer, Schraubendreher und mehr in einem Werkzeug für die Hosentasche oder das Handschuhfach. Passt zu Heimwerkern, Campern und allen, die gerne selbst anpacken.",
        "Digitales Grillthermometer": "Zeigt die Kerntemperatur von Steak, Braten oder Pulled Pork an, damit das Fleisch genau richtig wird. Ein Geschenk für Grillfans, die schon alles andere haben.",
        "Bartpflege-Set": "Öl, Bürste und Kamm für Männer mit Bart, die ihn gepflegt halten wollen. Schön verpackt eignet es sich gut zum Geburtstag oder als Weihnachtsgeschenk.",
        "Bestückter Werkzeugkoffer": "Ein Koffer mit den wichtigsten Werkzeugen ist ideal für die erste eigene Wohnung oder für alle, die ihr Werkzeug ständig suchen müssen.",
        "Dashcam fürs Auto": "Zeichnet die Fahrt auf und kann nach einem Unfall helfen, den Hergang zu klären. Passt zu Vielfahrern und Pendlern, die gerne Technik im Auto haben.",
        "Retro-Spielkonsole mit Klassikern": "Bringt die Spiele aus der Kindheit zurück auf den Fernseher. Ein Geschenk mit Nostalgie-Faktor, das auch gemeinsam mit Freunden oder Kindern Spaß macht.",
        "Uhrenbox aus Holz": "Ordnet Uhren und kleine Accessoires an einem Platz. Ein stilvolles Geschenk für Männer, die gerne Uhr tragen oder mehrere besitzen.",
        "Aufladbare LED-Taschenlampe": "Hell, handlich und per USB aufladbar – für Keller, Auto, Camping oder den Hundespaziergang im Dunkeln. Ein kleines Geschenk, das oft gebraucht wird.",
        "Gaming-Mauspad XXL": "Ein großes Mauspad bietet Platz für Maus und Tastatur und schont den Schreibtisch. Eine günstige Idee für Gamer und alle, die viel am PC sitzen."
      },
      "faq": [
        {
          "frage": "Was schenkt man einem Mann, der angeblich nichts braucht?",
          "antwort": "Geh von seinen Hobbys und kleinen Alltagsproblemen aus. Praktische Dinge wie ein Multitool, eine aufladbare Taschenlampe oder ein Grillthermometer werden genutzt, auch wenn er sie sich selbst nie kaufen würde."
        },
        {
          "frage": "Welche Geschenke für Männer gibt es unter 50 €?",
          "antwort": "Viele: Multitool, Bartpflege-Set, Schlüsselfinder-Set, Thermobecher, Grillbesteck oder ein Gaming-Mauspad. Mit dem Budget-Filter oben auf der Seite siehst du alle Ideen in deiner Preisklasse."
        },
        {
          "frage": "Was ist ein gutes Weihnachtsgeschenk für den Freund oder Partner?",
          "antwort": "Etwas, das zu seinem Hobby passt und ihr gemeinsame Zeit schenkt – zum Beispiel eine Retro-Spielkonsole für Spieleabende oder Grillzubehör für den nächsten Sommer. Persönlicher wird es mit einer kleinen Karte dazu."
        },
        {
          "frage": "Sind Technik-Geschenke für Männer eine sichere Wahl?",
          "antwort": "Oft ja, aber frag vorher vorsichtig nach, was er schon hat. Kopfhörer, Lautsprecher und Powerbanks besitzen viele bereits. Speziellere Ideen wie Dashcam, Drohne oder Retro-Konsole sind seltener doppelt."
        }
      ]
    }
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
      "Diamond-Painting-Set",
      "Badebomben-Set"
    ],
    "foto_id": 8431871,
    "ratgeber": {
      "titel": "Ratgeber: Geschenke für Frauen und die Freundin finden",
      "abschnitte": [
        {
          "ueberschrift": "Vom Alltag ausgehen statt vom Klischee",
          "text": "Das beste Geschenk für Frauen ergibt sich selten aus einer Liste, sondern aus ihrem Alltag. Überleg kurz: Wie verbringt sie einen freien Abend? Trinkt sie morgens Kaffee oder lieber Tee? Schreibt sie gerne, bastelt sie, oder liegt sie am liebsten mit einer Decke auf dem Sofa? Aus solchen Beobachtungen entsteht eine Idee, die zeigt, dass du zugehört hast.\n\nDas gilt für die Freundin genauso wie für die Mama, die Schwester oder die Kollegin. Ein Geschenk für sie muss nicht teuer sein – es muss passen. Ein Briefpapier-Set für jemanden, der gerne Karten schreibt, kommt oft besser an als ein teures Gerät, das sie nie benutzt."
        },
        {
          "ueberschrift": "Verwöhnen, Entspannen, Genießen",
          "text": "Viele Geschenkideen für Frauen drehen sich um kleine Auszeiten – und das hat einen Grund: Zeit für sich ist im Alltag oft knapp. Ein flauschiger Bademantel, eine Kuscheldecke mit Ärmeln oder eine Wärmflasche mit Strickbezug machen kalte Winterabende gemütlicher. Badebomben, ein Wellness-Geschenkset oder ein Tee-Geschenkset laden dazu ein, sich bewusst eine Pause zu nehmen.\n\nWenn du ein Weihnachtsgeschenk für die Freundin suchst, kannst du mehrere kleine Dinge zu einem eigenen Verwöhn-Set kombinieren: etwa Duftkerzen, eine Gesichtsmaske und einen Tee. So entsteht ein persönliches Geschenk, das nach Mühe aussieht und trotzdem im Budget bleibt."
        },
        {
          "ueberschrift": "Typische Fehler beim Geschenk für sie",
          "text": "Ein häufiger Fehler sind Geschenke mit versteckter Botschaft: Eine Waage, Diätbücher oder Fitnessgeräte für jemanden, der nicht danach gefragt hat, kommen fast nie gut an. Auch Haushaltsgeräte sind heikel – ein Saugroboter ist eher etwas für den gemeinsamen Haushalt als ein Geschenk zum Geburtstag.\n\nVorsicht auch bei Pflegeprodukten und Düften: Geschmäcker und Hauttypen sind sehr verschieden. Wenn du dir unsicher bist, greif lieber zu neutralen Dingen wie einem Seidenkissenbezug, einem Schmuckkästchen oder einem kreativen Set. Und: Eine handgeschriebene Karte dazu macht fast jedes Geschenk persönlicher."
        }
      ],
      "produkttexte": {
        "Seidenkissenbezug": "Fühlt sich glatt und kühl an und ist ein kleiner Luxus für jede Nacht. Passt zu Frauen, die sich gerne etwas Schönes gönnen, aber selten selbst kaufen würden.",
        "Flauschiger Bademantel": "Weich und warm für den Morgen oder nach dem Baden. Ein Geschenk für sie, das im Winter fast jeden Tag benutzt wird.",
        "Badebomben-Set": "Mehrere Düfte für entspannte Badeabende – eine kleine Idee für den Nikolausstiefel, zum Wichteln oder als Ergänzung zu einem größeren Geschenk.",
        "Duftkerzen-Set": "Sorgt an dunklen Abenden für gemütliches Licht und angenehmen Duft. Ein schönes Mitbringsel für die Freundin, die Schwester oder die Kollegin.",
        "Schmuckkästchen": "Bringt Ordnung in Ketten, Ringe und Ohrringe und sieht dabei hübsch aus. Passt zu allen, deren Schmuck sonst in einer Schale durcheinanderliegt.",
        "Tee-Geschenkset": "Verschiedene Sorten zum Probieren, ideal für Teetrinkerinnen und gemütliche Nachmittage. Lässt sich gut mit einer Tasse oder Kerze kombinieren.",
        "Briefpapier-Set": "Für alle, die gerne Karten und Briefe schreiben – Briefe schreiben ist gerade wieder im Trend. Ein persönliches kleines Geschenk mit Stil.",
        "Kuscheldecke mit Ärmeln": "Hält auf dem Sofa warm, und die Hände bleiben frei für Buch, Handy oder Tee. Ein gemütliches Weihnachtsgeschenk für Frauen, die schnell frieren."
      },
      "faq": [
        {
          "frage": "Was schenkt man einer Frau, die schon alles hat?",
          "antwort": "Etwas, das sie sich selbst selten kauft: kleine Luxusmomente wie ein Seidenkissenbezug, ein flauschiger Bademantel oder ein Wellness-Set. Auch kreative Sets wie Handlettering oder Diamond Painting bringen Abwechslung, ohne Platz wegzunehmen."
        },
        {
          "frage": "Was ist ein gutes Weihnachtsgeschenk für die Freundin?",
          "antwort": "Etwas, das zu ihren Gewohnheiten passt und gemeinsame Zeit schafft – etwa eine Sofortbildkamera für gemeinsame Erinnerungen oder ein selbst zusammengestelltes Verwöhn-Set aus Kerzen, Tee und Badebomben. Eine persönliche Karte dazu ist oft das Wichtigste."
        },
        {
          "frage": "Welche kleinen Geschenke für sie gibt es unter 15 €?",
          "antwort": "Zum Beispiel ein Badebomben-Set, ein Gesichtsmasken-Set, eine Wärmflasche mit Strickbezug oder ein Briefpapier-Set. Mit dem Budget-Filter oben auf der Seite siehst du alle Ideen in dieser Preisklasse auf einen Blick."
        },
        {
          "frage": "Sind Pflegeprodukte als Geschenk für Frauen eine gute Idee?",
          "antwort": "Ja, wenn du ihre Vorlieben kennst. Bist du unsicher, nimm eher neutrale Sets mit mehreren Sorten oder Dinge wie einen Bademantel oder ein Mani- und Pediküre-Set, bei denen Duft und Hauttyp keine große Rolle spielen."
        }
      ]
    }
  },
  {
    "slug": "geschenke-fuer-gamer",
    "titel": "Geschenke für Gamer: Ideen für PC-, Konsolen- und Retro-Fans",
    "kurztitel": "Für Gamer",
    "emoji": "🎮",
    "anlass": "geburtstag",
    "monate": [],
    "beschreibung": "Geschenke für Gamer zum Geburtstag oder zu Weihnachten: Headset, Maus, Konsole, Retro-Spiele und Licht fürs Gaming-Zimmer.",
    "intro": "Für Zocker jeden Alters: Geschenkideen vom Headset über das Mauspad bis zur Retro-Konsole und Zimmer-Beleuchtung – für jedes Budget.",
    "filter": {},
    "foto": "videospiel controller",
    "produkte": [
      "Gaming-Headset",
      "Gaming-Maus",
      "Gaming-Mauspad XXL",
      "Spielkonsole",
      "Retro-Spielkonsole mit Klassikern",
      "USB-Mikrofon für Streaming",
      "LED-Strip mit App-Steuerung",
      "LED-Neonschild fürs Zimmer",
      "Ringlicht mit Handyhalter"
    ],
    "ratgeber": {
      "titel": "Ratgeber: Geschenke für Gamer",
      "abschnitte": [
        {
          "ueberschrift": "PC, Konsole oder Handy – das musst du vorher wissen",
          "text": "Bevor du ein Geschenk für Gamer kaufst, lohnt sich eine einfache Frage: Worauf wird gespielt? Wer am PC zockt, freut sich über Zubehör wie Gaming-Maus, großes Mauspad oder ein Headset mit Mikrofon. Konsolenspieler brauchen eher ein Headset, das mit ihrer Konsole funktioniert, oder Dinge rund ums Zimmer.\n\nAchte bei Technik auf die Anschlüsse. Viele Headsets laufen über USB oder Klinke, manche nur kabellos. Wenn du unsicher bist, schau unauffällig nach, was bisher benutzt wird, oder frag Freunde und Geschwister. So vermeidest du ein Geschenk, das nicht passt."
        },
        {
          "ueberschrift": "Geschenke rund ums Gaming-Zimmer",
          "text": "Nicht jedes Geschenk für Gamer muss ein Gerät sein. Viele Spieler gestalten ihr Zimmer oder ihren Schreibtisch gerne selbst: Ein LED-Strip mit App-Steuerung oder ein Neonschild sorgt für die passende Stimmung beim Zocken. Wer streamt oder Videos aufnimmt, kann ein USB-Mikrofon oder ein Ringlicht gut gebrauchen.\n\nDiese Ideen sind oft günstiger als neue Spiele oder Hardware und eignen sich auch für Wichteln oder den Nikolausstiefel. Ein großes Mauspad ist zum Beispiel eine kleine Freude, die jeden Tag benutzt wird."
        },
        {
          "ueberschrift": "Retro-Gaming: Ein Geschenk für Groß und Klein",
          "text": "Retro ist bei Gamern seit einiger Zeit ein großes Thema. Eine Retro-Spielkonsole mit vorinstallierten Klassikern begeistert Erwachsene, die damit ihre Kindheit zurückholen, genauso wie Kinder, die die alten Spiele zum ersten Mal entdecken. Das macht sie zu einem schönen Familiengeschenk für Weihnachten.\n\nTypischer Fehler bei Gaming-Geschenken: einfach ein beliebiges Spiel kaufen. Ohne die Wunschliste zu kennen, landest du schnell bei einem Titel, der schon im Regal steht oder nicht gefällt. Zubehör und Retro-Konsolen sind deshalb die entspanntere Wahl."
        }
      ],
      "produkttexte": {
        "Gaming-Headset": "Ein Headset mit Mikrofon ist für Online-Spiele mit Freunden fast unverzichtbar. Achte darauf, dass es zur Plattform passt – PC, Konsole oder beides.",
        "Gaming-Maus": "Eine Maus mit zusätzlichen Tasten und einstellbarer Empfindlichkeit macht PC-Spiele angenehmer. Ein gutes Geschenk für alle, die noch mit einer Büromaus zocken.",
        "Gaming-Mauspad XXL": "Bietet Platz für Maus und Tastatur und schützt den Schreibtisch. Eine günstige Kleinigkeit für Gamer, die gut zum Wichteln oder in den Nikolausstiefel passt.",
        "Retro-Spielkonsole mit Klassikern": "Die Klassiker von früher sind schon vorinstalliert, einfach an den Fernseher anschließen. Ideal für gemeinsame Spieleabende mit Familie oder Freunden.",
        "USB-Mikrofon für Streaming": "Für alle, die streamen, Videos aufnehmen oder im Voice-Chat klar zu hören sein wollen. Wird einfach per USB an den Computer angeschlossen.",
        "LED-Strip mit App-Steuerung": "Farbiges Licht hinter dem Bildschirm oder unter dem Schreibtisch sorgt für Gaming-Stimmung. Farben und Effekte lassen sich bequem per App einstellen.",
        "LED-Neonschild fürs Zimmer": "Ein leuchtendes Motiv an der Wand macht das Gaming-Zimmer gemütlicher und sieht auch im Hintergrund von Streams gut aus.",
        "Spielkonsole": "Das große Geschenk für Weihnachten oder einen runden Geburtstag. Kläre vorher, welche Konsole Freunde haben, damit gemeinsam online gespielt werden kann."
      },
      "faq": [
        {
          "frage": "Was schenkt man einem Gamer, der schon alles hat?",
          "antwort": "Zubehör fürs Zimmer ist selten doppelt: LED-Strip, Neonschild oder ein großes Mauspad. Auch eine Retro-Spielkonsole mit Klassikern ist eine gute Idee für Gamer, die technisch schon gut ausgestattet sind."
        },
        {
          "frage": "Welche Geschenke für Gamer gibt es unter 15 €?",
          "antwort": "Ein Gaming-Mauspad XXL oder ein LED-Strip mit App-Steuerung sind kleine Geschenke für Gamer, die gut zum Wichteln, zum Nikolaus oder als Mitbringsel passen. Mit dem Budget-Filter siehst du alle passenden Ideen."
        },
        {
          "frage": "Soll ich einem Gamer ein Spiel schenken?",
          "antwort": "Nur, wenn du die Wunschliste kennst. Sonst ist die Gefahr groß, dass das Spiel schon vorhanden ist oder nicht gefällt. Zubehör, Licht fürs Zimmer oder eine Retro-Konsole sind sicherere Geschenkideen."
        },
        {
          "frage": "Was ist ein gutes Geschenk für Gamer-Teenager?",
          "antwort": "Teenager freuen sich über alles, was ihr Zimmer und ihr Setup aufwertet: Headset mit Mikrofon für Online-Spiele, LED-Beleuchtung oder ein USB-Mikrofon, falls sie streamen oder Videos drehen möchten."
        }
      ]
    },
    "foto_id": 3597331
  }
];
