import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

export default function Booking() {
  const seoTitle = "Book Appointment - Unlock SRQ LLC | Professional Locksmith Services";
  const seoDescription = "Schedule your locksmith appointment online. Fast, convenient booking with instant confirmation. Available 24/7 for emergency services in Sarasota, North Port, and surrounding areas.";
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
      <SEO title={seoTitle} description={seoDescription} />
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
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2C4A5E] text-white py-8">
        <div className="container text-center">
          <p className="text-white/80">
            &copy; {new Date().getFullYear()} Unlock SRQ LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}

