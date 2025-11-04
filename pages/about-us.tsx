import Head from 'next/head';
import AboutUsClient from "@/components/AboutUsClient";

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
      <Head>
        <title>About Unlock SRQ | Master Locksmith Maksim Yepikhin | Licensed & Insured</title>
        <meta name="description" content="Meet Maksim Yepikhin, owner and master locksmith at Unlock SRQ LLC. Licensed, insured, and serving North Port, Port Charlotte, and Charlotte County since 2020. 24/7 emergency locksmith services." />
        <meta name="keywords" content="Unlock SRQ, Maksim Yepikhin, master locksmith, licensed locksmith Florida, insured locksmith Charlotte County, North Port locksmith owner, locksmith business Charlotte County, professional locksmith services" />
        <meta name="author" content="Maksim Yepikhin - Unlock SRQ LLC" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srqunlock.com/about-us/" />
        <meta property="og:title" content="About Unlock SRQ | Master Locksmith Maksim Yepikhin | Licensed & Insured" />
        <meta property="og:description" content="Meet Maksim Yepikhin, owner and master locksmith at Unlock SRQ LLC. Licensed, insured, and serving North Port, Port Charlotte, and Charlotte County since 2020. 24/7 emergency locksmith services." />
        <meta property="og:site_name" content="Unlock SRQ LLC" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/maksim-yepikhin-locksmith-with-customer-sarasota-fl.webp" />
        <meta property="og:image:width" content="1536" />
        <meta property="og:image:height" content="2048" />
        <meta property="og:image:alt" content="Maksim Yepikhin, licensed master locksmith and owner of Unlock SRQ" />
        <meta property="og:image:type" content="image/webp" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Unlock SRQ | Master Locksmith Maksim Yepikhin | Licensed & Insured" />
        <meta name="twitter:description" content="Meet Maksim Yepikhin, owner and master locksmith at Unlock SRQ LLC. Licensed, insured, and serving North Port, Port Charlotte, and Charlotte County since 2020. 24/7 emergency locksmith services." />
        <meta name="twitter:image" content="/maksim-yepikhin-locksmith-with-customer-sarasota-fl.webp" />
        
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="North Port" />
        <meta name="geo.position" content="27.0442;-82.2359" />
        <meta name="ICBM" content="27.0442, -82.2359" />
        
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://srqunlock.com/about-us/" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema)
          }}
        />
      </Head>
      <AboutUsClient />
    </>
  );
}
