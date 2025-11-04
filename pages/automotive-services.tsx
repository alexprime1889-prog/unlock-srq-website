import Head from 'next/head';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Car,
  Key,
  Lock,
  Wrench,
  CheckCircle,
  Calendar,
  MapPin,
  Shield,
  Clock
} from "lucide-react";

export default function AutomotiveServicesPage() {
  const automotiveSchema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness", "AutomotiveService"],
    "name": "Unlock SRQ LLC - Automotive Locksmith",
    "description": "Professional automotive locksmith services including car key programming, transponder keys, smart keys, ignition repair, and emergency car lockout assistance in North Port, Port Charlotte, Punta Gorda, Venice FL",
    "telephone": "+19415875050",
    "email": "info@srqunlock.com",
    "url": "https://srqunlock.com/automotive-services",
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
    "availableService": [
      {
        "@type": "Service",
        "name": "Car Key Programming",
        "description": "Professional car key programming for transponder keys, smart keys, and push-to-start systems",
        "serviceType": "Automotive"
      },
      {
        "@type": "Service",
        "name": "Emergency Car Lockout",
        "description": "24/7 emergency car lockout assistance with fast response",
        "serviceType": "Emergency Service"
      },
      {
        "@type": "Service",
        "name": "Ignition Repair & Replacement",
        "description": "Professional ignition cylinder repair and replacement services",
        "serviceType": "Automotive"
      },
      {
        "@type": "Service",
        "name": "Transponder Key Programming",
        "description": "Programming and cutting transponder keys for all vehicle makes and models",
        "serviceType": "Automotive"
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
      }
    ],
    "owner": {
      "@type": "Person",
      "name": "Maksim Yepikhin",
      "jobTitle": "Owner & Master Locksmith",
      "knowsAbout": ["Car Key Programming", "Automotive Locksmith Services", "Transponder Keys", "Smart Key Programming", "Ignition Repair"]
    }
  };

  return (
    <>
      <Head>
        <title>Automotive Locksmith Services | Car Key Programming North Port FL</title>
        <meta name="description" content="Professional automotive locksmith services in North Port, Port Charlotte, Punta Gorda FL. Car key programming, transponder keys, smart keys, ignition repair, emergency car lockout. 24/7 mobile service. Call (941) 587-5050" />
        <meta name="keywords" content="automotive locksmith North Port, car key programming Port Charlotte, transponder key Punta Gorda, smart key Venice FL, car lockout Charlotte County, ignition repair, emergency car locksmith, mobile automotive locksmith Florida" />
        <meta name="author" content="Unlock SRQ LLC" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srqunlock.com/automotive-services" />
        <meta property="og:title" content="Automotive Locksmith Services | Car Key Programming North Port FL" />
        <meta property="og:description" content="Professional automotive locksmith services in North Port, Port Charlotte, Punta Gorda FL. Car key programming, transponder keys, smart keys, ignition repair, emergency car lockout. 24/7 mobile service." />
        <meta property="og:site_name" content="Unlock SRQ LLC" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1280" />
        <meta property="og:image:alt" content="Professional automotive locksmith Maksim Yepikhin mobile workshop with car key programming equipment" />
        <meta property="og:image:type" content="image/webp" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Automotive Locksmith Services | Car Key Programming North Port FL" />
        <meta name="twitter:description" content="Professional automotive locksmith services in North Port, Port Charlotte, Punta Gorda FL. Car key programming, transponder keys, smart keys, ignition repair." />
        <meta name="twitter:image" content="/professional-locksmith-mobile-workshop-sarasota-fl.webp" />
        
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="North Port" />
        <meta name="geo.position" content="27.0442;-82.2359" />
        <meta name="ICBM" content="27.0442, -82.2359" />
        
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://srqunlock.com/automotive-services" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(automotiveSchema)
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-[#1a3a52] via-[#2c4a5f] to-[#1a3a52] text-white py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-[#7dd3e8] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Car size={40} className="text-[#1a3a52]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Automotive Locksmith Services
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Car Key Programming • Transponder Keys • Smart Keys • Ignition Repair • Emergency Lockout
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:9415875050">
                  <Button 
                    size="lg" 
                    className="bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-bold px-10 py-6 text-lg"
                    data-testid="button-call-automotive"
                  >
                    <Phone className="mr-2" size={20} />
                    Call (941) 587-5050
                  </Button>
                </a>
                <Link href="/booking" data-testid="link-booking-automotive">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#1a3a52] font-bold px-10 py-6 text-lg"
                    data-testid="button-book-automotive"
                  >
                    <Calendar className="mr-2" size={20} />
                    Book Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center text-[#1a3a52] mb-4">Our Automotive Services</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Professional mobile automotive locksmith services for all makes and models
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Service 1: Car Key Programming */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-6">
                  <Key size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Car Key Programming</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Transponder key programming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Smart key & FOB programming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Push-to-start keys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>All makes & models</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500">Call for FREE quote</p>
              </div>

              {/* Service 2: Emergency Car Lockout */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-6">
                  <Lock size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Emergency Car Lockout</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>24/7 emergency response</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>15-minute average arrival</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>No damage to vehicle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Keys locked in trunk</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500">Starting from $29</p>
              </div>

              {/* Service 3: Ignition Repair */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-6">
                  <Wrench size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Ignition Repair</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Ignition cylinder replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Stuck key extraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Broken key in ignition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Won't turn diagnosis</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500">Call for FREE quote</p>
              </div>

              {/* Service 4: Key Duplication */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-6">
                  <Key size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Key Duplication</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Spare key cutting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>High-security keys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>European vehicles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Motorcycle & RV keys</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500">Call for pricing</p>
              </div>

              {/* Service 5: Lost Key Replacement */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-6">
                  <Car size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Lost Key Replacement</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>New key from VIN</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>No dealer required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Same-day service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Mobile service</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500">Call for FREE quote</p>
              </div>

              {/* Service 6: FOB Programming */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-6">
                  <Shield size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Key FOB Programming</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Remote FOB programming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Battery replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Trunk & panic button</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Factory OEM FOBs</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500">Call for pricing</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center text-[#1a3a52] mb-16">Why Choose Unlock SRQ for Automotive Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Fast Response</h3>
                <p className="text-gray-600">15-minute average arrival for emergency services</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed Florida locksmith with $2M insurance</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a3a52] mb-2">All Makes & Models</h3>
                <p className="text-gray-600">Work on all vehicle brands, domestic and import</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Mobile Service</h3>
                <p className="text-gray-600">We come to you anywhere in Charlotte & Sarasota Counties</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Need Automotive Locksmith Service?</h2>
              <p className="text-xl text-white/90 mb-8">
                24/7 emergency service • Mobile workshop comes to you • All makes & models
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
                    Book Online
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
