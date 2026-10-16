// Logik des Geschenke-Finders.
// Die Inhalte stehen in daten/config.js, daten/produkte.js und daten/seiten.js.
(function () {
    'use strict';

    const CONFIG = window.CONFIG || {};
    const PRODUCTS = window.PRODUCTS || [];
    const PAGES = window.PAGES || [];
    const ROOT = document.body.dataset.root || '';
    const PAGE = PAGES.find(p => p.slug === document.body.dataset.page) || null;

    const PLACEHOLDER_TAG = 'DEINTAG-21';

    const FILTERS = {
        recipient: [
            { id: 'all',       label: 'Alle',               icon: '👥' },
            { id: 'household', label: 'Haushalt & Familie', icon: '🏡' },
            { id: 'teenager',  label: 'Teenager / Gaming',  icon: '🎮' },
            { id: 'parents',   label: 'Eltern / Partner',   icon: '❤️' },
            { id: 'kids',      label: 'Kinder',             icon: '🧒' }
        ],
        budget: [
            { id: 'all',     label: 'Alle Preisklassen', icon: '💶' },
            { id: 'under15', label: 'Unter 15 €',        icon: '🐷', hint: 'Kleinigkeiten' },
            { id: '15to50',  label: '15 € bis 50 €',     icon: '👛', hint: 'Beliebt' },
            { id: '50to150', label: '50 € bis 150 €',    icon: '💳' },
            { id: 'over150', label: 'Über 150 €',        icon: '💎', hint: 'Premium' }
        ],
        category: [
            { id: 'all',     label: 'Alle Bereiche',     icon: '🔲' },
            { id: 'kitchen', label: 'Küche',             icon: '🍳' },
            { id: 'tech',    label: 'Technik & Gadgets', icon: '🎧' },
            { id: 'beauty',  label: 'Wellness & Pflege', icon: '🧖' },
            { id: 'home',    label: 'Wohnen & Ordnung',  icon: '🛋️' },
            { id: 'fun',     label: 'Spiel & Freizeit',  icon: '🎲' },
            { id: 'sport',   label: 'Sport & Fitness',   icon: '🏋️' },
            { id: 'pets',    label: 'Haustiere',         icon: '🐾' }
        ]
    };

    const BUDGET_LABEL = { under15: 'unter 15 €', '15to50': '15–50 €', '50to150': '50–150 €', over150: 'über 150 €' };
    const RECIPIENT_LABEL = Object.fromEntries(FILTERS.recipient.map(r => [r.id, r.label]));
    // Jedes Produkt passt zu diesen Anlässen, zusätzlich zu seinen eigenen "occasions"
    const UNIVERSAL_OCCASIONS = ['geburtstag', 'weihnachten'];

    const defaults = Object.assign({ recipient: 'all', budget: 'all', category: 'all' }, PAGE ? PAGE.filter : {});
    const state = Object.assign({ search: '' }, defaults);

    const $ = sel => document.querySelector(sel);

    function escapeHtml(str) {
        return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }

    function amazonUrl(product) {
        const base = `https://${CONFIG.amazonDomain || 'www.amazon.de'}`;
        const url = product.asin
            ? new URL(`/dp/${encodeURIComponent(product.asin)}`, base)
            : new URL('/s', base);
        if (!product.asin) url.searchParams.set('k', product.query);
        // Eigene Tracking-ID je Seite (in PartnerNet angelegt) – so zeigen die Berichte, welche Seite verkauft
        const tag = (CONFIG.trackingIds || {})[PAGE ? PAGE.slug : 'start'] || CONFIG.partnerTag;
        if (tag && tag !== PLACEHOLDER_TAG) {
            url.searchParams.set('tag', tag);
        }
        return url.toString();
    }

    function fitsOccasion(p, occasion) {
        if (!occasion) return true;
        return UNIVERSAL_OCCASIONS.includes(occasion) || (p.occasions || []).includes(occasion);
    }

    // ignore: Filter, die beim Suchen nach Ersatz-Vorschlägen weggelassen werden
    function matches(p, ignore = []) {
        const on = key => state[key] !== 'all' && !ignore.includes(key);
        if (PAGE && !fitsOccasion(p, PAGE.anlass)) return false;
        if (PAGE && PAGE.produkte && PAGE.produkte.length && !PAGE.produkte.includes(p.title)) return false;
        if (on('recipient') && !p.recipients.includes(state.recipient)) return false;
        if (on('budget') && p.budget !== state.budget) return false;
        if (on('category') && p.category !== state.category) return false;
        if (state.search) {
            const text = [p.title, p.query, p.badge, ...p.highlights].join(' ');
            // beide Schreibweisen: "kopfhoerer" und "kopfhorer" finden "Kopfhörer"
            const haystack = normalize(text) + ' ' + text.toLowerCase().replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u');
            if (!normalize(state.search).split(/\s+/).every(word => wordMatches(word, haystack))) return false;
        }
        return true;
    }

    // --- Tolerante Suche: Umlaute, einfache Mehrzahl, häufige englische Begriffe ---
    function normalize(text) {
        return text.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').trim();
    }

    const ALIASES = {
        drone: 'drohne', drones: 'drohne', headphones: 'kopfhoerer', earbuds: 'kopfhoerer', speaker: 'lautsprecher',
        lamp: 'lampe', light: 'licht', lights: 'led', camera: 'kamera', watch: 'uhr', tracker: 'tracker',
        dog: 'hund', dogs: 'hund', cat: 'katze', cats: 'katze', pet: 'haustier', toy: 'spielzeug', toys: 'spielzeug',
        game: 'spiel', games: 'spiel', gaming: 'gaming', mouse: 'maus', keyboard: 'tastatur', console: 'konsole',
        kitchen: 'kueche', coffee: 'kaffee', cup: 'becher', mug: 'becher', blanket: 'decke', massage: 'massage',
        fitness: 'fitness', workout: 'training', yoga: 'yoga', weights: 'hantel', dumbbell: 'hantel',
        book: 'buch', notebook: 'notizbuch', puzzle: 'puzzle', garden: 'garten', plant: 'pflanze', gift: 'geschenk'
    };

    function wordMatches(word, haystack) {
        if (!word) return true;
        const candidates = [word, ALIASES[word]];
        // einfache Mehrzahl/Endungen: "drohnen" findet "drohne", "lampen" findet "lampe"
        if (word.length > 4) candidates.push(word.replace(/(en|n|e|s)$/, ''));
        return candidates.some(c => c && haystack.includes(c));
    }

    // --- Anlässe: die nächsten zuerst, bald anstehende hervorgehoben ---
    function monthsUntil(page, now) {
        const current = now.getMonth() + 1;
        return Math.min(...page.monate.map(m => (m - current + 12) % 12));
    }

    function renderOccasions() {
        const box = $('#occasions');
        if (!box) return;
        const now = new Date();
        const list = PAGES
            .filter(p => !PAGE || p.slug !== PAGE.slug)
            .map(p => ({ page: p, dist: p.monate && p.monate.length ? monthsUntil(p, now) : 6 }))
            .sort((a, b) => a.dist - b.dist);
        if (!list.length) { box.hidden = true; return; }
        box.querySelector('.occasion-list').innerHTML = list.map(({ page, dist }) => `
            <a class="occasion${dist <= 1 ? ' soon' : ''}" href="${ROOT}ideen/${encodeURIComponent(page.slug)}.html">
                <span aria-hidden="true">${page.emoji}</span> ${escapeHtml(page.kurztitel || page.titel)}
            </a>`).join('');
    }

    function renderFilterButtons() {
        document.querySelectorAll('.options').forEach(group => {
            const type = group.dataset.filter;
            group.innerHTML = FILTERS[type].map(opt => `
                <button type="button" class="opt" data-type="${type}" data-value="${opt.id}" aria-pressed="false">
                    <span>${opt.icon}&nbsp; ${escapeHtml(opt.label)}${opt.hint ? ` <span class="hint">(${escapeHtml(opt.hint)})</span>` : ''}</span>
                    <span class="check" aria-hidden="true">✓</span>
                </button>`).join('');
        });
    }

    function syncButtons() {
        document.querySelectorAll('.opt').forEach(btn => {
            btn.setAttribute('aria-pressed', String(state[btn.dataset.type] === btn.dataset.value));
        });
    }

    const FILTER_TITLE = { recipient: 'Für wen', budget: 'Budget', category: 'Bereich' };

    function filterLabel(key) {
        return FILTERS[key].find(o => o.id === state[key]).label;
    }

    // Keine exakten Treffer? Erst einzelne Filter weglassen (Bereich, dann Budget, dann Empfänger),
    // dann zwei, damit der Besucher nie in einer Sackgasse landet.
    function fallback() {
        const active = ['category', 'budget', 'recipient'].filter(k => state[k] !== 'all');
        const tries = active.map(k => [k]);
        for (let i = 0; i < active.length; i++) {
            for (let j = i + 1; j < active.length; j++) tries.push([active[i], active[j]]);
        }
        for (const ignore of tries) {
            const list = PRODUCTS.filter(p => matches(p, ignore));
            if (list.length) return { list, ignore };
        }
        return null;
    }

    function renderProducts() {
        let list = PRODUCTS.filter(p => matches(p));
        const exact = list.length;
        const notice = $('#notice');
        notice.hidden = true;
        if (!exact) {
            const alt = fallback();
            if (alt) {
                list = alt.list;
                const dropped = alt.ignore.map(k => `${FILTER_TITLE[k]}: „${escapeHtml(filterLabel(k))}“`).join(' und ');
                notice.innerHTML = `Für genau diese Auswahl haben wir noch nichts – hier sind <strong>${list.length} passende Ideen</strong>, wenn man ${dropped} weglässt.`;
                notice.hidden = false;
            }
        }
        $('#count').textContent = exact || !list.length
            ? `${exact} ${exact === 1 ? 'Idee' : 'Ideen'} gefunden`
            : `${list.length} ähnliche ${list.length === 1 ? 'Idee' : 'Ideen'}`;
        $('#empty').classList.toggle('show', list.length === 0);
        // Nichts gefunden, aber ein Suchbegriff? Dann direkt auf Amazon danach suchen lassen (mit Partner-ID).
        const amazonSearch = $('#amazon-search');
        amazonSearch.hidden = !(list.length === 0 && state.search);
        if (!amazonSearch.hidden) {
            const term = $('#search').value.trim();
            amazonSearch.href = amazonUrl({ query: term });
            amazonSearch.textContent = `Auf Amazon nach „${term}“ suchen*`;
        }
        $('#empty h3').textContent = amazonSearch.hidden ? 'Keine passenden Ideen gefunden' : 'Das haben wir noch nicht dabei';
        $('#empty p').textContent = amazonSearch.hidden
            ? 'Lockere einen Filter oder leere das Suchfeld.'
            : 'Auf Amazon findest du bestimmt etwas Passendes – oder du schaust dir unsere anderen Ideen an.';

        $('#grid').innerHTML = list.map(p => `
            <article class="card">
                <div class="card-visual cat-${p.category}">
                    <span aria-hidden="true">${p.emoji}</span>
                    <span class="badge">${escapeHtml(p.badge)}</span>
                </div>
                <div class="card-body">
                    <h3>${escapeHtml(p.title)}</h3>
                    <p class="for">Passt für: ${p.recipients.map(r => escapeHtml(RECIPIENT_LABEL[r])).join(', ')}</p>
                    <ul>${p.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}</ul>
                    <div class="card-foot">
                        <div class="price-band">Preisklasse<strong>${BUDGET_LABEL[p.budget]}</strong></div>
                        <a class="cta" href="${escapeHtml(amazonUrl(p))}" target="_blank" rel="sponsored noopener">Auf Amazon ansehen*</a>
                    </div>
                </div>
            </article>`).join('');
    }

    // Auswahl in der Adresse speichern, damit man Links wie
    // .../#fuer=teenager&budget=under15 teilen kann (z. B. auf Social Media)
    const HASH_KEYS = { recipient: 'fuer', budget: 'budget', category: 'bereich', search: 'suche' };

    function writeHash() {
        const params = new URLSearchParams();
        for (const [key, name] of Object.entries(HASH_KEYS)) {
            if (key === 'search' ? state.search : state[key] !== defaults[key]) params.set(name, state[key]);
        }
        const hash = params.toString();
        history.replaceState(null, '', hash ? `#${hash}` : location.pathname + location.search);
    }

    function readHash() {
        const params = new URLSearchParams(location.hash.slice(1));
        for (const [key, name] of Object.entries(HASH_KEYS)) {
            const value = params.get(name);
            if (key === 'search') {
                state.search = (value || '').toLowerCase().trim();
            } else {
                state[key] = FILTERS[key].some(o => o.id === value) ? value : defaults[key];
            }
        }
        $('#search').value = state.search;
    }

    function update() {
        syncButtons();
        renderProducts();
        writeHash();
    }

    function reset() {
        Object.assign(state, defaults, { search: '' });
        $('#search').value = '';
        update();
    }

    async function copyShareLink() {
        const btn = $('#share');
        const original = btn.textContent;
        try {
            await navigator.clipboard.writeText(location.href);
            btn.textContent = 'Link kopiert ✓';
        } catch {
            window.prompt('Diesen Link kopieren:', location.href);
        }
        setTimeout(() => { btn.textContent = original; }, 2000);
    }

    // --- Start ---
    renderOccasions();
    renderFilterButtons();
    readHash();
    update();

    $('.steps').addEventListener('click', e => {
        const btn = e.target.closest('.opt');
        if (!btn) return;
        state[btn.dataset.type] = btn.dataset.value;
        update();
    });
    $('#search').addEventListener('input', e => {
        state.search = e.target.value.toLowerCase().trim();
        update();
    });
    $('#reset').addEventListener('click', reset);
    $('#reset-empty').addEventListener('click', reset);
    $('#share').addEventListener('click', copyShareLink);
    window.addEventListener('hashchange', () => { readHash(); syncButtons(); renderProducts(); });

    $('#year').textContent = new Date().getFullYear();
    if (!CONFIG.partnerTag || CONFIG.partnerTag === PLACEHOLDER_TAG) {
        $('#config-warning').classList.add('show');
        console.warn('Geschenke-Finder: CONFIG.partnerTag ist noch nicht gesetzt – Links laufen ohne Provision.');
    }
})();
