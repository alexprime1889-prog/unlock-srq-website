import type { Metadata } from "next";
import LocationPageClient from "@/components/LocationPageClient";

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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: sarasotaConfig.title,
    description: sarasotaConfig.description,
    keywords: "locksmith Sarasota, Sarasota locksmith, emergency locksmith Sarasota FL, car locksmith Sarasota, residential locksmith, commercial locksmith, key programming Sarasota, 24/7 locksmith Sarasota County",
    authors: [{ name: "Maksim Yepikhin - Unlock SRQ LLC" }],
    openGraph: {
      type: "website",
      url: `https://srqunlock.com/${sarasotaConfig.slug}/`,
      title: sarasotaConfig.title,
      description: sarasotaConfig.description,
      siteName: "Unlock SRQ LLC",
      locale: "en_US",
      images: [{
        url: "/professional-locksmith-mobile-workshop-sarasota-fl.webp",
        width: 1920,
        height: 1280,
        alt: "Professional locksmith Maksim Yepikhin serving Sarasota FL",
        type: "image/webp"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: sarasotaConfig.title,
      description: sarasotaConfig.description,
      images: ["/professional-locksmith-mobile-workshop-sarasota-fl.webp"]
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": "Sarasota",
      "geo.position": `${sarasotaConfig.coordinates.lat};${sarasotaConfig.coordinates.lon}`,
      "ICBM": `${sarasotaConfig.coordinates.lat}, ${sarasotaConfig.coordinates.lon}`
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://srqunlock.com/${sarasotaConfig.slug}/`
    }
  };
}

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema)
        }}
      />
      <LocationPageClient config={sarasotaConfig} />
    </>
  );
}
