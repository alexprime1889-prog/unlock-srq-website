#!/bin/bash

# Production Build Script with Pre-rendering
# This script runs the full production build including pre-rendering for SEO

set -e  # Exit on error

echo "🚀 Starting production build..."

# Step 1: Build Vite bundle and server
echo "📦 Building application..."
npm run build

# Step 2: Pre-render all pages for SEO
echo "🌐 Pre-rendering pages for Google indexing..."
node scripts/simple-prerender.js

echo "✅ Production build complete!"
echo "📊 dist/public/ contains 14 pre-rendered HTML pages"
echo ""
echo "🎯 Ready for deployment!"
