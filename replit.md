# Unlock SRQ LLC - Professional Locksmith Website

## Project Overview
Professional locksmith website for Unlock SRQ LLC serving Sarasota, North Port, Port Charlotte, Englewood, and Bradenton, Florida. Imported from GitHub repository: https://github.com/alexprime1889-prog/unlock-srq-website

## Tech Stack
- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Express 4
- **Database**: PostgreSQL (Replit managed) + Drizzle ORM
- **Routing**: Wouter

## Project Structure

### Frontend (`client/`)
- **Pages**:
  - `Home.tsx` - Main landing page with 10 sections (Hero, Services, Pricing, FAQ, Why Choose Us, Blog, About, Videos, Contact, Footer)
  - `Booking.tsx` - Calendly appointment booking integration
  - `Payment.tsx` - Online payment portal (Stripe integration)
  
- **Components**:
  - `SEO.tsx` - SEO metadata and Schema.org structured data
  - `ErrorBoundary.tsx` - Error handling wrapper
  - Complete shadcn/ui component library

- **Public Assets**:
  - `logo.png` - Company logo
  - `hero-bg.webp` - Hero section background
  - **Professional Photography** (WebP + PNG fallback):
    - `professional-locksmith-mobile-workshop-sarasota-fl` (163KB) - Hero section
    - `maxim-yepichin-owner-master-locksmith-sarasota-fl` (51KB) - Latest Updates
    - `mobile-locksmith-workshop-key-programming-sarasota` (177KB) - Latest Updates
    - `lishi-tool-automotive-lockout-service-unlock-srq` (36KB) - Latest Updates
    - `maxim-yepichin-locksmith-with-customer-sarasota-fl` (412KB) - About Company
    - `emergency-lockout-service-action-sarasota-florida` (86KB) - Contact Form
  - `robots.txt` - SEO configuration
  - `sitemap.xml` - SEO sitemap

### Backend (`server/`)
- `routes.ts` - Express API routes
- `storage.ts` - Database storage interface
- `db.ts` - PostgreSQL database connection

### Database (`shared/schema.ts`)
- User management schema with Drizzle ORM
- PostgreSQL database integration

## Design System

### Colors
- **Primary Dark Blue**: #1a3a52 (trust, security, professionalism)
- **Light Blue/Cyan**: #7dd3e8 (call-to-action, highlights)
- **Card Background**: #2c4a5f (service cards)
- **Purple Gradient**: Overlay on hero section
- **White**: Clean backgrounds

### Typography
- Font: Open Sans (sans-serif)
- Hierarchy: Bold headings, clean body text
- Emergency phone numbers: Extra large, bold

## Business Information

**Company**: Unlock SRQ LLC  
**Owner**: Maksim Yepikhin  
**Phone**: (941) 587-5050  
**Email**: info@srqunlock.com  
**Address**: 2456 Yancy Street, North Port, FL 34291  
**Website**: https://srqunlock.com  

**Service Areas**:
- Sarasota, FL
- North Port, FL
- Port Charlotte, FL
- Englewood, FL
- Bradenton, FL
- All areas within 50 miles

**Operating Hours**: 24/7/365 Emergency Service

## Services Offered

### Residential Services
- Home lockout services
- Lock repair and replacement
- Key duplication
- Rekeying services

### Commercial Services
- Business security solutions
- Access control systems
- Master key systems
- Lock installation

### Automotive Services
- Car lockout: $150
- Key programming (Transponder): $150
- Smart key programming: $250
- Battery replacement: $350-$450
- Mobile diagnostics: $160

### Emergency Services
- 24/7 availability
- 15-30 minute response time
- On-site service

## Features Implemented

✅ Responsive design (mobile, tablet, desktop)  
✅ SEO optimized with meta tags and Schema.org structured data  
✅ 10 content sections on homepage  
✅ Service cards with pricing  
✅ FAQ section  
✅ Contact forms  
✅ Calendly booking integration  
✅ Payment portal ready  
✅ Social media links  
✅ Sticky header navigation  
✅ robots.txt and sitemap.xml

## Development Setup

### Environment Variables
The following environment variables are already configured by Replit:
- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Session encryption key
- `PGHOST`, `PGPORT`, `PGUSER`, `PGPASSWORD`, `PGDATABASE` - Database credentials

### Running the Application
```bash
npm run dev
```

### Database Migrations
```bash
npm run db:push
```

## Integrations

### Calendly (Booking Page)
- iframe integration for appointment scheduling
- Update username in `client/src/pages/Booking.tsx`

### Stripe (Payment Page)
- Payment portal ready for integration
- Requires Stripe API keys
- Implementation in `client/src/pages/Payment.tsx`

## SEO Configuration

- **Structured Data**: LocalBusiness schema with complete business information
- **Meta Tags**: Title, description, keywords, Open Graph, Twitter Cards
- **Geo-location Tags**: For local SEO targeting Florida service areas
- **Sitemap**: `/sitemap.xml`
- **Robots**: `/robots.txt`

## Deployment Notes

- Website designed for Replit deployment
- All assets optimized for fast loading
- Mobile-first responsive design
- Core Web Vitals optimized

## Recent Updates

- ✅ Imported complete project from GitHub (https://github.com/alexprime1889-prog/unlock-srq-website)
- ✅ Set up PostgreSQL database integration with Drizzle ORM
- ✅ Adapted project to work with Replit template (removed tRPC, using standard React Query)
- ✅ Updated index.css to use Tailwind CSS v3 syntax (compatible with Replit)
- ✅ Fixed environment variable handling for OAuth-free operation
- ✅ Database schema pushed successfully
- ✅ Application running on port 5000
- ✅ **Professional Photography Integration (October 23, 2025)**:
  - Integrated 6 professional photos of owner Maksim Yepikhin and services
  - Converted all images from PNG/JPEG to WebP format (90%+ file size reduction)
  - Implemented comprehensive SEO optimization:
    * Schema.org ImageObject markup for all images
    * Location-optimized alt text with service keywords
    * Picture elements with WebP + PNG fallback
    * Eager loading for Hero image (LCP optimization)
    * Lazy loading for secondary images
    * Width/height attributes for CLS prevention
    * Proper aspect ratios for portrait/landscape images
    * Copyright metadata and accessibility features
  - Photo placements: 
    * Hero (owner in workshop - 163KB)
    * Latest Updates (3 articles: owner portrait 51KB, mobile workshop 177KB, Lishi tool 36KB)
    * About Company (Maksim with customer - 412KB, portrait orientation with 3:4 aspect ratio)
    * Contact Form (emergency service - 86KB)
  - All images include data-testid attributes for automated testing
  - **Latest Update**: Replaced About Company image with customer service photo (900KB JPEG → 412KB WebP, 54% reduction)

## Project Status

**Status**: ✅ RUNNING  
**Database**: ✅ PostgreSQL connected  
**Frontend**: ✅ React with Tailwind CSS  
**Backend**: ✅ Express server  

The locksmith website is now fully functional with:
- Homepage with hero, services, pricing, FAQ sections
- Booking page (ready for Calendly integration)
- Payment page (ready for Stripe integration)
- PostgreSQL database for data persistence
- SEO optimization intact

## Known Configuration Items

### Environment Variables (Fixed for Production)
The following environment variables have been configured with production-ready defaults:
- `VITE_APP_TITLE` - defaults to "Unlock SRQ LLC - Professional Locksmith Services"
- `VITE_APP_LOGO` - defaults to "/logo.png"
- Analytics scripts removed from `index.html` to prevent deployment errors

**Deployment Fix (October 24, 2025):**
- ✅ Removed %VITE_*% syntax from `client/index.html` (caused URI malformed errors)
- ✅ Updated `client/src/const.ts` with proper defaults for Unlock SRQ LLC
- ✅ Production build tested and verified successful
- ✅ Application ready for deployment without environment variable configuration

## Next Steps

1. Configure Calendly username for booking integration
2. Set up Stripe API keys for payment processing
3. Test all contact forms
4. Verify SEO metadata
5. Deploy to production with custom domain (srqunlock.com)
