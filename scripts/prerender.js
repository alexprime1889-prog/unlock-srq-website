#!/usr/bin/env node

/**
 * Pre-rendering script for generating static HTML
 * This runs react-snap to convert React SPA into static HTML files
 * Run after: npm run build
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

console.log('🚀 Starting pre-rendering with react-snap...\n');

// React-snap configuration
const reactSnapConfig = {
  source: 'dist/public',
  minifyHtml: {
    collapseWhitespace: false,
    removeComments: false
  },
  puppeteerArgs: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-accelerated-2d-canvas',
    '--disable-gpu'
  ],
  skipThirdPartyRequests: true,
  cacheAjaxRequests: true,
  crawl: true,
  include: [
    '/',
    '/booking',
    '/payment',
    '/automotive-services',
    '/automotive-products',
    '/locksmith-north-port',
    '/locksmith-port-charlotte',
    '/locksmith-sarasota',
    '/locksmith-punta-gorda',
    '/locksmith-venice-fl',
    '/locksmith-englewood',
    '/locksmith-bradenton',
    '/emergency-locksmith-charlotte-county',
    '/about-us'
  ]
};

// Write temporary config file
import { writeFileSync } from 'fs';
const configPath = join(projectRoot, 'package.json.temp');

// Read original package.json
import { readFileSync } from 'fs';
const packageJson = JSON.parse(readFileSync(join(projectRoot, 'package.json'), 'utf8'));

// Add reactSnap config
packageJson.reactSnap = reactSnapConfig;

// Write temp file
writeFileSync(configPath, JSON.stringify(packageJson, null, 2));

// Run react-snap
const reactSnap = spawn('npx', ['react-snap'], {
  cwd: projectRoot,
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    PACKAGE_JSON_PATH: configPath
  }
});

reactSnap.on('close', (code) => {
  // Clean up temp file
  try {
    import('fs').then(fs => fs.unlinkSync(configPath));
  } catch (e) {
    // Ignore cleanup errors
  }

  if (code === 0) {
    console.log('\n✅ Pre-rendering completed successfully!');
    console.log('📄 Static HTML files generated in dist/public/');
    console.log('\n💡 Next steps:');
    console.log('   1. Check dist/public/index.html for full HTML content');
    console.log('   2. Run: npm start');
    console.log('   3. View source to verify Google can see content\n');
  } else {
    console.error(`\n❌ Pre-rendering failed with code ${code}`);
    process.exit(code);
  }
});
