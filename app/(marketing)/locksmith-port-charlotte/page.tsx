import type { Metadata } from "next";
import LocationPageClient from "@/components/LocationPageClient";

const portCharlotteConfig = {
  city: "Port Charlotte",
  county: "Charlotte County",
  slug: "locksmith-port-charlotte",
  title: "24/7 Locksmith Port Charlotte FL | Emergency Car & Home Locksmith",
  description: "Trusted locksmith in Port Charlotte FL. 15-20 min response time. Emergency car lockout, key programming, residential & commercial locksmith. Call (941) 587-5050",
  heroTitle: "Expert Locksmith Services in Port Charlotte, FL",
  heroSubtitle: "24/7 Emergency Locksmith • Serving Charlotte County",
  responseTime: "15-20 Minute",
  coordinates: { lat: "26.9762", lon: "-82.0906" },
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
    "Port Charlotte",
    "North Port",
    "Punta Gorda",
    "Englewood",
    "Rotonda West",
    "Charlotte Harbor",
    "Deep Creek",
    "Solana"
  ]
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: portCharlotteConfig.title,
    description: portCharlotteConfig.description,
    keywords: "locksmith Port Charlotte, Port Charlotte locksmith, emergency locksmith Port Charlotte FL, car locksmith Charlotte County, residential locksmith, commercial locksmith, key programming Port Charlotte, 24/7 locksmith Florida",
    authors: [{ name: "Maksim Yepikhin - Unlock SRQ LLC" }],
    openGraph: {
      type: "website",
      url: `https://srqunlock.com/${portCharlotteConfig.slug}/`,
      title: portCharlotteConfig.title,
      description: portCharlotteConfig.description,
      siteName: "Unlock SRQ LLC",
      locale: "en_US",
      images: [{
        url: "/professional-locksmith-mobile-workshop-sarasota-fl.webp",
        width: 1920,
        height: 1280,
        alt: "Professional locksmith Maksim Yepikhin serving Port Charlotte FL",
        type: "image/webp"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: portCharlotteConfig.title,
      description: portCharlotteConfig.description,
      images: ["/professional-locksmith-mobile-workshop-sarasota-fl.webp"]
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": "Port Charlotte",
      "geo.position": `${portCharlotteConfig.coordinates.lat};${portCharlotteConfig.coordinates.lon}`,
      "ICBM": `${portCharlotteConfig.coordinates.lat}, ${portCharlotteConfig.coordinates.lon}`
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://srqunlock.com/${portCharlotteConfig.slug}/`
    }
  };
}

export default function PortCharlottePage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "name": "Unlock SRQ LLC - Port Charlotte Locksmith",
    "image": "https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp",
    "description": portCharlotteConfig.description,
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
      "latitude": portCharlotteConfig.coordinates.lat,
      "longitude": portCharlotteConfig.coordinates.lon
    },
    "telephone": "+19415875050",
    "email": "info@srqunlock.com",
    "url": `https://srqunlock.com/${portCharlotteConfig.slug}/`,
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": {
      "@type": "City",
      "name": portCharlotteConfig.city,
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
      <LocationPageClient config={portCharlotteConfig} />
    </>
  );
}
