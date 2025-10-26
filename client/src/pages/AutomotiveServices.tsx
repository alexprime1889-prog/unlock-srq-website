import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Phone,
  Key,
  Car,
  Clock,
  Shield,
  CheckCircle,
  Award,
  Wrench,
  Zap,
} from "lucide-react";

export default function AutomotiveServices() {
  const certifications = [
    {
      name: "NASTF Certified",
      description: "National Automotive Service Task Force certification for automotive locksmith services",
      icon: Award,
    },
    {
      name: "VSP Certified",
      description: "Vehicle Security Professional - advanced automotive security systems training",
      icon: Shield,
    },
    {
      name: "AUTOAUTH Certified",
      description: "Authorized automotive locksmith with verified credentials and training",
      icon: CheckCircle,
    },
  ];

  const technologies = [
    "Laser Key Cutting Equipment",
    "Latest Key Programming Technology",
    "OEM Key Programming Software",
    "Transponder Chip Programming Tools",
    "ECU Re-Flash Equipment",
    "Immobilizer Diagnostic Tools",
  ];

  const services = [
    {
      category: "Emergency Lockout Services",
      items: [
        "All Vehicles Lock Outs",
        "Car Door Unlocking",
        "Emergency Lock Outs 24/7",
        "Car Trunk Access",
      ],
    },
    {
      category: "Key Replacement & Duplication",
      items: [
        "Car Key Replacement",
        "Lost Keys Replacement",
        "Duplicate Existing Keys",
        "Worn out Keys Replacement",
        "Car Keys Made On-Site",
        "Laser Cut Keys",
      ],
    },
    {
      category: "Transponder & Smart Key Programming",
      items: [
        "Transponder Keys Programming",
        "Computer Chip Keys Programmed",
        "Smart Key Programming",
        "Push Start Ignition Key Fob Replacement",
        "Keyless Entry Remote Programming",
        "Transponder Keys with Remote Replacement",
      ],
    },
    {
      category: "Advanced Programming Services",
      items: [
        "Immobilizer RE-Flash",
        "Re-Flash ECU",
        "Erase Lost Keys from System",
        "Key Cutting (with/without transponder chip)",
        "Key Duplication (with/without transponder chip)",
      ],
    },
    {
      category: "Broken Key Services",
      items: [
        "Broken Key Replacement",
        "Broken Keys in Ignition Extraction",
        "Car Key Extraction",
      ],
    },
    {
      category: "Lock & Security Services",
      items: [
        "Automotive Rekeying",
        "Lock Replacement",
        "High Security Locks Installation",
        "Electronic Locks Installed or Repaired",
        "Emergency Re-key Services",
      ],
    },
    {
      category: "High Security Keys",
      items: [
        "High Security Keys Cutting",
        "High Security Keys Programming",
        "High Security Locks",
      ],
    },
    {
      category: "Remote & Fob Services",
      items: [
        "Keyless Entry Remote Cutting",
        "Keyless Entry Remote Programming",
        "Remote Keyless Entry Remotes Replacement",
        "Key Fob Programming",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Automotive Locksmith Services | NASTF Certified | Unlock SRQ"
        description="Complete automotive locksmith services in North Port, Port Charlotte & Sarasota. NASTF & VSP certified. Key programming, lockouts, transponder keys, ECU reflash. 95% of keys in stock. Call (941) 587-5050"
        canonicalUrl="https://srqunlock.com/automotive-services/"
      />

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] text-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Automotive Locksmith Services
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-[#7dd3e8]">
                NASTF & VSP Certified | 95% of All Keys & Fobs In Stock
              </p>
              <p className="text-lg mb-8">
                Serving North Port, Port Charlotte, Punta Gorda, Venice, Sarasota & All Surrounding
                Areas
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#7dd3e8] text-[#1a3a52] hover:bg-[#6bc3d8] font-bold"
                  data-testid="button-call-now"
                  asChild
                >
                  <a href="tel:9415875050">
                    <Phone className="mr-2" size={20} />
                    Call Now: (941) 587-5050
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white text-white hover:bg-white/20"
                  data-testid="button-get-quote"
                  asChild
                >
                  <a href="#services">View All Services</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">
                Certified & Trusted Professionals
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We carry the highest industry certifications and use the latest technology to
                provide professional automotive locksmith services at less than half dealer prices.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow"
                  data-testid={`card-certification-${index}`}
                >
                  <div className="w-16 h-16 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon size={32} className="text-[#1a3a52]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-2">{cert.name}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </Card>
              ))}
            </div>

            {/* Technologies */}
            <div className="bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] rounded-lg p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Zap size={32} className="text-[#7dd3e8]" />
                <h3 className="text-2xl font-bold">Latest Technology & Equipment</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2"
                    data-testid={`text-technology-${index}`}
                  >
                    <CheckCircle size={20} className="text-[#7dd3e8] flex-shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL EQUIPMENT - LISHI TOOL SHOWCASE */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">
                  Professional Tools & Expertise
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  We use industry-leading Lishi tools and automotive locksmith equipment to provide 
                  fast, non-destructive lockout service for all vehicle makes and models. Our NASTF 
                  and VSP certifications ensure we stay current with the latest automotive security systems.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Non-Destructive Entry:</strong> Professional Lishi tools preserve your vehicle's locks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Mobile Workshop:</strong> Fully equipped service van arrives at your location
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[#7dd3e8] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Latest Technology:</strong> OEM programming tools and diagnostic equipment
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <picture>
                  <source 
                    srcSet="/lishi-tool-automotive-lockout-service-unlock-srq.webp" 
                    type="image/webp" 
                  />
                  <img
                    src="/lishi-tool-automotive-lockout-service-unlock-srq.png"
                    alt="Professional Lishi tool used by Unlock SRQ master locksmith for non-destructive automotive lockout service in North Port and Port Charlotte Florida"
                    className="rounded-lg shadow-2xl w-full h-auto object-cover"
                    loading="lazy"
                    data-testid="img-lishi-tool"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div data-testid="feature-inventory">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="font-bold text-[#1a3a52] mb-2">95% Keys in Stock</h3>
                <p className="text-gray-600 text-sm">
                  We carry OEM keys for nearly every vehicle on the road today
                </p>
              </div>

              <div data-testid="feature-mobile">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="font-bold text-[#1a3a52] mb-2">Mobile Service</h3>
                <p className="text-gray-600 text-sm">We come to you anywhere in the service area</p>
              </div>

              <div data-testid="feature-pricing">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="font-bold text-[#1a3a52] mb-2">Half Dealer Cost</h3>
                <p className="text-gray-600 text-sm">
                  Professional service at less than half the dealer price
                </p>
              </div>

              <div data-testid="feature-emergency">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="font-bold text-[#1a3a52] mb-2">24/7 Availability</h3>
                <p className="text-gray-600 text-sm">Emergency locksmith service around the clock</p>
              </div>
            </div>
          </div>
        </section>

        {/* OWNER EXPERTISE SECTION */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative order-2 md:order-1">
                <picture>
                  <source 
                    srcSet="/maxim-yepichin-owner-master-locksmith-sarasota-fl.webp" 
                    type="image/webp" 
                  />
                  <img
                    src="/maxim-yepichin-owner-master-locksmith-sarasota-fl.png"
                    alt="Maksim Yepikhin, owner and master automotive locksmith at Unlock SRQ in North Port Florida, NASTF and VSP certified professional"
                    className="rounded-lg shadow-2xl w-full h-auto object-cover"
                    loading="lazy"
                    data-testid="img-owner-maksim"
                  />
                </picture>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">
                  Master Locksmith Maksim Yepikhin
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Owner and founder of Unlock SRQ LLC, serving the North Port, Port Charlotte, 
                  and Sarasota communities with professional automotive locksmith services since 2020.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award size={24} className="text-[#7dd3e8] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#1a3a52] mb-1">NASTF Certified Professional</h3>
                      <p className="text-gray-600">
                        National Automotive Service Task Force member with access to OEM programming data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield size={24} className="text-[#7dd3e8] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#1a3a52] mb-1">Licensed & Insured</h3>
                      <p className="text-gray-600">
                        $2 million liability insurance • Background checked • Bonded
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wrench size={24} className="text-[#7dd3e8] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#1a3a52] mb-1">Specialized Expertise</h3>
                      <p className="text-gray-600">
                        Transponder programming • ECU reflash • High-security automotive systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">
                Complete Automotive Locksmith Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From emergency lockouts to advanced key programming, we handle all your automotive
                locksmith needs with professional expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                  data-testid={`card-service-category-${index}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#7dd3e8] rounded-lg flex items-center justify-center">
                      <Wrench size={24} className="text-[#1a3a52]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a52]">{service.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700"
                        data-testid={`service-item-${index}-${idx}`}
                      >
                        <CheckCircle size={18} className="text-[#7dd3e8] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Automotive Locksmith Service?
            </h2>
            <p className="text-xl mb-8 text-[#7dd3e8]">
              Call Now for Fast, Professional Service • Available 24/7
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#7dd3e8] text-[#1a3a52] hover:bg-[#6bc3d8] font-bold text-lg px-8"
                data-testid="button-cta-call"
                asChild
              >
                <a href="tel:9415875050">
                  <Phone className="mr-2" size={24} />
                  (941) 587-5050
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8"
                data-testid="button-cta-booking"
                asChild
              >
                <a href="/booking">Schedule Appointment</a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
