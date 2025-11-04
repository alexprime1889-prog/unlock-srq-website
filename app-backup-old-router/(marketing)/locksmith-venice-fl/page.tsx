import type { Metadata } from "next";
import LocationPageClient from "@/components/LocationPageClient";

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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: veniceConfig.title,
    description: veniceConfig.description,
    keywords: "locksmith Venice FL, Venice locksmith, emergency locksmith Venice Florida, car locksmith Venice, residential locksmith, commercial locksmith, key programming Venice, 24/7 locksmith Sarasota County",
    authors: [{ name: "Maksim Yepikhin - Unlock SRQ LLC" }],
    openGraph: {
      type: "website",
      url: `https://srqunlock.com/${veniceConfig.slug}/`,
      title: veniceConfig.title,
      description: veniceConfig.description,
      siteName: "Unlock SRQ LLC",
      locale: "en_US",
      images: [{
        url: "/professional-locksmith-mobile-workshop-sarasota-fl.webp",
        width: 1920,
        height: 1280,
        alt: "Professional locksmith Maksim Yepikhin serving Venice FL",
        type: "image/webp"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: veniceConfig.title,
      description: veniceConfig.description,
      images: ["/professional-locksmith-mobile-workshop-sarasota-fl.webp"]
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": "Venice",
      "geo.position": `${veniceConfig.coordinates.lat};${veniceConfig.coordinates.lon}`,
      "ICBM": `${veniceConfig.coordinates.lat}, ${veniceConfig.coordinates.lon}`
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://srqunlock.com/${veniceConfig.slug}/`
    }
  };
}

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema)
        }}
      />
      <LocationPageClient config={veniceConfig} />
    </>
  );
}
