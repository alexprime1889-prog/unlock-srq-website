import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

export default function Booking() {
  const seoTitle = "Book Appointment - Unlock SRQ LLC | Professional Locksmith Services";
  const seoDescription = "Schedule your locksmith appointment online. Fast, convenient booking with instant confirmation. Available 24/7 for emergency services in Sarasota, North Port, and surrounding areas.";
  const canonicalUrl = "https://srqunlock.com/booking/";
  
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} canonicalUrl={canonicalUrl} />
      <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-[#2C4A5E] hover:text-[#5DCED9] transition-colors">
              <ArrowLeft size={20} />
              <span className="font-semibold">Back to Home</span>
            </a>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Unlock SRQ" className="h-12 w-auto" />
              <span className="text-xl font-bold text-[#2C4A5E]">
                Unlock <span className="text-[#5DCED9]">SRQ</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#2C4A5E] mb-4">
              Schedule Your Appointment
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Book a convenient time for our professional locksmith services. 
              We'll sync with your calendar and send you a confirmation.
            </p>
          </div>

          {/* Calendly Embed */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/your-calendly-username?hide_gdpr_banner=1&primary_color=5dced9"
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#2C4A5E] mb-3">
              How It Works:
            </h3>
            <ol className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#5DCED9]">1.</span>
                <span>Select your preferred date and time from the calendar above</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#5DCED9]">2.</span>
                <span>Fill in your contact information and service details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#5DCED9]">3.</span>
                <span>Receive instant confirmation via email with calendar invite</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#5DCED9]">4.</span>
                <span>Our team will arrive at your location at the scheduled time</span>
              </li>
            </ol>
          </div>

          {/* Emergency Contact */}
          <div className="mt-6 text-center p-6 bg-[#2C4A5E] text-white rounded-lg">
            <p className="text-lg mb-2">Need immediate assistance?</p>
            <p className="text-2xl font-bold mb-3">Call us now: <a href="tel:9415875050" className="text-[#5DCED9] hover:underline">941-587-5050</a></p>
            <p className="text-sm text-white/80">Available 24/7/365 for emergency services</p>
          </div>

          {/* Why Book Online Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#2C4A5E] mb-4">Why Book Online?</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#5DCED9] font-bold">✓</span>
                  <span><strong>Choose Your Time:</strong> Select the most convenient appointment slot that fits your schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5DCED9] font-bold">✓</span>
                  <span><strong>Instant Confirmation:</strong> Receive immediate booking confirmation and calendar invite</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5DCED9] font-bold">✓</span>
                  <span><strong>No Wait Time:</strong> Avoid phone queues and book your appointment in under 2 minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5DCED9] font-bold">✓</span>
                  <span><strong>Easy Rescheduling:</strong> Modify or cancel your appointment anytime through your confirmation email</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#2C4A5E] mb-4">Available Services</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#5DCED9] font-bold">→</span>
                  <span><a href="/automotive-services" className="hover:text-[#5DCED9] underline">Automotive Locksmith Services</a> - Key programming, transponder keys, lockouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5DCED9] font-bold">→</span>
                  <span>Residential Lock Services - Rekeying, installation, smart locks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5DCED9] font-bold">→</span>
                  <span>Commercial Security - Master key systems, access control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5DCED9] font-bold">→</span>
                  <span><a href="/automotive-products" className="hover:text-[#5DCED9] underline">Key Replacement</a> - 95% of automotive keys in stock</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#2C4A5E] mb-4 text-center">We Serve These Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <a href="/locksmith-north-port" className="text-gray-700 hover:text-[#5DCED9] font-semibold">North Port, FL</a>
              <a href="/locksmith-port-charlotte" className="text-gray-700 hover:text-[#5DCED9] font-semibold">Port Charlotte, FL</a>
              <a href="/locksmith-punta-gorda" className="text-gray-700 hover:text-[#5DCED9] font-semibold">Punta Gorda, FL</a>
              <a href="/locksmith-venice-fl" className="text-gray-700 hover:text-[#5DCED9] font-semibold">Venice, FL</a>
              <a href="/locksmith-englewood" className="text-gray-700 hover:text-[#5DCED9] font-semibold">Englewood, FL</a>
              <a href="/locksmith-bradenton" className="text-gray-700 hover:text-[#5DCED9] font-semibold">Bradenton, FL</a>
              <a href="/locksmith-sarasota" className="text-gray-700 hover:text-[#5DCED9] font-semibold">Sarasota, FL</a>
              <a href="/emergency-locksmith-charlotte-county" className="text-gray-700 hover:text-[#5DCED9] font-semibold">Charlotte County</a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#2C4A5E] mb-6 text-center">Booking FAQ</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-[#2C4A5E] mb-2">How far in advance should I book?</h3>
                <p className="text-gray-700">We recommend booking at least 24 hours in advance for non-emergency services. For emergency lockouts, call us directly at (941) 587-5050 for immediate assistance.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-[#2C4A5E] mb-2">What if I need to change my appointment?</h3>
                <p className="text-gray-700">You can reschedule or cancel your appointment using the link in your confirmation email. We request at least 2 hours notice for any changes.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-[#2C4A5E] mb-2">Do you offer same-day appointments?</h3>
                <p className="text-gray-700">Yes! Check the calendar above for available same-day slots. For urgent needs, calling (941) 587-5050 ensures the fastest response.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-[#2C4A5E] mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-700">We accept all major credit cards, cash, and offer <a href="/payment" className="text-[#5DCED9] hover:underline">secure online payment</a>. Payment is collected after service completion.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}

