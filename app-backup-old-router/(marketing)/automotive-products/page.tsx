import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Key,
  Shield,
  Battery,
  Lock,
  Car,
  CheckCircle,
  Calendar,
  Package
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Automotive Products & Accessories | Car Keys, FOBs, Batteries | North Port FL",
    description: "High-quality automotive locksmith products in North Port, Port Charlotte, Punta Gorda FL. Transponder keys, smart keys, key FOBs, car batteries, ignition parts. Expert installation available. Call (941) 587-5050",
    keywords: "automotive products North Port, car keys Port Charlotte, key FOBs Punta Gorda, transponder keys Venice FL, car batteries Charlotte County, smart keys, ignition parts, locksmith products Florida",
    authors: [{ name: "Unlock SRQ LLC" }],
    openGraph: {
      type: "website",
      url: "https://srqunlock.com/automotive-products",
      title: "Automotive Products & Accessories | Car Keys, FOBs, Batteries | North Port FL",
      description: "High-quality automotive locksmith products in North Port, Port Charlotte, Punta Gorda FL. Transponder keys, smart keys, key FOBs, car batteries, ignition parts.",
      siteName: "Unlock SRQ LLC",
      locale: "en_US",
      images: [{
        url: "/professional-locksmith-mobile-workshop-sarasota-fl.webp",
        width: 1920,
        height: 1280,
        alt: "Professional automotive locksmith Maksim Yepikhin with car keys and products",
        type: "image/webp"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Automotive Products & Accessories | Car Keys, FOBs, Batteries | North Port FL",
      description: "High-quality automotive locksmith products in North Port, Port Charlotte, Punta Gorda FL. Transponder keys, smart keys, key FOBs, car batteries.",
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
      canonical: "https://srqunlock.com/automotive-products"
    }
  };
}

export default function AutomotiveProductsPage() {
  const productsSchema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness", "Store"],
    "name": "Unlock SRQ LLC - Automotive Products",
    "description": "High-quality automotive locksmith products including transponder keys, smart keys, key FOBs, car batteries, and ignition parts in North Port, Port Charlotte, Punta Gorda, Venice FL",
    "telephone": "+19415875050",
    "email": "info@srqunlock.com",
    "url": "https://srqunlock.com/automotive-products",
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
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Automotive Locksmith Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Transponder Car Keys",
            "description": "OEM and aftermarket transponder keys for all vehicle makes and models"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Smart Keys & Key FOBs",
            "description": "Push-to-start smart keys and remote key FOBs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Car Batteries",
            "description": "Premium car batteries with professional installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Ignition Parts",
            "description": "Ignition cylinders, switches, and related components"
          }
        }
      ]
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
          __html: JSON.stringify(productsSchema)
        }}
      />

      <div className="min-h-screen flex flex-col">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-[#1a3a52] via-[#2c4a5f] to-[#1a3a52] text-white py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-[#7dd3e8] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Package size={40} className="text-[#1a3a52]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Automotive Products & Accessories
              </h1>
              <p className="text-xl text-white/90 mb-8">
                OEM & Aftermarket Keys • Smart Keys • FOBs • Batteries • Ignition Parts • Expert Installation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:9415875050">
                  <Button 
                    size="lg" 
                    className="bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-bold px-10 py-6 text-lg"
                    data-testid="button-call-products"
                  >
                    <Phone className="mr-2" size={20} />
                    Call (941) 587-5050
                  </Button>
                </a>
                <Link href="/booking" data-testid="link-booking-products">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#1a3a52] font-bold px-10 py-6 text-lg"
                    data-testid="button-book-products"
                  >
                    <Calendar className="mr-2" size={20} />
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center text-[#1a3a52] mb-4">Our Product Catalog</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              High-quality OEM and aftermarket automotive products with professional installation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Product 1: Transponder Keys */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-6">
                  <Key size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Transponder Keys</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>OEM factory keys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Aftermarket options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Programming included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>All makes & models</span>
                  </li>
                </ul>
                <p className="text-sm font-bold text-[#7dd3e8]">Call for pricing</p>
              </div>

              {/* Product 2: Smart Keys */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-6">
                  <Shield size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Smart Keys & FOBs</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Push-to-start keys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Remote key FOBs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Proximity keys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Keyless entry systems</span>
                  </li>
                </ul>
                <p className="text-sm font-bold text-[#7dd3e8]">Call for pricing</p>
              </div>

              {/* Product 3: Car Batteries */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-6">
                  <Battery size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Car Batteries</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Premium quality brands</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Standard & AGM batteries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>European vehicle batteries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Installation & programming</span>
                  </li>
                </ul>
                <p className="text-sm font-bold text-[#7dd3e8]">Call for pricing</p>
              </div>

              {/* Product 4: Ignition Parts */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-6">
                  <Lock size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Ignition Parts</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Ignition cylinders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Ignition switches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Steering column locks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Professional installation</span>
                  </li>
                </ul>
                <p className="text-sm font-bold text-[#7dd3e8]">Call for pricing</p>
              </div>

              {/* Product 5: Key Shells & Cases */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-6">
                  <Key size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Key Shells & Cases</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Replacement key shells</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>FOB cases & covers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Key blade blanks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Button pads & batteries</span>
                  </li>
                </ul>
                <p className="text-sm font-bold text-[#7dd3e8]">Call for pricing</p>
              </div>

              {/* Product 6: Diagnostic Tools */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-6">
                  <Car size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Diagnostic Services</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>OBD-II scanning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Key programming diagnosis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Ignition system testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Electrical troubleshooting</span>
                  </li>
                </ul>
                <p className="text-sm font-bold text-[#7dd3e8]">Call for pricing</p>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center text-[#1a3a52] mb-16">Why Buy From Unlock SRQ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={28} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a3a52] mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600">OEM and premium aftermarket products with warranties</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key size={28} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a3a52] mb-2">Expert Installation</h3>
                <p className="text-gray-600">Professional programming and installation included</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package size={28} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a3a52] mb-2">Mobile Service</h3>
                <p className="text-gray-600">We bring products and installation to your location</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={28} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a3a52] mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">Fair prices without dealer markups</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Need Automotive Products?</h2>
              <p className="text-xl text-white/90 mb-8">
                Get a FREE quote on keys, FOBs, batteries, or any automotive product
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:9415875050">
                  <Button 
                    size="lg" 
                    className="bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-bold px-10 py-6 text-lg"
                    data-testid="button-call-cta"
                  >
                    <Phone className="mr-2" size={20} />
                    Call (941) 587-5050
                  </Button>
                </a>
                <Link href="/booking" data-testid="link-booking-cta">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#1a3a52] font-bold px-10 py-6 text-lg"
                  >
                    Get FREE Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
