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

// Copy all HTML files from backup to dist/public
function copyHTMLFiles(src, dest) {
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
      copyHTMLFiles(srcPath, destPath);
    } else if (entry.name.endsWith('.html')) {
      // Copy HTML file
      fs.copyFileSync(srcPath, destPath);
      const stats = fs.statSync(destPath);
      console.log(`  ✅ Restored: ${entry.name} (${(stats.size / 1024).toFixed(1)} KB)`);
    }
  }
}

try {
  copyHTMLFiles(backupDir, distDir);
  console.log('\n✅ Pre-rendered HTML files restored successfully!');
  console.log('🚀 Server will now serve full SEO-optimized HTML\n');
} catch (error) {
  console.error('❌ Error restoring files:', error);
  process.exit(1);
}
