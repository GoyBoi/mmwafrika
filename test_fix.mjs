import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Wait for content to load
  await page.waitForTimeout(3000);
  
  // Take screenshot of homepage
  console.log('Taking homepage screenshot...');
  await page.screenshot({ path: 'homepage_fixed.png', fullPage: true });
  
  // Click the "Shop Now" button
  console.log('Clicking "Shop Now" button...');
  await page.click('button:has-text("Shop Now")');
  
  // Wait for products page to load
  await page.waitForTimeout(3000);
  
  // Take screenshot of products page
  console.log('Taking products page screenshot...');
  await page.screenshot({ path: 'products_fixed.png', fullPage: true });
  
  // Get product card information
  const productCards = await page.$$('.MuiCard-root');
  console.log(`Found ${productCards.length} product cards`);
  
  if (productCards.length > 0) {
    // Check dimensions of first card
    const firstCard = productCards[0];
    const boundingBox = await firstCard.boundingBox();
    console.log(`First product card: ${Math.round(boundingBox.width)}x${Math.round(boundingBox.height)}px`);
    
    // Check if it's square (approximately)
    const isSquare = Math.abs(boundingBox.width - boundingBox.height) < 50;
    console.log(`First product card is ${isSquare ? 'approximately square' : 'not square'}`);
    
    // Check image inside the card
    const image = await firstCard.$('img');
    if (image) {
      const imgBox = await image.boundingBox();
      console.log(`First product image: ${Math.round(imgBox.width)}x${Math.round(imgBox.height)}px`);
    }
  }
  
  await browser.close();
  console.log('Analysis complete. Check the screenshots.');
})();