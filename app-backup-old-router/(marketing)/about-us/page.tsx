import type { Metadata } from "next";
import AboutUsClient from "@/components/AboutUsClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Unlock SRQ | Master Locksmith Maksim Yepikhin | Licensed & Insured",
    description: "Meet Maksim Yepikhin, owner and master locksmith at Unlock SRQ LLC. Licensed, insured, and serving North Port, Port Charlotte, and Charlotte County since 2020. 24/7 emergency locksmith services.",
    keywords: "Unlock SRQ, Maksim Yepikhin, master locksmith, licensed locksmith Florida, insured locksmith Charlotte County, North Port locksmith owner, locksmith business Charlotte County, professional locksmith services",
    authors: [{ name: "Maksim Yepikhin - Unlock SRQ LLC" }],
    openGraph: {
      type: "website",
      url: "https://srqunlock.com/about-us/",
      title: "About Unlock SRQ | Master Locksmith Maksim Yepikhin | Licensed & Insured",
      description: "Meet Maksim Yepikhin, owner and master locksmith at Unlock SRQ LLC. Licensed, insured, and serving North Port, Port Charlotte, and Charlotte County since 2020. 24/7 emergency locksmith services.",
      siteName: "Unlock SRQ LLC",
      locale: "en_US",
      images: [{
        url: "/maksim-yepikhin-locksmith-with-customer-sarasota-fl.webp",
        width: 1536,
        height: 2048,
        alt: "Maksim Yepikhin, licensed master locksmith and owner of Unlock SRQ",
        type: "image/webp"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: "About Unlock SRQ | Master Locksmith Maksim Yepikhin | Licensed & Insured",
      description: "Meet Maksim Yepikhin, owner and master locksmith at Unlock SRQ LLC. Licensed, insured, and serving North Port, Port Charlotte, and Charlotte County since 2020. 24/7 emergency locksmith services.",
      images: ["/maksim-yepikhin-locksmith-with-customer-sarasota-fl.webp"]
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": "North Port",
      "geo.position": "27.0442;-82.2359",
      "ICBM": "27.0442, -82.2359"
    },
    robots: "index, follow",
    alternates: {
      canonical: "https://srqunlock.com/about-us/"
    }
  };
}

export default function AboutUsPage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "name": "Unlock SRQ LLC",
    "image": "https://srqunlock.com/maksim-yepikhin-locksmith-with-customer-sarasota-fl.webp",
    "description": "Meet Maksim Yepikhin, owner and master locksmith at Unlock SRQ LLC. Licensed, insured, and serving North Port, Port Charlotte, and Charlotte County since 2020.",
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
      "latitude": "27.0442",
      "longitude": "-82.2359"
    },
    "telephone": "+19415875050",
    "email": "info@srqunlock.com",
    "url": "https://srqunlock.com/about-us/",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "founder": {
      "@type": "Person",
      "name": "Maksim Yepikhin",
      "image": "https://srqunlock.com/maksim-yepikhin-locksmith-with-customer-sarasota-fl.webp",
      "jobTitle": "Owner & Master Locksmith",
      "description": "Licensed and insured master locksmith specializing in automotive key programming, emergency lockout services, and advanced security installations",
      "worksFor": {
        "@type": "Locksmith",
        "name": "Unlock SRQ LLC"
      },
      "knowsAbout": [
        "Automotive Key Programming",
        "Emergency Lockout Services",
        "Smart Lock Systems",
        "High-Security Lock Installation",
        "Transponder Key Programming",
        "Commercial Access Control"
      ]
    },
    "owner": {
      "@type": "Person",
      "name": "Maksim Yepikhin",
      "jobTitle": "Owner & Master Locksmith"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "North Port",
        "containedIn": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Port Charlotte",
        "containedIn": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Charlotte County",
        "containedIn": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Sarasota County",
        "containedIn": {
          "@type": "State",
          "name": "Florida"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Locksmith Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Locksmith Services",
            "description": "24/7 emergency lockout assistance and lock repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automotive Locksmith",
            "description": "Car key programming, transponder keys, and ignition repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Locksmith",
            "description": "Home lockout, lock rekey, and smart lock installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Locksmith",
            "description": "Office lockout, access control systems, and master key systems"
          }
        }
      ]
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
      <AboutUsClient />
    </>
  );
}
