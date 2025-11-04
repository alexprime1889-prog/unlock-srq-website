import type { Metadata } from "next";
import LocationPageClient from "@/components/LocationPageClient";

const bradentonConfig = {
  city: "Bradenton",
  county: "Manatee County",
  slug: "locksmith-bradenton",
  title: "24/7 Locksmith Bradenton FL | Professional Emergency Locksmith",
  description: "Professional locksmith in Bradenton FL. 20-25 min response. Emergency car lockout, key programming, residential & commercial locksmith services. Call (941) 587-5050",
  heroTitle: "Bradenton's Professional 24/7 Emergency Locksmith",
  heroSubtitle: "24/7 Emergency Locksmith • Serving All of Manatee County",
  responseTime: "20-25 Minute",
  coordinates: { lat: "27.4989", lon: "-82.5748" },
  services: {
    residential: [
      "House Lockout Service (24/7)",
      "Lock Rekey & Master Key Systems",
      "High-Security Lock Installation",
      "Smart Lock Installation & Programming",
      "Deadbolt Installation",
      "Home Security Upgrades"
    ],
    commercial: [
      "Office Lockout Emergency Service",
      "Access Control Systems",
      "Master Key System Design",
      "Electronic Lock Systems",
      "Panic Bar Installation & Repair",
      "Retail Security Solutions"
    ],
    automotive: [
      "Emergency Car Lockout",
      "Transponder Key Programming (NASTF Certified)",
      "Smart Key & Push-to-Start Keys",
      "Key Fob Replacement & Programming",
      "All Makes & Models - 95% Keys in Stock",
      "Ignition Repair & Replacement"
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
    "Bradenton",
    "Palmetto",
    "Ellenton",
    "Parrish",
    "Lakewood Ranch",
    "Bayshore Gardens",
    "Cortez",
    "Manatee County"
  ]
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: bradentonConfig.title,
    description: bradentonConfig.description,
    keywords: "locksmith Bradenton, Bradenton locksmith, emergency locksmith Bradenton FL, car locksmith Manatee County, residential locksmith, commercial locksmith, key programming Bradenton, 24/7 locksmith Florida",
    authors: [{ name: "Maksim Yepikhin - Unlock SRQ LLC" }],
    openGraph: {
      type: "website",
      url: `https://srqunlock.com/${bradentonConfig.slug}/`,
      title: bradentonConfig.title,
      description: bradentonConfig.description,
      siteName: "Unlock SRQ LLC",
      locale: "en_US",
      images: [{
        url: "/professional-locksmith-mobile-workshop-sarasota-fl.webp",
        width: 1920,
        height: 1280,
        alt: "Professional locksmith Maksim Yepikhin serving Bradenton FL",
        type: "image/webp"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: bradentonConfig.title,
      description: bradentonConfig.description,
      images: ["/professional-locksmith-mobile-workshop-sarasota-fl.webp"]
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": "Bradenton",
      "geo.position": `${bradentonConfig.coordinates.lat};${bradentonConfig.coordinates.lon}`,
      "ICBM": `${bradentonConfig.coordinates.lat}, ${bradentonConfig.coordinates.lon}`
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://srqunlock.com/${bradentonConfig.slug}/`
    }
  };
}

export default function BradentonPage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "name": "Unlock SRQ LLC - Bradenton Locksmith",
    "image": "https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp",
    "description": bradentonConfig.description,
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
      "latitude": bradentonConfig.coordinates.lat,
      "longitude": bradentonConfig.coordinates.lon
    },
    "telephone": "+19415875050",
    "email": "info@srqunlock.com",
    "url": `https://srqunlock.com/${bradentonConfig.slug}/`,
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": {
      "@type": "City",
      "name": bradentonConfig.city,
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
      <LocationPageClient config={bradentonConfig} />
    </>
  );
}
