#!/bin/bash

echo "🚀 Pushing Unlock SRQ Website to GitHub..."
echo ""

# GitHub repository details
GITHUB_REPO="alexprime1889-prog/unlock-srq-website"
GITHUB_URL="https://github.com/${GITHUB_REPO}.git"

echo "📦 Repository: ${GITHUB_REPO}"
echo ""

# Check if github remote already exists
if git remote | grep -q "^github$"; then
  echo "✅ GitHub remote already exists"
  git remote set-url github ${GITHUB_URL}
else
  echo "➕ Adding GitHub remote..."
  git remote add github ${GITHUB_URL}
fi

echo ""
echo "📋 Current git status:"
git status --short

echo ""
echo "🔄 Pushing to GitHub..."
echo ""
echo "⚠️  IMPORTANT: You will be asked for GitHub credentials"
echo "   Username: alexprime1889-prog"
echo "   Password: Use Personal Access Token (NOT your password!)"
echo ""
echo "   To create a token:"
echo "   1. Go to https://github.com/settings/tokens"
echo "   2. Click 'Generate new token (classic)'"
echo "   3. Select scopes: repo (all)"
echo "   4. Copy the token and paste it as password"
echo ""

read -p "Press ENTER when ready to push... "

# Push to GitHub
git push github main

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Successfully pushed to GitHub!"
  echo ""
  echo "🎯 Next steps:"
  echo "  1. Visit: https://github.com/${GITHUB_REPO}"
  echo "  2. Verify all files are there"
  echo "  3. Check README.md for deployment instructions"
  echo ""
else
  echo ""
  echo "❌ Push failed. Common issues:"
  echo "  1. Wrong credentials - use Personal Access Token"
  echo "  2. Repository doesn't exist - create it on GitHub first"
  echo "  3. No permissions - check repository settings"
  echo ""
fi
