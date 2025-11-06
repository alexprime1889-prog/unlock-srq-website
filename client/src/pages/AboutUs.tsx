import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Award,
  Users,
  CheckCircle,
  Lock
} from "lucide-react";

export default function AboutUs() {
  return (
    <>
      <SEO 
        title="About Unlock SRQ | Master Locksmith Maksim Yepikhin | Licensed & Insured"
        description="Meet Maksim Yepikhin, owner and master locksmith at Unlock SRQ LLC. Licensed, insured, and serving North Port, Port Charlotte, and Charlotte County since 2020. 24/7 emergency locksmith services."
        canonicalUrl="https://srqunlock.com/about-us/"
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        {/* HERO SECTION */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#1a3a52] via-purple-900 to-purple-700">
          <div className="container relative z-10 py-20 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Unlock SRQ LLC
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 mb-4">
              Your Trusted Locksmith Partner in Charlotte County
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Licensed, Insured & Locally Owned • Serving the Community Since 2020
            </p>
          </div>
        </section>

        {/* OWNER SECTION */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Photo */}
              <div className="order-2 lg:order-1">
                <figure 
                  itemScope 
                  itemType="https://schema.org/ImageObject"
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <picture>
                    <source 
                      srcSet="/maksim-yepikhin-working-xhorse-locksmith.webp" 
                      type="image/webp"
                    />
                    <img 
                      src="/maksim-yepikhin-working-xhorse-locksmith.png"
                      alt="Maksim Yepikhin, owner of Unlock SRQ LLC, working with professional Xhorse key programming equipment, demonstrating expert automotive locksmith services in North Port, Charlotte County Florida"
                      itemProp="contentUrl"
                      loading="eager"
                      width="768"
                      height="1344"
                      className="w-full h-auto object-contain"
                      data-testid="img-owner-about"
                    />
                  </picture>
                  <div itemProp="creator" itemScope itemType="https://schema.org/Organization">
                    <meta itemProp="name" content="Unlock SRQ LLC" />
                    <meta itemProp="url" content="https://srqunlock.com" />
                  </div>
                  <div itemProp="copyrightHolder" itemScope itemType="https://schema.org/Organization">
                    <meta itemProp="name" content="Unlock SRQ LLC" />
                  </div>
                  <meta itemProp="copyrightNotice" content="© 2025 Unlock SRQ LLC. All rights reserved." />
                  <meta itemProp="creditText" content="Unlock SRQ LLC" />
                  <meta itemProp="license" content="https://srqunlock.com/terms-of-service" />
                  <meta itemProp="acquireLicensePage" content="https://srqunlock.com/#contact" />
                </figure>
              </div>

              {/* Bio */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-6">
                  Meet Maksim Yepikhin
                </h2>
                <p className="text-lg text-gray-600 mb-4 font-semibold">
                  Owner & Master Locksmith
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Maksim Yepikhin is the founder and owner of Unlock SRQ LLC, bringing years of expertise in 
                  locksmith services to North Port, Port Charlotte, and all of Charlotte County. With a passion 
                  for security solutions and customer service, Maksim has built Unlock SRQ into the area's most 
                  trusted locksmith service.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  As a licensed and insured master locksmith, Maksim specializes in automotive key programming, 
                  emergency lockout services, and advanced security installations. His commitment to rapid response 
                  times and transparent pricing has earned Unlock SRQ a reputation for excellence throughout 
                  Charlotte and Sarasota Counties.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Maksim stays current with the latest locksmith technologies and techniques, ensuring that 
                  Unlock SRQ can handle everything from traditional lock installations to cutting-edge smart 
                  lock systems and transponder key programming for modern vehicles.
                </p>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-[#7dd3e8]/10 px-4 py-2 rounded-lg">
                    <Award className="text-[#7dd3e8]" size={20} />
                    <span className="text-sm font-semibold text-[#1a3a52]">Licensed Master Locksmith</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#7dd3e8]/10 px-4 py-2 rounded-lg">
                    <Shield className="text-[#7dd3e8]" size={20} />
                    <span className="text-sm font-semibold text-[#1a3a52]">$2M Liability Insurance</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#7dd3e8]/10 px-4 py-2 rounded-lg">
                    <Users className="text-[#7dd3e8]" size={20} />
                    <span className="text-sm font-semibold text-[#1a3a52]">Background Checked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPANY INFO */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center text-[#1a3a52] mb-4">
              About Unlock SRQ LLC
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Your locally owned and operated locksmith service in Charlotte County
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Company History */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-lg flex items-center justify-center mb-4">
                  <Lock size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a3a52] mb-3">Our Story</h3>
                <p className="text-gray-700 leading-relaxed">
                  Founded in 2020, Unlock SRQ was established to provide Charlotte County with reliable, 
                  professional locksmith services. We've grown from a one-person operation to the area's 
                  most trusted mobile locksmith service.
                </p>
              </div>

              {/* Licensing */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-lg flex items-center justify-center mb-4">
                  <Shield size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a3a52] mb-3">Licensed & Insured</h3>
                <p className="text-gray-700 leading-relaxed">
                  Unlock SRQ is fully licensed, bonded, and insured with $2M liability coverage. 
                  We meet all Florida state requirements and maintain the highest professional standards.
                </p>
              </div>

              {/* Service Philosophy */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-lg flex items-center justify-center mb-4">
                  <Users size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a3a52] mb-3">Our Promise</h3>
                <p className="text-gray-700 leading-relaxed">
                  We promise transparent pricing with no hidden fees, fast response times averaging 
                  15-20 minutes, and quality workmanship backed by our 90-day warranty on all services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WARRANTIES & GUARANTEES */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center text-[#1a3a52] mb-12">
              Our Guarantees
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <CheckCircle className="text-[#7dd3e8]" size={32} />
                  Warranty Coverage
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#7dd3e8] mt-1 flex-shrink-0" size={18} />
                    <span>90-day warranty on all labor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#7dd3e8] mt-1 flex-shrink-0" size={18} />
                    <span>1-year warranty on parts and materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#7dd3e8] mt-1 flex-shrink-0" size={18} />
                    <span>Lifetime warranty available on high-security locks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#7dd3e8] mt-1 flex-shrink-0" size={18} />
                    <span>100% satisfaction guarantee</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#7dd3e8] to-[#6bc3d8] rounded-xl p-8 text-[#1a3a52]">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <CheckCircle className="text-[#1a3a52]" size={32} />
                  Payment Options
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#1a3a52] mt-1 flex-shrink-0" size={18} />
                    <span>All major credit cards accepted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#1a3a52] mt-1 flex-shrink-0" size={18} />
                    <span>Cash, checks welcome</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#1a3a52] mt-1 flex-shrink-0" size={18} />
                    <span>Zelle, Venmo, PayPal accepted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#1a3a52] mt-1 flex-shrink-0" size={18} />
                    <span>No hidden fees - transparent pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="py-20 bg-[#1a3a52] text-white">
          <div className="container text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Experience Professional Locksmith Service?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact Unlock SRQ today for fast, reliable locksmith services with transparent pricing and expert service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:9415875050">
                <Button 
                  size="lg" 
                  className="bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-semibold px-10 py-6 text-lg"
                  data-testid="button-call-about"
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
                  data-testid="button-book-about"
                >
                  Book Appointment
                </Button>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/90">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-[#7dd3e8]" />
                <a href="mailto:info@srqunlock.com" className="hover:text-[#7dd3e8] transition-colors">
                  info@srqunlock.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#7dd3e8]" />
                <span>North Port, FL 34291</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-[#7dd3e8]" />
                <span>24/7/365 Emergency Service</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
