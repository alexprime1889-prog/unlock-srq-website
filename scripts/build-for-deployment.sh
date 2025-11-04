#!/bin/bash

# Deployment build script for Unlock SRQ
# This script ensures pre-rendered HTML is available after build

echo "📦 Building frontend and backend..."
npm run build

echo "🎨 Pre-rendering HTML pages..."
node scripts/simple-prerender.js

echo "✅ Deployment build complete!"
echo "📊 Files ready in dist/public/"
