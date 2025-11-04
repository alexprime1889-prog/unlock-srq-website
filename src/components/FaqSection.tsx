"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
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
                <span>What areas do you service?</span>
                <ChevronDown className={`transform transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 1 && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  We serve all of Sarasota and Charlotte Counties including North Port, Port Charlotte, Punta Gorda, Venice, and Englewood. Average response time is 15-20 minutes.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full px-6 py-4 text-left font-semibold text-[#1a3a52] hover:bg-gray-50 flex justify-between items-center"
              >
                <span>Are you available 24/7?</span>
                <ChevronDown className={`transform transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 2 && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  Yes! We provide 24/7 emergency locksmith services, 365 days a year including holidays.
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full px-6 py-4 text-left font-semibold text-[#1a3a52] hover:bg-gray-50 flex justify-between items-center"
              >
                <span>Are you licensed and insured?</span>
                <ChevronDown className={`transform transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 3 && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  Absolutely! Unlock SRQ is fully licensed, bonded, and insured. We carry $2M liability insurance for your protection.
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* FAQ 4 */}
            <div className="bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full px-6 py-4 text-left font-semibold text-[#1a3a52] hover:bg-gray-50 flex justify-between items-center"
              >
                <span>Do you offer warranties?</span>
                <ChevronDown className={`transform transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 4 && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  Yes! 90-day warranty on all labor, 1-year warranty on parts. Lifetime warranty available on high-security locks.
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(5)}
                className="w-full px-6 py-4 text-left font-semibold text-[#1a3a52] hover:bg-gray-50 flex justify-between items-center"
              >
                <span>What payment methods do you accept?</span>
                <ChevronDown className={`transform transition-transform ${openFaq === 5 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 5 && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  We accept cash, all major credit cards, Zelle, Venmo, PayPal, and checks. No hidden fees ever!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
