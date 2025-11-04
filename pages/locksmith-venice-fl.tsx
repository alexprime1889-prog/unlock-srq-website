import Head from 'next/head';
import LocationPageClient from '@/components/LocationPageClient';

const veniceConfig = {
  city: "Venice",
  county: "Sarasota County",
  slug: "locksmith-venice-fl",
  title: "24/7 Locksmith Venice FL | Emergency Locksmith Sarasota County",
  description: "Top-rated locksmith in Venice FL. 15-20 min response. Car key programming, residential locksmith, commercial locks. Licensed & insured. Call (941) 587-5050",
  heroTitle: "Trusted Locksmith Services in Venice, FL",
  heroSubtitle: "24/7 Emergency Locksmith • Serving Venice & Sarasota County",
  responseTime: "15-20 Minute",
  coordinates: { lat: "27.0998", lon: "-82.4543" },
  services: {
    residential: [
      "House Lockout Service (24/7)",
      "Lock Rekey & Master Key Systems",
      "High-Security Lock Installation",
      "Smart Lock Installation & Programming",
      "Broken Key Extraction",
      "Door Security Upgrades"
    ],
    commercial: [
      "Office Lockout Emergency Service",
      "Access Control Systems",
      "Master Key System Design",
      "File Cabinet & Desk Locks",
      "Panic Bar Installation & Repair",
      "ADA Compliant Solutions"
    ],
    automotive: [
      "Emergency Car Lockout",
      "Transponder Key Programming",
      "Smart Key & Push-to-Start Keys",
      "Ignition Repair & Replacement",
      "All Makes & Models",
      "Motorcycle & RV Keys"
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
    "Venice",
    "North Port",
    "Englewood",
    "South Venice",
    "Nokomis",
    "Osprey",
    "Laurel",
    "Warm Mineral Springs"
  ]
};

export default function VenicePage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "name": "Unlock SRQ LLC - Venice Locksmith",
    "image": "https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp",
    "description": veniceConfig.description,
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
      "latitude": veniceConfig.coordinates.lat,
      "longitude": veniceConfig.coordinates.lon
    },
    "telephone": "+19415875050",
    "email": "info@srqunlock.com",
    "url": `https://srqunlock.com/${veniceConfig.slug}/`,
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": {
      "@type": "City",
      "name": veniceConfig.city,
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
        <title>{veniceConfig.title}</title>
        <meta name="description" content={veniceConfig.description} />
        <meta name="keywords" content="locksmith Venice FL, Venice locksmith, emergency locksmith Venice Florida, car locksmith Venice, residential locksmith, commercial locksmith, key programming Venice, 24/7 locksmith Sarasota County" />
        <meta name="author" content="Maksim Yepikhin - Unlock SRQ LLC" />
        <meta name="robots" content="index, follow" />
        
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Venice" />
        <meta name="geo.position" content="27.0998;-82.4543" />
        <meta name="ICBM" content="27.0998, -82.4543" />
        
        <link rel="canonical" href={`https://srqunlock.com/${veniceConfig.slug}/`} />
        
        <meta property="og:title" content={veniceConfig.title} />
        <meta property="og:description" content={veniceConfig.description} />
        <meta property="og:url" content={`https://srqunlock.com/${veniceConfig.slug}/`} />
        <meta property="og:site_name" content="Unlock SRQ LLC" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1280" />
        <meta property="og:image:alt" content="Professional locksmith Maksim Yepikhin serving Venice FL" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={veniceConfig.title} />
        <meta name="twitter:description" content={veniceConfig.description} />
        <meta name="twitter:image" content="https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </Head>
      <LocationPageClient config={veniceConfig} />
    </>
  );
}
