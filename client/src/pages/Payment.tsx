import { useState } from "react";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { ArrowLeft, CreditCard, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Payment() {
  const seoTitle = "Online Payment - Unlock SRQ LLC | Secure Payment Portal";
  const seoDescription = "Pay securely online for locksmith services. Fast, convenient, and secure payment processing. Accept all major credit cards for emergency locksmith, key programming, and lock installation services.";
  const canonicalUrl = "https://srqunlock.com/payment/";
  
  const [selectedService, setSelectedService] = useState("");
  const [amount, setAmount] = useState("");

  const services = [
    { value: "key-cutting", label: "Key Cutting & Duplication", price: 25 },
    { value: "lock-installation", label: "Lock Installation", price: 150 },
    { value: "car-key-programming", label: "Car Key Programming", price: 200 },
    { value: "emergency-lockout", label: "Emergency Lockout Service", price: 75 },
    { value: "rekey-service", label: "Rekey Service", price: 100 },
    { value: "smart-lock-installation", label: "Smart Lock Installation", price: 250 },
  ];

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    const service = services.find(s => s.value === value);
    if (service) {
      setAmount(service.price.toString());
    }
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Stripe payment processing
    alert("Payment processing will be integrated with Stripe. This is a demo.");
  };

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
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#2C4A5E] mb-4">
              Secure Online Payment
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pay for your locksmith services securely online. All transactions are encrypted and protected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Payment Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="text-[#5DCED9]" size={24} />
                <h2 className="text-2xl font-bold text-[#2C4A5E]">Payment Details</h2>
              </div>

              <form onSubmit={handlePayment} className="space-y-4">
                {/* Service Selection */}
                <div className="space-y-2">
                  <Label htmlFor="service">Select Service</Label>
                  <Select value={selectedService} onValueChange={handleServiceChange}>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Choose a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label} - ${service.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Amount */}
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount ($)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>

                {/* Customer Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(941) 587-5050"
                    required
                  />
                </div>

                {/* Service Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Service Description (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide any additional details about the service..."
                    rows={3}
                  />
                </div>

                {/* Stripe Payment Element Placeholder */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <CreditCard className="mx-auto mb-2 text-gray-400" size={32} />
                  <p className="text-sm text-gray-500">
                    Stripe payment form will be integrated here
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Secure card processing powered by Stripe
                  </p>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-[#5DCED9] hover:bg-[#4ABDC8] text-[#2C4A5E] font-semibold py-6 text-lg"
                >
                  <Lock className="mr-2" size={20} />
                  Pay Securely
                </Button>
              </form>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-6">
              {/* Security Notice */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Lock className="text-green-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-green-900 mb-2">
                      Secure Payment Processing
                    </h3>
                    <p className="text-sm text-green-800">
                      All payments are processed securely through Stripe. We never store your credit card information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing Information */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-[#2C4A5E] mb-4">
                  Service Pricing
                </h3>
                <div className="space-y-3">
                  {services.map((service) => (
                    <div key={service.value} className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0">
                      <span className="text-sm text-gray-700">{service.label}</span>
                      <span className="font-semibold text-[#2C4A5E]">${service.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  * Prices may vary based on specific requirements. Final quote provided after assessment.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-[#2C4A5E] text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Need Help?
                </h3>
                <p className="text-sm text-white/80 mb-3">
                  If you have questions about payment or prefer to pay in person, contact us:
                </p>
                <p className="text-lg font-bold text-[#5DCED9]">
                  <a href="tel:9415875050" className="hover:underline">941-587-5050</a>
                </p>
                <p className="text-sm text-white/80 mt-2">
                  Available 24/7/365
                </p>
              </div>
            </div>
          </div>

          {/* Payment FAQ */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#2C4A5E] mb-6 text-center">Payment FAQ</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-[#2C4A5E] mb-2">When should I make payment?</h3>
                <p className="text-sm text-gray-700">Payment is collected after service completion. You can pay immediately using this portal or via phone after our technician completes the work.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-[#2C4A5E] mb-2">What payment methods are accepted?</h3>
                <p className="text-sm text-gray-700">We accept all major credit cards (Visa, Mastercard, Amex, Discover), cash, and digital payments. All online payments processed through Stripe.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-[#2C4A5E] mb-2">Is online payment secure?</h3>
                <p className="text-sm text-gray-700">Yes! We use Stripe, a PCI-compliant payment processor trusted by millions. Your card information is encrypted and never stored on our servers.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-[#2C4A5E] mb-2">Do you offer payment plans?</h3>
                <p className="text-sm text-gray-700">For larger commercial projects, we can discuss payment arrangements. Contact us at (941) 587-5050 to discuss your specific needs.</p>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#2C4A5E] mb-6 text-center">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-[#2C4A5E] mb-3">Automotive Services</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <a href="/automotive-services" className="hover:text-[#5DCED9] underline">Key Programming</a></li>
                  <li>• <a href="/automotive-services" className="hover:text-[#5DCED9] underline">Emergency Lockouts</a></li>
                  <li>• <a href="/automotive-products" className="hover:text-[#5DCED9] underline">Key Replacement</a></li>
                  <li>• Transponder Keys</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#2C4A5E] mb-3">Residential Services</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Lock Installation</li>
                  <li>• Rekey Services</li>
                  <li>• Smart Lock Setup</li>
                  <li>• Home Lockouts</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#2C4A5E] mb-3">Commercial Services</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Master Key Systems</li>
                  <li>• Access Control</li>
                  <li>• High-Security Locks</li>
                  <li>• Emergency Service</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a href="/" className="text-[#5DCED9] hover:underline font-semibold">View All Services →</a>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-12 bg-gradient-to-br from-[#2C4A5E] to-[#1a3a52] rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 text-center">Service Areas in Southwest Florida</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-6">
              <a href="/locksmith-north-port" className="hover:text-[#5DCED9] font-semibold transition-colors">North Port</a>
              <a href="/locksmith-port-charlotte" className="hover:text-[#5DCED9] font-semibold transition-colors">Port Charlotte</a>
              <a href="/locksmith-punta-gorda" className="hover:text-[#5DCED9] font-semibold transition-colors">Punta Gorda</a>
              <a href="/locksmith-venice-fl" className="hover:text-[#5DCED9] font-semibold transition-colors">Venice</a>
              <a href="/locksmith-englewood" className="hover:text-[#5DCED9] font-semibold transition-colors">Englewood</a>
              <a href="/locksmith-bradenton" className="hover:text-[#5DCED9] font-semibold transition-colors">Bradenton</a>
              <a href="/locksmith-sarasota" className="hover:text-[#5DCED9] font-semibold transition-colors">Sarasota</a>
              <a href="/emergency-locksmith-charlotte-county" className="hover:text-[#5DCED9] font-semibold transition-colors">Charlotte County</a>
            </div>
            <p className="text-center text-white/80 mt-6">Proudly serving Charlotte County and Sarasota County, Florida</p>
          </div>

          {/* About Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <a href="/about-us" className="text-[#5DCED9] hover:underline font-semibold">Learn more about Unlock SRQ →</a>
            </p>
            <p className="text-gray-600 mt-2">
              <a href="/booking" className="text-[#5DCED9] hover:underline">Schedule an Appointment</a> | <a href="/privacy-policy" className="text-gray-500 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}

