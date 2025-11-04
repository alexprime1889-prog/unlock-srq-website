import Head from 'next/head';
import LocationPageClient from '@/components/LocationPageClient';

const sarasotaConfig = {
  city: "Sarasota",
  county: "Sarasota County",
  slug: "locksmith-sarasota",
  title: "24/7 Locksmith Sarasota FL | Emergency Automotive & Residential Locksmith",
  description: "Professional locksmith in Sarasota FL. 15-20 min response. Emergency car lockout, key programming, residential & commercial locksmith services. Call (941) 587-5050",
  heroTitle: "Sarasota's Most Trusted 24/7 Locksmith Service",
  heroSubtitle: "24/7 Emergency Locksmith • Serving All of Sarasota",
  responseTime: "15-20 Minute",
  coordinates: { lat: "27.3364", lon: "-82.5307" },
  services: {
    residential: [
      "House Lockout Service (24/7)",
      "Lock Rekey & Master Key Systems",
      "High-Security Lock Installation",
      "Smart Lock Installation & Programming",
      "Deadbolt Installation & Repair",
      "Home Security Consultation"
    ],
    commercial: [
      "Office Lockout Emergency Service",
      "Access Control Systems",
      "Master Key System Design",
      "Electronic Lock Systems",
      "Panic Bar Installation & Repair",
      "Commercial Security Upgrades"
    ],
    automotive: [
      "Emergency Car Lockout",
      "Transponder Key Programming (NASTF Certified)",
      "Smart Key & Push-to-Start Keys",
      "Key Fob Replacement & Programming",
      "All Makes & Models - 95% Keys in Stock",
      "Laser Cut Keys"
    ],
    emergency: [
      "24/7 Immediate Response",
      "Break-in Damage Repair",
      "Lost Key Replacement",
      "Storm Damage Lock Repair",
      "Eviction Locksmith Service",
      "Safe Opening & Combination Reset"
    ]
  },
  nearbyAreas: [
    "Sarasota",
    "Siesta Key",
    "St. Armands",
    "Longboat Key",
    "Lakewood Ranch",
    "Bee Ridge",
    "Gulf Gate",
    "Southside Village"
  ]
};

export default function SarasotaPage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "name": "Unlock SRQ LLC - Sarasota Locksmith",
    "image": "https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp",
    "description": sarasotaConfig.description,
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
      "latitude": sarasotaConfig.coordinates.lat,
      "longitude": sarasotaConfig.coordinates.lon
    },
    "telephone": "+19415875050",
    "email": "info@srqunlock.com",
    "url": `https://srqunlock.com/${sarasotaConfig.slug}/`,
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": {
      "@type": "City",
      "name": sarasotaConfig.city,
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
        <title>{sarasotaConfig.title}</title>
        <meta name="description" content={sarasotaConfig.description} />
        <meta name="keywords" content="locksmith Sarasota, Sarasota locksmith, emergency locksmith Sarasota FL, car locksmith Sarasota, residential locksmith, commercial locksmith, key programming Sarasota, 24/7 locksmith Sarasota County" />
        <meta name="author" content="Maksim Yepikhin - Unlock SRQ LLC" />
        <meta name="robots" content="index, follow" />
        
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Sarasota" />
        <meta name="geo.position" content="27.3364;-82.5307" />
        <meta name="ICBM" content="27.3364, -82.5307" />
        
        <link rel="canonical" href={`https://srqunlock.com/${sarasotaConfig.slug}/`} />
        
        <meta property="og:title" content={sarasotaConfig.title} />
        <meta property="og:description" content={sarasotaConfig.description} />
        <meta property="og:url" content={`https://srqunlock.com/${sarasotaConfig.slug}/`} />
        <meta property="og:site_name" content="Unlock SRQ LLC" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1280" />
        <meta property="og:image:alt" content="Professional locksmith Maksim Yepikhin serving Sarasota FL" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={sarasotaConfig.title} />
        <meta name="twitter:description" content={sarasotaConfig.description} />
        <meta name="twitter:image" content="https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </Head>
      <LocationPageClient config={sarasotaConfig} />
    </>
  );
}
