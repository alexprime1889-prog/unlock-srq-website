# Unlock SRQ LLC - Professional Locksmith Website

## Overview
This project is a professional locksmith website for Unlock SRQ LLC, serving the Sarasota, North Port, Port Charlotte, Englewood, and Bradenton areas in Florida. Its main purpose is to provide a comprehensive online presence, showcase services, enable appointment booking, and facilitate online payments. The website is designed to be highly SEO-optimized to attract local customers, featuring detailed service and product listings, location-specific pages, and 24/7 emergency service information. The business vision is to establish Unlock SRQ LLC as a leading and trusted locksmith service provider in its operating regions.

## User Preferences
I prefer clear and direct communication. When making changes, prioritize established design patterns and architectural decisions. Before implementing significant new features or making large-scale modifications, please ask for confirmation. Ensure all changes maintain or improve the current SEO standing of the website. Do not make changes to the existing file structure without explicit instruction.

## ⚠️ SEO-Critical Projects Decision Tree

**CRITICAL LESSON LEARNED:** For SEO-heavy projects requiring Google indexing, **ALWAYS use Next.js from the start**, NOT React SPA with client-side rendering.

### Decision Criteria:

**Use Next.js (SSR/SSG) when project has:**
- ✅ Multiple pages requiring Google indexing (>5 pages)
- ✅ SEO as primary business goal (local business, e-commerce, content sites)
- ✅ Location-specific or dynamic content pages
- ✅ Need for Schema.org structured data
- ✅ Future backend/API requirements

**Use React SPA when project has:**
- ✅ Single-page app (dashboard, tool, calculator)
- ✅ Behind authentication (no public SEO)
- ✅ No Google indexing requirements

### Why This Matters:

1. **React SPA Problem:** Client-side rendering means Google sees empty `<div id="root"></div>` → zero SEO
2. **Puppeteer Workaround:** Pre-rendering scripts DON'T work in Replit Autoscale deployments
3. **Next.js Solution:** Server-Side Rendering delivers full HTML to Google bots automatically

### Technology Stack by Project Type:

| Project Type | Stack | Deployment |
|-------------|-------|------------|
| SEO-Critical Website | Next.js 15 + TypeScript + Tailwind | Replit Autoscale |
| Internal Dashboard | React + Vite + Wouter | Replit Autoscale |
| Static Marketing Site | Next.js (SSG) | Replit Static |

**Bottom Line:** If the user mentions "SEO", "Google", "local business", or "multiple pages" → **Start with Next.js immediately**.

## System Architecture
The project utilizes a modern web stack with a clear separation of concerns.

### UI/UX Decisions
- **Color Scheme**: Primary Dark Blue (#1a3a52) for trust and professionalism, Light Blue/Cyan (#7dd3e8) for calls-to-action, Card Background (#2c4a5f), and a Purple Gradient overlay on the hero section. White is used for clean backgrounds.
- **Typography**: Open Sans (sans-serif) is used throughout, with bold headings and clean body text. Emergency phone numbers are extra large and bold for prominence.
- **Design Approach**: Mobile-first responsive design, optimized for all devices (mobile, tablet, desktop).
- **Templates**: A reusable `LocationPage.tsx` template is used for generating various location-specific service pages to maintain consistency and efficiency.

### Technical Implementations
- **Frontend**: Built with React 19, TypeScript, and Vite for a fast and efficient development experience. Styling is handled using Tailwind CSS and shadcn/ui components. Wouter is used for client-side routing.
- **Backend**: An Express 4 server handles API routes.
- **Database**: PostgreSQL (managed by Replit) is used for data persistence, integrated via Drizzle ORM.
- **SEO**: Comprehensive SEO optimization includes meta tags, Schema.org structured data (LocalBusiness, Service, Product), geo-location tags, `robots.txt`, and `sitemap.xml`.
- **Pre-rendering**: A custom Puppeteer-based pre-rendering script (`scripts/simple-prerender.js`) generates static HTML for 14 critical pages. This ensures full content is visible to search engine crawlers, improving indexing and SEO, while maintaining React's interactive capabilities through hydration.

### Feature Specifications
- **Homepage**: Features 10 sections including Hero, Services, Pricing, FAQ, Why Choose Us, Blog, About, Videos, Contact, and Footer.
- **Services**: Detailed residential, commercial, automotive, and emergency locksmith services. Automotive services include specific pricing and detailed descriptions across 8 categories.
- **Products**: A dedicated page for automotive products categorizing OEM, Transponder, Smart, High Security, and Remote Systems keys.
- **Location Pages**: Multiple location-specific pages (e.g., North Port, Port Charlotte, Sarasota, Englewood, Bradenton, Punta Gorda, Venice) with localized content and SEO.
- **Booking**: Integration ready for Calendly for appointment scheduling.
- **Payments**: Payment portal ready for Stripe integration.
- **Certifications & Technology**: Sections detailing NASTF, VSP, AUTOAUTH certifications and advanced locksmith technologies (Laser Cutting, Key Programming, etc.).

### System Design Choices
- **Modularity**: Frontend components are organized into pages and reusable components.
- **Data Management**: Drizzle ORM provides a type-safe interface for database interactions.
- **Performance**: Assets are optimized for fast loading (e.g., WebP images), and Core Web Vitals are considered.
- **Scalability**: The pre-rendering solution ensures that the site remains performant and SEO-friendly even as content grows.

## External Dependencies
- **Calendly**: Used for integrating appointment scheduling on the booking page via an iframe.
- **Stripe**: Planned for integration to handle online payments on the payment page.
- **PostgreSQL**: The primary database for data storage, managed by Replit.
- **Google Analytics**: Integrated for tracking website performance and user behavior (G-R0JFDJZ0MW).
- **Puppeteer**: Used within a custom script for pre-rendering static HTML pages for SEO purposes.

## Deployment Process

### Production Build Script
**Location:** `scripts/build-production.sh`

This automated script must be run before EVERY deployment:
```bash
./scripts/build-production.sh
```

**What it does:**
1. Runs `npm run build` - builds Vite bundle and Express server
2. Runs `node scripts/simple-prerender.js` - generates 14 static HTML pages with full SEO content
3. Prepares `dist/public/` directory for deployment

**Result:** All 14 pages (40-80KB each) contain full HTML content visible to Google bots

### Deployment Steps
1. Run `./scripts/build-production.sh` in Shell
2. Click "Publish" button in Replit
3. Replit automatically deploys `dist/public/` with production server

### Verification
After deployment, visit https://srqunlock.com and view page source:
- ✅ Should see full HTML inside `<div id="root">`
- ✅ File size ~80KB for homepage
- ✅ All meta tags, Schema.org, Open Graph data visible

**Full deployment documentation:** See `DEPLOYMENT.md`