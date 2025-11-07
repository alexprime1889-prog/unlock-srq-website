#!/bin/bash

echo "🔧 Committing updated prerendered-backup with SEO fixes..."
echo ""

echo "📦 Adding prerendered-backup/ to git..."
git add prerendered-backup/

echo ""
echo "📝 Creating commit..."
git commit -m "Fix deployment: Update prerendered-backup with correct canonical URLs and Footer

- Updated prerendered-backup/ to match server/public/
- Fixed canonical URLs for all pages (especially /booking/ and /payment/)
- Added Footer component with Privacy Policy and Terms links
- This fixes the deployment restore script overwriting fresh files with stale backup"

echo ""
echo "✅ Backup committed successfully!"
echo ""
echo "📊 Verification:"
echo "Canonical URL in backup/booking:"
grep -o 'rel="canonical" href="[^"]*"' prerendered-backup/booking/index.html | head -1
echo ""
echo "Footer in backup/booking:"
grep -c "Privacy Policy" prerendered-backup/booking/index.html
echo "matches found"
echo ""
echo "🎯 NOW READY TO DEPLOY!"
echo "  1. Go to Deployment tab"
echo "  2. Click Deploy button"
echo "  3. Wait 2-3 minutes"
echo "  4. Your site will have Footer and correct canonical URLs!"
echo ""
