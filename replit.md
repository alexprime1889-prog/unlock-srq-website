# Unlock SRQ LLC - Professional Locksmith Website

## Overview
Unlock SRQ LLC is a professional locksmith website serving Sarasota, North Port, Port Charlotte, Englewood, and Bradenton, Florida. The project aims to provide a comprehensive online presence for the business, offering 24/7 emergency services, detailed service descriptions, online booking, and payment capabilities. The website is designed to be highly SEO-optimized to attract local customers and features a robust architecture to support its functionalities.

## User Preferences
I prefer simple language and detailed explanations. I want iterative development and for you to ask before making major changes. Do not make changes to the `scripts/simple-prerender.js` file.

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

## External Dependencies
- **Calendly**: Integrated via iframe for appointment scheduling on the Booking page.
- **Stripe**: Payment portal ready for integration on the Payment page. Requires API keys.
- **PostgreSQL**: Managed by Replit, utilized as the primary database with Drizzle ORM.
- **Google Analytics**: Implemented for tracking purposes (G-R0JFDJZ0MW).