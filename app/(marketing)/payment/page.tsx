import type { Metadata } from "next";
import PaymentForm from "@/components/PaymentForm";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Secure Online Payment | Pay Locksmith Invoice Online | Unlock SRQ",
    description: "Pay your locksmith invoice securely online. Fast, convenient payment for locksmith services in North Port, Port Charlotte, Punta Gorda FL. We accept Visa, Mastercard, Amex, Discover. Call (941) 587-5050",
    keywords: "pay locksmith online North Port, locksmith payment Port Charlotte, online invoice payment Punta Gorda, secure locksmith payment, pay locksmith bill Venice FL, Charlotte County locksmith payment, credit card payment locksmith",
    authors: [{ name: "Unlock SRQ LLC" }],
    openGraph: {
      type: "website",
      url: "https://srqunlock.com/payment",
      title: "Secure Online Payment | Pay Locksmith Invoice Online | Unlock SRQ",
      description: "Pay your locksmith invoice securely online. Fast, convenient payment for locksmith services in North Port, Port Charlotte, Punta Gorda FL. We accept all major credit cards.",
      siteName: "Unlock SRQ LLC",
      locale: "en_US",
      images: [{
        url: "/professional-locksmith-mobile-workshop-sarasota-fl.webp",
        width: 1920,
        height: 1280,
        alt: "Professional locksmith Maksim Yepikhin - secure online payment",
        type: "image/webp"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Secure Online Payment | Pay Locksmith Invoice Online | Unlock SRQ",
      description: "Pay your locksmith invoice securely online. Fast, convenient payment for locksmith services in North Port, Port Charlotte, Punta Gorda FL.",
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
      canonical: "https://srqunlock.com/payment"
    }
  };
}

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(paymentSchema)
        }}
      />
      <PaymentForm />
    </>
  );
}
