// Interactive e-invite: envelope intro, 3D tilting card, countdown and RSVP.
const EVENTS = {
  nikkah: {
    title: 'Nikkah', start: '2026-11-19T19:00:00+05:00', end: '2026-11-19T21:30:00+05:00',
    day: 'THURSDAY', dd: '19', sup: 'TH', mon: 'NOVEMBER', yr: '2026', dateText: 'Thursday, 19th November 2026',
    pre: 'Together with their families<br>you are joyfully invited to the',
    of: 'OF', bride: '',
    times: [['Nikkah', '7:00 PM']],
    venue: 'Serena Royal Wedding Hall', addr: 'Near Prime Hospital, Warsak Road, Peshawar',
    seal: 'moon',
  },
  barat: {
    title: 'Barat', start: '2026-11-21T19:00:00+05:00', end: '2026-11-21T22:00:00+05:00',
    day: 'SATURDAY', dd: '21', sup: 'ST', mon: 'NOVEMBER', yr: '2026', dateText: 'Saturday, 21st November 2026',
    pre: 'The family of Haji M. Hassan (Late)<br>joyfully invite you to the',
    of: 'OF THEIR BELOVED GRANDSON', bride: 'with D/o Mr. Arshad Kamal',
    times: [['Reception', '7:00 PM']],
    venue: 'Javed House', addr: 'Gulgasht Colony, Civil Quarters, Peshawar',
    seal: 'A',
  },
  walima: {
    title: 'Walima', start: '2026-11-22T18:30:00+05:00', end: '2026-11-22T22:00:00+05:00',
    day: 'SUNDAY', dd: '22', sup: 'ND', mon: 'NOVEMBER', yr: '2026', dateText: 'Sunday, 22nd November 2026',
    pre: 'The family of Haji M. Hassan (Late)<br>invite you to grace the',
    of: 'OF THEIR BELOVED GRANDSON', bride: '',
    times: [['Reception', '6:30 PM'], ['Dinner', '7:00 – 10:00 PM']],
    venue: 'Elegance Arena Wedding Hall', addr: 'Opposite The Eclipse, Ring Road, Peshawar',
    seal: 'AH',
  },
};
for (const k in EVENTS) EVENTS[k].key = k;
EVENTS.all = { title: 'Wedding', key: 'all', all: true, start: EVENTS.nikkah.start, dateText: '19th – 22nd November 2026', seal: 'AH' };
const GROOM = 'Hafiz Afaq Hassan', FATHER = 'Al Haj M. Ishfaq Hassan';
const PHONES = [['0331-8889595', '923318889595'], ['0332-9595951', '923329595951']];
const BISM = 'بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيْمِ';
const DUA = 'بَارَكَ ٱللّٰهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا<br>وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ';

const KEY = document.body.dataset.event;
const E = EVENTS[KEY];
const LIST = E.all ? ['nikkah', 'barat', 'walima'] : [KEY];
const params = new URLSearchParams(location.search);
const GUEST = (params.get('to') || '').trim().slice(0, 60);
const OG = params.has('og');
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const $ = (s, r = document) => r.querySelector(s);

/* ---------------- card art ---------------- */
function goldDefs(svg, id = 'g') {
  el('defs', {}, svg).innerHTML = `
    <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7a5420"/><stop offset=".3" stop-color="#e9cf8e"/><stop offset=".55" stop-color="#a87a35"/><stop offset=".8" stop-color="#f3dea6"/><stop offset="1" stop-color="#7a5420"/></linearGradient>
    <filter id="grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="3" seed="4"/><feColorMatrix values="0 0 0 0 .45  0 0 0 0 .35  0 0 0 0 .22  1 0 0 0 -.42"/></filter>
    <filter id="wc" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".04" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="10"/><feGaussianBlur stdDeviation=".6"/></filter>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity=".3"/></filter>`;
  return svg.querySelector('defs');
}

function star8(g, cx, cy, r, attrs) {
  const pts = [];
  for (let i = 0; i < 16; i++) { const a = (i / 16) * Math.PI * 2 - Math.PI / 2, rr = i % 2 ? r * .55 : r; pts.push(`${(cx + Math.cos(a) * rr).toFixed(1)},${(cy + Math.sin(a) * rr).toFixed(1)}`); }
  return el('polygon', Object.assign({ points: pts.join(' ') }, attrs), g);
}

// Nikkah — "Noor": ivory card, geometric star border, hanging crescent.
function artNikkah(svg) {
  const d = goldDefs(svg);
  d.insertAdjacentHTML('beforeend', `
    <pattern id="girih" width="56" height="56" patternUnits="userSpaceOnUse">
      <rect width="56" height="56" fill="#f1e6cf"/>
      <g fill="none" stroke="#b08a48" stroke-width="1.4">
        <rect x="14" y="14" width="28" height="28"/><rect x="14" y="14" width="28" height="28" transform="rotate(45 28 28)"/>
        <path d="M0 28 L8.2 28 M47.8 28 L56 28 M28 0 L28 8.2 M28 47.8 L28 56"/><circle cx="28" cy="28" r="5"/>
        <path d="M0 0 L8 8 M56 0 L48 8 M0 56 L8 48 M56 56 L48 48"/>
      </g></pattern>`);
  el('rect', { width: 1000, height: 1500, fill: '#faf5ea' }, svg);
  el('rect', { width: 1000, height: 1500, filter: 'url(#grain)', opacity: .5 }, svg);
  el('path', { d: 'M0 0H1000V1500H0Z M56 56V1444H944V56Z', fill: 'url(#girih)', 'fill-rule': 'evenodd' }, svg);
  for (const [i, w] of [[10, 3], [56, 2.4], [70, 1]]) el('rect', { x: i, y: i, width: 1000 - i * 2, height: 1500 - i * 2, fill: 'none', stroke: 'url(#g)', 'stroke-width': w }, svg);
  for (const [x, y] of [[28, 28], [972, 28], [28, 1472], [972, 1472], [500, 28], [500, 1472], [28, 750], [972, 750]]) {
    el('circle', { cx: x, cy: y, r: 27, fill: '#faf5ea' }, svg);
    star8(svg, x, y, 24, { fill: 'url(#g)' });
    el('circle', { cx: x, cy: y, r: 6, fill: '#faf5ea' }, svg);
  }
  // hanging crescent and stars
  const hang = (x, len, size, moon) => {
    el('line', { x1: x, y1: 70, x2: x, y2: 70 + len, stroke: '#b08a48', 'stroke-width': 1.5 }, svg);
    if (moon) {
      const m = el('mask', { id: 'mm' }, svg);
      el('circle', { cx: x, cy: 70 + len + size, r: size, fill: '#fff' }, m);
      el('circle', { cx: x + size * .42, cy: 70 + len + size * .78, r: size * .86, fill: '#000' }, m);
      el('circle', { cx: x, cy: 70 + len + size, r: size, fill: 'url(#g)', mask: 'url(#mm)' }, svg);
      star8(svg, x + size * .45, 70 + len + size * .95, size * .3, { fill: 'url(#g)' });
    } else star8(svg, x, 70 + len + size, size, { fill: 'url(#g)' });
  };
  hang(500, 34, 34, true); hang(405, 18, 13); hang(595, 18, 13); hang(330, 6, 9); hang(670, 6, 9);
}

// Barat — "Shehnai": cream card, marigold toran, cusped jharokha arch, paisleys.
function marigold(g, x, y, r) {
  const f = el('g', { transform: `translate(${x} ${y})` }, g);
  el('circle', { r, fill: '#e07c06' }, f);
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; el('circle', { cx: Math.cos(a) * r * .62, cy: Math.sin(a) * r * .62, r: r * .5, fill: i % 2 ? '#f7a823' : '#f39415' }, f); }
  for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2 + .3; el('circle', { cx: Math.cos(a) * r * .28, cy: Math.sin(a) * r * .28, r: r * .32, fill: '#ffc247' }, f); }
  el('circle', { r: r * .18, fill: '#c25e00' }, f);
}
function mango(g, x, y, ang, s) {
  el('path', { d: `M0 0 C${s * .3} ${-s * .32} ${s * .8} ${-s * .26} ${s} 0 C${s * .8} ${s * .22} ${s * .3} ${s * .3} 0 0Z`, fill: '#3f7a2e', stroke: '#2b5a1f', 'stroke-width': 1, transform: `translate(${x} ${y}) rotate(${ang})` }, g);
}
function bell(g, x, y) {
  const b = el('g', { transform: `translate(${x} ${y})` }, g);
  el('path', { d: 'M-11 18 C-11 4 -7 -2 0 -2 C7 -2 11 4 11 18 Z', fill: 'url(#g)' }, b);
  el('circle', { cy: 21, r: 3.5, fill: '#8a6326' }, b);
}
function paisley(g, x, y, s, flip) {
  const p = el('g', { transform: `translate(${x} ${y}) scale(${flip ? -s : s} ${s})` }, g);
  const d = 'M0 0 C-58 -6 -84 -70 -52 -118 C-28 -152 26 -152 40 -112 C50 -84 30 -62 10 -72 C28 -80 26 -106 6 -110 C-30 -116 -48 -70 -30 -38 C-18 -16 18 -6 44 -14 C28 2 14 4 0 0Z';
  el('path', { d, fill: '#7a1628', stroke: 'url(#g)', 'stroke-width': 3 }, p);
  el('path', { d: 'M-8 -22 C-40 -34 -52 -76 -32 -100', fill: 'none', stroke: '#e9b44c', 'stroke-width': 2, 'stroke-dasharray': '1 7', 'stroke-linecap': 'round' }, p);
  for (const [cx, cy, r] of [[-22, -60, 9], [-10, -88, 6], [-36, -84, 5]]) el('circle', { cx, cy, r, fill: 'url(#g)' }, p);
}
function artBarat(svg) {
  goldDefs(svg);
  el('rect', { width: 1000, height: 1500, fill: '#fbf0da' }, svg);
  el('rect', { width: 1000, height: 1500, filter: 'url(#grain)', opacity: .55 }, svg);
  el('path', { d: 'M0 0H1000V1500H0Z M34 34V1466H966V34Z', fill: '#6e1222', 'fill-rule': 'evenodd' }, svg);
  el('rect', { x: 34, y: 34, width: 932, height: 1432, fill: 'none', stroke: 'url(#g)', 'stroke-width': 4 }, svg);
  el('rect', { x: 46, y: 46, width: 908, height: 1408, fill: 'none', stroke: 'url(#g)', 'stroke-width': 1.2 }, svg);
  // cusped arch frame
  const L = [], N = 5, cub = (t, a, b, c, d) => (1 - t) ** 3 * a + 3 * (1 - t) ** 2 * t * b + 3 * (1 - t) * t * t * c + t ** 3 * d;
  for (let i = 0; i <= N; i++) { const t = i / N; L.push([cub(t, 96, 96, 300, 500), cub(t, 390, 250, 214, 196)]); }
  const R = L.slice(0, -1).reverse().map(([x, y]) => [1000 - x, y]);
  const pts = L.concat(R);
  let d = `M96 1400 L${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], r = (Math.hypot(x1 - x0, y1 - y0) * .58).toFixed(1);
    d += ` A${r} ${r} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}`;
  }
  d += ' L904 1400 Z';
  el('path', { d, fill: 'none', stroke: 'url(#g)', 'stroke-width': 3 }, svg);
  el('path', { d, fill: 'none', stroke: 'url(#g)', 'stroke-width': 1.2, opacity: .8, transform: 'translate(500 800) scale(.97 .985) translate(-500 -800)' }, svg);
  // marigold toran
  const T = el('g', { filter: 'url(#sh)' }, svg);
  const joints = [46, 274, 500, 726, 954];
  for (let j = 0; j < 4; j++) {
    const a = joints[j], b = joints[j + 1], m = (a + b) / 2;
    for (let i = 0; i <= 12; i++) { const t = i / 12, x = (1 - t) ** 2 * a + 2 * (1 - t) * t * m + t * t * b, y = (1 - t) ** 2 * 52 + 2 * (1 - t) * t * 150 + t * t * 52; marigold(T, x, y, 14); }
  }
  for (const [x, n] of [[60, 9], [274, 4], [726, 4], [940, 9]]) {
    for (let i = 0; i < n; i++) marigold(T, x, 74 + i * 27, 13);
    bell(T, x, 74 + n * 27 - 4);
  }
  for (const x of joints) { mango(T, x, 56, 60, 44); mango(T, x, 56, 120, 44); marigold(T, x, 52, 17); }
  paisley(svg, 118, 1440, .62, false); paisley(svg, 882, 1440, .62, true);
  for (const x of [270, 730]) { el('circle', { cx: x, cy: 1430, r: 5, fill: 'url(#g)' }, svg); }
}

// Walima — "Gulab": scalloped champagne card with watercolour blush blooms.
function peony(g, R, x, y, r, pal) {
  const p = el('g', { transform: `translate(${x} ${y})`, filter: 'url(#wc)' }, g);
  for (let L = 0; L < 4; L++) {
    const n = 9 - L, rr = r * (1 - L * .22);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * 360 + R() * 30 + L * 17, w = rr * (.55 + R() * .2);
      el('path', { d: `M0 0 C${-w} ${-rr * .3} ${-w * .9} ${-rr} 0 ${-rr} C${w * .9} ${-rr} ${w} ${-rr * .3} 0 0Z`, fill: pal[(i + L) % pal.length], opacity: .62 + L * .08, transform: `rotate(${a})` }, p);
    }
  }
  el('circle', { r: r * .16, fill: '#d98c86', opacity: .9 }, p);
  for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2; el('circle', { cx: Math.cos(a) * r * .14, cy: Math.sin(a) * r * .14, r: 3, fill: '#e9c27a' }, p); }
}
function eucalyptus(g, R, x, y, ang, len) {
  const pts = []; let cx = x, cy = y, a = ang;
  for (let i = 0; i < 20; i++) { pts.push([cx, cy]); a += .02; cx += Math.cos(a) * len / 20; cy += Math.sin(a) * len / 20; }
  el('path', { d: 'M' + pts.map(p => p.map(v => v.toFixed(1)).join(' ')).join(' L'), stroke: '#8a9b88', 'stroke-width': 2, fill: 'none' }, g);
  pts.forEach((p, i) => { if (i % 2 || i === 0) return; const s = 16 * (1 - i / 26); for (const k of [-1, 1]) el('ellipse', { cx: p[0] + Math.cos(a + k * 1.4) * s, cy: p[1] + Math.sin(a + k * 1.4) * s, rx: s, ry: s * .85, fill: R() > .5 ? '#a9b8a3' : '#93a68f', opacity: .9 }, g); });
}
function artWalima(svg) {
  goldDefs(svg);
  const R = rng(2211);
  el('rect', { width: 1000, height: 1500, fill: '#ecd2cb' }, svg);
  // scalloped paper edge
  const s = 26, x0 = 30, y0 = 30, x1 = 970, y1 = 1470;
  let d = `M${x0} ${y0}`;
  const edge = (ax, ay, bx, by) => { const n = Math.round(Math.hypot(bx - ax, by - ay) / (s * 2)); for (let i = 1; i <= n; i++) { const t = i / n; d += ` A${s} ${s} 0 0 1 ${(ax + (bx - ax) * t).toFixed(1)} ${(ay + (by - ay) * t).toFixed(1)}`; } };
  edge(x0, y0, x1, y0); edge(x1, y0, x1, y1); edge(x1, y1, x0, y1); edge(x0, y1, x0, y0);
  el('path', { d: d + 'Z', fill: '#fffaf6', stroke: '#c99a86', 'stroke-width': 2, filter: 'url(#sh)' }, svg);
  el('rect', { x: 0, y: 0, width: 1000, height: 1500, filter: 'url(#grain)', opacity: .35 }, svg);
  el('rect', { x: 78, y: 78, width: 844, height: 1344, rx: 18, fill: 'none', stroke: '#c99a86', 'stroke-width': 1.4 }, svg);
  el('rect', { x: 90, y: 90, width: 820, height: 1320, rx: 12, fill: 'none', stroke: '#e2c3b6', 'stroke-width': 1 }, svg);
  const pal = ['#f6cfc9', '#efb7b2', '#f9e0da', '#e8a2a0', '#f3c3bb'];
  const tr = el('g', {}, svg), bl = el('g', {}, svg);
  eucalyptus(tr, R, 1000, 40, 2.6, 300); eucalyptus(tr, R, 990, 120, 2.2, 260); eucalyptus(tr, R, 860, 0, 1.9, 220);
  peony(tr, R, 900, 90, 95, pal); peony(tr, R, 770, 50, 62, pal); peony(tr, R, 960, 240, 55, pal);
  eucalyptus(bl, R, 0, 1460, -0.5, 300); eucalyptus(bl, R, 10, 1380, -0.95, 240); eucalyptus(bl, R, 140, 1500, -1.25, 220);
  peony(bl, R, 100, 1410, 90, pal); peony(bl, R, 235, 1465, 58, pal); peony(bl, R, 40, 1260, 52, pal);
}

const ART = { nikkah: artNikkah, barat: artBarat, walima: artWalima };

/* ---------------- markup ---------------- */
function sealSvg(kind) {
  const R = rng(7), pts = [];
  for (let i = 0; i < 40; i++) { const a = i / 40 * Math.PI * 2, r = 46 + 3 * Math.sin(a * 6 + 1) + R() * 2; pts.push(`${(50 + Math.cos(a) * r).toFixed(1)},${(50 + Math.sin(a) * r).toFixed(1)}`); }
  const mark = kind === 'moon'
    ? `<mask id="sm"><circle cx="48" cy="50" r="18" fill="#fff"/><circle cx="56" cy="45" r="15" fill="#000"/></mask><circle cx="48" cy="50" r="18" fill="#6e4c1c" mask="url(#sm)"/>`
    : `<text x="50" y="${kind.length > 1 ? 59 : 62}" text-anchor="middle" font-family="Cinzel" font-weight="700" font-size="${kind.length > 1 ? 26 : 34}" fill="#6e4c1c">${kind}</text>`;
  return `<svg viewBox="0 0 100 100"><defs><radialGradient id="sg" cx="38%" cy="32%" r="75%"><stop offset="0" stop-color="#f6e0a6"/><stop offset=".5" stop-color="#c79b4b"/><stop offset="1" stop-color="#7a5420"/></radialGradient></defs>
    <polygon points="${pts.join(' ')}" fill="url(#sg)"/><circle cx="50" cy="50" r="33" fill="none" stroke="#7a5420" stroke-width="1.5"/><circle cx="50" cy="50" r="29" fill="none" stroke="#f6e0a6" stroke-width=".8" opacity=".7"/>${mark}</svg>`;
}

const orn = `<svg class="c-orn" viewBox="0 0 200 18"><path d="M0 9H80M120 9H200" stroke="currentColor" stroke-width="1"/><path d="M100 1L108 9L100 17L92 9Z" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="86" cy="9" r="2" fill="currentColor"/><circle cx="114" cy="9" r="2" fill="currentColor"/></svg>`;
const icon = {
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s-7-7.3-7-12.5a7 7 0 0 1 14 0C19 14.7 12 22 12 22z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.2 1.1 2.2 1.4 2.5 1.6.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
};

function frontHTML(E) {
  const times = E.times.map(([k, v]) => `${k} ${v}`).join('<br>');
  return `<div class="content">
    <div class="c-bism gold">${BISM}</div>
    <div class="c-pre">${E.pre}</div>
    <div class="c-ev gold">${E.title}</div>
    <div class="c-of">${E.of}</div>
    <div class="c-name">${GROOM}</div>
    <div class="c-father">son of <b>${FATHER}</b></div>
    ${E.bride ? `<div class="c-father">${E.bride.replace('D/o', '<b>D/o').replace('Kamal', 'Kamal</b>')}</div>` : ''}
    <div class="c-date"><span>${E.day}</span><b>${E.dd}<sup>${E.sup}</sup></b><span>${E.mon.slice(0, 3)} · ${E.yr}</span></div>
    <div class="c-time">${times}</div>
    <div class="c-venue">${E.venue}</div>
    <div class="c-addr">${E.addr}</div>
    <div style="color:var(--gold)">${orn}</div>
  </div><div class="shine"></div>`;
}
function backHTML() {
  return `<div class="content" style="--padT:20cqw">
    <div class="c-small">A PRAYER FOR THE COUPLE</div>
    <div style="color:var(--gold)">${orn}</div>
    <div class="c-dua gold" style="margin-top:5cqw">${DUA}</div>
    <div class="c-dua-en">“May Allah bless you both, shower His blessings upon you, and unite you in goodness.”</div>
    <div class="c-sign gold">With love,</div>
    <div class="c-small">THE HASSAN FAMILY</div>
    <div class="c-small" style="margin-top:8cqw">0331-8889595 &nbsp;·&nbsp; 0332-9595951</div>
  </div><div class="shine"></div>`;
}

function build() {
  document.title = `${E.title} · ${GROOM}`;
  const hello = GUEST ? `ASSALAMU ALAIKUM<b>${esc(GUEST)}</b>` : `ASSALAMU ALAIKUM<b>You're Invited</b>`;
  document.body.insertAdjacentHTML('beforeend', `
  <canvas id="fx"></canvas>
  <div class="scene" id="scene">
    <div class="env-wrap">
      <div class="dear"><small>${GUEST ? 'A SPECIAL INVITATION FOR' : 'YOU ARE CORDIALLY INVITED'}</small>${GUEST ? esc(GUEST) : 'Dear Guest'}</div>
      <div class="env" id="env">
        <div class="env-back"></div>
        <div class="env-insert"><div class="ins-ev">${E.title}</div><div class="ins-nm">HAFIZ AFAQ HASSAN</div></div>
        <svg class="env-front" viewBox="0 0 145 100" preserveAspectRatio="none">
          <polygon points="0,0 74,54 0,100" fill="var(--envSide)"/><polygon points="145,0 71,54 145,100" fill="var(--envSide)"/>
          <polygon points="0,100 72.5,47 145,100" fill="var(--envBottom)"/>
          <path d="M0 100 L72.5 47 L145 100" fill="none" stroke="rgba(0,0,0,.12)" stroke-width=".4"/>
        </svg>
        <div class="env-flap"><div class="fa"></div><div class="fb"></div></div>
        <button class="seal" id="seal" aria-label="Open the invitation">${sealSvg(E.seal)}</button>
      </div>
      <div class="tap">TAP THE SEAL TO OPEN</div>
    </div>
  </div>
  <main id="main">
    <section class="hero">
      <div class="hello">${hello}</div>
      ${E.all ? `<div class="carousel" id="car">${LIST.map(k => `<div class="slide">${cardHTML(k)}<div class="cap">${EVENTS[k].title.toUpperCase()} · ${EVENTS[k].dateText.replace(/^\w+, /, '').toUpperCase()}</div></div>`).join('')}</div>
      <div class="dots" id="dots">${LIST.map((k, i) => `<i class="${i ? '' : 'on'}"></i>`).join('')}</div>` : cardHTML(KEY)}
      <div class="og-side"><div class="e">${E.all ? 'Shaadi' : E.title}</div><div class="n">${GROOM.toUpperCase()}</div><div class="d">${E.all ? 'NIKKAH · BARAT · WALIMA<br>' : ''}${E.dateText.toUpperCase()}</div><div class="t">TAP TO OPEN YOUR INVITATION</div></div>
      <div class="hint">${E.all ? 'SWIPE TO SEE ALL THREE EVENTS<br>TAP A CARD TO TURN IT' : 'TAP THE CARD TO TURN IT'}<br><span class="arrow">↓</span> SCROLL FOR DETAILS</div>
    </section>
    <section class="sec"><div class="eyebrow">COUNTING DOWN</div><h2>Until the ${EVENTS[LIST[0]].title}</h2>
      <div class="count" id="count"><div><b>0</b><small>DAYS</small></div><div><b>0</b><small>HOURS</small></div><div><b>0</b><small>MINS</small></div><div><b>0</b><small>SECS</small></div></div></section>
    <section class="sec"><div class="eyebrow">WHEN &amp; WHERE</div><h2>Join us</h2>
      ${LIST.map(k => panelHTML(EVENTS[k])).join('')}</section>
    <section class="sec"><div class="eyebrow">KINDLY RESPOND</div><h2>RSVP</h2>
      <p class="note">Your presence and prayers mean the world to us.<br>Let us know you're coming, In Sha Allah.</p>
      <div class="btns">${PHONES.map(([n, w]) => `<a class="btn" target="_blank" rel="noopener" href="https://wa.me/${w}?text=${encodeURIComponent(rsvpText())}">${icon.wa}${n}</a>`).join('')}</div>
      <div class="btns"><a class="btn ghost" href="tel:+${PHONES[0][1]}">${icon.phone}CALL</a><button class="btn ghost" id="share">${icon.share}SHARE INVITE</button></div></section>
    <footer><div class="sig">With love,</div><div class="fam">THE HASSAN FAMILY</div></footer>
  </main>
  <div class="toast" id="toast"></div>`);
  document.querySelectorAll('.face > svg').forEach(s => ART[s.dataset.art](s));
}

function cardHTML(k) {
  const svg = `<svg viewBox="0 0 1000 1500" preserveAspectRatio="xMidYMid slice" data-art="${k}"></svg>`;
  return `<div class="stage"><div class="tilt"><div class="flipper t-${k}">
    <div class="face front">${svg}${frontHTML(EVENTS[k])}</div>
    <div class="face back">${svg}${backHTML()}</div></div></div></div>`;
}
function panelHTML(ev) {
  return `<div class="panel">${E.all ? `<div class="eyebrow" style="margin-bottom:10px">${ev.title.toUpperCase()}</div>` : ''}<div class="big">${ev.dateText.toUpperCase()}</div>
    <div class="rows">${ev.times.map(([k, v]) => `<div class="r"><span>${k.toUpperCase()}</span><b>${v}</b></div>`).join('')}</div>
    <div class="big" style="margin-top:22px">${ev.venue.toUpperCase()}</div><div class="mid">${ev.addr}</div>
    <div class="btns"><a class="btn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ev.venue + ', ' + ev.addr)}">${icon.pin}DIRECTIONS</a>
      <a class="btn ghost" target="_blank" rel="noopener" href="${gcal(ev)}">${icon.cal}GOOGLE CALENDAR</a>
      <button class="btn ghost" data-ics="${ev.key}">${icon.cal}APPLE / OUTLOOK</button></div></div>`;
}

function rsvpText() {
  return `Assalamu Alaikum! ${GUEST ? GUEST + ' will' : 'I will'}, In Sha Allah, attend the ${E.all ? 'wedding celebrations' : E.title} of ${GROOM} on ${E.dateText}. JazakAllah khair for the invitation!`;
}
const utc = s => new Date(s).toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
function gcal(ev) {
  const q = new URLSearchParams({ action: 'TEMPLATE', text: `${ev.title} of ${GROOM}`, dates: `${utc(ev.start)}/${utc(ev.end)}`, details: `${ev.times.map(t => t.join(' ')).join(', ')}\nInvitation: ${location.origin}${location.pathname}`, location: `${ev.venue}, ${ev.addr}` });
  return 'https://calendar.google.com/calendar/render?' + q;
}
function ics(ev) {
  const body = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Hassan Family//Invite//EN', 'BEGIN:VEVENT', `UID:${ev.key}-afaq-2026@invite`, `DTSTAMP:${utc(new Date().toISOString())}`,
    `DTSTART:${utc(ev.start)}`, `DTEND:${utc(ev.end)}`, `SUMMARY:${ev.title} of ${GROOM}`, `LOCATION:${ev.venue}\\, ${ev.addr.replace(/,/g, '\\,')}`,
    `DESCRIPTION:${ev.times.map(t => t.join(' ')).join('\\, ')}`, 'BEGIN:VALARM', 'TRIGGER:-PT3H', 'ACTION:DISPLAY', 'DESCRIPTION:Reminder', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([body], { type: 'text/calendar' }));
  a.download = `${ev.title}-Afaq-Hassan.ics`; a.click();
}
function toast(t) { const el = $('#toast'); el.textContent = t; el.classList.add('on'); setTimeout(() => el.classList.remove('on'), 2200); }

/* ---------------- interactions ---------------- */
function tiltCard() {
  const tilts = [...document.querySelectorAll('.tilt')], shines = document.querySelectorAll('.shine');
  let tx = 0, ty = 0, cx = 0, cy = 0, pointer = false, gyro = false, t0 = performance.now();
  const set = (x, y) => { tx = x; ty = y; };
  for (const tilt of tilts) {
    tilt.addEventListener('pointermove', e => {
      if (e.pointerType === 'touch') return;
      const r = tilt.getBoundingClientRect(); pointer = true;
      set(((e.clientX - r.left) / r.width - .5) * 2, ((e.clientY - r.top) / r.height - .5) * 2);
    });
    tilt.addEventListener('pointerleave', () => { pointer = false; });
    const flip = tilt.querySelector('.flipper');
    flip.addEventListener('click', () => flip.classList.toggle('flipped'));
  }
  window.addEventListener('deviceorientation', e => {
    if (e.gamma == null) return; gyro = true;
    set(Math.max(-1, Math.min(1, e.gamma / 25)), Math.max(-1, Math.min(1, (e.beta - 40) / 25)));
  });
  (function loop(now) {
    if (!pointer && !gyro) { const t = (now - t0) / 1000; tx = Math.sin(t * .7) * .35; ty = Math.cos(t * .9) * .25; }
    cx += (tx - cx) * .08; cy += (ty - cy) * .08;
    const tr = `rotateY(${(cx * 12).toFixed(2)}deg) rotateX(${(-cy * 10).toFixed(2)}deg)`;
    tilts.forEach(t => { t.style.transform = tr; });
    shines.forEach(s => { s.style.setProperty('--sx', `${50 + cx * 40}%`); s.style.setProperty('--sy', `${30 + cy * 40}%`); s.style.setProperty('--sw', `${50 + cx * 30}%`); });
    requestAnimationFrame(loop);
  })(t0);
}

function carousel() {
  const car = $('#car'); if (!car) return;
  const dots = [...document.querySelectorAll('#dots i')];
  car.addEventListener('scroll', () => {
    const i = Math.round(car.scrollLeft / car.clientWidth);
    dots.forEach((d, j) => d.classList.toggle('on', i === j));
  }, { passive: true });
  dots.forEach((d, i) => d.addEventListener('click', () => car.scrollTo({ left: i * car.clientWidth, behavior: 'smooth' })));
}

function countdown() {
  const els = document.querySelectorAll('#count b'), target = new Date(E.start).getTime();
  const tick = () => {
    let s = Math.max(0, Math.floor((target - Date.now()) / 1000));
    if (s === 0) { const sec = $('#count').closest('.sec'); sec.querySelector('h2').textContent = 'Alhamdulillah!'; }
    const v = [Math.floor(s / 86400), Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60];
    els.forEach((e, i) => { e.textContent = String(v[i]).padStart(i ? 2 : 1, '0'); });
  };
  tick(); setInterval(tick, 1000);
}

function reveal() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
  document.querySelectorAll('.sec').forEach(s => io.observe(s));
}

/* themed particles: stars, marigold petals or rose petals */
function particles() {
  const c = $('#fx'), x = c.getContext('2d'), dpr = Math.min(2, devicePixelRatio || 1);
  let W, H, P = [];
  const resize = () => { W = c.width = innerWidth * dpr; H = c.height = innerHeight * dpr; };
  resize(); addEventListener('resize', resize);
  const STAR = KEY === 'nikkah' || KEY === 'all';
  const R = Math.random, n = STAR ? 70 : 28;
  const mk = (init) => ({ x: R() * W, y: init ? R() * H : -20 * dpr, s: (STAR ? 1 + R() * 1.6 : 6 + R() * 7) * dpr, vy: (STAR ? .05 + R() * .15 : .4 + R() * .7) * dpr, vx: (R() - .5) * .4 * dpr, r: R() * 6, vr: (R() - .5) * .04, ph: R() * 6, hue: R() });
  for (let i = 0; i < n; i++) P.push(mk(true));
  const cols = KEY === 'barat' ? ['#f7a823', '#e07c06', '#ffc247', '#c2183a'] : ['#f3c3bb', '#e8a2a0', '#f9e0da', '#d98c86'];
  (function draw(t) {
    x.clearRect(0, 0, W, H);
    for (const p of P) {
      p.y += p.vy; p.x += p.vx + Math.sin(t / 1400 + p.ph) * .3 * dpr; p.r += p.vr;
      if (p.y > H + 30 * dpr) Object.assign(p, mk(false));
      x.save(); x.translate(p.x, p.y);
      if (STAR) {
        x.globalAlpha = .35 + .65 * Math.abs(Math.sin(t / 900 + p.ph));
        x.fillStyle = p.hue > .7 ? '#f3dba0' : '#ffffff';
        x.beginPath(); x.arc(0, 0, p.s, 0, 7); x.fill();
        if (p.hue > .9) { x.globalAlpha *= .6; x.fillRect(-p.s * 4, -.5 * dpr, p.s * 8, dpr); x.fillRect(-.5 * dpr, -p.s * 4, dpr, p.s * 8); }
      } else {
        x.rotate(p.r); x.globalAlpha = .85; x.fillStyle = cols[Math.floor(p.hue * cols.length)];
        x.beginPath(); x.ellipse(0, 0, p.s, p.s * .6, 0, 0, 7); x.fill();
        x.globalAlpha = .25; x.fillStyle = '#fff'; x.beginPath(); x.ellipse(-p.s * .25, -p.s * .15, p.s * .45, p.s * .2, 0, 0, 7); x.fill();
      }
      x.restore();
    }
    requestAnimationFrame(draw);
  })(0);
}

function openEnvelope() {
  const env = $('#env');
  if (env.classList.contains('open')) return;
  if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') DeviceOrientationEvent.requestPermission().catch(() => {});
  env.classList.add('open');
  setTimeout(() => env.classList.add('flapback'), 600);
  setTimeout(() => env.classList.add('rise'), 750);
  setTimeout(() => {
    $('#scene').classList.add('gone');
    document.body.classList.remove('locked');
    const m = $('#main'); m.classList.add('show', 'intro');
    scrollTo(0, 0);
  }, 2000);
  setTimeout(() => $('#scene').remove(), 2900);
}

build();
if (OG) {
  document.body.classList.add('og');
  $('#scene').remove();
} else {
  document.body.classList.add('locked');
  $('#seal').addEventListener('click', openEnvelope);
  $('#env').addEventListener('click', openEnvelope);
  document.querySelectorAll('[data-ics]').forEach(b => b.addEventListener('click', () => ics(EVENTS[b.dataset.ics])));
  $('#share').addEventListener('click', async () => {
    const url = location.origin + location.pathname;
    try { if (navigator.share) { await navigator.share({ title: document.title, text: `You're invited to the ${E.title} of ${GROOM}`, url }); return; } } catch (e) { return; }
    try { await navigator.clipboard.writeText(url); toast('LINK COPIED'); } catch (e) { prompt('Copy this link', url); }
  });
  tiltCard(); carousel(); countdown(); reveal(); particles();
}
