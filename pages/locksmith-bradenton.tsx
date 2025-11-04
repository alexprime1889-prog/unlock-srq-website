import Head from 'next/head';
import LocationPageClient from '@/components/LocationPageClient';

const bradentonConfig = {
  city: "Bradenton",
  county: "Manatee County",
  slug: "locksmith-bradenton",
  title: "24/7 Locksmith Bradenton FL | Professional Emergency Locksmith",
  description: "Professional locksmith in Bradenton FL. 20-25 min response. Emergency car lockout, key programming, residential & commercial locksmith services. Call (941) 587-5050",
  heroTitle: "Bradenton's Professional 24/7 Emergency Locksmith",
  heroSubtitle: "24/7 Emergency Locksmith • Serving All of Manatee County",
  responseTime: "20-25 Minute",
  coordinates: { lat: "27.4989", lon: "-82.5748" },
  services: {
    residential: [
      "House Lockout Service (24/7)",
      "Lock Rekey & Master Key Systems",
      "High-Security Lock Installation",
      "Smart Lock Installation & Programming",
      "Deadbolt Installation",
      "Home Security Upgrades"
    ],
    commercial: [
      "Office Lockout Emergency Service",
      "Access Control Systems",
      "Master Key System Design",
      "Electronic Lock Systems",
      "Panic Bar Installation & Repair",
      "Retail Security Solutions"
    ],
    automotive: [
      "Emergency Car Lockout",
      "Transponder Key Programming (NASTF Certified)",
      "Smart Key & Push-to-Start Keys",
      "Key Fob Replacement & Programming",
      "All Makes & Models - 95% Keys in Stock",
      "Ignition Repair & Replacement"
    ],
    emergency: [
      "24/7 Immediate Response",
      "Break-in Damage Repair",
      "Lost Key Replacement",
      "Storm Damage Lock Repair",
      "Eviction Locksmith Service",
      "Safe Opening"
    ]
  },
  nearbyAreas: [
    "Bradenton",
    "Palmetto",
    "Ellenton",
    "Parrish",
    "Lakewood Ranch",
    "Bayshore Gardens",
    "Cortez",
    "Manatee County"
  ]
};

export default function BradentonPage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "name": "Unlock SRQ LLC - Bradenton Locksmith",
    "image": "https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp",
    "description": bradentonConfig.description,
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
      "latitude": bradentonConfig.coordinates.lat,
      "longitude": bradentonConfig.coordinates.lon
    },
    "telephone": "+19415875050",
    "email": "info@srqunlock.com",
    "url": `https://srqunlock.com/${bradentonConfig.slug}/`,
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": {
      "@type": "City",
      "name": bradentonConfig.city,
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
        <title>{bradentonConfig.title}</title>
        <meta name="description" content={bradentonConfig.description} />
        <meta name="keywords" content="locksmith Bradenton, Bradenton locksmith, emergency locksmith Bradenton FL, car locksmith Manatee County, residential locksmith, commercial locksmith, key programming Bradenton, 24/7 locksmith Florida" />
        <meta name="author" content="Maksim Yepikhin - Unlock SRQ LLC" />
        <meta name="robots" content="index, follow" />
        
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Bradenton" />
        <meta name="geo.position" content="27.4989;-82.5748" />
        <meta name="ICBM" content="27.4989, -82.5748" />
        
        <link rel="canonical" href={`https://srqunlock.com/${bradentonConfig.slug}/`} />
        
        <meta property="og:title" content={bradentonConfig.title} />
        <meta property="og:description" content={bradentonConfig.description} />
        <meta property="og:url" content={`https://srqunlock.com/${bradentonConfig.slug}/`} />
        <meta property="og:site_name" content="Unlock SRQ LLC" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1280" />
        <meta property="og:image:alt" content="Professional locksmith Maksim Yepikhin serving Bradenton FL" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={bradentonConfig.title} />
        <meta name="twitter:description" content={bradentonConfig.description} />
        <meta name="twitter:image" content="https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </Head>
      <LocationPageClient config={bradentonConfig} />
    </>
  );
}
