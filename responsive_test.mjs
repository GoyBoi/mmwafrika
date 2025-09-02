import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  
  // Test on different screen sizes
  const viewports = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1280, height: 800 }
  ];
  
  for (const viewport of viewports) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    
    console.log(`Testing on ${viewport.name} (${viewport.width}x${viewport.height})`);
    
    // Test homepage
    console.log('  Navigating to homepage...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `responsive_${viewport.name}_homepage.png`, fullPage: true });
    
    // Test products page
    console.log('  Navigating to products page...');
    await page.click('button:has-text("Shop Now")');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `responsive_${viewport.name}_products.png`, fullPage: true });
    
    // Test cart page
    console.log('  Adding item to cart and navigating to cart...');
    const firstAddButton = await page.$('.MuiCardActions-root button');
    if (firstAddButton) {
      await firstAddButton.click();
      await page.waitForTimeout(1000);
    }
    
    const cartIcon = await page.$('.MuiBadge-root');
    if (cartIcon) {
      await cartIcon.click();
      await page.waitForTimeout(2000);
      await page.screenshot({ path: `responsive_${viewport.name}_cart.png`, fullPage: true });
    }
    
    await page.close();
  }
  
  await browser.close();
  console.log('Responsive design testing complete. Check the screenshots.');
})();