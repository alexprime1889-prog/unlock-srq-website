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
- **Frontend**: Built with **Next.js 15** (App Router), React 19, and TypeScript for optimal SEO and performance. Next.js provides automatic Server-Side Rendering (SSR) ensuring all content is visible to search engines. Styling is handled using Tailwind CSS and shadcn/ui components.
- **Backend**: Next.js API routes handle server-side functionality. PostgreSQL database integration via Drizzle ORM.
- **Database**: PostgreSQL (managed by Replit) is used for data persistence, integrated via Drizzle ORM.
- **SEO**: Comprehensive SEO optimization achieved through Next.js SSR with meta tags, Schema.org structured data (LocalBusiness, Service, Product) via `generateMetadata()` functions, geo-location tags, `robots.txt`, and `sitemap.xml`. All 14 pages serve 68-278KB of fully-rendered HTML to search engine crawlers.
- **Routing**: Next.js App Router with `(marketing)` route group organizing all 14 public pages: homepage, about, booking, payment, automotive services/products, and 8 location-specific pages.

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
- **Scalability**: Next.js Server-Side Rendering with Turbopack ensures that the site remains performant and SEO-friendly even as content grows, delivering fully-rendered HTML to search engines on every request.

## External Dependencies
- **Calendly**: Used for integrating appointment scheduling on the booking page via an iframe.
- **Stripe**: Planned for integration to handle online payments on the payment page.
- **PostgreSQL**: The primary database for data storage, managed by Replit.
- **Google Analytics**: Integrated for tracking website performance and user behavior (G-R0JFDJZ0MW).
- **Next.js 15**: Core framework providing automatic SSR, SEO optimization, and App Router functionality.

## Migration History

### React SPA to Next.js 15 Migration (November 2025)
**Status:** ✅ **COMPLETED AND VERIFIED**

Successfully migrated from React SPA (Vite + Wouter) to Next.js 15 with Server-Side Rendering to resolve critical SEO issue where Google bots were seeing empty HTML.

**Issues Encountered & Fixes:**
1. ✅ **package.json syntax errors** - Removed invalid JSON comments and standalone commas
2. ✅ **Calendar component Tailwind syntax** - Replaced invalid `[--cell-size:--spacing(8)]` arbitrary values with valid `[--cell-size:2rem]` syntax (8 occurrences across calendar.tsx files)
3. ✅ **Routing conflicts** - Deleted placeholder `app/page.tsx` that was conflicting with `app/(marketing)/page.tsx`
4. ✅ **Missing React hooks** - Created `src/hooks/useComposition.ts` and `src/hooks/usePersistFn.ts` required by form input components

**Testing Results (All 14 Pages):**
```
✅ / (Homepage) - 278KB HTML, HTTP 200
✅ /about-us - 88KB HTML, HTTP 200
✅ /automotive-products - 175KB HTML, HTTP 200
✅ /automotive-services - 176KB HTML, HTTP 200 (+ 2 JSON-LD schemas)
✅ /booking - 70KB HTML, HTTP 200
✅ /payment - 68KB HTML, HTTP 200
✅ /emergency-locksmith-charlotte-county - 92KB HTML, HTTP 200
✅ /locksmith-bradenton - 88KB HTML, HTTP 200
✅ /locksmith-englewood - 88KB HTML, HTTP 200
✅ /locksmith-north-port - 88KB HTML, HTTP 200
✅ /locksmith-port-charlotte - 88KB HTML, HTTP 200
✅ /locksmith-punta-gorda - 88KB HTML, HTTP 200
✅ /locksmith-sarasota - 88KB HTML, HTTP 200
✅ /locksmith-venice-fl - 88KB HTML, HTTP 200
```

**Verified Features:**
- ✅ All pages serve full server-rendered HTML (68-278KB)
- ✅ SEO meta tags present on all pages (title, description, Open Graph)
- ✅ Schema.org JSON-LD structured data rendering
- ✅ Owner name "Maksim Yepikhin" preserved in metadata
- ✅ Google Analytics (G-R0JFDJZ0MW) integrated
- ✅ No compilation or runtime errors
- ✅ Stable Next.js 15 with Turbopack running on port 5000

## Deployment Process

### Development
```bash
npm run dev
```
Next.js dev server runs on port 5000 with hot-reload and Turbopack compilation.

### Production Build
```bash
npm run build
```
Generates optimized Next.js production build in `.next/` directory with:
- Server-rendered HTML for all 14 pages
- Optimized JavaScript bundles
- Static assets and images
- SEO metadata and Schema.org data

### Deployment to Replit
1. Ensure all changes are committed
2. Click "Publish" button in Replit
3. Replit Autoscale automatically builds and deploys Next.js application
4. Production server serves at https://srqunlock.com

### Verification Checklist
After deployment, verify:
- ✅ Visit https://srqunlock.com and view page source
- ✅ Should see full HTML content (not empty `<div id="root"></div>`)
- ✅ Homepage ~278KB with complete content visible to crawlers
- ✅ All meta tags, Schema.org JSON-LD, and Open Graph data present
- ✅ Test multiple pages to ensure SSR working across all routes
- ✅ Google Search Console shows indexed pages with full content