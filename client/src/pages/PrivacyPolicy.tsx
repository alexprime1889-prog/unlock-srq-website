import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <>
      <SEO 
        title="Privacy Policy | Unlock SRQ LLC | North Port FL Locksmith"
        description="Privacy Policy for Unlock SRQ LLC. Learn how we collect, use, and protect your personal information. Licensed locksmith serving North Port, Port Charlotte, and Charlotte County Florida."
        canonicalUrl="https://srqunlock.com/privacy-policy/"
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        {/* HERO SECTION */}
        <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-[#1a3a52] via-purple-900 to-purple-700">
          <div className="container relative z-10 py-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#7dd3e8] rounded-full flex items-center justify-center">
                <Shield size={40} className="text-[#1a3a52]" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/95">
              Your privacy and security are our top priorities
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-20 bg-white">
          <div className="container max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Unlock SRQ LLC respects your privacy. This policy explains how we collect, use, and protect your personal information when you use our locksmith services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-6 flex items-center gap-3">
                <Lock className="text-[#7dd3e8]" size={32} />
                Information We Collect
              </h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#7dd3e8] font-bold mt-1">•</span>
                    <span>Contact information (name, phone, email, address)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7dd3e8] font-bold mt-1">•</span>
                    <span>Service location and details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7dd3e8] font-bold mt-1">•</span>
                    <span>Payment information</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
                How We Use Your Information
              </h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <p className="text-gray-700 mb-4">We use this information to:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#7dd3e8] font-bold mt-1">•</span>
                    <span>Provide locksmith services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7dd3e8] font-bold mt-1">•</span>
                    <span>Schedule appointments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7dd3e8] font-bold mt-1">•</span>
                    <span>Process payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7dd3e8] font-bold mt-1">•</span>
                    <span>Send service updates</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What We DO NOT Do */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
                What We DO NOT Do
              </h2>
              <div className="bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] rounded-xl p-8 text-white">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#7dd3e8] font-bold text-xl mt-0.5">✗</span>
                    <span>Sell your information to third parties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7dd3e8] font-bold text-xl mt-0.5">✗</span>
                    <span>Share your data without consent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7dd3e8] font-bold text-xl mt-0.5">✗</span>
                    <span>Send spam or marketing emails (unless you opt-in)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
                Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your information is stored securely and only accessible by authorized personnel. We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-[#7dd3e8]/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#1a3a52] mb-4 flex items-center gap-3">
                <Mail className="text-[#7dd3e8]" size={28} />
                Questions About Privacy?
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions or concerns about our privacy policy, please contact us:
              </p>
              <a 
                href="mailto:info@srqunlock.com"
                className="text-[#1a3a52] font-semibold hover:text-[#7dd3e8] transition-colors"
                data-testid="link-privacy-email"
              >
                info@srqunlock.com
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
