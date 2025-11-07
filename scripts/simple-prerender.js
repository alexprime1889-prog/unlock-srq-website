#!/usr/bin/env node

/**
 * Simple Pre-rendering Script for Unlock SRQ
 * Uses modern Puppeteer with system Chromium for NixOS compatibility
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist/public');

const pages = [
  { path: '/', file: 'index.html' },
  { path: '/booking', file: 'booking/index.html' },
  { path: '/payment', file: 'payment/index.html' },
  { path: '/automotive-services', file: 'automotive-services/index.html' },
  { path: '/automotive-products', file: 'automotive-products/index.html' },
  { path: '/locksmith-north-port', file: 'locksmith-north-port/index.html' },
  { path: '/locksmith-port-charlotte', file: 'locksmith-port-charlotte/index.html' },
  { path: '/locksmith-sarasota', file: 'locksmith-sarasota/index.html' },
  { path: '/locksmith-punta-gorda', file: 'locksmith-punta-gorda/index.html' },
  { path: '/locksmith-venice-fl', file: 'locksmith-venice-fl/index.html' },
  { path: '/locksmith-englewood', file: 'locksmith-englewood/index.html' },
  { path: '/locksmith-bradenton', file: 'locksmith-bradenton/index.html' },
  { path: '/emergency-locksmith-charlotte-county', file: 'emergency-locksmith-charlotte-county/index.html' },
  { path: '/about-us', file: 'about-us/index.html' },
  { path: '/privacy-policy', file: 'privacy-policy/index.html' },
  { path: '/terms-of-service', file: 'terms-of-service/index.html' }
];

// Puppeteer will use its bundled Chromium automatically
// No need for manual path detection

async function prerenderPage(browser, url, outputPath) {
  const page = await browser.newPage();
  
  try {
    console.log(`  ⏳ Loading: ${url}`);
    
    // Navigate and wait for content
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for React to render
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Get full HTML
    const html = await page.content();
    
    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write HTML file
    fs.writeFileSync(outputPath, html, 'utf8');
    
    console.log(`  ✅ Generated: ${outputPath.replace(distDir, '')}`);
    
  } catch (error) {
    console.error(`  ❌ Failed: ${url}`, error.message);
  } finally {
    await page.close();
  }
}

async function main() {
  console.log('🚀 Starting Simple Pre-renderer for Unlock SRQ\n');
  
  // Check if dist exists
  if (!fs.existsSync(distDir)) {
    console.error('❌ Error: dist/public not found. Run "npm run build" first.');
    process.exit(1);
  }
  
  console.log('📦 Using Puppeteer bundled Chromium\n');
  
  // Launch browser with bundled Chromium
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });
  
  console.log('🌐 Pre-rendering pages...\n');
  
  // Start local server to serve built files
  const { spawn } = await import('child_process');
  const server = spawn('npx', ['serve', '-s', distDir, '-l', '3000'], {
    stdio: 'ignore'
  });
  
  // Wait for server to start (increased to 4 seconds for reliability)
  console.log('⏳ Waiting for server to start...\n');
  await new Promise(resolve => setTimeout(resolve, 4000));
  
  try {
    // Pre-render each page
    for (const { path: urlPath, file } of pages) {
      const url = `http://localhost:3000${urlPath}`;
      const outputPath = path.join(distDir, file);
      
      await prerenderPage(browser, url, outputPath);
    }
    
    console.log('\n✅ Pre-rendering complete!');
    console.log(`📊 Generated ${pages.length} static HTML pages\n`);
    
    // Copy pre-rendered files from dist/public/ to server/public/
    // This is required because production server serves from server/public/
    console.log('📋 Copying pre-rendered files to server/public/...\n');
    const serverPublicDir = path.join(projectRoot, 'server/public');
    
    // Remove old server/public/ directory if it exists
    if (fs.existsSync(serverPublicDir)) {
      fs.rmSync(serverPublicDir, { recursive: true });
    }
    
    // Copy all files from dist/public/ to server/public/
    const { execSync } = await import('child_process');
    execSync(`cp -r ${distDir} ${serverPublicDir}`, { encoding: 'utf8' });
    
    console.log('✅ Files copied to server/public/\n');
    
    console.log('🎯 Next steps:');
    console.log('  1. Click "Deploy" in Replit');
    console.log('  2. Google will see full HTML content');
    console.log('  3. Verify with view-source: on live URL\n');
    
  } finally {
    await browser.close();
    server.kill();
  }
}

main().catch(error => {
  console.error('\n❌ Pre-rendering failed:', error);
  process.exit(1);
});
