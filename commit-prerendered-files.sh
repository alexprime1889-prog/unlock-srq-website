#!/bin/bash

echo "🚀 Committing pre-rendered files to git..."
echo ""

echo "📦 Adding server/public/ to git..."
git add server/public/

echo ""
echo "📝 Creating commit..."
git commit -m "Fix SEO: Add correct canonical URLs and Footer to Booking/Payment pages

- Fixed canonical URLs on /booking/ and /payment/ pages
- Added Footer component to both pages for internal linking
- Updated pre-render script to copy files to server/public/
- All 16 pages pre-rendered with full SEO metadata"

echo ""
echo "✅ Files committed successfully!"
echo ""
echo "📊 Git status:"
git status --short

echo ""
echo "🎯 Next steps:"
echo "  1. Add Build command in Replit Deployment settings: npm run build"
echo "  2. Click Deploy button"
echo "  3. Verify deployed site has Footer and correct canonical URLs"
echo ""
