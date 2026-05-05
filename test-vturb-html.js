const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  const html = await page.evaluate(() => {
    const el = document.querySelector('vturb-smartplayer');
    return el ? el.innerHTML : 'No element';
  });
  
  console.log("INNER HTML length: ", html.length);
  if (html.length < 500) {
    console.log("HTML: ", html);
  } else {
    console.log("HTML snippet: ", html.substring(0, 500));
  }
  await browser.close();
})();
