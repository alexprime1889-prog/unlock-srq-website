import Head from 'next/head';
import LocationPageClient from '@/components/LocationPageClient';

const charlotteCountyConfig = {
  city: "Charlotte County",
  county: "Charlotte County",
  slug: "emergency-locksmith-charlotte-county",
  title: "24/7 Emergency Locksmith Charlotte County FL | Unlock SRQ",
  description: "Emergency locksmith Charlotte County FL. Immediate response 24/7/365. Car lockout, house lockout, commercial locksmith. 15-20 min average. Call (941) 587-5050",
  heroTitle: "Emergency Locksmith Services in Charlotte County, FL",
  heroSubtitle: "24/7 Immediate Response • Fastest Emergency Locksmith in Charlotte County",
  responseTime: "15-20 Minute",
  coordinates: { lat: "26.9403", lon: "-81.8653" },
  services: {
    residential: [
      "Emergency House Lockout (24/7)",
      "Lock Rekey After Break-In",
      "High-Security Lock Installation",
      "Smart Lock Emergency Programming",
      "Broken Key Extraction",
      "Storm Damage Lock Repair"
    ],
    commercial: [
      "Emergency Office Lockout",
      "Break-in Damage Repair",
      "Emergency Master Key Systems",
      "After-Hours Lock Replacement",
      "Panic Bar Emergency Repair",
      "24/7 Access Control Systems"
    ],
    automotive: [
      "Emergency Car Lockout",
      "Lost Car Key Replacement",
      "Transponder Key Programming",
      "Ignition Emergency Repair",
      "Trunk Lockout Service",
      "Motorcycle Emergency Service"
    ],
    emergency: [
      "24/7 Immediate Response",
      "Break-in Damage Repair",
      "Lost Key Replacement",
      "Storm Damage Lock Repair",
      "Eviction Locksmith Service",
      "Safe Opening & Emergency Access"
    ]
  },
  nearbyAreas: [
    "Port Charlotte",
    "Punta Gorda",
    "Englewood",
    "Rotonda West",
    "Charlotte Harbor",
    "Deep Creek",
    "Burnt Store",
    "Harbour Heights",
    "Solana",
    "Cleveland"
  ]
};

export default function CharlotteCountyPage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness", "EmergencyService"],
    "name": "Unlock SRQ LLC - Emergency Locksmith Charlotte County",
    "image": "https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp",
    "description": charlotteCountyConfig.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2456 Yancy Street",
      "addressLocality": "North Port",
      "addressRegion": "FL",
      "postalCode": "34291",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": charlotteCountyConfig.coordinates.lat,
      "longitude": charlotteCountyConfig.coordinates.lon
    },
    "telephone": "+19415875050",
    "email": "info@srqunlock.com",
    "url": `https://srqunlock.com/${charlotteCountyConfig.slug}/`,
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "24:00"
    },
    "availableService": [
      {
        "@type": "Service",
        "name": "24/7 Emergency Locksmith Services",
        "description": "Immediate emergency locksmith response available 24 hours a day, 7 days a week, 365 days a year in Charlotte County, FL",
        "serviceType": "Emergency Locksmith",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "24:00"
        }
      },
      {
        "@type": "Service",
        "name": "Emergency Car Lockout Service",
        "description": "24/7 emergency automotive lockout service, lost car key replacement, and transponder key programming",
        "serviceType": "Automotive Locksmith"
      },
      {
        "@type": "Service",
        "name": "Emergency House Lockout",
        "description": "24/7 residential lockout service, lock rekey, and emergency lock repair",
        "serviceType": "Residential Locksmith"
      },
      {
        "@type": "Service",
        "name": "Emergency Commercial Locksmith",
        "description": "24/7 emergency office lockout, break-in damage repair, and after-hours lock replacement",
        "serviceType": "Commercial Locksmith"
      }
    ],
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Charlotte County",
      "containedIn": {
        "@type": "State",
        "name": "Florida"
      }
    },
    "owner": {
      "@type": "Person",
      "name": "Maksim Yepikhin",
      "jobTitle": "Owner & Master Locksmith"
    }
  };

  return (
    <>
      <Head>
        <title>{charlotteCountyConfig.title}</title>
        <meta name="description" content={charlotteCountyConfig.description} />
        <meta name="keywords" content="emergency locksmith Charlotte County, Charlotte County locksmith, 24/7 locksmith Florida, emergency car lockout, emergency house lockout, emergency commercial locksmith, locksmith Port Charlotte, locksmith Punta Gorda" />
        <meta name="author" content="Maksim Yepikhin - Unlock SRQ LLC" />
        <meta name="robots" content="index, follow" />
        
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Charlotte County" />
        <meta name="geo.position" content="26.9403;-81.8653" />
        <meta name="ICBM" content="26.9403, -81.8653" />
        
        <link rel="canonical" href={`https://srqunlock.com/${charlotteCountyConfig.slug}/`} />
        
        <meta property="og:title" content={charlotteCountyConfig.title} />
        <meta property="og:description" content={charlotteCountyConfig.description} />
        <meta property="og:url" content={`https://srqunlock.com/${charlotteCountyConfig.slug}/`} />
        <meta property="og:site_name" content="Unlock SRQ LLC" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1280" />
        <meta property="og:image:alt" content="Professional locksmith Maksim Yepikhin serving Charlotte County FL" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={charlotteCountyConfig.title} />
        <meta name="twitter:description" content={charlotteCountyConfig.description} />
        <meta name="twitter:image" content="https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </Head>
      <LocationPageClient config={charlotteCountyConfig} />
    </>
  );
}
