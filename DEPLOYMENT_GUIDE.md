# Unlock SRQ LLC - Deployment Guide

## Website Overview

Professional locksmith services website for Unlock SRQ LLC, serving Sarasota, North Port, Port Charlotte, Englewood, and Bradenton, Florida.

**Live Development URL:** https://3000-ina1tavifb9w0o5yde50i-d76237f4.manusvm.computer

---

## Features Implemented

### ✅ Core Features
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Hero Section** - Eye-catching hero with call-to-action buttons
- **Services Showcase** - 4 main service categories with icons
- **Service Area Display** - Lists all 5 cities served
- **Contact Information** - Phone, email, address prominently displayed
- **Social Media Integration** - Links to all major platforms

### ✅ Advanced Features
- **Online Booking System** - Calendly integration for appointment scheduling
- **Payment Portal** - Stripe-ready payment processing page
- **SEO Optimization** - Complete meta tags, Schema.org markup, sitemap
- **24/7 Emergency Service** - Highlighted throughout the site

---

## Deployment Options

### Option 1: Deploy via Manus Platform (Recommended)

The website is already hosted on the Manus platform. To publish:

1. Click the **"Publish"** button in the Manus UI
2. Configure your custom domain settings
3. The platform will handle SSL certificates automatically

### Option 2: Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. From the project directory:
   ```bash
   cd /home/ubuntu/unlock-srq
   vercel
   ```

3. Follow the prompts to link your account and deploy

### Option 3: Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. From the project directory:
   ```bash
   cd /home/ubuntu/unlock-srq
   netlify deploy --prod
   ```

---

## Domain Configuration

### DNS Settings for Custom Domain

Once you have your domain (e.g., unlocksrq.com), configure these DNS records:

#### For Vercel:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### For Netlify:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site-name].netlify.app
```

#### For Manus Platform:
Follow the specific DNS instructions provided in the Manus deployment interface.

---

## Required Integrations Setup

### 1. Calendly Integration (Booking System)

**Current Status:** Placeholder implemented, needs configuration

**Steps to Complete:**
1. Create a Calendly account at https://calendly.com
2. Set up your availability and service types
3. Get your Calendly username
4. Update the booking page:
   - File: `client/src/pages/Booking.tsx`
   - Line 50: Replace `your-calendly-username` with your actual username
   ```tsx
   data-url="https://calendly.com/YOUR-USERNAME?hide_gdpr_banner=1&primary_color=5dced9"
   ```

**Google Calendar Sync:**
- Calendly automatically syncs with Google Calendar
- Connect your Google account in Calendly settings
- Events will automatically appear in your calendar

### 2. Stripe Payment Integration

**Current Status:** UI implemented, needs API keys

**Steps to Complete:**
1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe Dashboard
3. Install Stripe SDK (if not already installed):
   ```bash
   cd /home/ubuntu/unlock-srq
   pnpm add @stripe/stripe-js @stripe/react-stripe-js stripe
   ```

4. Add environment variables:
   ```env
   STRIPE_PUBLIC_KEY=pk_live_xxxxx
   STRIPE_SECRET_KEY=sk_live_xxxxx
   ```

5. Implement Stripe Elements in `client/src/pages/Payment.tsx`

**Note:** The payment form structure is ready. You'll need to add the Stripe Elements component where the placeholder is currently located.

---

## SEO Configuration

### Update URLs in SEO Component

Before deploying, update the canonical URL in:
- File: `client/src/components/SEO.tsx`
- Change `canonicalUrl = "https://unlocksrq.com"` to your actual domain

### Submit to Search Engines

After deployment:

1. **Google Search Console**
   - Visit https://search.google.com/search-console
   - Add your property (domain)
   - Verify ownership
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Bing Webmaster Tools**
   - Visit https://www.bing.com/webmasters
   - Add your site
   - Submit sitemap

### Local SEO (Google Business Profile)

1. Create/claim your Google Business Profile
2. Ensure NAP (Name, Address, Phone) matches exactly:
   - **Name:** Unlock SRQ LLC
   - **Address:** 2456 Yancy Street, North Port, FL 34291
   - **Phone:** 941-587-5050

---

## Environment Variables

Required environment variables (already configured in Manus):

```env
# Database
DATABASE_URL=mysql://...

# Authentication
JWT_SECRET=...
OAUTH_SERVER_URL=...

# App Configuration
VITE_APP_TITLE=Unlock SRQ LLC
VITE_APP_LOGO=/logo.png

# To be added by you:
STRIPE_PUBLIC_KEY=pk_live_xxxxx
STRIPE_SECRET_KEY=sk_live_xxxxx
CALENDLY_USERNAME=your-username
```

---

## Post-Deployment Checklist

### Immediate Tasks
- [ ] Update Calendly username in booking page
- [ ] Configure Stripe payment integration
- [ ] Update canonical URLs to production domain
- [ ] Test all forms and buttons
- [ ] Verify mobile responsiveness
- [ ] Check all social media links

### SEO Tasks
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Business Profile
- [ ] Verify Schema.org markup with Google Rich Results Test
- [ ] Set up Google Analytics (optional)

### Marketing Tasks
- [ ] Update social media profiles with website URL
- [ ] Create business cards with website
- [ ] Add website to local directories
- [ ] Set up email marketing integration (optional)

---

## Technical Support

### Website Issues
- Check browser console for JavaScript errors
- Verify all environment variables are set
- Check server logs for backend errors

### Domain Issues
- DNS changes can take 24-48 hours to propagate
- Use https://dnschecker.org to verify DNS records
- Ensure SSL certificate is properly configured

### Integration Issues
- **Calendly:** Verify username and account status
- **Stripe:** Check API keys and test mode vs live mode
- **Email:** Verify SMTP settings if using contact forms

---

## Maintenance

### Regular Updates
- Keep dependencies updated: `pnpm update`
- Monitor uptime and performance
- Review analytics monthly
- Update content seasonally

### Security
- Rotate API keys annually
- Keep SSL certificates current (auto-renewed on most platforms)
- Monitor for security vulnerabilities
- Backup database regularly

---

## Contact Information

**Website Owner:** Maxim Yepichin  
**Business:** Unlock SRQ LLC  
**Phone:** 941-587-5050  
**Email:** info@unlocksrq.com  
**Address:** 2456 Yancy Street, North Port, FL 34291

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Calendly API Documentation](https://developer.calendly.com)
- [Stripe Documentation](https://stripe.com/docs)
- [Google Search Console Help](https://support.google.com/webmasters)

---

**Website Version:** c79f7597  
**Last Updated:** October 21, 2025

