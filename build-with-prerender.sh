#!/bin/bash

# Build script with pre-rendering for SEO optimization
# This script builds the app and generates static HTML using react-snap

set -e

echo "🚀 Starting build process..."
echo ""

# Step 1: Run Vite build
echo "📦 Step 1/2: Building application with Vite..."
npm run build

echo ""
echo "✅ Vite build completed!"
echo ""

# Step 2: Pre-render with react-snap  
echo "🔄 Step 2/2: Pre-rendering pages for SEO..."
echo "Generating static HTML for all pages..."

# Create temporary package.json with react-snap config
cat > /tmp/react-snap-config.json << 'EOF'
{
  "reactSnap": {
    "source": "dist/public",
    "minifyHtml": {
      "collapseWhitespace": false,
      "removeComments": false
    },
    "puppeteerArgs": [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage"
    ],
    "skipThirdPartyRequests": true,
    "crawl": true,
    "include": [
      "/",
      "/booking",
      "/payment",
      "/automotive-services",
      "/automotive-products",
      "/locksmith-north-port",
      "/locksmith-port-charlotte",
      "/locksmith-sarasota",
      "/locksmith-punta-gorda",
      "/locksmith-venice-fl",
      "/locksmith-englewood",
      "/locksmith-bradenton",
      "/emergency-locksmith-charlotte-county",
      "/about-us"
    ]
  }
}
EOF

# Merge config into package.json temporarily
cp package.json package.json.backup
node -e "
  const fs = require('fs');
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const config = JSON.parse(fs.readFileSync('/tmp/react-snap-config.json', 'utf8'));
  Object.assign(pkg, config);
  fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

# Run react-snap
npx react-snap || {
  echo "❌ React-snap failed, restoring package.json..."
  mv package.json.backup package.json
  exit 1
}

# Restore original package.json
mv package.json.backup package.json
rm -f /tmp/react-snap-config.json

echo ""
echo "✅ Pre-rendering completed successfully!"
echo ""
echo "📊 Results:"
echo "  - Static HTML files generated in dist/public/"
echo "  - All 14 pages pre-rendered with full SEO tags"
echo "  - Google will see complete HTML content"
echo ""
echo "🎯 Next steps:"
echo "  1. Start server: npm start"
echo "  2. Visit: http://localhost:5000"
echo "  3. View source (Ctrl+U) to verify HTML content"
echo "  4. Deploy to production!"
echo ""
