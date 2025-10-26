import { useState } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  Clock,
  ChevronDown,
  Key,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Header() {
  const [showLocations, setShowLocations] = useState(false);

  return (
    <>
      {/* TOP BAR - Social Media */}
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

      {/* HEADER - Sticky */}
      <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50 shadow-sm">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3" data-testid="link-logo">
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

            {/* Navigation */}
            <nav className="hidden lg:flex gap-6 text-sm font-semibold items-center">
              <a
                href="/"
                className="text-[#1a3a52] hover:text-[#7dd3e8] transition-colors"
                data-testid="nav-home"
              >
                HOME
              </a>
              <a
                href="/automotive-services"
                className="text-[#1a3a52] hover:text-[#7dd3e8] transition-colors"
                data-testid="nav-services"
              >
                SERVICES
              </a>
              <a
                href="/automotive-products"
                className="text-[#1a3a52] hover:text-[#7dd3e8] transition-colors"
                data-testid="nav-products"
              >
                PRODUCTS
              </a>

              {/* Locations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowLocations(true)}
                onMouseLeave={() => setShowLocations(false)}
              >
                <button
                  className="text-[#1a3a52] hover:text-[#7dd3e8] transition-colors flex items-center gap-1"
                  data-testid="nav-locations"
                >
                  LOCATIONS <ChevronDown size={16} />
                </button>
                {showLocations && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl py-2 w-64 z-50">
                    <a
                      href="/locksmith-north-port"
                      className="block px-4 py-2 text-sm text-[#1a3a52] hover:bg-[#7dd3e8] hover:text-white transition-colors"
                      data-testid="loc-north-port"
                    >
                      North Port, FL
                    </a>
                    <a
                      href="/locksmith-port-charlotte"
                      className="block px-4 py-2 text-sm text-[#1a3a52] hover:bg-[#7dd3e8] hover:text-white transition-colors"
                      data-testid="loc-port-charlotte"
                    >
                      Port Charlotte, FL
                    </a>
                    <a
                      href="/locksmith-sarasota"
                      className="block px-4 py-2 text-sm text-[#1a3a52] hover:bg-[#7dd3e8] hover:text-white transition-colors"
                      data-testid="loc-sarasota"
                    >
                      Sarasota, FL
                    </a>
                    <a
                      href="/locksmith-punta-gorda"
                      className="block px-4 py-2 text-sm text-[#1a3a52] hover:bg-[#7dd3e8] hover:text-white transition-colors"
                      data-testid="loc-punta-gorda"
                    >
                      Punta Gorda, FL
                    </a>
                    <a
                      href="/locksmith-venice-fl"
                      className="block px-4 py-2 text-sm text-[#1a3a52] hover:bg-[#7dd3e8] hover:text-white transition-colors"
                      data-testid="loc-venice"
                    >
                      Venice, FL
                    </a>
                    <a
                      href="/locksmith-englewood"
                      className="block px-4 py-2 text-sm text-[#1a3a52] hover:bg-[#7dd3e8] hover:text-white transition-colors"
                      data-testid="loc-englewood"
                    >
                      Englewood, FL
                    </a>
                    <a
                      href="/locksmith-bradenton"
                      className="block px-4 py-2 text-sm text-[#1a3a52] hover:bg-[#7dd3e8] hover:text-white transition-colors"
                      data-testid="loc-bradenton"
                    >
                      Bradenton, FL
                    </a>
                    <a
                      href="/emergency-locksmith-charlotte-county"
                      className="block px-4 py-2 text-sm text-[#1a3a52] hover:bg-[#7dd3e8] hover:text-white transition-colors border-t border-gray-200 mt-1 pt-3"
                      data-testid="loc-charlotte-county"
                    >
                      Emergency - Charlotte County
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/about-us"
                className="text-[#1a3a52] hover:text-[#7dd3e8] transition-colors"
                data-testid="nav-about"
              >
                ABOUT US
              </a>
            </nav>

            {/* Contact Info */}
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
          </div>
        </div>
      </header>
    </>
  );
}
