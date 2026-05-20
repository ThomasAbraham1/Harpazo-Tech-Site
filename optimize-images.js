import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const unsplashUrls = [
  "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
];

const publicAssetsDir = path.join(__dirname, 'public', 'assets');
const staggeredDir = path.join(publicAssetsDir, 'staggered');
const brandLogosDir = path.join(publicAssetsDir, 'brandLogos');

// Ensure directories exist
if (!fs.existsSync(staggeredDir)) fs.mkdirSync(staggeredDir, { recursive: true });

async function downloadAndOptimize(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }

      const chunks = [];
      response.on('data', chunk => chunks.push(chunk));
      response.on('end', async () => {
        const buffer = Buffer.concat(chunks);
        const outputPath = path.join(staggeredDir, filename);
        
        try {
          await sharp(buffer)
            .webp({ quality: 80, effort: 6 })
            .toFile(outputPath);
          console.log(`✅ Optimized Unsplash image: ${filename}`);
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', reject);
  });
}

async function optimizeLocalFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }
  
  const parsedPath = path.parse(filePath);
  if (parsedPath.ext === '.webp') return; // Skip if already WebP
  
  const outputPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);
  
  try {
    await sharp(filePath)
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);
    console.log(`✅ Optimized local image: ${path.basename(outputPath)}`);
    // Delete the original
    fs.unlinkSync(filePath);
  } catch (err) {
    console.error(`❌ Failed to optimize ${filePath}:`, err);
  }
}

async function run() {
  console.log('🚀 Starting image optimization...');

  // 1. Download and optimize Unsplash images
  const unsplashPromises = unsplashUrls.map((url, index) => 
    downloadAndOptimize(url, `image-${index + 1}.webp`)
  );
  await Promise.all(unsplashPromises);

  // 2. Optimize specific local images in public/assets
  const testimonialImages = ['Jun.png', 'Sanjay.png', 'John.png', 'Tryfecta.png'];
  for (const img of testimonialImages) {
    await optimizeLocalFile(path.join(publicAssetsDir, img));
  }

  // 3. Optimize all brand logos
  if (fs.existsSync(brandLogosDir)) {
    const brandLogos = fs.readdirSync(brandLogosDir);
    for (const file of brandLogos) {
      if (file.endsWith('.png') || file.endsWith('.jpg')) {
        await optimizeLocalFile(path.join(brandLogosDir, file));
      }
    }
  }

  console.log('🎉 All images optimized successfully!');
}

run().catch(console.error);
