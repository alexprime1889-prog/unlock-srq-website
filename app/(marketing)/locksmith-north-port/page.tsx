import type { Metadata } from "next";
import LocationPageClient from "@/components/LocationPageClient";

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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: northPortConfig.title,
    description: northPortConfig.description,
    keywords: "locksmith North Port, North Port locksmith, emergency locksmith North Port FL, car locksmith North Port, residential locksmith, commercial locksmith, key programming North Port, 24/7 locksmith Sarasota County",
    authors: [{ name: "Maksim Yepikhin - Unlock SRQ LLC" }],
    openGraph: {
      type: "website",
      url: `https://srqunlock.com/${northPortConfig.slug}/`,
      title: northPortConfig.title,
      description: northPortConfig.description,
      siteName: "Unlock SRQ LLC",
      locale: "en_US",
      images: [{
        url: "/professional-locksmith-mobile-workshop-sarasota-fl.webp",
        width: 1920,
        height: 1280,
        alt: "Professional locksmith Maksim Yepikhin serving North Port FL",
        type: "image/webp"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: northPortConfig.title,
      description: northPortConfig.description,
      images: ["/professional-locksmith-mobile-workshop-sarasota-fl.webp"]
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": "North Port",
      "geo.position": `${northPortConfig.coordinates.lat};${northPortConfig.coordinates.lon}`,
      "ICBM": `${northPortConfig.coordinates.lat}, ${northPortConfig.coordinates.lon}`
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://srqunlock.com/${northPortConfig.slug}/`
    }
  };
}

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema)
        }}
      />
      <LocationPageClient config={northPortConfig} />
    </>
  );
}
