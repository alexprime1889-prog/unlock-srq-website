# 🔐 Unlock SRQ LLC - Professional Locksmith Website

Professional, SEO-optimized website for Unlock SRQ LLC, a premier locksmith service company serving Sarasota, North Port, Port Charlotte, Englewood, and Bradenton, Florida.

![Unlock SRQ](client/public/logo.png)

## 🌟 Features

- **Modern, Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **14 SEO-Optimized Pages** - Homepage + Services + Products + 8 Location Pages + Emergency + Booking + Payment + About
- **Pre-rendered Static HTML** - Google bots see full HTML content immediately (not empty React shells)
- **Comprehensive SEO** - Meta tags, Schema.org structured data, sitemap, robots.txt, Open Graph
- **Google Analytics** - Integrated tracking (G-R0JFDJZ0MW)
- **Online Booking Integration** - Calendly integration for appointment scheduling
- **Payment Portal** - Ready for Stripe integration for online payments
- **24/7 Emergency Service** - Prominent emergency contact information
- **Professional Photography** - WebP optimized images throughout
- **Fast Performance** - Optimized loading times and Core Web Vitals

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Express 4
- **Database**: PostgreSQL (Replit managed) + Drizzle ORM
- **Routing**: Wouter
- **Pre-rendering**: Custom Puppeteer solution with bundled Chromium
- **Deployment**: Replit

## 📋 Prerequisites

- Node.js 18.x or higher
- npm package manager
- PostgreSQL database (or use Replit's built-in database)

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/alexprime1889-prog/unlock-srq-website.git
cd unlock-srq-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
# Database (Replit provides this automatically)
DATABASE_URL=postgresql://user:password@host:port/database

# Session Secret (generate a random string)
SESSION_SECRET=your-random-secret-here

# App Configuration
VITE_APP_TITLE=Unlock SRQ LLC - Professional Locksmith Services
VITE_APP_LOGO=/logo.png
```

### 4. Set up the database (if using PostgreSQL)

```bash
npx drizzle-kit push
```

### 5. Build the application

```bash
npm run build
```

### 6. Run pre-rendering (critical for SEO!)

```bash
node scripts/simple-prerender.js
```

This generates static HTML for all 14 pages so Google can index your content immediately.

### 7. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
unlock-srq-website/
├── client/                    # Frontend application
│   ├── public/               # Static assets
│   │   ├── logo.png         # Company logo
│   │   ├── hero-bg.webp     # Hero background image
│   │   ├── robots.txt       # SEO robots file
│   │   └── sitemap.xml      # SEO sitemap (14 pages)
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   └── SEO.tsx      # SEO component with meta tags
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx             # Main landing page
│   │   │   ├── Booking.tsx          # Calendly booking page
│   │   │   ├── Payment.tsx          # Stripe payment page
│   │   │   ├── LocationPage.tsx     # Reusable location template
│   │   │   ├── AutomotiveServices.tsx
│   │   │   ├── AutomotiveProducts.tsx
│   │   │   └── AboutUs.tsx
│   │   ├── lib/             # Utilities
│   │   ├── App.tsx          # Main app with routing
│   │   ├── main.tsx         # Entry point with hydration support
│   │   └── index.css        # Global styles + Tailwind config
├── server/                   # Backend application
│   ├── routes.ts            # Express API routes
│   ├── storage.ts           # Storage interface
│   ├── db.ts                # Database connection
│   └── index.ts             # Express server
├── scripts/
│   └── simple-prerender.js  # Custom pre-rendering script (Puppeteer)
├── shared/
│   └── schema.ts            # Database schema (Drizzle)
├── dist/public/             # Built files (pre-rendered HTML)
├── DEPLOYMENT_GUIDE.md      # Deployment instructions
├── DOMAIN_SETUP_GUIDE.md    # Domain configuration guide
└── replit.md                # Replit project documentation
```

## 🎯 SEO Pre-rendering Solution

### The Problem
React apps render on the client side, which means Google bots initially see an empty HTML shell with just `<div id="root"></div>`. This is terrible for SEO.

### The Solution
We use a custom Puppeteer-based pre-rendering script that:

1. **Builds the React app** → Creates optimized production build
2. **Starts local server** → Serves the built files
3. **Opens headless browser** → Puppeteer with bundled Chromium
4. **Visits each route** → Navigates to all 14 pages
5. **Captures full HTML** → Saves complete rendered HTML with all SEO tags
6. **Replaces build output** → Google sees full content immediately

### How to Use

After making content changes, always run:

```bash
# Step 1: Build the app
npm run build

# Step 2: Pre-render all pages
node scripts/simple-prerender.js
```

This generates 14 static HTML files (40-80KB each) with:
- ✅ Full page content (headings, text, images)
- ✅ Meta tags (title, description, keywords)
- ✅ Schema.org JSON-LD structured data
- ✅ Open Graph tags for social media
- ✅ Google Analytics tracking code

### Pre-rendered Pages

All 14 pages are pre-rendered for maximum SEO visibility:

1. **Homepage** (`/`) - 80KB
2. **Booking** (`/booking`) - Calendly integration
3. **Payment** (`/payment`) - Stripe portal
4. **Automotive Services** (`/automotive-services`) - 64KB
5. **Automotive Products** (`/automotive-products`) - 64KB
6. **North Port** (`/locksmith-north-port`) - 44KB (headquarters)
7. **Port Charlotte** (`/locksmith-port-charlotte`) - 44KB
8. **Sarasota** (`/locksmith-sarasota`) - 44KB
9. **Punta Gorda** (`/locksmith-punta-gorda`) - 44KB
10. **Venice FL** (`/locksmith-venice-fl`) - 44KB
11. **Englewood** (`/locksmith-englewood`) - 44KB
12. **Bradenton** (`/locksmith-bradenton`) - 44KB
13. **Emergency Charlotte County** (`/emergency-locksmith-charlotte-county`) - 44KB
14. **About Us** (`/about-us`) - 40KB

## 🎨 Customization

### Updating Company Information

**Contact Information:**
- `client/src/pages/Home.tsx` - Update phone, email, address
- `client/src/components/SEO.tsx` - Update structured data

**Branding:**
- Replace `client/public/logo.png` with your logo
- Update colors in `client/src/index.css`

**Services & Pricing:**
- Edit service cards in `client/src/pages/Home.tsx`
- Update `client/src/pages/AutomotiveServices.tsx`
- Update pricing in Services sections

### Color Scheme

Current color palette (defined in `client/src/index.css`):
- **Primary Dark Blue**: `#1a3a52` (trust, security)
- **Light Blue/Cyan**: `#7dd3e8` (CTAs, highlights)
- **Card Background**: `#2c4a5f` (service cards)
- **Purple Gradient**: Overlay on hero section

## 🔧 Configuration

### Calendly Integration

1. Sign up at https://calendly.com
2. Update `client/src/pages/Booking.tsx`:
   ```tsx
   src="https://calendly.com/YOUR-USERNAME/appointment"
   ```

### Stripe Payment Integration

1. Sign up at https://stripe.com
2. Get your API keys
3. Implement payment in `client/src/pages/Payment.tsx`

### Google Analytics

Already configured with tracking ID `G-R0JFDJZ0MW` in `client/index.html`.

## 📊 SEO Features

### Meta Tags (All 14 Pages)
- ✅ Unique titles and descriptions
- ✅ Keywords for local SEO
- ✅ Open Graph for Facebook/LinkedIn
- ✅ Twitter Card tags
- ✅ Geo-location tags (Florida)

### Schema.org Structured Data
- ✅ **LocalBusiness** - Company info, hours, service area
- ✅ **Locksmith** - Business type
- ✅ **EmergencyService** - 24/7 availability
- ✅ **Service** - Individual services with pricing
- ✅ **Product** - OEM keys, transponders, smart keys

### Technical SEO
- ✅ Pre-rendered static HTML (not empty shells!)
- ✅ Mobile-responsive design
- ✅ Fast loading (Vite optimization)
- ✅ robots.txt allowing all crawlers
- ✅ XML sitemap with all 14 pages
- ✅ Semantic HTML structure

### Post-Launch Checklist

1. **Google Search Console**
   - Add property for `https://srqunlock.com`
   - Submit sitemap: `https://srqunlock.com/sitemap.xml`
   - Monitor indexing status

2. **Google My Business**
   - Create profile for Unlock SRQ LLC
   - Add address: 2456 Yancy Street, North Port, FL 34291
   - Add all service areas (8 cities)
   - Upload professional photos

3. **Local Citations**
   - Yelp for Business
   - Yellow Pages (already linked in footer)
   - Angi (formerly Angie's List)
   - HomeAdvisor

## 📱 Contact Information

**Company:** Unlock SRQ LLC  
**Owner:** Maksim Yepikhin  
**Phone:** (941) 587-5050  
**Email:** info@srqunlock.com  
**Address:** 2456 Yancy Street, North Port, FL 34291  
**Website:** https://srqunlock.com

**Service Areas:**
- North Port, FL (headquarters - 10-15 min response)
- Port Charlotte, FL
- Sarasota, FL
- Punta Gorda, FL
- Venice, FL
- Englewood, FL
- Bradenton, FL
- All Charlotte County (emergency service)

## 🚀 Deployment to Replit

### Quick Deploy

1. Click **"Publish"** button in Replit UI
2. Wait for build to complete
3. Your site goes live at `.replit.app` domain
4. Configure custom domain (see below)

### Custom Domain Setup

Follow `DOMAIN_SETUP_GUIDE.md` for detailed instructions to connect `srqunlock.com`.

**Quick steps:**
1. Publish site in Replit
2. Add CNAME record at your registrar:
   - Type: CNAME
   - Name: @ (or www)
   - Value: `your-repl-name.replit.app`
3. Add custom domain in Replit deployment settings
4. Wait for SSL certificate (automatic)

## 📝 Available Scripts

```bash
# Development
npm run dev              # Start dev server (Vite + Express)

# Production Build
npm run build            # Build React app (creates dist/public/)
node scripts/simple-prerender.js  # Pre-render all 14 pages for SEO

# Database
npx drizzle-kit push     # Sync database schema
npx drizzle-kit studio   # Open database GUI

# Utilities
npm run type-check       # TypeScript validation
```

## 🔒 Security

- ✅ Environment variables for secrets (DATABASE_URL, SESSION_SECRET)
- ✅ `.gitignore` excludes `.env`, `dist/`, `node_modules/`
- ✅ PostgreSQL with Drizzle ORM (SQL injection protection)
- ✅ HTTPS enforced in production (Replit automatic)
- ✅ Session management with express-session
- ✅ Input validation on all forms

## 🐛 Troubleshooting

### Pre-rendering fails

```bash
# Make sure you built first
npm run build

# Check if Puppeteer installed correctly
npm list puppeteer

# Re-run pre-rendering
node scripts/simple-prerender.js
```

### Database connection issues

```bash
# Check if DATABASE_URL is set
echo $DATABASE_URL

# Push schema again
npx drizzle-kit push
```

### Port already in use

```bash
# The app uses port 5000
# Kill existing process
lsof -ti:5000 | xargs kill -9

# Restart
npm run dev
```

## 📄 License

This project is proprietary software owned by Unlock SRQ LLC.

## 🤝 Contributing

See `CONTRIBUTING.md` for development guidelines.

## 📈 Performance Metrics

Target metrics (production):
- ✅ Lighthouse Performance: 90+
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3.5s
- ✅ Cumulative Layout Shift: < 0.1

## 🎯 Roadmap

### Completed ✅
- [x] 14-page SEO architecture
- [x] Pre-rendering solution for Google indexing
- [x] Google Analytics integration
- [x] Schema.org structured data
- [x] Mobile-responsive design
- [x] Professional photography
- [x] Certifications display (NASTF, VSP, AUTOAUTH)
- [x] Technology showcase section

### Planned 📋
- [ ] Customer review system
- [ ] Real-time availability calendar
- [ ] SMS notifications for appointments
- [ ] Customer portal for service history
- [ ] Multi-language support (Spanish)
- [ ] Blog with locksmith tips

---

**Built with ❤️ for Unlock SRQ LLC by Maksim Yepikhin**

*Last Updated: November 2025*
