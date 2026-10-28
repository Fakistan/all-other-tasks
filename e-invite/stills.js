// Still images for guests without internet: one portrait card per event plus a combined image.
const { chromium } = require('playwright'); const path = require('path');
const root = 'file://' + __dirname, out = path.join(__dirname, 'images');
(async () => {
  const b = await chromium.launch();
  for (const k of ['nikkah', 'barat', 'walima']) {
    const p = await b.newPage({ viewport: { width: 1080, height: 1620 }, deviceScaleFactor: 2 });
    await p.goto(`${root}/${k}/index.html?og`); await p.evaluate(() => document.fonts.ready);
    await p.addStyleTag({ content: `body.og .og-side{display:none!important} body.og .hero{height:1620px;min-height:1620px;padding:0}
      body.og .tilt{width:880px;transform:none!important} .face{box-shadow:0 60px 120px -40px rgba(0,0,0,.6),0 20px 40px -20px rgba(0,0,0,.4)}` });
    await p.waitForTimeout(400);
    await p.screenshot({ path: path.join(out, `${k}-invite.jpg`), type: 'jpeg', quality: 92 });
    await p.close();
  }
  const p = await b.newPage({ viewport: { width: 1600, height: 1200 }, deviceScaleFactor: 2 });
  await p.goto(`${root}/all/index.html?og`); await p.evaluate(() => document.fonts.ready);
  await p.addStyleTag({ content: `body.og .og-side{display:none!important} body.og.all .hero{height:1200px;min-height:1200px;flex-direction:column;gap:40px;padding:0}
    body.og.all .carousel{gap:50px} body.og.all .tilt{width:420px;transform:none!important}
    .ttl{text-align:center} .ttl .e{font-family:'Great Vibes',cursive;font-size:96px;color:#f3dba0;line-height:1}
    .ttl .n{font-family:'Cinzel',serif;font-size:22px;letter-spacing:.4em;color:#b6aabb;margin-top:8px}` });
  await p.evaluate(() => document.querySelector('.hero').insertAdjacentHTML('afterbegin', '<div class="ttl"><div class="e">Shaadi Mubarak</div><div class="n">HAFIZ AFAQ HASSAN · 19 – 22 NOVEMBER 2026</div></div>'));
  await p.waitForTimeout(400);
  await p.screenshot({ path: path.join(out, 'all-events.jpg'), type: 'jpeg', quality: 90 });
  await b.close(); console.log('stills done');
})();
