import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Wait for content to load
  await page.waitForTimeout(3000);
  
  // Analyze homepage
  console.log('=== HOMEPAGE ANALYSIS ===');
  await page.screenshot({ path: 'analysis_homepage.png', fullPage: true });
  
  // Check homepage elements
  const homepageTitle = await page.$eval('h2', el => el.textContent);
  console.log('Homepage title:', homepageTitle);
  
  const shopNowButton = await page.$('button:has-text(\"Shop Now\")');
  if (shopNowButton) {
    const buttonBox = await shopNowButton.boundingBox();
    console.log(`Shop Now button: ${Math.round(buttonBox.width)}x${Math.round(buttonBox.height)}px`);
  }
  
  // Navigate to products page
  console.log('\n=== PRODUCTS PAGE ANALYSIS ===');
  await page.click('button:has-text(\"Shop Now\")');
  await page.waitForTimeout(3000);
  
  await page.screenshot({ path: 'analysis_products.png', fullPage: true });
  
  // Analyze product cards
  const productCards = await page.$$('.MuiCard-root');
  console.log(`Found ${productCards.length} product cards`);
  
  if (productCards.length > 0) {
    // Check dimensions of first few cards
    for (let i = 0; i < Math.min(productCards.length, 3); i++) {
      const card = productCards[i];
      const boundingBox = await card.boundingBox();
      console.log(`Product card ${i + 1}: ${Math.round(boundingBox.width)}x${Math.round(boundingBox.height)}px`);
      
      // Check if it's square (approximately)
      const isSquare = Math.abs(boundingBox.width - boundingBox.height) < 50;
      console.log(`Product card ${i + 1} is ${isSquare ? 'approximately square' : 'not square'}`);
      
      // Check image inside the card
      const image = await card.$('img');
      if (image) {
        const imgBox = await image.boundingBox();
        console.log(`  Product image: ${Math.round(imgBox.width)}x${Math.round(imgBox.height)}px`);
        
        // Check image aspect ratio
        const aspectRatio = imgBox.width / imgBox.height;
        console.log(`  Image aspect ratio: ${aspectRatio.toFixed(2)}`);
      }
      
      // Check add to cart button
      const addButton = await card.$('button:has-text(\"Add to Cart\")');
      if (addButton) {
        const btnBox = await addButton.boundingBox();
        console.log(`  Add to Cart button: ${Math.round(btnBox.width)}x${Math.round(btnBox.height)}px`);
      }
    }
  }
  
  // Add a product to cart and go to cart page
  console.log('\n=== CART PAGE ANALYSIS ===');
  if (productCards.length > 0) {
    const firstAddButton = await productCards[0].$('button:has-text(\"Add to Cart\")');
    if (firstAddButton) {
      await firstAddButton.click();
      await page.waitForTimeout(1000);
    }
  }
  
  // Navigate to cart
  const cartIcon = await page.$('.MuiBadge-root');
  if (cartIcon) {
    await cartIcon.click();
    await page.waitForTimeout(3000);
    
    await page.screenshot({ path: 'analysis_cart.png', fullPage: true });
    
    // Check cart items
    const cartItems = await page.$$('.MuiTableBody-root tr');
    console.log(`Found ${cartItems.length} items in cart`);
    
    if (cartItems.length > 0) {
      const firstItem = cartItems[0];
      const itemImage = await firstItem.$('img');
      if (itemImage) {
        const imgBox = await itemImage.boundingBox();
        console.log(`Cart item image: ${Math.round(imgBox.width)}x${Math.round(imgBox.height)}px`);
      }
    }
  }
  
  // Navigate to checkout
  console.log('\n=== CHECKOUT PAGE ANALYSIS ===');
  const checkoutButton = await page.$('button:has-text(\"Proceed to Checkout\")');
  if (checkoutButton) {
    await checkoutButton.click();
    await page.waitForTimeout(3000);
    
    await page.screenshot({ path: 'analysis_checkout.png', fullPage: true });
    
    // Check form elements
    const formFields = await page.$$('input[type=\"text\"]');
    console.log(`Found ${formFields.length} form fields`);
    
    // Check stepper
    const steps = await page.$$('.MuiStep-root');
    console.log(`Found ${steps.length} checkout steps`);
  }
  
  await browser.close();
  console.log('\nAnalysis complete. Check the screenshots.');
})();