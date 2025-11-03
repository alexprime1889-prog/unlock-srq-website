# 🚀 Deployment Instructions - Unlock SRQ

## Pre-Deployment Checklist

**IMPORTANT:** Every time before deploying to production, you MUST run the pre-rendering script to ensure Google sees full HTML content.

### Step 1: Build Production Bundle with Pre-rendering

```bash
./scripts/build-production.sh
```

This single command will:
1. ✅ Build Vite production bundle
2. ✅ Build Express server
3. ✅ Pre-render all 14 pages with full HTML content
4. ✅ Prepare `dist/public/` for deployment

**Result:** `dist/public/` contains 14 pages (40-80KB each) with full SEO content

### Step 2: Verify Pre-rendered Content

```bash
# Check file sizes
du -h dist/public/index.html dist/public/locksmith-north-port/index.html

# Should show:
# 80K  dist/public/index.html
# 44K  dist/public/locksmith-north-port/index.html
```

### Step 3: Deploy to Replit

1. Click **"Publish"** button in Replit interface
2. Replit will automatically:
   - Use `dist/public/` folder
   - Run `npm start` (production server)
   - Serve pre-rendered HTML to Google bots

### Step 4: Verify Deployment

After deployment, check your published site:

```bash
# View source on: https://srqunlock.com
# Should see FULL HTML inside <div id="root">
```

**✅ Success indicators:**
- `<div id="root">` contains HTML elements (not empty)
- File size: ~80KB for homepage
- Meta tags, Schema.org, Open Graph visible in source
- Title: "24/7 Emergency Locksmith North Port & Port Charlotte FL | Unlock SRQ"

## 🔄 Future Deployments

**Every deployment:**
```bash
./scripts/build-production.sh  # Required before EVERY deployment
# Then click Publish in Replit
```

## 📊 What Gets Pre-rendered

All 14 pages:
- `/` - Homepage (80KB)
- `/automotive-services` - Services page (64KB)
- `/automotive-products` - Products page (64KB)
- `/about-us` - About page (40KB)
- `/locksmith-north-port` - North Port location (44KB)
- `/locksmith-port-charlotte` - Port Charlotte location (44KB)
- `/locksmith-sarasota` - Sarasota location (44KB)
- `/locksmith-punta-gorda` - Punta Gorda location (44KB)
- `/locksmith-venice-fl` - Venice location (44KB)
- `/locksmith-englewood` - Englewood location (44KB)
- `/locksmith-bradenton` - Bradenton location (44KB)
- `/emergency-locksmith-charlotte-county` - Emergency page (44KB)
- `/booking` - Booking page
- `/payment` - Payment page

## ⚠️ Common Issues

**Issue:** Google sees empty `<div id="root"></div>`
**Solution:** You forgot to run `./scripts/build-production.sh` before deploying

**Issue:** "Cannot find module 'puppeteer'"
**Solution:** Run `npm install` to install all dependencies

**Issue:** Pre-rendering fails
**Solution:** Make sure `dist/public/` exists from previous build

## 🎯 SEO Impact

✅ **With pre-rendering:** Google sees full HTML content → All pages indexed
❌ **Without pre-rendering:** Google sees empty div → Zero indexing

**Always run pre-rendering before deployment!**
