import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const portfolioDir = path.join(rootDir, 'portfolio');
const distDir = path.join(rootDir, 'dist');
const portfolioDistDir = path.join(portfolioDir, 'dist');
const targetPortfolioDir = path.join(distDir, 'thomas');

try {
  console.log('--- Building Main Site ---');
  execSync('vite build', { stdio: 'inherit', cwd: rootDir });

  console.log('\n--- Building Portfolio Site ---');
  // Install dependencies if needed (Render doesn't install sub-directories automatically)
  if (!fs.existsSync(path.join(portfolioDir, 'node_modules'))) {
    console.log('Installing portfolio dependencies...');
    execSync('npm install', { stdio: 'inherit', cwd: portfolioDir });
  }
  
  // Build portfolio
  execSync('npm run build', { stdio: 'inherit', cwd: portfolioDir });

  console.log('\n--- Merging Builds ---');
  // Create thomas directory inside main dist
  if (!fs.existsSync(targetPortfolioDir)) {
    fs.mkdirSync(targetPortfolioDir, { recursive: true });
  }

  // Copy portfolio dist to main dist/thomas
  fs.cpSync(portfolioDistDir, targetPortfolioDir, { recursive: true });
  
  console.log('\n✅ Successfully built both projects!');
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
