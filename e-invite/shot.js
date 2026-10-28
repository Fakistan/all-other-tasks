// Screenshots for review and link-preview images.
const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const b = await chromium.launch(); const root = 'file://' + __dirname;
  const mode = process.argv[2] || 'review';
  for (const k of (process.argv[3] || 'nikkah,barat,walima,all').split(',')) {
    if (mode === 'og') {
      const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
      await p.goto(`${root}/${k}/index.html?og`); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
      await p.screenshot({ path: path.join(__dirname, 'og', k + '.jpg'), type: 'jpeg', quality: 88 });
      await p.setViewportSize({ width: 200, height: 200 });
      await p.close();
    } else {
      const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, hasTouch: true, isMobile: true });
      const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => m.type() === 'error' && errs.push(m.text()));
      await p.goto(`${root}/${k}/index.html?to=Khan%20Family`); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
      await p.screenshot({ path: `${process.env.OUT}/${k}-1env.png` });
      await p.click('#seal', { force: true }); await p.waitForTimeout(1200);
      await p.screenshot({ path: `${process.env.OUT}/${k}-2opening.png` });
      await p.waitForTimeout(2600);
      await p.screenshot({ path: `${process.env.OUT}/${k}-3card.png` });
      await p.click('.flipper', { force: true }); await p.waitForTimeout(1300);
      await p.screenshot({ path: `${process.env.OUT}/${k}-4back.png` });
      await p.evaluate(() => { document.querySelectorAll('.sec').forEach(s => s.classList.add('in')); });
      await p.screenshot({ path: `${process.env.OUT}/${k}-5full.png`, fullPage: true });
      console.log(k, errs.length ? errs : 'ok');
      await p.close();
    }
  }
  await b.close();
})();
