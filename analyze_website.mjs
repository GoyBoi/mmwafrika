import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000');
  
  // Wait for the page to load
  await page.waitForTimeout(2000);
  
  // Take a full page screenshot of homepage
  console.log('Taking homepage screenshot...');
  await page.screenshot({ path: 'homepage_screenshot.png', fullPage: true });
  
  // Click the "Shop Now" button to go to products
  console.log('Clicking "Shop Now" button...');
  await page.click('text=Shop Now');
  
  // Wait for products page to load
  await page.waitForTimeout(3000);
  
  // Take screenshot of products page
  console.log('Taking products page screenshot...');
  await page.screenshot({ path: 'products_screenshot.png', fullPage: true });
  
  // Get information about product card dimensions
  const productCards = await page.$$('.MuiCard-root');
  console.log(`Found ${productCards.length} product cards`);
  
  if (productCards.length > 0) {
    // Check the first few product cards
    for (let i = 0; i < Math.min(productCards.length, 3); i++) {
      const card = productCards[i];
      const boundingBox = await card.boundingBox();
      console.log(`Product card ${i + 1}: ${Math.round(boundingBox.width)}x${Math.round(boundingBox.height)}px`);
      
      // Check if the card is square (width and height should be approximately equal)
      const width = Math.round(boundingBox.width);
      const height = Math.round(boundingBox.height);
      const isSquare = Math.abs(width - height) < 50;
      console.log(`Product card ${i + 1} is ${isSquare ? 'approximately square' : 'not square'} (${width}x${height})`);
    }
    
    // Check image dimensions within the first product card
    const firstCard = productCards[0];
    const images = await firstCard.$$('img');
    if (images.length > 0) {
      const image = images[0];
      const imgBoundingBox = await image.boundingBox();
      console.log(`First product image: ${Math.round(imgBoundingBox.width)}x${Math.round(imgBoundingBox.height)}px`);
      
      // Check if image container is square
      const imgContainer = await image.evaluateHandle(el => el.parentElement);
      const containerBoundingBox = await imgContainer.boundingBox();
      console.log(`Image container: ${Math.round(containerBoundingBox.width)}x${Math.round(containerBoundingBox.height)}px`);
      const isContainerSquare = Math.abs(containerBoundingBox.width - containerBoundingBox.height) < 50;
      console.log(`Image container is ${isContainerSquare ? 'approximately square' : 'not square'}`);
    }
  } else {
    console.log('No product cards found on the page');
  }
  
  await browser.close();
  console.log('Analysis complete. Screenshots saved.');
})();