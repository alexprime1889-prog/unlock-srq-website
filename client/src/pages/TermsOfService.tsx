import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Shield, Phone } from "lucide-react";

export default function TermsOfService() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <>
      <SEO 
        title="Terms of Service | Unlock SRQ LLC | North Port FL Locksmith"
        description="Terms of Service for Unlock SRQ LLC. Read our service terms, warranty information, and policies. Licensed locksmith serving North Port, Port Charlotte, and Charlotte County Florida."
        canonicalUrl="https://srqunlock.com/terms-of-service/"
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        {/* HERO SECTION */}
        <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-[#1a3a52] via-purple-900 to-purple-700">
          <div className="container relative z-10 py-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center">
                <FileText size={40} className="text-[#1a3a52]" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-white/95">
              Please review our service terms and conditions
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-20 bg-white">
          <div className="container max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                By using Unlock SRQ LLC services, you agree to the following terms and conditions:
              </p>
            </div>

            {/* Terms List */}
            <div className="space-y-8 mb-12">
              
              {/* Payment */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4">
                  1. Payment
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Services must be paid upon completion. We accept cash, all major credit cards, and digital payment methods including Zelle, Venmo, and PayPal.
                </p>
              </div>

              {/* Cancellation */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4">
                  2. Cancellation & Rescheduling
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To cancel or reschedule an appointment, please call us as soon as possible:
                </p>
                <a 
                  href="tel:9415875050"
                  className="inline-flex items-center gap-2 text-[#1a3a52] font-semibold hover:text-[#7dd3e8] transition-colors"
                  data-testid="link-terms-phone"
                >
                  <Phone size={20} />
                  (941) 587-5050
                </a>
              </div>

              {/* Verification */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4">
                  3. Verification
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Valid identification may be required for lockout services to verify property ownership or authorization. This is for your security and protection.
                </p>
              </div>

              {/* Warranty */}
              <div className="bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Shield className="text-[#7dd3e8]" size={28} />
                  4. Warranty
                </h2>
                <p className="leading-relaxed">
                  We provide a 90-day warranty on all workmanship. If you experience any issues with our service within 90 days, contact us for a free repair or adjustment.
                </p>
              </div>

              {/* Liability */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4">
                  5. Liability & Insurance
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Unlock SRQ LLC is fully licensed, bonded, and insured with $2M liability coverage for your protection. We maintain the highest professional standards and comply with all Florida state regulations.
                </p>
              </div>

            </div>

            {/* Additional Information */}
            <div className="bg-[#7dd3e8]/10 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-[#1a3a52] mb-4">
                Important Notes
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3e8] font-bold mt-1">•</span>
                  <span>Emergency services subject to availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3e8] font-bold mt-1">•</span>
                  <span>Prices subject to change based on service complexity and location</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7dd3e8] font-bold mt-1">•</span>
                  <span>Free quotes provided before any work begins</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-[#7dd3e8] to-[#6bc3d8] rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#1a3a52] mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-[#1a3a52] mb-4">
                If you have any questions about our terms of service, please contact us:
              </p>
              <a 
                href="tel:9415875050"
                className="inline-flex items-center gap-2 text-[#1a3a52] font-bold text-lg hover:opacity-80 transition-opacity"
                data-testid="link-terms-call"
              >
                <Phone size={24} />
                Call (941) 587-5050
              </a>
            </div>

            {/* Last Updated */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Last updated: {currentDate}
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
