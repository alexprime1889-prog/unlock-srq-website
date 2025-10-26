import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Key,
  Lock,
  Car,
  Shield,
  Home as HomeIcon,
  Laptop,
  Battery,
  Search,
  Users,
  Settings,
  CheckCircle,
  Award,
  Zap,
  ChevronDown,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <SEO />
      <div className="min-h-screen flex flex-col">
        <Header />

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
                  <a href="/booking" data-testid="link-booking-hero">
                    <Button 
                      size="lg" 
                      className="bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-semibold px-10 py-6 text-lg rounded-lg shadow-lg w-full sm:w-auto"
                      data-testid="button-book-appointment"
                    >
                      Book Appointment
                    </Button>
                  </a>
                  <a href="/payment" data-testid="link-payment-hero">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-[#1a3a52] font-semibold px-10 py-6 text-lg rounded-lg shadow-lg w-full sm:w-auto"
                      data-testid="button-pay-online"
                    >
                      Pay Online
                    </Button>
                  </a>
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
                      width="1920"
                      height="1280"
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

        {/* CERTIFICATIONS SECTION */}
        <section className="relative -mt-32 z-30 pb-12">
          <div className="container">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-3">
                  Certified & Trusted Professionals
                </h2>
                <p className="text-lg text-gray-600">
                  NASTF & VSP Certified • 95% of Keys & Fobs In Stock • Less Than Half Dealer Cost
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] text-white rounded-xl" data-testid="cert-nastf">
                  <div className="w-16 h-16 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-[#1a3a52]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">NASTF Certified</h3>
                  <p className="text-white/90 text-sm">
                    National Automotive Service Task Force certification for professional automotive locksmith services
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-[#7dd3e8] to-[#6bc3d8] text-[#1a3a52] rounded-xl" data-testid="cert-vsp">
                  <div className="w-16 h-16 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield size={32} className="text-[#7dd3e8]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">VSP Certified</h3>
                  <p className="text-sm">
                    Vehicle Security Professional - advanced automotive security systems training and expertise
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] text-white rounded-xl" data-testid="cert-autoauth">
                  <div className="w-16 h-16 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-[#1a3a52]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">AUTOAUTH Certified</h3>
                  <p className="text-white/90 text-sm">
                    Authorized automotive locksmith with verified credentials and professional training
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#1a3a52] to-[#2c4a5f] rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Zap size={28} className="text-[#7dd3e8]" />
                  <h3 className="text-2xl font-bold">Latest Technology & Equipment</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0" />
                    <span>Laser Key Cutting Equipment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0" />
                    <span>Latest Key Programming Technology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0" />
                    <span>OEM Key Programming Software</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0" />
                    <span>Transponder Chip Programming</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0" />
                    <span>ECU Re-Flash Equipment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#7dd3e8] flex-shrink-0" />
                    <span>Immobilizer Diagnostic Tools</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 SERVICE CARDS - Overlapping Hero */}
        <section className="relative -mt-48 z-20 pb-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Residential */}
              <div className="bg-[#2c4a5f] text-white rounded-xl p-8 shadow-2xl hover:transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <HomeIcon size={32} className="text-[#2c4a5f]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Residential Services</h3>
                <div className="text-sm text-white/90 mb-6 leading-relaxed text-left space-y-1">
                  <p>• House Lockout Service (24/7)</p>
                  <p>• Lock Rekey & Master Key Systems</p>
                  <p>• High-Security Lock Installation</p>
                  <p>• Smart Lock Installation & Programming</p>
                  <p>• Broken Key Extraction</p>
                  <p>• Door Security Upgrades</p>
                </div>
                <Button className="w-full bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#2c4a5f] font-semibold">
                  Learn More
                </Button>
              </div>

              {/* Card 2: Commercial */}
              <div className="bg-[#7dd3e8] text-[#1a3a52] rounded-xl p-8 shadow-2xl hover:transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-[#2c4a5f] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Shield size={32} className="text-[#7dd3e8]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Commercial Solutions</h3>
                <div className="text-sm mb-6 leading-relaxed text-left space-y-1">
                  <p>• Office Lockout Emergency Service</p>
                  <p>• Access Control Systems</p>
                  <p>• Master Key System Design</p>
                  <p>• File Cabinet & Desk Locks</p>
                  <p>• Panic Bar Installation & Repair</p>
                  <p>• ADA Compliant Solutions</p>
                </div>
                <Button className="w-full bg-[#2c4a5f] hover:bg-[#1a3a52] text-white font-semibold">
                  Learn More
                </Button>
              </div>

              {/* Card 3: Car */}
              <div className="bg-[#2c4a5f] text-white rounded-xl p-8 shadow-2xl hover:transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Car size={32} className="text-[#2c4a5f]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Automotive Services</h3>
                <div className="text-sm text-white/90 mb-6 leading-relaxed text-left space-y-1">
                  <p>• Emergency Car Lockout</p>
                  <p>• Transponder Key Programming</p>
                  <p>• Smart Key & Push-to-Start Keys</p>
                  <p>• Ignition Repair & Replacement</p>
                  <p>• All Makes & Models</p>
                  <p>• Motorcycle & RV Keys</p>
                </div>
                <Button className="w-full bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#2c4a5f] font-semibold">
                  Learn More
                </Button>
              </div>

              {/* Card 4: Emergency */}
              <div className="bg-[#7dd3e8] text-[#1a3a52] rounded-xl p-8 shadow-2xl hover:transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-[#2c4a5f] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Clock size={32} className="text-[#7dd3e8]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Emergency Response</h3>
                <div className="text-sm mb-6 leading-relaxed text-left space-y-1">
                  <p>• 24/7 Immediate Response</p>
                  <p>• Break-in Damage Repair</p>
                  <p>• Lost Key Replacement</p>
                  <p>• Storm Damage Lock Repair</p>
                  <p>• Eviction Locksmith Service</p>
                  <p>• Safe Opening</p>
                </div>
                <Button className="w-full bg-[#2c4a5f] hover:bg-[#1a3a52] text-white font-semibold">
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
        <section className="py-20 bg-[#1a3a52]">
          <div className="container">
            <h2 className="text-4xl font-bold text-center text-white mb-4">Common Questions</h2>
            <p className="text-center text-white/80 mb-12">
              See some common questions and answers below or call us on <a href="tel:9415875050" className="text-[#7dd3e8] hover:underline font-semibold">(941) 587-5050</a>
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Left Column */}
              <div className="space-y-4">
                {/* FAQ 1 */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(1)}
                    className="w-full px-6 py-4 text-left font-semibold text-[#1a3a52] hover:bg-gray-50 flex justify-between items-center"
                  >
                    <span>What areas do you service?</span>
                    <ChevronDown className={`transform transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === 1 && (
                    <div className="px-6 py-4 bg-gray-50 text-gray-700">
                      We serve all of Sarasota and Charlotte Counties including North Port, Port Charlotte, Punta Gorda, Venice, and Englewood. Average response time is 15-20 minutes.
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(2)}
                    className="w-full px-6 py-4 text-left font-semibold text-[#1a3a52] hover:bg-gray-50 flex justify-between items-center"
                  >
                    <span>Are you available 24/7?</span>
                    <ChevronDown className={`transform transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === 2 && (
                    <div className="px-6 py-4 bg-gray-50 text-gray-700">
                      Yes! We provide 24/7 emergency locksmith services, 365 days a year including holidays.
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(3)}
                    className="w-full px-6 py-4 text-left font-semibold text-[#1a3a52] hover:bg-gray-50 flex justify-between items-center"
                  >
                    <span>Are you licensed and insured?</span>
                    <ChevronDown className={`transform transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === 3 && (
                    <div className="px-6 py-4 bg-gray-50 text-gray-700">
                      Absolutely! Unlock SRQ is fully licensed, bonded, and insured. We carry $2M liability insurance for your protection.
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* FAQ 4 */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(4)}
                    className="w-full px-6 py-4 text-left font-semibold text-[#1a3a52] hover:bg-gray-50 flex justify-between items-center"
                  >
                    <span>Do you offer warranties?</span>
                    <ChevronDown className={`transform transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === 4 && (
                    <div className="px-6 py-4 bg-gray-50 text-gray-700">
                      Yes! 90-day warranty on all labor, 1-year warranty on parts. Lifetime warranty available on high-security locks.
                    </div>
                  )}
                </div>

                {/* FAQ 5 */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(5)}
                    className="w-full px-6 py-4 text-left font-semibold text-[#1a3a52] hover:bg-gray-50 flex justify-between items-center"
                  >
                    <span>What payment methods do you accept?</span>
                    <ChevronDown className={`transform transition-transform ${openFaq === 5 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === 5 && (
                    <div className="px-6 py-4 bg-gray-50 text-gray-700">
                      We accept cash, all major credit cards, Zelle, Venmo, PayPal, and checks. No hidden fees ever!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    width="1536"
                    height="2048"
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
        <section className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Emergency Service Image */}
            <figure 
              itemScope 
              itemType="https://schema.org/ImageObject"
              className="relative h-96 lg:h-auto overflow-hidden"
            >
              <picture>
                <source 
                  srcSet="/emergency-lockout-service-action-sarasota-florida.webp" 
                  type="image/webp"
                />
                <img 
                  src="/emergency-lockout-service-action-sarasota-florida.png"
                  alt="24/7 emergency lockout service in action - professional mobile locksmith unlocking vehicle in North Port, Port Charlotte, Sarasota County, and Charlotte County Florida"
                  itemProp="contentUrl"
                  loading="lazy"
                  width="1200"
                  height="800"
                  className="w-full h-full object-cover"
                  data-testid="img-emergency-service"
                />
              </picture>
              <meta itemProp="creator" content="Unlock SRQ LLC" />
              <meta itemProp="copyrightHolder" content="Unlock SRQ LLC" />
              <figcaption itemProp="caption" className="sr-only">
                Professional locksmith providing emergency vehicle lockout service in Sarasota, Florida
              </figcaption>
            </figure>

            {/* Right: Form */}
            <div className="bg-[#1a3a52] p-12 lg:p-16">
              <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-white/80 mb-8">
                Have a question for the best Unlock SRQ? We're here to help. Send us a message and we'll get be in touch.
              </p>

              <form className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Name</Label>
                  <Input id="name" type="text" className="bg-white" />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Email</Label>
                  <Input id="email" type="email" className="bg-white" />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">Phone</Label>
                  <Input id="phone" type="tel" className="bg-white" />
                </div>

                <div>
                  <Label htmlFor="options" className="text-white mb-2 block">Choose Options</Label>
                  <Select>
                    <SelectTrigger id="options" className="bg-white">
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">Message</Label>
                  <Textarea id="message" rows={4} className="bg-white" />
                </div>

                <Button type="submit" className="w-full bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-semibold py-6 text-lg">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

