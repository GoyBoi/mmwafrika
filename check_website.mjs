import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000');
  
  console.log('Taking screenshot...');
  await page.screenshot({ path: 'website_screenshot.png' });
  
  console.log('Screenshot saved as website_screenshot.png');
  
  await browser.close();
})();