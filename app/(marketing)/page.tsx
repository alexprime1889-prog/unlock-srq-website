import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Phone,
  MapPin,
  Key,
  Lock,
  Car,
  Shield,
  Home as HomeIcon,
  Laptop,
  Battery,
  Search,
  CheckCircle,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import FaqSection from "@/components/FaqSection";
import ContactFormSection from "@/components/ContactFormSection";
import { Mail } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "24/7 Emergency Locksmith North Port & Port Charlotte FL | Unlock SRQ",
    description: "24/7 emergency locksmith serving North Port, Port Charlotte, Punta Gorda, Venice. Licensed & insured. 15-minute response. Lost keys, lockouts, commercial. Call (941) 587-5050",
    keywords: "locksmith North Port, locksmith Port Charlotte, locksmith Punta Gorda, locksmith Venice FL, emergency locksmith Charlotte County, 24/7 locksmith Florida, car key programming, mobile locksmith, automotive locksmith, commercial locksmith, residential locksmith",
    authors: [{ name: "Unlock SRQ LLC" }],
    openGraph: {
      type: "website",
      url: "https://srqunlock.com",
      title: "24/7 Emergency Locksmith North Port & Port Charlotte FL | Unlock SRQ",
      description: "24/7 emergency locksmith serving North Port, Port Charlotte, Punta Gorda, Venice. Licensed & insured. 15-minute response. Lost keys, lockouts, commercial. Call (941) 587-5050",
      siteName: "Unlock SRQ LLC",
      locale: "en_US",
      images: [{
        url: "/professional-locksmith-mobile-workshop-sarasota-fl.webp",
        width: 1920,
        height: 1280,
        alt: "Professional locksmith Maksim Yepikhin in mobile workshop with key programming equipment",
        type: "image/webp"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: "24/7 Emergency Locksmith North Port & Port Charlotte FL | Unlock SRQ",
      description: "24/7 emergency locksmith serving North Port, Port Charlotte, Punta Gorda, Venice. Licensed & insured. 15-minute response. Lost keys, lockouts, commercial. Call (941) 587-5050",
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
      canonical: "https://srqunlock.com"
    }
  };
}

export default function HomePage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness", "EmergencyService"],
    "name": "Unlock SRQ LLC",
    "image": "https://srqunlock.com/logo.png",
    "description": "24/7 emergency locksmith serving North Port, Port Charlotte, Punta Gorda, Venice. Licensed & insured. 15-minute response. Lost keys, lockouts, commercial. Call (941) 587-5050",
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
    "url": "https://srqunlock.com",
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
      "image": "https://srqunlock.com/professional-locksmith-mobile-workshop-sarasota-fl.webp",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema)
        }}
      />

      <div className="min-h-screen flex flex-col">
        {/* HERO SECTION - Split Layout with Owner Photo */}
        <section className="relative min-h-[80vh] flex items-center justify-start bg-cover bg-center" 
                 style={{ backgroundImage: 'url(/hero-bg.webp)' }}>
          {/* Navy to Purple Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a52]/90 via-purple-900/85 to-purple-700/80"></div>
          
          <div className="container relative z-10 py-20 pb-64">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  24/7 Emergency Locksmith North Port & Port Charlotte FL
                </h1>
                <p className="text-base sm:text-lg text-white/95 mb-4 leading-relaxed font-semibold">
                  Licensed & Insured • Serving Sarasota & Charlotte Counties • 15-Min Response
                </p>
                <p className="text-base text-white/90 mb-8 leading-relaxed">
                  Unlock SRQ - Smart solutions for key problems and emergency automotive services. 
                  We use advanced technology and an AI-powered approach for rapid key programming, 
                  vehicle diagnostics, and locksmith services. Mobile service - we come to you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/booking" data-testid="link-booking-hero">
                    <Button 
                      size="lg" 
                      className="bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-semibold px-10 py-6 text-lg rounded-lg shadow-lg w-full sm:w-auto"
                      data-testid="button-book-appointment"
                    >
                      Book Appointment
                    </Button>
                  </Link>
                  <Link href="/payment" data-testid="link-payment-hero">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-[#1a3a52] font-semibold px-10 py-6 text-lg rounded-lg shadow-lg w-full sm:w-auto"
                      data-testid="button-pay-online"
                    >
                      Pay Online
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column - Professional Photo with Trust Badges */}
              <div className="hidden lg:block">
                <figure 
                  itemScope 
                  itemType="https://schema.org/ImageObject"
                  className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 hover:border-[#7dd3e8]/50 transition-all duration-300"
                >
                  <picture>
                    <source 
                      srcSet="/professional-locksmith-mobile-workshop-sarasota-fl.webp" 
                      type="image/webp"
                    />
                    <img 
                      src="/professional-locksmith-mobile-workshop-sarasota-fl.png"
                      alt="24/7 mobile locksmith van with advanced key programming equipment serving North Port, Port Charlotte, and Charlotte County Florida - emergency automotive locksmith services"
                      itemProp="contentUrl"
                      loading="eager"
                      width={1920}
                      height={1280}
                      className="w-full h-auto object-cover"
                      data-testid="img-mobile-workshop"
                    />
                  </picture>
                  <figcaption 
                    itemProp="caption"
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a3a52]/95 to-transparent p-6 text-white"
                  >
                    <p className="text-lg font-bold mb-1" itemProp="name">Master Locksmith Maksim</p>
                    <p className="text-sm text-white/90">Professional Mobile Locksmith Service</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-2 py-1 bg-[#7dd3e8] text-[#1a3a52] text-xs font-semibold rounded">Licensed</span>
                      <span className="px-2 py-1 bg-[#7dd3e8] text-[#1a3a52] text-xs font-semibold rounded">Insured</span>
                      <span className="px-2 py-1 bg-[#7dd3e8] text-[#1a3a52] text-xs font-semibold rounded">24/7</span>
                      <span className="px-2 py-1 bg-[#7dd3e8] text-[#1a3a52] text-xs font-semibold rounded">Mobile Service</span>
                    </div>
                  </figcaption>
                  <meta itemProp="creator" content="Unlock SRQ LLC" />
                  <meta itemProp="copyrightHolder" content="Unlock SRQ LLC" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 4 SERVICE CARDS - Overlapping Hero */}
        <section className="relative -mt-40 z-20 pb-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1: Residential */}
              <div className="bg-[#2c4a5f] text-white rounded-2xl p-10 shadow-2xl hover:shadow-3xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <HomeIcon size={36} className="text-[#2c4a5f]" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center">Residential Services</h3>
                <div className="border-t border-white/20 pt-6 mb-6"></div>
                <div className="text-sm text-white/95 mb-8 leading-relaxed text-left space-y-2.5">
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>House Lockout Service (24/7)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Lock Rekey & Master Key Systems</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>High-Security Lock Installation</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Smart Lock Installation & Programming</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Broken Key Extraction</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Door Security Upgrades</span>
                  </p>
                </div>
                <Button 
                  className="w-full bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#2c4a5f] font-bold py-6 text-base shadow-lg"
                  data-testid="button-residential"
                >
                  Learn More
                </Button>
              </div>

              {/* Card 2: Commercial */}
              <div className="bg-[#7dd3e8] text-[#1a3a52] rounded-2xl p-10 shadow-2xl hover:shadow-3xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-[#2c4a5f] rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <Shield size={36} className="text-[#7dd3e8]" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center">Commercial Solutions</h3>
                <div className="border-t border-[#1a3a52]/20 pt-6 mb-6"></div>
                <div className="text-sm mb-8 leading-relaxed text-left space-y-2.5">
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#2c4a5f] flex-shrink-0 mt-0.5" />
                    <span>Office Lockout Emergency Service</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#2c4a5f] flex-shrink-0 mt-0.5" />
                    <span>Access Control Systems</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#2c4a5f] flex-shrink-0 mt-0.5" />
                    <span>Master Key System Design</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#2c4a5f] flex-shrink-0 mt-0.5" />
                    <span>File Cabinet & Desk Locks</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#2c4a5f] flex-shrink-0 mt-0.5" />
                    <span>Panic Bar Installation & Repair</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#2c4a5f] flex-shrink-0 mt-0.5" />
                    <span>ADA Compliant Solutions</span>
                  </p>
                </div>
                <Button 
                  className="w-full bg-[#2c4a5f] hover:bg-[#1a3a52] text-white font-bold py-6 text-base shadow-lg"
                  data-testid="button-commercial"
                >
                  Learn More
                </Button>
              </div>

              {/* Card 3: Car */}
              <div className="bg-[#2c4a5f] text-white rounded-2xl p-10 shadow-2xl hover:shadow-3xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <Car size={36} className="text-[#2c4a5f]" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center">Automotive Services</h3>
                <div className="border-t border-white/20 pt-6 mb-6"></div>
                <div className="text-sm text-white/95 mb-8 leading-relaxed text-left space-y-2.5">
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Emergency Car Lockout</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Transponder Key Programming</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Smart Key & Push-to-Start Keys</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Ignition Repair & Replacement</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>All Makes & Models</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0 mt-0.5" />
                    <span>Motorcycle & RV Keys</span>
                  </p>
                </div>
                <Button 
                  className="w-full bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#2c4a5f] font-bold py-6 text-base shadow-lg"
                  data-testid="button-automotive"
                >
                  Learn More
                </Button>
              </div>

              {/* Card 4: Emergency */}
              <div className="bg-[#7dd3e8] text-[#1a3a52] rounded-2xl p-10 shadow-2xl hover:shadow-3xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-[#2c4a5f] rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <Phone size={36} className="text-[#7dd3e8]" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center">Emergency Response</h3>
                <div className="border-t border-[#1a3a52]/20 pt-6 mb-6"></div>
                <div className="text-sm mb-8 leading-relaxed text-left space-y-2.5">
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#2c4a5f] flex-shrink-0 mt-0.5" />
                    <span>24/7 Immediate Response</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#2c4a5f] flex-shrink-0 mt-0.5" />
                    <span>Break-in Damage Repair</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#2c4a5f] flex-shrink-0 mt-0.5" />
                    <span>Lost Key Replacement</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#2c4a5f] flex-shrink-0 mt-0.5" />
                    <span>Storm Damage Lock Repair</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#2c4a5f] flex-shrink-0 mt-0.5" />
                    <span>Eviction Locksmith Service</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#2c4a5f] flex-shrink-0 mt-0.5" />
                    <span>Safe Opening</span>
                  </p>
                </div>
                <Button 
                  className="w-full bg-[#2c4a5f] hover:bg-[#1a3a52] text-white font-bold py-6 text-base shadow-lg"
                  data-testid="button-emergency"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES & PRICING SECTION */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center text-[#1a3a52] mb-16">Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1: Key Programming */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Key size={36} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-center text-[#1a3a52] mb-4">Key Programming</h3>
                <div className="text-center text-gray-700 space-y-2">
                  <p>Transponder Keys</p>
                  <p>Smart Keys</p>
                  <p className="font-bold text-[#7dd3e8] text-lg mt-4">Call for FREE Quote</p>
                  <p className="text-xs text-gray-500">Prices vary by service type and time</p>
                </div>
              </div>

              {/* Service 2: Lockout Services */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Lock size={36} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-center text-[#1a3a52] mb-4">Lockout Services</h3>
                <div className="text-center text-gray-700 space-y-2">
                  <p>Car Lockout</p>
                  <p>Residential Door Lockout</p>
                  <p className="font-bold text-[#7dd3e8] text-lg mt-4">Starting from $29</p>
                  <p className="text-xs text-gray-500">Prices vary by service type and time</p>
                </div>
              </div>

              {/* Service 3: Battery Services */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Battery size={36} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-center text-[#1a3a52] mb-4">Battery Services</h3>
                <div className="text-center text-gray-700 space-y-2">
                  <p>Standard Battery</p>
                  <p>European Vehicles with Programming</p>
                  <p className="font-bold text-[#7dd3e8] text-lg mt-4">Call for FREE Quote</p>
                  <p className="text-xs text-gray-500">Prices vary by service type and time</p>
                </div>
              </div>

              {/* Service 4: Diagnostics */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Search size={36} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-center text-[#1a3a52] mb-4">Diagnostics</h3>
                <div className="text-center text-gray-700 space-y-2">
                  <p>On-site diagnostics for vehicles that won't start</p>
                  <p className="font-bold text-[#7dd3e8] text-lg mt-4">Call for FREE Quote</p>
                  <p className="text-xs text-gray-500">Prices vary by service type and time</p>
                </div>
              </div>

              {/* Service 5: Residential & Commercial */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <HomeIcon size={36} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-center text-[#1a3a52] mb-4">Residential & Commercial Locksmithing</h3>
                <div className="text-center text-gray-700 space-y-1">
                  <p>Door Unlocking</p>
                  <p>Lock Repair</p>
                  <p>Replacement</p>
                  <p>Key Duplication</p>
                </div>
              </div>

              {/* Service 6: Mobile Computer Diagnostics */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Laptop size={36} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-center text-[#1a3a52] mb-4">Mobile Computer Diagnostics</h3>
                <div className="text-center text-gray-700 space-y-1">
                  <p>OBD-II Scanning</p>
                  <p>Error Code Analysis</p>
                  <p>Engine Performance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS SECTION */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center text-[#1a3a52] mb-4">We Serve All of North Port & Charlotte County</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Our mobile technicians are stationed throughout the area for fastest response times. 
              We come to you wherever you are in Sarasota and Charlotte Counties.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* North Port */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#7dd3e8]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7dd3e8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#1a3a52]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a3a52] mb-1">North Port</h3>
                    <p className="text-sm text-gray-600">Headquarters</p>
                    <p className="text-sm font-semibold text-[#7dd3e8] mt-2">10-15 min response</p>
                  </div>
                </div>
              </div>

              {/* Port Charlotte */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#7dd3e8]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7dd3e8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#1a3a52]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a3a52] mb-1">Port Charlotte</h3>
                    <p className="text-sm text-gray-600">Charlotte County</p>
                    <p className="text-sm font-semibold text-[#7dd3e8] mt-2">15-20 min response</p>
                  </div>
                </div>
              </div>

              {/* Punta Gorda */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#7dd3e8]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7dd3e8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#1a3a52]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a3a52] mb-1">Punta Gorda</h3>
                    <p className="text-sm text-gray-600">Charlotte County</p>
                    <p className="text-sm font-semibold text-[#7dd3e8] mt-2">20-25 min response</p>
                  </div>
                </div>
              </div>

              {/* Venice */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#7dd3e8]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7dd3e8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#1a3a52]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a3a52] mb-1">Venice</h3>
                    <p className="text-sm text-gray-600">Sarasota County</p>
                    <p className="text-sm font-semibold text-[#7dd3e8] mt-2">15-20 min response</p>
                  </div>
                </div>
              </div>

              {/* Englewood */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#7dd3e8]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7dd3e8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#1a3a52]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a3a52] mb-1">Englewood</h3>
                    <p className="text-sm text-gray-600">Sarasota & Charlotte Counties</p>
                    <p className="text-sm font-semibold text-[#7dd3e8] mt-2">20-30 min response</p>
                  </div>
                </div>
              </div>

              {/* Rotonda West */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#7dd3e8]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7dd3e8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#1a3a52]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a3a52] mb-1">Rotonda West</h3>
                    <p className="text-sm text-gray-600">Charlotte County</p>
                    <p className="text-sm font-semibold text-[#7dd3e8] mt-2">25-30 min response</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <p className="text-lg text-gray-700 mb-4">
                Need immediate locksmith service? We're ready to help 24/7!
              </p>
              <a href="tel:9415875050">
                <Button size="lg" className="bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-semibold px-10 py-6 text-lg">
                  <Phone className="mr-2" size={20} />
                  Call (941) 587-5050
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <FaqSection />

        {/* WHY CHOOSE US SECTION */}
        <section className="relative py-20 bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f]">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Why Choose Unlock SRQ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Trust Point 1 */}
              <div className="flex items-start gap-3 text-white">
                <CheckCircle size={24} className="text-[#7dd3e8] flex-shrink-0 mt-1" />
                <span className="text-lg">Licensed & Insured Florida Locksmith</span>
              </div>

              {/* Trust Point 2 */}
              <div className="flex items-start gap-3 text-white">
                <CheckCircle size={24} className="text-[#7dd3e8] flex-shrink-0 mt-1" />
                <span className="text-lg">24/7 Emergency Service - 365 Days</span>
              </div>

              {/* Trust Point 3 */}
              <div className="flex items-start gap-3 text-white">
                <CheckCircle size={24} className="text-[#7dd3e8] flex-shrink-0 mt-1" />
                <span className="text-lg">15-Minute Average Response Time</span>
              </div>

              {/* Trust Point 4 */}
              <div className="flex items-start gap-3 text-white">
                <CheckCircle size={24} className="text-[#7dd3e8] flex-shrink-0 mt-1" />
                <span className="text-lg">Transparent Pricing - No Hidden Fees</span>
              </div>

              {/* Trust Point 5 */}
              <div className="flex items-start gap-3 text-white">
                <CheckCircle size={24} className="text-[#7dd3e8] flex-shrink-0 mt-1" />
                <span className="text-lg">90-Day Warranty on All Work</span>
              </div>

              {/* Trust Point 6 */}
              <div className="flex items-start gap-3 text-white">
                <CheckCircle size={24} className="text-[#7dd3e8] flex-shrink-0 mt-1" />
                <span className="text-lg">Background-Checked Technicians</span>
              </div>

              {/* Trust Point 7 */}
              <div className="flex items-start gap-3 text-white">
                <CheckCircle size={24} className="text-[#7dd3e8] flex-shrink-0 mt-1" />
                <span className="text-lg">Locally Owned & Operated</span>
              </div>

              {/* Trust Point 8 */}
              <div className="flex items-start gap-3 text-white">
                <CheckCircle size={24} className="text-[#7dd3e8] flex-shrink-0 mt-1" />
                <span className="text-lg">Mobile Service - We Come to You</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT COMPANY SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Maksim Yepikhin with Customer Photo */}
              <figure 
                itemScope 
                itemType="https://schema.org/ImageObject"
                className="relative w-full aspect-[3/4] overflow-hidden rounded-xl shadow-lg"
              >
                <picture>
                  <source 
                    srcSet="/maxim-yepichin-locksmith-with-customer-sarasota-fl.webp" 
                    type="image/webp"
                  />
                  <img 
                    src="/maxim-yepichin-locksmith-with-customer-sarasota-fl.png"
                    alt="Maksim Yepikhin, licensed master locksmith and owner of Unlock SRQ, providing professional locksmith service to satisfied customer in North Port, Charlotte County, and Sarasota County Florida"
                    itemProp="contentUrl"
                    loading="lazy"
                    width={1536}
                    height={2048}
                    className="w-full h-full object-cover"
                    data-testid="img-about-customer-service"
                  />
                </picture>
                <meta itemProp="creator" content="Unlock SRQ LLC" />
                <meta itemProp="copyrightHolder" content="Unlock SRQ LLC" />
                <meta itemProp="description" content="Professional locksmith Maksim Yepikhin providing personalized customer service to satisfied client in Sarasota, Florida area" />
                <meta itemProp="keywords" content="locksmith Sarasota, customer service, professional locksmith, North Port FL, Maksim Yepikhin" />
                <figcaption itemProp="caption" className="sr-only">
                  Maksim Yepikhin, owner and master locksmith at Unlock SRQ LLC, delivering professional locksmith services with excellent customer care in Sarasota, Florida
                </figcaption>
              </figure>

              {/* Right: Content */}
              <div>
                <h2 className="text-4xl font-bold text-[#1a3a52] mb-4">
                  We Are a Premiere North Port, FL Locksmith Company
                </h2>
                <h3 className="text-2xl font-semibold text-[#7dd3e8] mb-6">
                  We Provide the Best Services Possible
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For years we've proudly served the residents of North Port, FL and surrounding areas. 
                  From residential homes to automobiles and businesses, we handle it all.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We know dealing with a "lockout", breaking or another security problem is likely an 
                  unexpected and unwelcome interruption to your daily routine. Our locksmiths are prompt, 
                  courteous and empathetic. We know you we need to get back to your life as quickly as possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO SECTION */}
        <section className="py-20 bg-[#1a3a52]">
          <div className="container">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Watch Our Work</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Video 1 */}
              <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <Youtube size={48} className="mx-auto mb-2" />
                  <p>Video 1</p>
                </div>
              </div>

              {/* Video 2 */}
              <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <Youtube size={48} className="mx-auto mb-2" />
                  <p>Video 2</p>
                </div>
              </div>

              {/* Video 3 */}
              <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <Youtube size={48} className="mx-auto mb-2" />
                  <p>Video 3</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
                 data-testid="link-facebook-videos">
                <Facebook size={20} className="text-[#1a3a52]" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
                 data-testid="link-instagram-videos">
                <Instagram size={20} className="text-[#1a3a52]" />
              </a>
              <a href="https://www.yellowpages.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
                 data-testid="link-yellowpages-videos">
                <span className="text-[#1a3a52] font-bold">YP</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
                 data-testid="link-youtube-videos">
                <Youtube size={20} className="text-[#1a3a52]" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
                 data-testid="link-tiktok-videos">
                <SiTiktok size={20} className="text-[#1a3a52]" />
              </a>
              <a href="mailto:info@srqunlock.com" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
                 data-testid="link-email-videos">
                <Mail size={20} className="text-[#1a3a52]" />
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <ContactFormSection />
      </div>
    </>
  );
}
