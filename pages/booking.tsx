import Head from 'next/head';
import BookingForm from "@/components/BookingForm";

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
      <Head>
        <title>Book Locksmith Appointment Online | 24/7 Service in North Port FL</title>
        <meta name="description" content="Book professional locksmith services online in North Port, Port Charlotte, Punta Gorda, Venice FL. Emergency lockout, automotive key programming, residential & commercial locks. 15-minute response. Call (941) 587-5050" />
        <meta name="keywords" content="book locksmith North Port, locksmith appointment Port Charlotte, schedule locksmith Punta Gorda, locksmith booking Venice FL, emergency locksmith Charlotte County, automotive locksmith appointment, residential locksmith booking, commercial locksmith schedule" />
        <meta name="author" content="Unlock SRQ LLC" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srqunlock.com/booking" />
        <meta property="og:title" content="Book Locksmith Appointment Online | 24/7 Service in North Port FL" />
        <meta property="og:description" content="Book professional locksmith services online in North Port, Port Charlotte, Punta Gorda, Venice FL. Emergency lockout, automotive key programming, residential & commercial locks. 15-minute response." />
        <meta property="og:site_name" content="Unlock SRQ LLC" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1280" />
        <meta property="og:image:alt" content="Professional locksmith Maksim Yepikhin mobile workshop - book appointment online" />
        <meta property="og:image:type" content="image/webp" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Locksmith Appointment Online | 24/7 Service in North Port FL" />
        <meta name="twitter:description" content="Book professional locksmith services online in North Port, Port Charlotte, Punta Gorda, Venice FL. Emergency lockout, automotive key programming, residential & commercial locks." />
        <meta name="twitter:image" content="/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="North Port" />
        <meta name="geo.position" content="27.0442;-82.2359" />
        <meta name="ICBM" content="27.0442, -82.2359" />
        
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://srqunlock.com/booking" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(bookingSchema)
          }}
        />
      </Head>
      <BookingForm />
    </>
  );
}
