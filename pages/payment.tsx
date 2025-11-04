import Head from 'next/head';
import PaymentForm from "@/components/PaymentForm";

export default function PaymentPage() {
  const paymentSchema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "name": "Unlock SRQ LLC",
    "description": "Secure online payment portal for locksmith services in North Port, Port Charlotte, Punta Gorda, Venice FL. Accept all major credit cards, Zelle, Venmo, PayPal.",
    "telephone": "+19415875050",
    "email": "info@srqunlock.com",
    "url": "https://srqunlock.com/payment",
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
    "paymentAccepted": ["Cash", "Credit Card", "Visa", "Mastercard", "American Express", "Discover", "Zelle", "Venmo", "PayPal", "Check"],
    "priceRange": "$$",
    "owner": {
      "@type": "Person",
      "name": "Maksim Yepikhin",
      "jobTitle": "Owner & Master Locksmith"
    }
  };

  return (
    <>
      <Head>
        <title>Secure Online Payment | Pay Locksmith Invoice Online | Unlock SRQ</title>
        <meta name="description" content="Pay your locksmith invoice securely online. Fast, convenient payment for locksmith services in North Port, Port Charlotte, Punta Gorda FL. We accept Visa, Mastercard, Amex, Discover. Call (941) 587-5050" />
        <meta name="keywords" content="pay locksmith online North Port, locksmith payment Port Charlotte, online invoice payment Punta Gorda, secure locksmith payment, pay locksmith bill Venice FL, Charlotte County locksmith payment, credit card payment locksmith" />
        <meta name="author" content="Unlock SRQ LLC" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srqunlock.com/payment" />
        <meta property="og:title" content="Secure Online Payment | Pay Locksmith Invoice Online | Unlock SRQ" />
        <meta property="og:description" content="Pay your locksmith invoice securely online. Fast, convenient payment for locksmith services in North Port, Port Charlotte, Punta Gorda FL. We accept all major credit cards." />
        <meta property="og:site_name" content="Unlock SRQ LLC" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1280" />
        <meta property="og:image:alt" content="Professional locksmith Maksim Yepikhin - secure online payment" />
        <meta property="og:image:type" content="image/webp" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Secure Online Payment | Pay Locksmith Invoice Online | Unlock SRQ" />
        <meta name="twitter:description" content="Pay your locksmith invoice securely online. Fast, convenient payment for locksmith services in North Port, Port Charlotte, Punta Gorda FL." />
        <meta name="twitter:image" content="/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="North Port" />
        <meta name="geo.position" content="27.0442;-82.2359" />
        <meta name="ICBM" content="27.0442, -82.2359" />
        
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://srqunlock.com/payment" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(paymentSchema)
          }}
        />
      </Head>
      <PaymentForm />
    </>
  );
}
