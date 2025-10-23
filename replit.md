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
**Owner**: Maxim Yepichin  
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

### Environment Variables (Optional)
The following environment variables are used but have defaults:
- `VITE_APP_TITLE` - defaults to "App"
- `VITE_APP_LOGO` - defaults to placeholder image
- `VITE_ANALYTICS_ENDPOINT` - optional analytics
- `VITE_ANALYTICS_WEBSITE_ID` - optional analytics

These can be ignored for now as the application works with the defaults.

## Next Steps

1. Configure Calendly username for booking integration
2. Set up Stripe API keys for payment processing
3. Test all contact forms
4. Verify SEO metadata
5. Deploy to production with custom domain (srqunlock.com)
