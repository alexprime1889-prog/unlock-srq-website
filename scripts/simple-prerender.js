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
  { path: '/about-us', file: 'about-us/index.html' }
];

// Find system Chromium path
function getChromiumPath() {
  const paths = [
    '/nix/store/zi4f80l169xlmivz8vja8wlphq74qqk0-chromium-125.0.6422.141/bin/chromium-browser',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium'
  ];
  
  for (const p of paths) {
    if (fs.existsSync(p)) return p;
  }
  
  return null;
}

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
  
  // Find Chromium
  const chromiumPath = getChromiumPath();
  if (!chromiumPath) {
    console.error('❌ Error: Chromium not found. Install with: packager_tool system chromium');
    process.exit(1);
  }
  
  console.log(`📦 Using Chromium: ${chromiumPath}\n`);
  
  // Launch browser
  const browser = await puppeteer.launch({
    executablePath: chromiumPath,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-web-security'
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
    console.log('🎯 Next steps:');
    console.log('  1. Run: npm start');
    console.log('  2. Open browser and view source');
    console.log('  3. Verify Google can see full HTML content\n');
    
  } finally {
    await browser.close();
    server.kill();
  }
}

main().catch(error => {
  console.error('\n❌ Pre-rendering failed:', error);
  process.exit(1);
});
