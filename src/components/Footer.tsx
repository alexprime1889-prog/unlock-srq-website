"use client";

import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Car,
  Key,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#344c5a] text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#7dd3e8] rounded-lg flex items-center justify-center">
                <Key size={20} className="text-[#1a3a52]" />
              </div>
              <span className="text-xl font-bold">
                Unlock <span className="text-[#7dd3e8]">SRQ</span> LLC
              </span>
            </div>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Professional locksmith services available 24/7 for all your
              security needs.
            </p>
            <p className="text-white/60 text-sm">Owner: Maksim Yepikhin</p>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#7dd3e8]" />
                <a href="tel:9415875050" className="hover:text-[#7dd3e8]" data-testid="link-phone-footer">
                  (941) 587-5050
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#7dd3e8]" />
                <a
                  href="mailto:info@srqunlock.com"
                  className="hover:text-[#7dd3e8]"
                  data-testid="link-email-footer-contact"
                >
                  info@srqunlock.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#7dd3e8]" />
                <span>North Port, FL 34291</span>
              </div>
              <div className="flex items-center gap-2">
                <Car size={16} className="text-[#7dd3e8]" />
                <span className="font-semibold">
                  Mobile Service - We Come to You!
                </span>
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
            <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
              <div>
                <p className="font-semibold text-[#7dd3e8] mb-2">
                  Sarasota County:
                </p>
                <ul className="space-y-1">
                  <li>• North Port</li>
                  <li>• Venice</li>
                  <li>• South Sarasota</li>
                  <li>• Nokomis</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#7dd3e8] mb-2">
                  Charlotte County:
                </p>
                <ul className="space-y-1">
                  <li>• Port Charlotte</li>
                  <li>• Punta Gorda</li>
                  <li>• Englewood</li>
                  <li>• Rotonda West</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8 pb-8 border-b border-white/20">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
            data-testid="link-facebook-footer"
          >
            <Facebook size={20} className="text-[#1a3a52]" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
            data-testid="link-instagram-footer"
          >
            <Instagram size={20} className="text-[#1a3a52]" />
          </a>
          <a
            href="https://www.yellowpages.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
            data-testid="link-yellowpages-footer"
          >
            <span className="text-[#1a3a52] font-bold">YP</span>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
            data-testid="link-youtube-footer"
          >
            <Youtube size={20} className="text-[#1a3a52]" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
            data-testid="link-tiktok-footer"
          >
            <SiTiktok size={20} className="text-[#1a3a52]" />
          </a>
          <a
            href="mailto:info@srqunlock.com"
            className="w-10 h-10 bg-[#7dd3e8] rounded-full flex items-center justify-center hover:bg-[#6bc3d8] transition-colors"
            data-testid="link-email-footer"
          >
            <Mail size={20} className="text-[#1a3a52]" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Unlock SRQ LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
