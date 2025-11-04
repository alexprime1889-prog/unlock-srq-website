# Unlock SRQ LLC - Professional Locksmith Website

## Overview
Unlock SRQ LLC is a professional locksmith website serving Sarasota, North Port, Port Charlotte, Englewood, and Bradenton, Florida. The project aims to provide a comprehensive online presence for the business, offering 24/7 emergency services, detailed service descriptions, online booking, and payment capabilities. The website is designed to be highly SEO-optimized to attract local customers and features a robust architecture to support its functionalities.

## User Preferences
I prefer simple language and detailed explanations. I want iterative development and for you to ask before making major changes.

## System Architecture
The project utilizes a modern web stack with a clear separation of concerns.

**UI/UX Decisions:**
- **Color Scheme**: Primary Dark Blue (#1a3a52) for trust, Light Blue/Cyan (#7dd3e8) for CTAs, Card Background (#2c4a5f), Purple Gradient overlay, and White for clean backgrounds.
- **Typography**: Open Sans (sans-serif) for headings and body, with extra large, bold styling for emergency phone numbers.
- **Responsive Design**: Implemented for mobile, tablet, and desktop.
- **Visuals**: Integration of professional, optimized WebP photography.

**Technical Implementations & Feature Specifications:**
- **Frontend**: React 19 with TypeScript and Vite, styled using Tailwind CSS and shadcn/ui components.
    - **Pages**: Home (10 sections), Booking (Calendly integration), Payment (Stripe integration), About Us, and multiple location-specific pages (e.g., `/locksmith-port-charlotte/`).
    - **Components**: `SEO.tsx` for metadata and Schema.org, `ErrorBoundary.tsx`.
    - **Pre-rendering**: Custom Puppeteer script (`scripts/simple-prerender.js`) to generate static HTML for all 14 pages, ensuring full SEO visibility for crawlers despite client-side React rendering.
- **Backend**: Express 4 for API routes.
- **Database**: PostgreSQL managed by Replit, using Drizzle ORM for schema management (User management schema).
- **Routing**: Wouter for client-side navigation.
- **SEO**: Comprehensive optimization including meta tags, Schema.org (LocalBusiness, Locksmith, EmergencyService), geo-location tags, `robots.txt`, and `sitemap.xml`. Dedicated pages for services, products, and specific locations enhance SEO.
- **Key Features**:
    - Homepage with diverse content sections, service cards, FAQ.
    - Calendly booking integration.
    - Stripe payment portal.
    - Sticky header, social media links.
    - Certifications (NASTF, VSP, AUTOAUTH) and technology highlights.

## SEO Pre-rendering Solution (November 2025)

### Critical Problem Solved
React apps render client-side, meaning Google bots initially see empty HTML (`<div id="root"></div>`) which is catastrophic for SEO.

### Solution Implemented
Custom Puppeteer-based pre-rendering system that generates static HTML for all 14 pages:

**How It Works:**
1. **Build**: `npm run build` creates React production build in `dist/public/`
2. **Pre-render**: `node scripts/simple-prerender.js` generates static HTML
3. **Server**: Spins up local server serving built files
4. **Crawl**: Puppeteer (bundled Chromium) visits all 14 routes
5. **Capture**: Saves complete rendered HTML (40-80KB per page)
6. **Copy**: Recursively copies all files from `dist/public/` to `server/public/`
7. **Hydrate**: React hydrates pre-rendered content on client for interactivity

**Technical Stack:**
- **Script**: `scripts/simple-prerender.js` (ES modules)
- **Browser**: Puppeteer 24.28.0 with bundled Chromium (production-safe)
- **Pages**: 14 routes pre-rendered
- **Hydration**: `client/src/main.tsx` uses `hydrateRoot()` for React 18

**Why Custom Solution?**
- react-snap: Incompatible with NixOS Chromium 125
- Next.js: Would require complete rewrite (2-3 days)
- Custom: Full control, 1 hour implementation

**Deployment Fix (November 4, 2025):**
- **Problem 1**: Symlinks don't work in Replit deployment environment
- **Solution 1**: Pre-render script copies files from `dist/public/` to `server/public/`
- **Problem 2**: Chrome/Puppeteer not available in deployment build environment
- **Solution 2**: Pre-rendering runs LOCALLY before deployment, not during deployment
- **Implementation**: 
  - Pre-rendered files in `server/public/` are committed to git (not in .gitignore)
  - Deployment uses pre-built files without running Puppeteer
  - Workflow: `npm run build` → `node scripts/simple-prerender.js` → Deploy

**Results:**
✅ All 14 pages have full HTML (not empty shells)  
✅ Google sees complete content immediately  
✅ Homepage: 78KB with Schema.org, meta tags  
✅ Location pages: 44KB each  
✅ Deployment-ready files in `server/public/`

**Usage (BEFORE deployment):**
```bash
# Run locally in development environment:
npm run build
node scripts/simple-prerender.js
# Files are copied to server/public/ and committed to git
# Deployment uses these pre-built files
```

**Critical Notes:**
- Pre-rendering MUST run locally before deployment
- Chrome/Puppeteer not available in deployment environment
- `server/public/` removed from .gitignore to include files in deployment
- `.replit` build command should NOT include pre-rendering script

## External Dependencies
- **Calendly**: Integrated via iframe for appointment scheduling on the Booking page.
- **Stripe**: Payment portal ready for integration on the Payment page. Requires API keys.
- **PostgreSQL**: Managed by Replit, utilized as the primary database with Drizzle ORM.
- **Google Analytics**: Implemented for tracking purposes (G-R0JFDJZ0MW).
- **Puppeteer**: 24.28.0 with bundled Chromium for pre-rendering static HTML.

## Next Steps
1. **GitHub Migration**: Push code to `alexprime1889-prog/unlock-srq-website`
2. Configure Calendly username for booking integration
3. Set up Stripe API keys for payment processing
4. Deploy to production with custom domain (srqunlock.com)
5. Submit sitemap to Google Search Console
