import { useState } from "react";
import { Link } from "wouter";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  Clock,
  ChevronDown,
  Key,
  Menu,
  X,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Header() {
  const [showLocations, setShowLocations] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileLocations, setShowMobileLocations] = useState(false);

  // Close dropdown on ESC key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowLocations(false);
    }
  };

  return (
    <>
      {/* TOP BAR - Social Media */}
      <div className="bg-[#1a3a52] text-white py-1">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-1">
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

      {/* HEADER - Sticky */}
      <header className="bg-white border-b border-gray-200 py-2 sticky top-0 z-50 shadow-sm">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
              <div className="w-12 h-12 bg-[#7dd3e8] rounded-lg flex items-center justify-center">
                <Key size={24} className="text-[#1a3a52]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1a3a52]">
                  Unlock <span className="text-[#7dd3e8]">SRQ</span>
                </span>
                <span className="text-xs text-gray-600">LLC</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex gap-6 text-sm font-semibold items-center">
              <Link
                href="/"
                className="text-[#1a3a52] hover:text-[#7dd3e8] transition-colors"
                data-testid="nav-home"
              >
                HOME
              </Link>
              <Link
                href="/automotive-services"
                className="text-[#1a3a52] hover:text-[#7dd3e8] transition-colors"
                data-testid="nav-services"
              >
                SERVICES
              </Link>
              <Link
                href="/automotive-products"
                className="text-[#1a3a52] hover:text-[#7dd3e8] transition-colors"
                data-testid="nav-products"
              >
                PRODUCTS
              </Link>

              {/* Locations Dropdown */}
              <div
                className="relative"
                onKeyDown={handleKeyDown}
              >
                <button
                  className="text-[#1a3a52] hover:text-[#7dd3e8] transition-colors flex items-center gap-1"
                  data-testid="nav-locations"
                  onClick={() => setShowLocations(!showLocations)}
                  onMouseEnter={() => setShowLocations(true)}
                  aria-expanded={showLocations}
                  aria-haspopup="true"
                >
                  LOCATIONS <ChevronDown size={16} />
                </button>
                {showLocations && (
                  <div 
                    className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl py-2 w-64 z-50"
                    onMouseLeave={() => setShowLocations(false)}
                  >
                    <Link
                      href="/locksmith-north-port"
                      className="block px-4 py-2 text-sm text-[#1a3a52] hover:bg-[#7dd3e8] hover:text-white transition-colors"
                      data-testid="loc-north-port"
                    >
                      North Port, FL
                    </Link>
                    <Link
                      href="/locksmith-port-charlotte"
                      className="block px-4 py-2 text-sm text-[#1a3a52] hover:bg-[#7dd3e8] hover:text-white transition-colors"
                      data-testid="loc-port-charlotte"
                    >
                      Port Charlotte, FL
                    </Link>
                    <Link
                      href="/locksmith-sarasota"
                      className="block px-4 py-2 text-sm text-[#1a3a52] hover:bg-[#7dd3e8] hover:text-white transition-colors"
                      data-testid="loc-sarasota"
                    >
                      Sarasota, FL
                    </Link>
                    <Link
                      href="/locksmith-punta-gorda"
                      className="block px-4 py-2 text-sm text-[#1a3a52] hover:bg-[#7dd3e8] hover:text-white transition-colors"
                      data-testid="loc-punta-gorda"
                    >
                      Punta Gorda, FL
                    </Link>
                    <Link
                      href="/locksmith-venice-fl"
                      className="block px-4 py-2 text-sm text-[#1a3a52] hover:bg-[#7dd3e8] hover:text-white transition-colors"
                      data-testid="loc-venice"
                    >
                      Venice, FL
                    </Link>
                    <Link
                      href="/locksmith-englewood"
                      className="block px-4 py-2 text-sm text-[#1a3a52] hover:bg-[#7dd3e8] hover:text-white transition-colors"
                      data-testid="loc-englewood"
                    >
                      Englewood, FL
                    </Link>
                    <Link
                      href="/locksmith-bradenton"
                      className="block px-4 py-2 text-sm text-[#1a3a52] hover:bg-[#7dd3e8] hover:text-white transition-colors"
                      data-testid="loc-bradenton"
                    >
                      Bradenton, FL
                    </Link>
                    <Link
                      href="/emergency-locksmith-charlotte-county"
                      className="block px-4 py-2 text-sm text-[#1a3a52] hover:bg-[#7dd3e8] hover:text-white transition-colors border-t border-gray-200 mt-1 pt-3"
                      data-testid="loc-charlotte-county"
                    >
                      Emergency - Charlotte County
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about-us"
                className="text-[#1a3a52] hover:text-[#7dd3e8] transition-colors"
                data-testid="nav-about"
              >
                ABOUT US
              </Link>
            </nav>

            {/* Contact Info - Hidden on Mobile */}
            <div className="hidden lg:flex flex-col gap-1 text-xs lg:text-sm">
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
                <Mail size={14} className="text-[#7dd3e8]" />
                <span className="font-semibold">
                  Email:{" "}
                  <a
                    href="mailto:info@srqunlock.com"
                    className="text-[#1a3a52] hover:text-[#7dd3e8]"
                  >
                    info@srqunlock.com
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#7dd3e8]" />
                <span className="font-semibold text-[#7dd3e8]">
                  *Emergency: 24/7/365*
                </span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#1a3a52] hover:text-[#7dd3e8] transition-colors"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              data-testid="button-mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {showMobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {showMobileMenu && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-50">
              <nav className="container py-6 space-y-4">
                <Link
                  href="/"
                  className="block text-[#1a3a52] hover:text-[#7dd3e8] font-semibold text-lg py-2"
                  data-testid="mobile-nav-home"
                  onClick={() => setShowMobileMenu(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/automotive-services"
                  className="block text-[#1a3a52] hover:text-[#7dd3e8] font-semibold text-lg py-2"
                  data-testid="mobile-nav-services"
                  onClick={() => setShowMobileMenu(false)}
                >
                  SERVICES
                </Link>
                <Link
                  href="/automotive-products"
                  className="block text-[#1a3a52] hover:text-[#7dd3e8] font-semibold text-lg py-2"
                  data-testid="mobile-nav-products"
                  onClick={() => setShowMobileMenu(false)}
                >
                  PRODUCTS
                </Link>

                {/* Mobile Locations Expandable */}
                <div>
                  <button
                    className="w-full text-left text-[#1a3a52] hover:text-[#7dd3e8] font-semibold text-lg py-2 flex items-center justify-between"
                    data-testid="mobile-nav-locations"
                    onClick={() => setShowMobileLocations(!showMobileLocations)}
                  >
                    LOCATIONS
                    <ChevronDown
                      size={20}
                      className={`transform transition-transform ${
                        showMobileLocations ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {showMobileLocations && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#7dd3e8]">
                      <Link
                        href="/locksmith-north-port"
                        className="block text-[#1a3a52] hover:text-[#7dd3e8] py-2"
                        data-testid="mobile-loc-north-port"
                        onClick={() => {
                          setShowMobileMenu(false);
                          setShowMobileLocations(false);
                        }}
                      >
                        North Port, FL
                      </Link>
                      <Link
                        href="/locksmith-port-charlotte"
                        className="block text-[#1a3a52] hover:text-[#7dd3e8] py-2"
                        data-testid="mobile-loc-port-charlotte"
                        onClick={() => {
                          setShowMobileMenu(false);
                          setShowMobileLocations(false);
                        }}
                      >
                        Port Charlotte, FL
                      </Link>
                      <Link
                        href="/locksmith-sarasota"
                        className="block text-[#1a3a52] hover:text-[#7dd3e8] py-2"
                        data-testid="mobile-loc-sarasota"
                        onClick={() => {
                          setShowMobileMenu(false);
                          setShowMobileLocations(false);
                        }}
                      >
                        Sarasota, FL
                      </Link>
                      <Link
                        href="/locksmith-punta-gorda"
                        className="block text-[#1a3a52] hover:text-[#7dd3e8] py-2"
                        data-testid="mobile-loc-punta-gorda"
                        onClick={() => {
                          setShowMobileMenu(false);
                          setShowMobileLocations(false);
                        }}
                      >
                        Punta Gorda, FL
                      </Link>
                      <Link
                        href="/locksmith-venice-fl"
                        className="block text-[#1a3a52] hover:text-[#7dd3e8] py-2"
                        data-testid="mobile-loc-venice"
                        onClick={() => {
                          setShowMobileMenu(false);
                          setShowMobileLocations(false);
                        }}
                      >
                        Venice, FL
                      </Link>
                      <Link
                        href="/locksmith-englewood"
                        className="block text-[#1a3a52] hover:text-[#7dd3e8] py-2"
                        data-testid="mobile-loc-englewood"
                        onClick={() => {
                          setShowMobileMenu(false);
                          setShowMobileLocations(false);
                        }}
                      >
                        Englewood, FL
                      </Link>
                      <Link
                        href="/locksmith-bradenton"
                        className="block text-[#1a3a52] hover:text-[#7dd3e8] py-2"
                        data-testid="mobile-loc-bradenton"
                        onClick={() => {
                          setShowMobileMenu(false);
                          setShowMobileLocations(false);
                        }}
                      >
                        Bradenton, FL
                      </Link>
                      <Link
                        href="/emergency-locksmith-charlotte-county"
                        className="block text-[#1a3a52] hover:text-[#7dd3e8] py-2 border-t border-gray-200 pt-3 mt-2"
                        data-testid="mobile-loc-charlotte-county"
                        onClick={() => {
                          setShowMobileMenu(false);
                          setShowMobileLocations(false);
                        }}
                      >
                        Emergency - Charlotte County
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/about-us"
                  className="block text-[#1a3a52] hover:text-[#7dd3e8] font-semibold text-lg py-2"
                  data-testid="mobile-nav-about"
                  onClick={() => setShowMobileMenu(false)}
                >
                  ABOUT US
                </Link>

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <a
                    href="tel:9415875050"
                    className="flex items-center gap-3 text-[#1a3a52] hover:text-[#7dd3e8] font-semibold"
                    data-testid="mobile-phone"
                  >
                    <Phone size={18} className="text-[#7dd3e8]" />
                    <span>(941) 587-5050</span>
                  </a>
                  <a
                    href="mailto:info@srqunlock.com"
                    className="flex items-center gap-3 text-[#1a3a52] hover:text-[#7dd3e8] font-semibold"
                    data-testid="mobile-email"
                  >
                    <Mail size={18} className="text-[#7dd3e8]" />
                    <span>info@srqunlock.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-[#7dd3e8] font-semibold">
                    <Clock size={18} />
                    <span>Emergency: 24/7/365</span>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
