import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export default function SEO({
  title = "Unlock SRQ LLC - Professional Locksmith Services in Sarasota, FL",
  description = "24/7 emergency locksmith services in Sarasota, North Port, Port Charlotte, Englewood, and Bradenton. Expert key programming, lock installation, and automotive locksmith services. Fast response within 15-30 minutes.",
  keywords = "locksmith Sarasota, locksmith North Port, emergency locksmith Florida, car key programming, lock installation, automotive locksmith, 24/7 locksmith, mobile locksmith, key duplication, smart lock installation",
  ogImage = "/logo.png",
  ogType = "website",
  canonicalUrl = "https://unlocksrq.com",
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Basic Meta Tags
    setMetaTag("description", description);
    setMetaTag("keywords", keywords);
    setMetaTag("author", "Unlock SRQ LLC");
    setMetaTag("robots", "index, follow");
    setMetaTag("googlebot", "index, follow");
    setMetaTag("language", "English");

    // Open Graph / Facebook
    setMetaTag("og:type", ogType, true);
    setMetaTag("og:url", canonicalUrl, true);
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:image", ogImage, true);
    setMetaTag("og:locale", "en_US", true);
    setMetaTag("og:site_name", "Unlock SRQ LLC", true);

    // Twitter
    setMetaTag("twitter:card", "summary_large_image", true);
    setMetaTag("twitter:url", canonicalUrl, true);
    setMetaTag("twitter:title", title, true);
    setMetaTag("twitter:description", description, true);
    setMetaTag("twitter:image", ogImage, true);

    // Local Business Tags
    setMetaTag("geo.region", "US-FL");
    setMetaTag("geo.placename", "North Port");
    setMetaTag("geo.position", "27.0442;-82.2359");
    setMetaTag("ICBM", "27.0442, -82.2359");

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // Structured Data - JSON-LD
    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "Locksmith",
      "name": "Unlock SRQ LLC",
      "image": `${canonicalUrl}/logo.png`,
      "description": description,
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
      "email": "info@unlocksrq.com",
      "url": canonicalUrl,
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Sarasota",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        },
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
          "@type": "City",
          "name": "Englewood",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        },
        {
          "@type": "City",
          "name": "Bradenton",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        }
      ],
      "serviceType": [
        "Emergency Locksmith",
        "Automotive Locksmith",
        "Residential Locksmith",
        "Commercial Locksmith",
        "Key Programming",
        "Lock Installation",
        "Lock Repair",
        "Key Duplication",
        "Smart Lock Installation"
      ],
      "owner": {
        "@type": "Person",
        "name": "Maxim Yepichin"
      }
    };

    // Add or update JSON-LD script
    let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement("script");
      jsonLdScript.setAttribute("type", "application/ld+json");
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(businessSchema);
  }, [title, description, keywords, ogImage, ogType, canonicalUrl]);

  return null;
}

