import Head from 'next/head';
import LocationPageClient from '@/components/LocationPageClient';

const northPortConfig = {
  city: "North Port",
  county: "Sarasota County",
  slug: "locksmith-north-port",
  title: "24/7 Locksmith North Port FL | Local Emergency Car & Home Locksmith",
  description: "North Port's trusted local locksmith. Headquartered in North Port. 10-15 min response. Emergency car lockout, key programming, residential & commercial. Call (941) 587-5050",
  heroTitle: "North Port's Premier Local Locksmith Service",
  heroSubtitle: "24/7 Emergency Locksmith • Headquartered in Your Community",
  responseTime: "10-15 Minute",
  coordinates: { lat: "27.0442", lon: "-82.2359" },
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
      "Security System Integration"
    ],
    automotive: [
      "Emergency Car Lockout",
      "Transponder Key Programming (NASTF Certified)",
      "Smart Key & Push-to-Start Keys",
      "Ignition Repair & Replacement",
      "All Makes & Models - 95% Keys in Stock",
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
    "North Port",
    "Port Charlotte",
    "Venice",
    "Englewood",
    "Warm Mineral Springs",
    "South Gulf Cove",
    "Toledo Blade",
    "Sarasota County"
  ]
};

export default function NorthPortPage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "name": "Unlock SRQ LLC - North Port Locksmith",
    "image": "https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp",
    "description": northPortConfig.description,
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
      "latitude": northPortConfig.coordinates.lat,
      "longitude": northPortConfig.coordinates.lon
    },
    "telephone": "+19415875050",
    "email": "info@srqunlock.com",
    "url": `https://srqunlock.com/${northPortConfig.slug}/`,
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": {
      "@type": "City",
      "name": northPortConfig.city,
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
        <title>{northPortConfig.title}</title>
        <meta name="description" content={northPortConfig.description} />
        <meta name="keywords" content="locksmith North Port, North Port locksmith, emergency locksmith North Port FL, car locksmith North Port, residential locksmith, commercial locksmith, key programming North Port, 24/7 locksmith Sarasota County" />
        <meta name="author" content="Maksim Yepikhin - Unlock SRQ LLC" />
        <meta name="robots" content="index, follow" />
        
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="North Port" />
        <meta name="geo.position" content="27.0442;-82.2359" />
        <meta name="ICBM" content="27.0442, -82.2359" />
        
        <link rel="canonical" href={`https://srqunlock.com/${northPortConfig.slug}/`} />
        
        <meta property="og:title" content={northPortConfig.title} />
        <meta property="og:description" content={northPortConfig.description} />
        <meta property="og:url" content={`https://srqunlock.com/${northPortConfig.slug}/`} />
        <meta property="og:site_name" content="Unlock SRQ LLC" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1280" />
        <meta property="og:image:alt" content="Professional locksmith Maksim Yepikhin serving North Port FL" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={northPortConfig.title} />
        <meta name="twitter:description" content={northPortConfig.description} />
        <meta name="twitter:image" content="https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </Head>
      <LocationPageClient config={northPortConfig} />
    </>
  );
}
