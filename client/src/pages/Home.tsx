import { Button } from "@/components/ui/button";
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
  Key,
  Lock,
  Car,
  Shield
} from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO />
      <div className="min-h-screen flex flex-col">
      {/* Top Bar - Social Media & Navigation */}
      <div className="bg-[#2C4A5E] text-white py-2">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="w-8 h-8 bg-[#5DCED9] rounded flex items-center justify-center hover:bg-[#4ABDC8] transition-colors">
              <Facebook size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="w-8 h-8 bg-[#5DCED9] rounded flex items-center justify-center hover:bg-[#4ABDC8] transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="w-8 h-8 bg-[#5DCED9] rounded flex items-center justify-center hover:bg-[#4ABDC8] transition-colors">
              <Twitter size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="w-8 h-8 bg-[#5DCED9] rounded flex items-center justify-center hover:bg-[#4ABDC8] transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
               className="w-8 h-8 bg-[#5DCED9] rounded flex items-center justify-center hover:bg-[#4ABDC8] transition-colors">
              <Youtube size={16} />
            </a>
            <a href="mailto:info@unlocksrq.com"
               className="w-8 h-8 bg-[#5DCED9] rounded flex items-center justify-center hover:bg-[#4ABDC8] transition-colors">
              <Mail size={16} />
            </a>
          </div>
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium">
            <a href="#about" className="hover:text-[#5DCED9] transition-colors">ABOUT</a>
            <a href="#blog" className="hover:text-[#5DCED9] transition-colors">BLOG</a>
            <a href="#portfolio" className="hover:text-[#5DCED9] transition-colors">PORTFOLIO</a>
            <a href="#contact" className="hover:text-[#5DCED9] transition-colors">CONTACT US</a>
          </nav>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 py-3 sm:py-4 sticky top-0 z-50 shadow-sm">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-0">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <img src="/logo.png" alt="Unlock SRQ" className="h-12 sm:h-16 w-auto" />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-[#2C4A5E]">
                  Unlock <span className="text-[#5DCED9]">SRQ</span>
                </span>
                <span className="text-xs text-gray-600">LLC</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex flex-col gap-1 text-xs lg:text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#5DCED9]" />
                <span className="font-semibold">Phone: <a href="tel:9415875050" className="text-[#2C4A5E] hover:text-[#5DCED9]">941-587-5050</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#5DCED9]" />
                <span className="font-semibold">Email: <a href="mailto:info@unlocksrq.com" className="text-[#2C4A5E] hover:text-[#5DCED9]">info@unlocksrq.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#5DCED9]" />
                <span className="font-semibold">"Emergency: 24/7/365"</span>
              </div>
            </div>

            {/* Mobile Contact Info */}
            <div className="flex md:hidden items-center gap-4 text-xs">
              <a href="tel:9415875050" className="flex items-center gap-1 text-[#2C4A5E] hover:text-[#5DCED9]">
                <Phone size={14} />
                <span className="font-semibold">941-587-5050</span>
              </a>
              <span className="text-[#5DCED9] font-semibold">24/7</span>
            </div>

            {/* Main Navigation */}
            <nav className="hidden lg:flex gap-3 xl:gap-6 text-xs xl:text-sm font-semibold">
              <a href="#florida" className="text-[#2C4A5E] hover:text-[#5DCED9] transition-colors">FLORIDA UNLOCK SRQ</a>
              <a href="#services" className="text-[#2C4A5E] hover:text-[#5DCED9] transition-colors">SERVICES ▼</a>
              <a href="#products" className="text-[#2C4A5E] hover:text-[#5DCED9] transition-colors">PRODUCTS ▼</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:min-h-[600px] flex items-center justify-start bg-cover bg-center" 
               style={{ backgroundImage: 'url(/hero-bg.webp)' }}>
        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-700/60"></div>
        
        <div className="container relative z-10 py-12 sm:py-20">
          <div className="max-w-2xl px-4 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Unlock SRQ Services in Florida and Surrounding Areas
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white/95 mb-6 sm:mb-8 leading-relaxed">
              Unlock SRQ - Smart solutions for key problems and emergency automotive services. 
              We use advanced technology and an AI-powered approach for rapid key programming, 
              vehicle diagnostics, and locksmith services. We come to you within 15-30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/booking">
                <Button 
                  size="lg" 
                  className="bg-[#5DCED9] hover:bg-[#4ABDC8] text-[#2C4A5E] font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg w-full sm:w-auto"
                >
                  Book Appointment
                </Button>
              </a>
              <a href="/payment">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg w-full sm:w-auto"
                >
                  Pay Online
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-[#5DCED9] rounded-full flex items-center justify-center mb-4">
                <Key size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2C4A5E] mb-2">Key Services</h3>
              <p className="text-gray-600">Professional key cutting and duplication for all types of locks</p>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-[#5DCED9] rounded-full flex items-center justify-center mb-4">
                <Lock size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2C4A5E] mb-2">Lock Installation</h3>
              <p className="text-gray-600">Expert installation and repair of residential and commercial locks</p>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-[#5DCED9] rounded-full flex items-center justify-center mb-4">
                <Car size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2C4A5E] mb-2">Automotive Keys</h3>
              <p className="text-gray-600">Car key programming, replacement, and emergency automotive services</p>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-[#5DCED9] rounded-full flex items-center justify-center mb-4">
                <Shield size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2C4A5E] mb-2">Security Systems</h3>
              <p className="text-gray-600">Advanced security solutions and smart lock installations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C4A5E] mb-4">Our Service Area</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We proudly serve the greater Sarasota region and surrounding communities within a 50-mile radius
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {['Sarasota', 'North Port', 'Port Charlotte', 'Englewood', 'Bradenton'].map((city) => (
              <div key={city} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                <MapPin size={20} className="text-[#5DCED9] mr-2" />
                <span className="font-semibold text-[#2C4A5E]">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C4A5E] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Unlock <span className="text-[#5DCED9]">SRQ</span> LLC</h3>
              <p className="text-white/80 mb-4">
                Professional locksmith services available 24/7 for all your security needs.
              </p>
              <p className="text-sm text-white/70">
                Owner: Maxim Yepichin
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href="tel:9415875050" className="hover:text-[#5DCED9]">941-587-5050</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:info@unlocksrq.com" className="hover:text-[#5DCED9]">info@unlocksrq.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>2456 Yancy Street, North Port, FL 34291</span>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Emergency Service</h4>
              <p className="text-white/80 mb-2">Available 24 hours a day, 7 days a week, 365 days a year</p>
              <p className="text-[#5DCED9] font-semibold text-lg">24/7/365</p>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Unlock SRQ LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

