import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Phone,
  Mail,
  Clock,
  Key,
  CheckCircle,
  Package,
  Zap,
  Shield,
  Facebook,
  Instagram,
  Youtube,
  MapPin,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function AutomotiveProducts() {
  const productCategories = [
    {
      name: "OEM Keys",
      description: "Original Equipment Manufacturer keys for all makes and models",
      icon: Key,
      products: [
        "Genuine OEM Factory Keys",
        "Laser Cut High Security Keys",
        "Traditional Edge-Cut Keys",
        "Sidewinder Keys",
        "Tibbe Keys",
        "Dimple Keys",
      ],
      features: [
        "Same quality as dealership",
        "Less than half dealer price",
        "Immediate availability",
        "Warranty included",
      ],
    },
    {
      name: "Transponder Keys",
      description: "Computer chip keys with advanced security features",
      icon: Zap,
      products: [
        "Transponder Chip Keys",
        "Computer Chip Keys",
        "Crypto Chip Keys",
        "Rolling Code Keys",
        "Fixed Code Keys",
        "Proximity Keys",
      ],
      features: [
        "Compatible with all vehicles",
        "Professional programming",
        "Latest technology",
        "Encrypted security",
      ],
    },
    {
      name: "Smart Keys & Key Fobs",
      description: "Push-to-start and keyless entry systems",
      icon: Shield,
      products: [
        "Push Start Key Fobs",
        "Smart Keys",
        "Proximity Fobs",
        "Keyless Entry Remotes",
        "Multi-Button Remotes",
        "Combination Key/Remote Fobs",
      ],
      features: [
        "Push-button start compatible",
        "Keyless entry function",
        "Trunk/hatch release",
        "Panic button included",
      ],
    },
    {
      name: "High Security Keys",
      description: "Advanced security keys for maximum protection",
      icon: Shield,
      products: [
        "Medeco High Security Keys",
        "Mul-T-Lock Keys",
        "ASSA ABLOY Keys",
        "Restricted Keyway Systems",
        "Patent-Protected Keys",
        "Drill-Resistant Keys",
      ],
      features: [
        "Pick-resistant design",
        "Restricted duplication",
        "Maximum security",
        "Commercial grade",
      ],
    },
    {
      name: "Remote Systems",
      description: "Keyless entry and remote control systems",
      icon: Package,
      products: [
        "Factory Keyless Entry Remotes",
        "Aftermarket Remote Systems",
        "Universal Remotes",
        "Multi-Vehicle Remotes",
        "Remote Head Keys",
        "Flip Key Remotes",
      ],
      features: [
        "Easy programming",
        "Long battery life",
        "Durable construction",
        "Extended range",
      ],
    },
  ];

  const inventory = [
    {
      stat: "95%",
      label: "Keys & Fobs In Stock",
      description: "We carry keys for nearly every vehicle on the road",
    },
    {
      stat: "1000+",
      label: "Different Key Types",
      description: "Comprehensive inventory for all makes and models",
    },
    {
      stat: "50%",
      label: "Less Than Dealer",
      description: "Professional quality at half the dealership cost",
    },
    {
      stat: "24/7",
      label: "Available Service",
      description: "Emergency key replacement anytime",
    },
  ];

  return (
    <>
      <SEO
        title="Automotive Keys & Fobs | 95% In Stock | OEM Keys | Unlock SRQ"
        description="Complete automotive key and fob inventory in North Port & Port Charlotte. OEM keys, transponder keys, smart keys, key fobs. 95% in stock, less than half dealer price. Call (941) 587-5050"
        canonicalUrl="https://srqunlock.com/automotive-products/"
      />

      <div className="min-h-screen flex flex-col">
        {/* TOP BAR */}
        <div className="bg-[#1a3a52] text-white py-2">
          <div className="container flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#7dd3e8] rounded flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
                data-testid="link-facebook"
              >
                <Facebook size={16} className="text-[#1a3a52]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#7dd3e8] rounded flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
                data-testid="link-instagram"
              >
                <Instagram size={16} className="text-[#1a3a52]" />
              </a>
              <a
                href="https://www.yellowpages.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#7dd3e8] rounded flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
                data-testid="link-yellowpages"
              >
                <span className="text-[#1a3a52] font-bold text-sm">YP</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#7dd3e8] rounded flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
                data-testid="link-youtube"
              >
                <Youtube size={16} className="text-[#1a3a52]" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#7dd3e8] rounded flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
                data-testid="link-tiktok"
              >
                <SiTiktok size={16} className="text-[#1a3a52]" />
              </a>
              <a
                href="mailto:info@srqunlock.com"
                className="w-8 h-8 bg-[#7dd3e8] rounded flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
                data-testid="link-email"
              >
                <Mail size={16} className="text-[#1a3a52]" />
              </a>
            </div>
          </div>
        </div>

        {/* HEADER */}
        <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50 shadow-sm">
          <div className="container">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <a href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#7dd3e8] rounded-lg flex items-center justify-center">
                  <Key size={24} className="text-[#1a3a52]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#1a3a52]">
                    Unlock <span className="text-[#7dd3e8]">SRQ</span>
                  </span>
                  <span className="text-xs text-gray-600">LLC</span>
                </div>
              </a>

              <div className="flex flex-col gap-1 text-xs lg:text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#7dd3e8]" />
                  <span className="font-semibold">
                    Phone:{" "}
                    <a
                      href="tel:9415875050"
                      className="text-[#1a3a52] hover:text-[#7dd3e8]"
                    >
                      (941) 587-5050
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#7dd3e8]" />
                  <span className="font-semibold text-[#1a3a52]">24/7 Emergency Service</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] text-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Automotive Keys & Fobs - 95% In Stock
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-[#7dd3e8]">
                OEM Quality Keys at Less Than Half Dealer Price
              </p>
              <p className="text-lg mb-8">
                Complete inventory for nearly every vehicle on the road • Same-day service available
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
                    Call for Pricing: (941) 587-5050
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white text-white hover:bg-white/20"
                  data-testid="button-view-inventory"
                  asChild
                >
                  <a href="#products">View Inventory</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* INVENTORY STATS */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {inventory.map((item, index) => (
                <div key={index} data-testid={`stat-${index}`}>
                  <div className="text-5xl font-bold text-[#1a3a52] mb-2">{item.stat}</div>
                  <div className="text-lg font-semibold text-[#7dd3e8] mb-2">{item.label}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT CATEGORIES */}
        <section id="products" className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">
                Complete Automotive Key & Fob Inventory
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We stock original equipment manufacturer (OEM) keys and fobs for nearly every
                vehicle make and model at less than half the dealer cost.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {productCategories.map((category, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                  data-testid={`card-product-category-${index}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-[#7dd3e8] rounded-lg flex items-center justify-center">
                      <category.icon size={28} className="text-[#1a3a52]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1a3a52]">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-[#1a3a52] mb-2">Available Products:</h4>
                    <ul className="space-y-1.5">
                      {category.products.map((product, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-700"
                          data-testid={`product-${index}-${idx}`}
                        >
                          <CheckCircle size={16} className="text-[#7dd3e8] mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{product}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-[#1a3a52] mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 text-sm text-gray-600"
                          data-testid={`feature-${index}-${idx}`}
                        >
                          <CheckCircle size={14} className="text-[#7dd3e8] flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-12 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-[#1a3a52] mb-10">
              Why Buy From Unlock SRQ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a3a52] mb-2">OEM Quality</h3>
                <p className="text-gray-600">
                  Genuine original equipment manufacturer keys - same quality as the dealership
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Immediate Availability</h3>
                <p className="text-gray-600">
                  95% of keys and fobs in stock - no waiting days or weeks for delivery
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-[#7dd3e8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap size={32} className="text-[#1a3a52]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Expert Programming</h3>
                <p className="text-gray-600">
                  Professional programming with latest technology - done right the first time
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Key or Fob for Your Vehicle?
            </h2>
            <p className="text-xl mb-8 text-[#7dd3e8]">
              Call or Text for Pricing • Most Keys Available Same Day
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
                data-testid="button-cta-services"
                asChild
              >
                <a href="/automotive-services">View Services</a>
              </Button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#1a3a52] text-white py-12">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#7dd3e8]">Contact Us</h3>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <Phone size={18} className="text-[#7dd3e8]" />
                    <a href="tel:9415875050" className="hover:text-[#7dd3e8]">
                      (941) 587-5050
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={18} className="text-[#7dd3e8]" />
                    <a href="mailto:info@srqunlock.com" className="hover:text-[#7dd3e8]">
                      info@srqunlock.com
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <MapPin size={18} className="text-[#7dd3e8] mt-1" />
                    <span>North Port, FL 34291</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-[#7dd3e8]">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="hover:text-[#7dd3e8]">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/automotive-services" className="hover:text-[#7dd3e8]">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/automotive-products" className="hover:text-[#7dd3e8]">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="/about-us" className="hover:text-[#7dd3e8]">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-[#7dd3e8]">Service Areas</h3>
                <ul className="space-y-2 text-sm">
                  <li>North Port, FL</li>
                  <li>Port Charlotte, FL</li>
                  <li>Punta Gorda, FL</li>
                  <li>Venice, FL</li>
                  <li>Sarasota, FL</li>
                  <li>Englewood, FL</li>
                  <li>Bradenton, FL</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-600 pt-6 text-center text-sm">
              <p>© 2025 Unlock SRQ LLC. All rights reserved.</p>
              <p className="mt-2">
                Licensed & Insured | NASTF Certified | 95% of Keys & Fobs In Stock
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
