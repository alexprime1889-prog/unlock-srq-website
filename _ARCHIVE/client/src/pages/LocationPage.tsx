import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Phone,
  MapPin,
  Clock,
  Key,
  Lock,
  Car,
  Shield,
  CheckCircle,
  Home as HomeIcon
} from "lucide-react";

export interface LocationPageConfig {
  city: string;
  county: string;
  slug: string;
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  responseTime: string;
  coordinates: { lat: string; lon: string };
  services: {
    residential: string[];
    commercial: string[];
    automotive: string[];
    emergency: string[];
  };
  nearbyAreas: string[];
}

interface LocationPageProps {
  config: LocationPageConfig;
}

export default function LocationPage({ config }: LocationPageProps) {
  return (
    <>
      <SEO 
        title={config.title}
        description={config.description}
        canonicalUrl={`https://srqunlock.com/${config.slug}/`}
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#1a3a52] via-purple-900 to-purple-700">
          <div className="container relative z-10 py-20 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {config.heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 mb-4 font-semibold">
              {config.heroSubtitle}
            </p>
            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
              Licensed & Insured • {config.responseTime} Response Time • Mobile Service - We Come to You!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9415875050">
                <Button 
                  size="lg" 
                  className="bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-semibold px-10 py-6 text-lg rounded-lg shadow-lg"
                  data-testid="button-call-now"
                >
                  <Phone className="mr-2" size={20} />
                  Call (941) 587-5050
                </Button>
              </a>
              <a href="/booking" data-testid="link-booking">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1a3a52] font-semibold px-10 py-6 text-lg rounded-lg shadow-lg"
                  data-testid="button-book-appointment"
                >
                  Book Appointment
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center text-[#1a3a52] mb-4">
              Our Locksmith Services in {config.city}
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              Serving {config.city} and {config.county} with professional locksmith services 24/7/365
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Residential */}
              <div className="bg-[#2c4a5f] text-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <HomeIcon size={32} className="text-[#2c4a5f]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Residential</h3>
                <div className="text-sm text-white/90 space-y-1 text-left">
                  {config.services.residential.map((service, idx) => (
                    <p key={idx}>• {service}</p>
                  ))}
                </div>
              </div>

              {/* Commercial */}
              <div className="bg-[#7dd3e8] text-[#1a3a52] rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#2c4a5f] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Shield size={32} className="text-[#7dd3e8]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Commercial</h3>
                <div className="text-sm space-y-1 text-left">
                  {config.services.commercial.map((service, idx) => (
                    <p key={idx}>• {service}</p>
                  ))}
                </div>
              </div>

              {/* Automotive */}
              <div className="bg-[#2c4a5f] text-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Car size={32} className="text-[#2c4a5f]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Automotive</h3>
                <div className="text-sm text-white/90 space-y-1 text-left">
                  {config.services.automotive.map((service, idx) => (
                    <p key={idx}>• {service}</p>
                  ))}
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-[#7dd3e8] text-[#1a3a52] rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#2c4a5f] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Clock size={32} className="text-[#7dd3e8]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Emergency</h3>
                <div className="text-sm space-y-1 text-left">
                  {config.services.emergency.map((service, idx) => (
                    <p key={idx}>• {service}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f]">
          <div className="container">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Why Choose Unlock SRQ in {config.city}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <CheckCircle className="text-[#7dd3e8] mb-3" size={32} />
                <h3 className="font-bold mb-2">Licensed & Insured</h3>
                <p className="text-sm text-white/80">Fully licensed Florida locksmith with $2M liability insurance</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <CheckCircle className="text-[#7dd3e8] mb-3" size={32} />
                <h3 className="font-bold mb-2">24/7 Emergency Service</h3>
                <p className="text-sm text-white/80">Available 365 days a year including holidays</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <CheckCircle className="text-[#7dd3e8] mb-3" size={32} />
                <h3 className="font-bold mb-2">{config.responseTime} Response</h3>
                <p className="text-sm text-white/80">Fast mobile service to {config.city}</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <CheckCircle className="text-[#7dd3e8] mb-3" size={32} />
                <h3 className="font-bold mb-2">Transparent Pricing</h3>
                <p className="text-sm text-white/80">No hidden fees - call for free quote</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <CheckCircle className="text-[#7dd3e8] mb-3" size={32} />
                <h3 className="font-bold mb-2">90-Day Warranty</h3>
                <p className="text-sm text-white/80">All work backed by our satisfaction guarantee</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <CheckCircle className="text-[#7dd3e8] mb-3" size={32} />
                <h3 className="font-bold mb-2">Expert Technicians</h3>
                <p className="text-sm text-white/80">Background-checked professional locksmiths</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <CheckCircle className="text-[#7dd3e8] mb-3" size={32} />
                <h3 className="font-bold mb-2">Locally Owned</h3>
                <p className="text-sm text-white/80">Proudly serving {config.county}</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <CheckCircle className="text-[#7dd3e8] mb-3" size={32} />
                <h3 className="font-bold mb-2">Mobile Service</h3>
                <p className="text-sm text-white/80">We come to you - anywhere in {config.city}</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center text-[#1a3a52] mb-12">
              Serving {config.city} & Nearby Areas
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {config.nearbyAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-700">
                  <MapPin size={16} className="text-[#7dd3e8]" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-[#1a3a52] text-white">
          <div className="container text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Need a Locksmith in {config.city}? We're Here 24/7!
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Fast, reliable locksmith services with {config.responseTime} average response time. 
              Call now for immediate assistance or schedule an appointment online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9415875050">
                <Button 
                  size="lg" 
                  className="bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-semibold px-10 py-6 text-lg"
                  data-testid="button-call-cta"
                >
                  <Phone className="mr-2" size={20} />
                  Call (941) 587-5050
                </Button>
              </a>
              <a href="/booking">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-[#7dd3e8] text-[#7dd3e8] hover:bg-[#7dd3e8] hover:text-[#1a3a52] font-semibold px-10 py-6 text-lg"
                  data-testid="button-book-cta"
                >
                  Book Online
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
