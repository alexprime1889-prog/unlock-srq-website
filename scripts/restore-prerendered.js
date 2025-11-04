#!/usr/bin/env node
/**
 * Restore pre-rendered HTML files after deployment build
 * 
 * Problem: Replit AutoScale runs `npm run build` automatically during deployment,
 * which overwrites dist/public with empty Vite shell HTML.
 * 
 * Solution: Copy pre-rendered files from backup to dist/public before server starts.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const backupDir = path.join(projectRoot, 'prerendered-backup');
const distDir = path.join(projectRoot, 'dist/public');

console.log('🔄 Restoring pre-rendered HTML files...');

if (!fs.existsSync(backupDir)) {
  console.error('❌ Error: prerendered-backup folder not found!');
  console.error('   Run: npm run build && node scripts/simple-prerender.js');
  process.exit(1);
}

if (!fs.existsSync(distDir)) {
  console.error('❌ Error: dist/public folder not found!');
  console.error('   Run: npm run build first');
  process.exit(1);
}

// Copy ALL files from backup to dist/public (including assets)
// This ensures asset hashes match the HTML references
function copyAllFiles(src, dest, htmlCount = { value: 0 }) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      // Create directory if doesn't exist
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      // Recursively copy subdirectory
      copyAllFiles(srcPath, destPath, htmlCount);
    } else {
      // Copy ALL files (HTML, JS, CSS, images, etc.)
      fs.copyFileSync(srcPath, destPath);
      if (entry.name.endsWith('.html')) {
        const stats = fs.statSync(destPath);
        console.log(`  ✅ ${entry.name} (${(stats.size / 1024).toFixed(1)} KB)`);
        htmlCount.value++;
      }
    }
  }
  
  return htmlCount.value;
}

try {
  const htmlCount = copyAllFiles(backupDir, distDir);
  console.log(`\n✅ Restored ${htmlCount} pre-rendered HTML pages with assets!`);
  console.log('🚀 Server will now serve full SEO-optimized HTML\n');
} catch (error) {
  console.error('❌ Error restoring files:', error);
  process.exit(1);
}
