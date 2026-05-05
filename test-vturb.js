const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  const vturbInfo = await page.evaluate(() => {
    const el = document.querySelector('vturb-smartplayer');
    if (!el) return 'No element';
    
    // Check shadow root
    const shadow = el.shadowRoot;
    const video = shadow ? shadow.querySelector('video') : null;
    const iframe = shadow ? shadow.querySelector('iframe') : null;
    
    let time = 0;
    if (video) time = video.currentTime;
    
    // properties of el
    const keys = [];
    for(let k in el) {
      if(k.toLowerCase().includes('time') || k.toLowerCase().includes('play')) keys.push(k);
    }

    return {
      hasShadow: !!shadow,
      hasVideoInShadow: !!video,
      hasIframeInShadow: !!iframe,
      currentTimeFromVideo: time,
      elProperties: keys
    };
  });
  
  console.log(JSON.stringify(vturbInfo, null, 2));
  await browser.close();
})();
