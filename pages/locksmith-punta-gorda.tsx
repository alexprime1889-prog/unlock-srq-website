import Head from 'next/head';
import LocationPageClient from '@/components/LocationPageClient';

const puntaGordaConfig = {
  city: "Punta Gorda",
  county: "Charlotte County",
  slug: "locksmith-punta-gorda",
  title: "24/7 Locksmith Punta Gorda FL | Fast Response Locksmith Service",
  description: "Professional locksmith in Punta Gorda FL. 20-25 min response. Emergency lockout, key programming, commercial locksmith. Licensed & insured. Call (941) 587-5050",
  heroTitle: "Professional Locksmith Services in Punta Gorda, FL",
  heroSubtitle: "24/7 Emergency Locksmith • Charlotte County's Trusted Choice",
  responseTime: "20-25 Minute",
  coordinates: { lat: "26.9298", lon: "-81.9734" },
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
    "Punta Gorda",
    "Port Charlotte",
    "Charlotte Harbor",
    "Burnt Store",
    "Deep Creek",
    "Solana",
    "Cleveland",
    "Harbour Heights"
  ]
};

export default function PuntaGordaPage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "name": "Unlock SRQ LLC - Punta Gorda Locksmith",
    "image": "https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp",
    "description": puntaGordaConfig.description,
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
      "latitude": puntaGordaConfig.coordinates.lat,
      "longitude": puntaGordaConfig.coordinates.lon
    },
    "telephone": "+19415875050",
    "email": "info@srqunlock.com",
    "url": `https://srqunlock.com/${puntaGordaConfig.slug}/`,
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": {
      "@type": "City",
      "name": puntaGordaConfig.city,
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
        <title>{puntaGordaConfig.title}</title>
        <meta name="description" content={puntaGordaConfig.description} />
        <meta name="keywords" content="locksmith Punta Gorda, Punta Gorda locksmith, emergency locksmith Punta Gorda FL, car locksmith Charlotte County, residential locksmith, commercial locksmith, key programming Punta Gorda, 24/7 locksmith Florida" />
        <meta name="author" content="Maksim Yepikhin - Unlock SRQ LLC" />
        <meta name="robots" content="index, follow" />
        
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Punta Gorda" />
        <meta name="geo.position" content="26.9298;-81.9734" />
        <meta name="ICBM" content="26.9298, -81.9734" />
        
        <link rel="canonical" href={`https://srqunlock.com/${puntaGordaConfig.slug}/`} />
        
        <meta property="og:title" content={puntaGordaConfig.title} />
        <meta property="og:description" content={puntaGordaConfig.description} />
        <meta property="og:url" content={`https://srqunlock.com/${puntaGordaConfig.slug}/`} />
        <meta property="og:site_name" content="Unlock SRQ LLC" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1280" />
        <meta property="og:image:alt" content="Professional locksmith Maksim Yepikhin serving Punta Gorda FL" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={puntaGordaConfig.title} />
        <meta name="twitter:description" content={puntaGordaConfig.description} />
        <meta name="twitter:image" content="https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </Head>
      <LocationPageClient config={puntaGordaConfig} />
    </>
  );
}
