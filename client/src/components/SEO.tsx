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
  title = "24/7 Emergency Locksmith North Port & Port Charlotte FL | Unlock SRQ",
  description = "24/7 emergency locksmith serving North Port, Port Charlotte, Punta Gorda, Venice. Licensed & insured. 15-minute response. Lost keys, lockouts, commercial. Call (941) 587-5050",
  keywords = "locksmith North Port, locksmith Port Charlotte, locksmith Punta Gorda, locksmith Venice FL, emergency locksmith Charlotte County, 24/7 locksmith Florida, car key programming, mobile locksmith, automotive locksmith, commercial locksmith, residential locksmith",
  ogImage = "/professional-locksmith-mobile-workshop-sarasota-fl.webp",
  ogType = "website",
  canonicalUrl = "https://srqunlock.com",
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

    // Twitter (uses 'name' attribute, not 'property')
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:url", canonicalUrl);
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", ogImage);
    setMetaTag("twitter:image:alt", "Professional locksmith Maksim Yepikhin in mobile workshop - Unlock SRQ LLC");
    
    // Additional SEO metadata
    setMetaTag("og:image:alt", "Professional locksmith Maksim Yepikhin in mobile workshop with key programming equipment", true);
    setMetaTag("og:image:type", "image/webp", true);
    setMetaTag("og:image:width", "1920", true);
    setMetaTag("og:image:height", "1280", true);

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
      "@type": ["Locksmith", "LocalBusiness", "EmergencyService"],
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
      "email": "info@srqunlock.com",
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
          "name": "Punta Gorda",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        },
        {
          "@type": "City",
          "name": "Venice",
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
          "name": "Rotonda West",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        },
        {
          "@type": "State",
          "name": "Sarasota County"
        },
        {
          "@type": "State",
          "name": "Charlotte County"
        }
      ],
      "availableService": [
        {
          "@type": "Service",
          "name": "24/7 Emergency Locksmith",
          "description": "Immediate response emergency lockout and lock repair services available 24/7/365",
          "serviceType": "Emergency Service"
        },
        {
          "@type": "Service",
          "name": "Automotive Locksmith",
          "description": "Car key programming, transponder keys, smart keys, ignition repair, car lockout",
          "serviceType": "Automotive"
        },
        {
          "@type": "Service",
          "name": "Residential Locksmith",
          "description": "House lockout, lock rekey, smart lock installation, high-security locks",
          "serviceType": "Residential"
        },
        {
          "@type": "Service",
          "name": "Commercial Locksmith",
          "description": "Office lockout, access control systems, master key systems, panic bars",
          "serviceType": "Commercial"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Locksmith Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Lockout Service",
              "description": "24/7 emergency lockout assistance for cars, homes, and businesses"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Key Programming",
              "description": "Transponder key programming, smart key programming, push-to-start keys"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Lock Installation & Repair",
              "description": "Professional lock installation, repair, and rekeying services"
            }
          }
        ]
      },
      "owner": {
        "@type": "Person",
        "name": "Maksim Yepikhin",
        "image": `${canonicalUrl}/professional-locksmith-mobile-workshop-sarasota-fl.webp`,
        "jobTitle": "Owner & Master Locksmith",
        "description": "Professional locksmith with expertise in key programming, automotive locksmith services, and emergency lockout assistance",
        "worksFor": {
          "@type": "Locksmith",
          "name": "Unlock SRQ LLC"
        },
        "knowsAbout": [
          "Key Programming",
          "Automotive Locksmith Services",
          "Emergency Lockout Assistance",
          "Smart Lock Installation",
          "Commercial Security Systems",
          "Residential Lock Services"
        ]
      },
      "employee": {
        "@type": "Person",
        "name": "Maksim Yepikhin",
        "jobTitle": "Owner & Master Locksmith"
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

