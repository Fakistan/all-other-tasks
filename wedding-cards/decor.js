// Shared procedural SVG ornaments for the wedding cards.
const NS = 'http://www.w3.org/2000/svg';

function rng(seed) {
  return () => {
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function el(tag, attrs, parent) {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(e);
  return e;
}

const deg = r => (r * 180) / Math.PI;

// Baby's breath: recursive thin stems ending in tiny white florets.
function gyp(g, R, x, y, ang, len, depth, o) {
  const x2 = x + Math.cos(ang) * len, y2 = y + Math.sin(ang) * len;
  const bend = (R() - 0.5) * 0.7;
  const cx = x + Math.cos(ang + bend) * len * 0.5, cy = y + Math.sin(ang + bend) * len * 0.5;
  el('path', { d: `M${x} ${y} Q${cx} ${cy} ${x2} ${y2}`, stroke: o.stem, 'stroke-width': 0.6 + depth * 0.45, fill: 'none', 'stroke-linecap': 'round' }, g);
  if (depth <= 0) { floret(g, R, x2, y2, o); return; }
  const n = 2 + Math.floor(R() * 2);
  for (let i = 0; i < n; i++) gyp(g, R, x2, y2, ang + (R() - 0.5) * 1.5, len * (0.5 + R() * 0.3), depth - 1, o);
  if (R() < 0.5) floret(g, R, x2, y2, o);
}

function floret(g, R, x, y, o) {
  const r = o.r * (0.7 + R() * 0.6);
  const f = el('g', { transform: `translate(${x} ${y})` }, g);
  const off = R() * 6;
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * Math.PI * 2 + off;
    el('circle', { cx: Math.cos(a) * r * 0.5, cy: Math.sin(a) * r * 0.5, r: r * 0.55, fill: o.petal, stroke: o.edge, 'stroke-width': 0.4 }, f);
  }
  el('circle', { r: r * 0.28, fill: o.center }, f);
}

// Layered rose built from rotated petal shapes; gradient id must exist in <defs>.
function rose(g, x, y, r, o) {
  const grp = el('g', { transform: `translate(${x} ${y})` }, g);
  const layers = [[8, 1.0], [7, 0.82], [6, 0.64], [5, 0.47], [4, 0.32]];
  layers.forEach(([n, s], L) => {
    const h = r * s, w = h * 0.78;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * 360 + L * 23;
      el('path', {
        d: `M0 0 C${-w} ${-h * 0.25} ${-w * 0.85} ${-h} 0 ${-h} C${w * 0.85} ${-h} ${w} ${-h * 0.25} 0 0Z`,
        fill: `url(#${o.grad})`, stroke: o.stroke, 'stroke-width': 0.8, transform: `rotate(${a})`,
      }, grp);
    }
  });
  for (let i = 0; i < 4; i++) {
    const rr = r * (0.08 + i * 0.05);
    el('path', { d: `M${-rr} 0 A${rr} ${rr} 0 1 1 ${rr * 0.6} ${rr * 0.7}`, fill: 'none', stroke: o.stroke, 'stroke-width': 1.2, transform: `rotate(${i * 80})` }, grp);
  }
  return grp;
}

function leaf(g, x, y, ang, len, w, fill, stroke) {
  const grp = el('g', { transform: `translate(${x} ${y}) rotate(${deg(ang)})` }, g);
  el('path', { d: `M0 0 C${len * 0.3} ${-w} ${len * 0.72} ${-w} ${len} 0 C${len * 0.72} ${w} ${len * 0.3} ${w} 0 0Z`, fill, stroke: stroke || 'none', 'stroke-width': 0.8 }, grp);
  el('path', { d: `M${len * 0.04} 0 Q${len * 0.5} ${-w * 0.08} ${len * 0.94} 0`, fill: 'none', stroke: stroke || 'rgba(0,0,0,.25)', 'stroke-width': 0.9, opacity: 0.8 }, grp);
  return grp;
}

// Curved stem with alternating leaves tapering to the tip.
function sprig(g, R, x, y, ang, len, o) {
  const curve = o.curve ?? 0.25;
  const pts = [];
  const steps = 24;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps, a = ang + curve * t * t * (o.flip ? -1 : 1);
    if (i === 0) pts.push([x, y]);
    else { const p = pts[i - 1]; pts.push([p[0] + Math.cos(a) * len / steps, p[1] + Math.sin(a) * len / steps]); }
  }
  el('path', { d: 'M' + pts.map(p => p.join(' ')).join(' L'), fill: 'none', stroke: o.stem, 'stroke-width': o.stemW || 2, 'stroke-linecap': 'round' }, g);
  const n = o.leaves || 9;
  for (let i = 1; i <= n; i++) {
    const t = i / (n + 0.5), idx = Math.round(t * steps), p = pts[idx], q = pts[Math.min(idx + 1, steps)];
    const da = Math.atan2(q[1] - p[1], q[0] - p[0]);
    const side = i % 2 ? 1 : -1, size = o.size * (1 - t * 0.5) * (0.85 + R() * 0.3);
    const fill = o.fills[Math.floor(R() * o.fills.length)];
    leaf(g, p[0], p[1], da + side * (o.spread || 0.75), size, size * (o.ratio || 0.28), fill, o.leafStroke);
  }
  const tip = pts[steps], pre = pts[steps - 1];
  leaf(g, tip[0], tip[1], Math.atan2(tip[1] - pre[1], tip[0] - pre[0]), o.size * 0.55, o.size * 0.55 * (o.ratio || 0.28), o.fills[0], o.leafStroke);
}

function daisy(g, x, y, r, o) {
  const grp = el('g', { transform: `translate(${x} ${y})` }, g);
  for (let i = 0; i < 16; i++) el('ellipse', { cx: 0, cy: -r * 0.55, rx: r * 0.13, ry: r * 0.45, fill: o.petal, stroke: o.edge, 'stroke-width': 0.5, transform: `rotate(${i * 22.5})` }, grp);
  el('circle', { r: r * 0.24, fill: o.center, stroke: o.centerEdge || 'none' }, grp);
  return grp;
}

// Small gold diamond-and-dots divider ornament.
function ornament(g, x, y, s, color) {
  const grp = el('g', { transform: `translate(${x} ${y}) scale(${s})`, fill: color }, g);
  el('path', { d: 'M0 -12 L6 0 L0 12 L-6 0Z' }, grp);
  for (const a of [0, 90, 180, 270]) el('path', { d: 'M0 -4 C6 -10 12 -10 14 -4 C10 -6 6 -5 0 0Z', transform: `rotate(${a})`, opacity: 0.85 }, grp);
  return grp;
}
