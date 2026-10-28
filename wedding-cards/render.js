// Renders each card HTML to a 2x PNG and a WhatsApp-friendly JPG.
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const names = process.argv.slice(2).length ? process.argv.slice(2) : ['nikkah', 'barat', 'walima'];
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1620 }, deviceScaleFactor: 2 });
  for (const n of names) {
    await page.goto('file://' + path.join(__dirname, n + '.html'));
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);
    const card = page.locator('#card');
    await card.screenshot({ path: path.join(__dirname, 'out', n + '.png') });
    await card.screenshot({ path: path.join(__dirname, 'out', n + '.jpg'), type: 'jpeg', quality: 92 });
    console.log('rendered', n);
  }
  await browser.close();
})();
