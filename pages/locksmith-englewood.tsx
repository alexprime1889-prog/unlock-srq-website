import Head from 'next/head';
import LocationPageClient from '@/components/LocationPageClient';

const englewoodConfig = {
  city: "Englewood",
  county: "Charlotte County",
  slug: "locksmith-englewood",
  title: "24/7 Locksmith Englewood FL | Fast Emergency Locksmith Service",
  description: "Trusted locksmith in Englewood FL. 20-30 min response. Emergency car lockout, key programming, residential & commercial locksmith services. Call (941) 587-5050",
  heroTitle: "Englewood's Reliable 24/7 Emergency Locksmith",
  heroSubtitle: "24/7 Emergency Locksmith • Serving Englewood & Rotonda West",
  responseTime: "20-30 Minute",
  coordinates: { lat: "26.9620", lon: "-82.3526" },
  services: {
    residential: [
      "House Lockout Service (24/7)",
      "Lock Rekey & Master Key Systems",
      "High-Security Lock Installation",
      "Smart Lock Installation",
      "Broken Key Extraction",
      "Weatherproof Lock Solutions"
    ],
    commercial: [
      "Office Lockout Emergency Service",
      "Access Control Systems",
      "Master Key System Design",
      "File Cabinet & Desk Locks",
      "Storefront Door Locks",
      "Commercial Security Consultation"
    ],
    automotive: [
      "Emergency Car Lockout",
      "Transponder Key Programming",
      "Smart Key & Push-to-Start Keys",
      "Key Fob Replacement",
      "All Makes & Models",
      "Mobile Key Cutting Service"
    ],
    emergency: [
      "24/7 Immediate Response",
      "Break-in Damage Repair",
      "Lost Key Replacement",
      "Hurricane Damage Lock Repair",
      "Eviction Locksmith Service",
      "Emergency Rekeying"
    ]
  },
  nearbyAreas: [
    "Englewood",
    "Rotonda West",
    "Port Charlotte",
    "Venice",
    "Grove City",
    "Manasota Key",
    "Charlotte County",
    "Sarasota County"
  ]
};

export default function EnglewoodPage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "name": "Unlock SRQ LLC - Englewood Locksmith",
    "image": "https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp",
    "description": englewoodConfig.description,
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
      "latitude": englewoodConfig.coordinates.lat,
      "longitude": englewoodConfig.coordinates.lon
    },
    "telephone": "+19415875050",
    "email": "info@srqunlock.com",
    "url": `https://srqunlock.com/${englewoodConfig.slug}/`,
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": {
      "@type": "City",
      "name": englewoodConfig.city,
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
        <title>{englewoodConfig.title}</title>
        <meta name="description" content={englewoodConfig.description} />
        <meta name="keywords" content="locksmith Englewood, Englewood locksmith, emergency locksmith Englewood FL, car locksmith Englewood, residential locksmith, commercial locksmith, key programming Englewood, 24/7 locksmith Charlotte County" />
        <meta name="author" content="Maksim Yepikhin - Unlock SRQ LLC" />
        <meta name="robots" content="index, follow" />
        
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Englewood" />
        <meta name="geo.position" content="26.9620;-82.3526" />
        <meta name="ICBM" content="26.9620, -82.3526" />
        
        <link rel="canonical" href={`https://srqunlock.com/${englewoodConfig.slug}/`} />
        
        <meta property="og:title" content={englewoodConfig.title} />
        <meta property="og:description" content={englewoodConfig.description} />
        <meta property="og:url" content={`https://srqunlock.com/${englewoodConfig.slug}/`} />
        <meta property="og:site_name" content="Unlock SRQ LLC" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1280" />
        <meta property="og:image:alt" content="Professional locksmith Maksim Yepikhin serving Englewood FL" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={englewoodConfig.title} />
        <meta name="twitter:description" content={englewoodConfig.description} />
        <meta name="twitter:image" content="https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </Head>
      <LocationPageClient config={englewoodConfig} />
    </>
  );
}
