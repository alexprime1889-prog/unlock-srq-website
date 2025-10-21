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
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
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
  CheckCircle
} from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <SEO />
      <div className="min-h-screen flex flex-col">
        {/* TOP BAR - Social Media */}
        <div className="bg-[#1a3a52] text-white py-2">
          <div className="container flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-8 h-8 bg-[#7dd3e8] rounded flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Facebook size={16} className="text-[#1a3a52]" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="w-8 h-8 bg-[#7dd3e8] rounded flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Instagram size={16} className="text-[#1a3a52]" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="w-8 h-8 bg-[#7dd3e8] rounded flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Twitter size={16} className="text-[#1a3a52]" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="w-8 h-8 bg-[#7dd3e8] rounded flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Linkedin size={16} className="text-[#1a3a52]" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="w-8 h-8 bg-[#7dd3e8] rounded flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Youtube size={16} className="text-[#1a3a52]" />
              </a>
              <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" 
                 className="w-8 h-8 bg-[#7dd3e8] rounded flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <span className="text-[#1a3a52] font-bold text-sm">Y</span>
              </a>
              <a href="mailto:info@unlocksrq.com" 
                 className="w-8 h-8 bg-[#7dd3e8] rounded flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Mail size={16} className="text-[#1a3a52]" />
              </a>
            </div>
          </div>
        </div>

        {/* HEADER - Sticky */}
        <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50 shadow-sm">
          <div className="container">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#7dd3e8] rounded-lg flex items-center justify-center">
                  <Key size={24} className="text-[#1a3a52]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#1a3a52]">
                    Unlock <span className="text-[#7dd3e8]">SRQ</span>
                  </span>
                  <span className="text-xs text-gray-600">LLC</span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="hidden lg:flex gap-6 text-sm font-semibold">
                <a href="#services" className="text-[#1a3a52] hover:text-[#7dd3e8] transition-colors">FLORIDA UNLOCK SRQ</a>
                <a href="#services" className="text-[#1a3a52] hover:text-[#7dd3e8] transition-colors flex items-center gap-1">
                  SERVICES <ChevronDown size={16} />
                </a>
                <a href="#products" className="text-[#1a3a52] hover:text-[#7dd3e8] transition-colors flex items-center gap-1">
                  PRODUCTS <ChevronDown size={16} />
                </a>
              </nav>

              {/* Contact Info */}
              <div className="flex flex-col gap-1 text-xs lg:text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#7dd3e8]" />
                  <span className="font-semibold">Phone: <a href="tel:9415875050" className="text-[#1a3a52] hover:text-[#7dd3e8]">(941) 587-5050</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#7dd3e8]" />
                  <span className="font-semibold">Email: <a href="mailto:info@unlocksrq.com" className="text-[#1a3a52] hover:text-[#7dd3e8]">info@unlocksrq.com</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#7dd3e8]" />
                  <span className="font-semibold text-[#7dd3e8]">*Emergency: 24/7/365*</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] flex items-center justify-start bg-cover bg-center" 
                 style={{ backgroundImage: 'url(/hero-bg.webp)' }}>
          {/* Purple Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-purple-700/75 to-purple-600/70"></div>
          
          <div className="container relative z-10 py-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Unlock SRQ Services in Florida and Surrounding Areas
              </h1>
              <p className="text-base sm:text-lg text-white/95 mb-8 leading-relaxed">
                Unlock SRQ - Smart solutions for key problems and emergency automotive services. 
                We use advanced technology and an AI-powered approach for rapid key programming, 
                vehicle diagnostics, and locksmith services. We come to you within 15-30 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/booking">
                  <Button 
                    size="lg" 
                    className="bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-semibold px-10 py-6 text-lg rounded-lg shadow-lg w-full sm:w-auto"
                  >
                    Book Appointment
                  </Button>
                </a>
                <a href="/payment">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#1a3a52] font-semibold px-10 py-6 text-lg rounded-lg shadow-lg w-full sm:w-auto"
                  >
                    Pay Online
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4 SERVICE CARDS - Overlapping Hero */}
        <section className="relative -mt-32 z-20 pb-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Residential */}
              <div className="bg-[#2c4a5f] text-white rounded-xl p-8 shadow-2xl hover:transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <HomeIcon size={32} className="text-[#2c4a5f]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Residential KeySmartAI</h3>
                <p className="text-sm text-white/90 mb-6 leading-relaxed">
                  Our residential services provide Florida residents with a broad range of options to help repair, fix, rekey, replace, troubleshoot or consult on all types of home locks.
                </p>
                <Button className="w-full bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#2c4a5f] font-semibold">
                  Learn More
                </Button>
              </div>

              {/* Card 2: Commercial */}
              <div className="bg-[#7dd3e8] text-[#1a3a52] rounded-xl p-8 shadow-2xl hover:transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-[#2c4a5f] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Shield size={32} className="text-[#7dd3e8]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Commercial KeySmartAI</h3>
                <p className="text-sm mb-6 leading-relaxed">
                  Our commercial services have been helping local businesses keep their premises secure and valuables safe. We offer a range of security and locking solutions tailored to your specific needs.
                </p>
                <Button className="w-full bg-[#2c4a5f] hover:bg-[#1a3a52] text-white font-semibold">
                  Learn More
                </Button>
              </div>

              {/* Card 3: Car */}
              <div className="bg-[#2c4a5f] text-white rounded-xl p-8 shadow-2xl hover:transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Car size={32} className="text-[#2c4a5f]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Car KeySmartAI</h3>
                <p className="text-sm text-white/90 mb-6 leading-relaxed">
                  Nothing is more frustrating than going to get into your car or truck only to find that you're locked out or you've lost your keys. We can help get you safely back into your vehicle.
                </p>
                <Button className="w-full bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#2c4a5f] font-semibold">
                  Learn More
                </Button>
              </div>

              {/* Card 4: Emergency */}
              <div className="bg-[#7dd3e8] text-[#1a3a52] rounded-xl p-8 shadow-2xl hover:transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-[#2c4a5f] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Clock size={32} className="text-[#7dd3e8]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Emergency KeySmartAI</h3>
                <p className="text-sm mb-6 leading-relaxed">
                  Life happens...which is to say that every once in a while we get blindsided by unexpected situations. Our team is available for emergency calls 24 hours a day.
                </p>
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
                  <p>Transponder Keys <span className="font-bold text-[#7dd3e8]">$150</span></p>
                  <p>Smart Keys <span className="font-bold text-[#7dd3e8]">$250</span></p>
                </div>
              </div>

              {/* Service 2: Lockout Services */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Lock size={36} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-center text-[#1a3a52] mb-4">Lockout Services</h3>
                <div className="text-center text-gray-700 space-y-2">
                  <p>Car Lockout <span className="font-bold text-[#7dd3e8]">$150</span></p>
                  <p>Residential Door Lockout <span className="font-bold text-[#7dd3e8]">$120</span></p>
                </div>
              </div>

              {/* Service 3: Battery Services */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Battery size={36} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-center text-[#1a3a52] mb-4">Battery Services</h3>
                <div className="text-center text-gray-700 space-y-2">
                  <p>Standard Battery <span className="font-bold text-[#7dd3e8]">$350</span></p>
                  <p>European Vehicles with Programming <span className="font-bold text-[#7dd3e8]">$450</span></p>
                </div>
              </div>

              {/* Service 4: Diagnostics */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Search size={36} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-center text-[#1a3a52] mb-4">Diagnostics</h3>
                <div className="text-center text-gray-700">
                  <p>On-site diagnostics for vehicles that won't start</p>
                  <p className="font-bold text-[#7dd3e8] mt-2">$160</p>
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
                    <span>In What Areas Do You Provide Service?</span>
                    <ChevronDown className={`transform transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === 1 && (
                    <div className="px-6 py-4 bg-gray-50 text-gray-700">
                      We provide service across the greater metropolitan area and the surrounding region. We provide 24-hour service including emergency locksmiths at no extra charge.
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(2)}
                    className="w-full px-6 py-4 text-left font-semibold text-[#1a3a52] hover:bg-gray-50 flex justify-between items-center"
                  >
                    <span>What Are Your Business Hours?</span>
                    <ChevronDown className={`transform transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === 2 && (
                    <div className="px-6 py-4 bg-gray-50 text-gray-700">
                      <p className="mb-2"><strong>Regular:</strong> 7:00 AM - 7:00 PM (Daily)</p>
                      <p><strong>Emergency:</strong> 24/7/365</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* FAQ 3 */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(3)}
                    className="w-full px-6 py-4 text-left font-semibold text-[#1a3a52] hover:bg-gray-50 flex justify-between items-center"
                  >
                    <span>What kinds of services do you provide?</span>
                    <ChevronDown className={`transform transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === 3 && (
                    <div className="px-6 py-4 bg-gray-50 text-gray-700">
                      Our experts at Unlock SRQ provide expert-level services of any type for all types of locks from deadbolts to car locks to safes.
                    </div>
                  )}
                </div>

                {/* FAQ 4 */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(4)}
                    className="w-full px-6 py-4 text-left font-semibold text-[#1a3a52] hover:bg-gray-50 flex justify-between items-center"
                  >
                    <span>Why choose Unlock SRQ?</span>
                    <ChevronDown className={`transform transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === 4 && (
                    <div className="px-6 py-4 bg-gray-50 text-gray-700">
                      Unlock SRQ main goal is to provide professional, efficient and reliable locksmith services at competitive rates.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(/interior-bg.jpg)' }}>
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Experts That Care */}
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users size={40} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Experts That Care</h3>
                <h4 className="text-xl font-semibold text-[#7dd3e8] mb-4">Reliability you can count on</h4>
                <p className="text-white/90 mb-6 leading-relaxed">
                  When you need a locksmith you don't have time to sit around and wait. Life moves fast, and so do we.
                </p>
                <Button className="bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-semibold">
                  Learn More
                </Button>
              </div>

              {/* Card 2: Why Choose Us */}
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Settings size={40} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
                <h4 className="text-xl font-semibold text-[#7dd3e8] mb-4">A Local Florida Locksmith</h4>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Unlock SRQ main goal is to provide professional, efficient and reliable locksmith services at competitive rates.
                </p>
                <Button className="bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-semibold">
                  Learn More
                </Button>
              </div>

              {/* Card 3: Next Steps */}
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle size={40} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Next Steps</h3>
                <h4 className="text-xl font-semibold text-[#7dd3e8] mb-4">If you find yourself in need of a high quality locksmith you can count on, give us a call.</h4>
                <Button className="bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-semibold">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* LATEST UPDATES SECTION */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center text-[#1a3a52] mb-16">Latest Updates</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Article 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-3">Keeping your Business Secure During Covid-19</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Learn essential tips for maintaining business security during challenging times...
                  </p>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-3">Mechanical Vs Electronic Locks</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Discover the pros and cons of different lock types and which is best for you...
                  </p>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-3">Benefits of Replacing VS. Rekeying Locks</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Understanding when to replace or rekey your locks can save you money...
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-[#1a3a52] hover:bg-[#2c4a5f] text-white font-semibold px-12 py-6 text-lg">
                Read More
              </Button>
            </div>
          </div>
        </section>

        {/* ABOUT COMPANY SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <div className="h-96 bg-gray-300 rounded-xl"></div>

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
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Facebook size={20} className="text-[#1a3a52]" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Instagram size={20} className="text-[#1a3a52]" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Twitter size={20} className="text-[#1a3a52]" />
              </a>
              <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <span className="text-[#1a3a52] font-bold">Y</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Linkedin size={20} className="text-[#1a3a52]" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Youtube size={20} className="text-[#1a3a52]" />
              </a>
              <a href="mailto:info@unlocksrq.com" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Mail size={20} className="text-[#1a3a52]" />
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Image */}
            <div className="h-96 lg:h-auto bg-gray-300"></div>

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

        {/* FOOTER */}
        <footer className="bg-[#344c5a] text-white py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Column 1: Logo & Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-[#7dd3e8] rounded-lg flex items-center justify-center">
                    <Key size={20} className="text-[#1a3a52]" />
                  </div>
                  <span className="text-xl font-bold">Unlock <span className="text-[#7dd3e8]">SRQ</span> LLC</span>
                </div>
                <p className="text-white/80 mb-4 text-sm leading-relaxed">
                  Professional locksmith services available 24/7 for all your security needs.
                </p>
                <p className="text-white/60 text-sm">Owner: Maxim Yepichin</p>
              </div>

              {/* Column 2: Contact Us */}
              <div>
                <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-[#7dd3e8]" />
                    <a href="tel:9415875050" className="hover:text-[#7dd3e8]">(941) 587-5050</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-[#7dd3e8]" />
                    <a href="mailto:info@unlocksrq.com" className="hover:text-[#7dd3e8]">info@unlocksrq.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#7dd3e8]" />
                    <span>2456 Yancy Street, North Port, FL 34291</span>
                  </div>
                </div>
              </div>

              {/* Column 3: Emergency Service */}
              <div>
                <h4 className="text-lg font-bold mb-4">Emergency Service</h4>
                <p className="text-white/80 text-sm mb-4">
                  Available 24 hours a day, 7 days a week, 365 days a year
                </p>
                <p className="text-4xl font-bold text-[#7dd3e8]">24/7/365</p>
              </div>

              {/* Column 4: Service Areas */}
              <div>
                <h4 className="text-lg font-bold mb-4">Service Areas</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#7dd3e8]" />
                    Sarasota
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#7dd3e8]" />
                    North Port
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#7dd3e8]" />
                    Port Charlotte
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#7dd3e8]" />
                    Englewood
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#7dd3e8]" />
                    Bradenton
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mb-8 pb-8 border-b border-white/20">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Facebook size={20} className="text-[#1a3a52]" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Instagram size={20} className="text-[#1a3a52]" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Twitter size={20} className="text-[#1a3a52]" />
              </a>
              <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <span className="text-[#1a3a52] font-bold">Y</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Linkedin size={20} className="text-[#1a3a52]" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Youtube size={20} className="text-[#1a3a52]" />
              </a>
              <a href="mailto:info@unlocksrq.com" 
                 className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors">
                <Mail size={20} className="text-[#1a3a52]" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-white/60 text-sm">
              <p>&copy; {new Date().getFullYear()} Unlock SRQ LLC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

