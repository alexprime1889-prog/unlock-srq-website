#!/bin/bash

echo "🔍 Checking if project is ready for GitHub push..."
echo ""

# Check if important directories exist
echo "📁 Checking critical directories..."
errors=0

if [ -d "server/public" ]; then
  echo "  ✅ server/public/ exists"
  file_count=$(find server/public -name "*.html" | wc -l)
  echo "     Found $file_count HTML files"
else
  echo "  ❌ server/public/ missing!"
  errors=$((errors + 1))
fi

if [ -d "prerendered-backup" ]; then
  echo "  ✅ prerendered-backup/ exists"
  file_count=$(find prerendered-backup -name "*.html" | wc -l)
  echo "     Found $file_count HTML files"
else
  echo "  ❌ prerendered-backup/ missing!"
  errors=$((errors + 1))
fi

if [ -f "README.md" ]; then
  echo "  ✅ README.md exists"
else
  echo "  ❌ README.md missing!"
  errors=$((errors + 1))
fi

if [ -f ".env.example" ]; then
  echo "  ✅ .env.example exists"
else
  echo "  ❌ .env.example missing!"
  errors=$((errors + 1))
fi

echo ""
echo "📊 Checking git status..."
uncommitted=$(git status --porcelain | wc -l)

if [ $uncommitted -eq 0 ]; then
  echo "  ✅ All changes committed"
else
  echo "  ⚠️  You have $uncommitted uncommitted files"
  echo "     Run: git add . && git commit -m 'Prepare for GitHub'"
fi

echo ""
echo "🔍 Checking canonical URLs in pre-rendered files..."

booking_canonical=$(grep -o 'rel="canonical" href="[^"]*"' server/public/booking/index.html 2>/dev/null || echo "NOT FOUND")
payment_canonical=$(grep -o 'rel="canonical" href="[^"]*"' server/public/payment/index.html 2>/dev/null || echo "NOT FOUND")

echo "  Booking: $booking_canonical"
echo "  Payment: $payment_canonical"

if [[ $booking_canonical == *"/booking/"* ]]; then
  echo "  ✅ Booking canonical URL correct"
else
  echo "  ❌ Booking canonical URL incorrect!"
  errors=$((errors + 1))
fi

if [[ $payment_canonical == *"/payment/"* ]]; then
  echo "  ✅ Payment canonical URL correct"
else
  echo "  ❌ Payment canonical URL incorrect!"
  errors=$((errors + 1))
fi

echo ""
echo "📦 Project size:"
du -sh server/public 2>/dev/null || echo "  server/public/ not found"
du -sh prerendered-backup 2>/dev/null || echo "  prerendered-backup/ not found"

echo ""
if [ $errors -eq 0 ]; then
  echo "✅ PROJECT READY FOR GITHUB!"
  echo ""
  echo "🎯 Next steps:"
  echo "  1. Create repository on GitHub: https://github.com/new"
  echo "     Name: unlock-srq-website"
  echo "  2. Create Personal Access Token: https://github.com/settings/tokens"
  echo "  3. Run: ./push-to-github.sh"
  echo ""
else
  echo "❌ PLEASE FIX $errors ERROR(S) BEFORE PUSHING"
  echo ""
  echo "Common fixes:"
  echo "  - Rebuild: npm run build"
  echo "  - Pre-render: node scripts/simple-prerender.js"
  echo "  - Commit: git add . && git commit -m 'Fix SEO'"
  echo ""
fi
