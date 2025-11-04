import type { Metadata } from "next";
import LocationPageClient from "@/components/LocationPageClient";

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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: puntaGordaConfig.title,
    description: puntaGordaConfig.description,
    keywords: "locksmith Punta Gorda, Punta Gorda locksmith, emergency locksmith Punta Gorda FL, car locksmith Charlotte County, residential locksmith, commercial locksmith, key programming Punta Gorda, 24/7 locksmith Florida",
    authors: [{ name: "Maksim Yepikhin - Unlock SRQ LLC" }],
    openGraph: {
      type: "website",
      url: `https://srqunlock.com/${puntaGordaConfig.slug}/`,
      title: puntaGordaConfig.title,
      description: puntaGordaConfig.description,
      siteName: "Unlock SRQ LLC",
      locale: "en_US",
      images: [{
        url: "/professional-locksmith-mobile-workshop-sarasota-fl.webp",
        width: 1920,
        height: 1280,
        alt: "Professional locksmith Maksim Yepikhin serving Punta Gorda FL",
        type: "image/webp"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: puntaGordaConfig.title,
      description: puntaGordaConfig.description,
      images: ["/professional-locksmith-mobile-workshop-sarasota-fl.webp"]
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": "Punta Gorda",
      "geo.position": `${puntaGordaConfig.coordinates.lat};${puntaGordaConfig.coordinates.lon}`,
      "ICBM": `${puntaGordaConfig.coordinates.lat}, ${puntaGordaConfig.coordinates.lon}`
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://srqunlock.com/${puntaGordaConfig.slug}/`
    }
  };
}

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema)
        }}
      />
      <LocationPageClient config={puntaGordaConfig} />
    </>
  );
}
