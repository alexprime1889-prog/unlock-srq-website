# 🔐 Unlock SRQ LLC - Professional Locksmith Website

Professional, SEO-optimized website for Unlock SRQ LLC, a premier locksmith service company serving Sarasota, North Port, Port Charlotte, Englewood, and Bradenton, Florida.

![Unlock SRQ](client/public/logo.png)

## 🌟 Features

- **Modern, Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **10 Content Sections** - Hero, Services, Pricing, FAQ, Why Choose Us, Blog, About, Videos, Contact, Footer
- **SEO Optimized** - Complete meta tags, Schema.org structured data, sitemap, robots.txt
- **Online Booking Integration** - Calendly integration for appointment scheduling
- **Payment Portal** - Ready for Stripe integration for online payments
- **Contact Forms** - Multiple contact points throughout the site
- **24/7 Emergency Service** - Prominent emergency contact information
- **Service Area Coverage** - Clear display of 5-city service area
- **Google Analytics Ready** - Built-in analytics tracking
- **Fast Performance** - Optimized loading times and Core Web Vitals

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui components
- **Backend**: Express 4 + tRPC 11
- **Database**: MySQL (TiDB)
- **Authentication**: Manus OAuth
- **Build Tool**: Vite
- **ORM**: Drizzle
- **Deployment**: Manus Platform

## 📋 Prerequisites

- Node.js 22.x or higher
- pnpm package manager
- MySQL database (or TiDB)
- Manus account for deployment

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/unlock-srq.git
cd unlock-srq
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL=mysql://user:password@host:port/database

# Authentication
JWT_SECRET=your-jwt-secret-here
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im

# App Configuration
VITE_APP_ID=your-app-id
VITE_APP_TITLE=Unlock SRQ LLC
VITE_APP_LOGO=/logo.png

# Owner Information
OWNER_OPEN_ID=your-owner-id
OWNER_NAME=Maxim Yepichin

# Analytics
VITE_ANALYTICS_ENDPOINT=your-analytics-endpoint
VITE_ANALYTICS_WEBSITE_ID=your-website-id

# Built-in Services
BUILT_IN_FORGE_API_URL=https://forge-api.manus.im
BUILT_IN_FORGE_API_KEY=your-api-key
```

### 4. Set up the database

```bash
pnpm db:push
```

### 5. Start the development server

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
unlock-srq/
├── client/                    # Frontend application
│   ├── public/               # Static assets
│   │   ├── logo.png         # Company logo
│   │   ├── hero-bg.webp     # Hero background image
│   │   ├── robots.txt       # SEO robots file
│   │   └── sitemap.xml      # SEO sitemap
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   └── SEO.tsx      # SEO component with meta tags
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx     # Main landing page
│   │   │   ├── Booking.tsx  # Appointment booking page
│   │   │   └── Payment.tsx  # Online payment page
│   │   ├── lib/             # Utilities and libraries
│   │   │   └── trpc.ts      # tRPC client setup
│   │   ├── App.tsx          # Main app component with routing
│   │   ├── main.tsx         # Application entry point
│   │   └── index.css        # Global styles and Tailwind config
├── server/                   # Backend application
│   ├── _core/               # Core server functionality
│   ├── db.ts                # Database queries
│   ├── routers.ts           # tRPC API routes
│   └── storage.ts           # S3 storage helpers
├── drizzle/                 # Database schema and migrations
│   └── schema.ts            # Database schema definitions
├── shared/                  # Shared types and constants
├── DEPLOYMENT_GUIDE.md      # Deployment instructions
├── DOMAIN_SETUP_GUIDE.md    # Domain configuration guide
└── QUICK_DOMAIN_SETUP.md    # Quick domain setup reference
```

## 🎨 Customization

### Updating Company Information

Edit the following files to update company details:

**Contact Information:**
- `client/src/pages/Home.tsx` - Update phone, email, address
- `client/src/components/SEO.tsx` - Update structured data

**Branding:**
- Replace `client/public/logo.png` with your logo
- Update colors in `client/src/index.css`

**Services & Pricing:**
- Edit service cards in `client/src/pages/Home.tsx`
- Update pricing information in the Services section

### Color Scheme

Current color palette (defined in `client/src/index.css`):
- Primary Dark Blue: `#1a3a52`
- Light Blue/Cyan: `#7dd3e8`
- Card Background: `#2c4a5f`
- Purple Gradient: `purple-900` to `purple-600`

## 🔧 Configuration

### Calendly Integration

1. Sign up for a Calendly account at https://calendly.com
2. Get your Calendly username
3. Update `client/src/pages/Booking.tsx`:
   ```tsx
   src="https://calendly.com/YOUR-USERNAME/appointment"
   ```

### Stripe Payment Integration

1. Sign up for Stripe at https://stripe.com
2. Get your API keys from the Stripe dashboard
3. Add environment variables:
   ```env
   STRIPE_PUBLIC_KEY=pk_live_...
   STRIPE_SECRET_KEY=sk_live_...
   ```
4. Implement payment processing in `client/src/pages/Payment.tsx`

### Google Analytics

Analytics tracking is already configured. Update the website ID in your environment:
```env
VITE_ANALYTICS_WEBSITE_ID=your-website-id
```

## 🌐 Domain Setup

Follow the comprehensive guide in `DOMAIN_SETUP_GUIDE.md` to connect your custom domain `srqunlock.com`.

**Quick steps:**
1. Publish the site through Manus UI
2. Configure DNS records at your domain registrar
3. Add custom domain in Manus settings
4. Wait for SSL certificate activation (automatic)

## 📊 SEO Features

### Implemented SEO Elements:

✅ **Meta Tags**
- Title, description, keywords
- Open Graph tags for social sharing
- Twitter Card tags
- Geo-location tags for local SEO

✅ **Structured Data (Schema.org)**
- LocalBusiness type: Locksmith
- Complete address and contact information
- Service area coverage (5 cities)
- Opening hours (24/7/365)
- Services list
- Owner information

✅ **Technical SEO**
- Semantic HTML structure
- Mobile-responsive design
- Fast loading times
- robots.txt configuration
- XML sitemap
- Canonical URLs

### Post-Launch SEO Tasks:

1. **Google Search Console**
   - Add and verify property
   - Submit sitemap: `https://srqunlock.com/sitemap.xml`

2. **Google My Business**
   - Create business profile
   - Add address: 2456 Yancy Street, North Port, FL 34291
   - Add service areas
   - Upload photos

3. **Local Citations**
   - Yelp for Business
   - Yellow Pages
   - Local directories

## 📱 Contact Information

**Company:** Unlock SRQ LLC  
**Owner:** Maxim Yepichin  
**Phone:** (941) 587-5050  
**Email:** info@srqunlock.com  
**Address:** 2456 Yancy Street, North Port, FL 34291  
**Website:** https://srqunlock.com

**Service Areas:**
- Sarasota, FL
- North Port, FL
- Port Charlotte, FL
- Englewood, FL
- Bradenton, FL
- All areas within 50 miles

## 🚀 Deployment

### Deploy to Manus Platform

1. Click the **"Publish"** button in the Manus UI
2. Wait for the build to complete
3. Your site will be live at the provided URL
4. Configure your custom domain following `DOMAIN_SETUP_GUIDE.md`

### Environment Variables

All required environment variables are automatically injected by the Manus platform:
- Database credentials
- OAuth configuration
- API keys for built-in services
- Analytics configuration

## 🧪 Testing

### Run TypeScript checks
```bash
pnpm type-check
```

### Run linting
```bash
pnpm lint
```

### Test tRPC procedures
```bash
pnpm test
```

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm db:push` - Push database schema changes
- `pnpm db:studio` - Open Drizzle Studio (database GUI)
- `pnpm type-check` - Run TypeScript type checking
- `pnpm lint` - Run ESLint

## 🔒 Security

- All sensitive data is stored in environment variables
- Database credentials are never committed to Git
- OAuth authentication for admin features
- HTTPS enforced in production
- Input validation on all forms
- SQL injection protection via Drizzle ORM

## 🐛 Troubleshooting

### Database connection issues
```bash
# Check DATABASE_URL format
mysql://username:password@host:port/database

# Test connection
pnpm db:push
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf node_modules .next
pnpm install
pnpm build
```

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

## 📄 License

This project is proprietary software owned by Unlock SRQ LLC.

## 🤝 Support

For technical support or questions:
- Email: info@srqunlock.com
- Phone: (941) 587-5050

For Manus platform support:
- Website: https://help.manus.im

## 📈 Roadmap

### Planned Features:
- [ ] Customer review system
- [ ] Service request tracking
- [ ] Real-time availability calendar
- [ ] SMS notifications
- [ ] Customer portal
- [ ] Invoice generation
- [ ] Multi-language support (Spanish)

## 🎯 Performance Metrics

Target metrics for production:
- Lighthouse Performance Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 📸 Screenshots

### Desktop View
![Desktop Homepage](docs/screenshots/desktop-home.png)

### Mobile View
![Mobile Homepage](docs/screenshots/mobile-home.png)

---

**Built with ❤️ for Unlock SRQ LLC**

*Last Updated: October 2025*

