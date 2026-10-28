// Writes the three event pages with link-preview tags for the given origin.
const fs = require('fs'), path = require('path');
const origin = (process.argv[2] || 'https://example.com').replace(/\/$/, '');
const pages = {
  nikkah: ['Nikkah of Hafiz Afaq Hassan', 'Thursday, 19th November 2026 · 7:00 PM · Serena Royal Wedding Hall, Peshawar', '#0b1330'],
  barat: ['Barat of Hafiz Afaq Hassan', 'Saturday, 21st November 2026 · 7:00 PM · Javed House, Peshawar', '#3a0711'],
  walima: ['Walima of Hafiz Afaq Hassan', 'Sunday, 22nd November 2026 · 6:30 PM · Elegance Arena Wedding Hall, Peshawar', '#f1dbd4'],
};
for (const [k, [title, desc, color]] of Object.entries(pages)) {
  fs.writeFileSync(path.join(__dirname, k, 'index.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta name="theme-color" content="${color}">
<meta property="og:type" content="website">
<meta property="og:title" content="You're invited · ${title}">
<meta property="og:description" content="${desc}">
<meta property="og:url" content="${origin}/${k}/">
<meta property="og:image" content="${origin}/og/${k}.jpg">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="../og/${k}-icon.png">
<link rel="stylesheet" href="../app.css">
</head><body class="${k}" data-event="${k}">
<script src="../decor.js"></script><script src="../app.js"></script>
</body></html>
`);
}
console.log('built for', origin);
