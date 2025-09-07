import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory containing the images
const imageDir = path.join(__dirname, '..', 'products_and_logo');

// Function to optimize images
async function optimizeImages() {
  try {
    // Read all files in the directory
    const files = await fs.readdir(imageDir);
    
    // Filter for JPG files
    const jpgFiles = files.filter(file => 
      path.extname(file).toLowerCase() === '.jpg' && 
      file !== 'placeholder.jpg' && 
      file !== 'logo.jpg'
    );
    
    console.log(`Found ${jpgFiles.length} JPG files to optimize`);
    
    // Process each image
    for (const file of jpgFiles) {
      const filePath = path.join(imageDir, file);
      
      // Get file stats to check size
      const stats = await fs.stat(filePath);
      const fileSizeInMB = stats.size / (1024 * 1024);
      
      // Only optimize files larger than 1MB
      if (fileSizeInMB > 1) {
        console.log(`Optimizing ${file} (${fileSizeInMB.toFixed(2)} MB)`);
        
        // Optimize the image
        const optimizedBuffer = await sharp(filePath)
          .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 80, progressive: true })
          .toBuffer();
          
        // Save the optimized image
        await fs.writeFile(filePath, optimizedBuffer);
        
        // Get new file size
        const newStats = await fs.stat(filePath);
        const newSizeInMB = newStats.size / (1024 * 1024);
        
        console.log(`Optimized ${file}: ${fileSizeInMB.toFixed(2)} MB -> ${newSizeInMB.toFixed(2)} MB (${((fileSizeInMB - newSizeInMB) / fileSizeInMB * 100).toFixed(1)}% reduction)`);
      }
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

// Run the optimization
optimizeImages();