import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Book Locksmith Appointment Online | 24/7 Service in North Port FL",
    description: "Book professional locksmith services online in North Port, Port Charlotte, Punta Gorda, Venice FL. Emergency lockout, automotive key programming, residential & commercial locks. 15-minute response. Call (941) 587-5050",
    keywords: "book locksmith North Port, locksmith appointment Port Charlotte, schedule locksmith Punta Gorda, locksmith booking Venice FL, emergency locksmith Charlotte County, automotive locksmith appointment, residential locksmith booking, commercial locksmith schedule",
    authors: [{ name: "Unlock SRQ LLC" }],
    openGraph: {
      type: "website",
      url: "https://srqunlock.com/booking",
      title: "Book Locksmith Appointment Online | 24/7 Service in North Port FL",
      description: "Book professional locksmith services online in North Port, Port Charlotte, Punta Gorda, Venice FL. Emergency lockout, automotive key programming, residential & commercial locks. 15-minute response.",
      siteName: "Unlock SRQ LLC",
      locale: "en_US",
      images: [{
        url: "/professional-locksmith-mobile-workshop-sarasota-fl.webp",
        width: 1920,
        height: 1280,
        alt: "Professional locksmith Maksim Yepikhin mobile workshop - book appointment online",
        type: "image/webp"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Book Locksmith Appointment Online | 24/7 Service in North Port FL",
      description: "Book professional locksmith services online in North Port, Port Charlotte, Punta Gorda, Venice FL. Emergency lockout, automotive key programming, residential & commercial locks.",
      images: ["/professional-locksmith-mobile-workshop-sarasota-fl.webp"]
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": "North Port",
      "geo.position": "27.0442;-82.2359",
      "ICBM": "27.0442, -82.2359"
    },
    robots: "index, follow",
    alternates: {
      canonical: "https://srqunlock.com/booking"
    }
  };
}

export default function BookingPage() {
  const bookingSchema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness", "EmergencyService"],
    "name": "Unlock SRQ LLC",
    "description": "Book professional locksmith services online. 24/7 emergency service, automotive locksmith, residential and commercial locksmith in North Port, Port Charlotte, Punta Gorda, Venice FL.",
    "telephone": "+19415875050",
    "email": "info@srqunlock.com",
    "url": "https://srqunlock.com/booking",
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
    "availableService": [
      {
        "@type": "Service",
        "name": "Emergency Locksmith Service",
        "description": "24/7 emergency lockout assistance for cars, homes, and businesses",
        "serviceType": "Emergency Service"
      },
      {
        "@type": "Service",
        "name": "Automotive Locksmith",
        "description": "Car key programming, transponder keys, smart keys, ignition repair",
        "serviceType": "Automotive"
      },
      {
        "@type": "Service",
        "name": "Residential Locksmith",
        "description": "Home lockout, lock rekey, smart lock installation, high-security locks",
        "serviceType": "Residential"
      },
      {
        "@type": "Service",
        "name": "Commercial Locksmith",
        "description": "Office lockout, access control systems, master key systems",
        "serviceType": "Commercial"
      }
    ],
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
      }
    ],
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
          __html: JSON.stringify(bookingSchema)
        }}
      />
      <BookingForm />
    </>
  );
}
