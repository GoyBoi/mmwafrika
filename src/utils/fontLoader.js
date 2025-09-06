import FontFaceObserver from 'fontfaceobserver';

/**
 * Font loading utility for MMWAFRIKA
 * Uses FontFaceObserver to detect when custom fonts have loaded
 * and applies appropriate CSS classes to the document
 */

// Define the fonts we want to load
const fontsToLoad = [
  { family: 'Merienda', weight: '400' },
  { family: 'Merienda', weight: '500' },
  { family: 'Merienda', weight: '600' },
  { family: 'Merienda', weight: '700' },
  { family: 'Cormorant Garamond', weight: '400' },
  { family: 'Cormorant Garamond', weight: '600' },
  { family: 'Cormorant Garamond', weight: '700' },
  { family: 'Dancing Script', weight: '400' },
  { family: 'Dancing Script', weight: '700' }
];

// Load all fonts and apply CSS class when ready
export async function loadFonts() {
  try {
    // Create an array of font loading promises
    const fontLoadingPromises = fontsToLoad.map(font => {
      const observer = new FontFaceObserver(font.family, {
        weight: font.weight
      });
      return observer.load(null, 5000); // 5 second timeout
    });

    // Wait for all fonts to load
    await Promise.all(fontLoadingPromises);
    
    // Add CSS class to indicate fonts are loaded
    document.documentElement.classList.add('fonts-loaded');
    
    console.log('All custom fonts have loaded successfully');
    return true;
  } catch (error) {
    console.warn('Some fonts failed to load within the timeout period:', error);
    
    // Add CSS class to indicate font loading failed
    document.documentElement.classList.add('fonts-failed');
    
    return false;
  }
}

// Initialize font loading when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFonts);
  } else {
    loadFonts();
  }
}

export default { loadFonts };