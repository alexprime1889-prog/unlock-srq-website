"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock, DollarSign, CheckCircle } from "lucide-react";

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    billingZip: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payment submitted:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-4">
            Secure Online Payment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pay for your locksmith services quickly and securely. We accept all major credit cards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Payment Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="text-[#7dd3e8]" size={32} />
              <h2 className="text-2xl font-bold text-[#1a3a52]">Payment Details</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-[#1a3a52] mb-2 block font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="John Doe"
                  className="bg-gray-50"
                  required
                  data-testid="input-name"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-[#1a3a52] mb-2 block font-semibold">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="john@example.com"
                  className="bg-gray-50"
                  required
                  data-testid="input-email"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Receipt will be sent to this email
                </p>
              </div>

              {/* Amount */}
              <div>
                <Label htmlFor="amount" className="text-[#1a3a52] mb-2 block font-semibold">
                  Payment Amount *
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.amount}
                    onChange={(e) => handleChange("amount", e.target.value)}
                    placeholder="0.00"
                    className="bg-gray-50 pl-7"
                    required
                    data-testid="input-amount"
                  />
                </div>
              </div>

              {/* Card Number */}
              <div>
                <Label htmlFor="cardNumber" className="text-[#1a3a52] mb-2 block font-semibold">
                  Card Number *
                </Label>
                <Input
                  id="cardNumber"
                  type="text"
                  value={formData.cardNumber}
                  onChange={(e) => handleChange("cardNumber", e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="bg-gray-50"
                  required
                  data-testid="input-card-number"
                />
              </div>

              {/* Expiry and CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry" className="text-[#1a3a52] mb-2 block font-semibold">
                    Expiry Date *
                  </Label>
                  <Input
                    id="expiry"
                    type="text"
                    value={formData.expiry}
                    onChange={(e) => handleChange("expiry", e.target.value)}
                    placeholder="MM/YY"
                    maxLength={5}
                    className="bg-gray-50"
                    required
                    data-testid="input-expiry"
                  />
                </div>
                <div>
                  <Label htmlFor="cvv" className="text-[#1a3a52] mb-2 block font-semibold">
                    CVV *
                  </Label>
                  <Input
                    id="cvv"
                    type="text"
                    value={formData.cvv}
                    onChange={(e) => handleChange("cvv", e.target.value)}
                    placeholder="123"
                    maxLength={4}
                    className="bg-gray-50"
                    required
                    data-testid="input-cvv"
                  />
                </div>
              </div>

              {/* Billing ZIP */}
              <div>
                <Label htmlFor="billingZip" className="text-[#1a3a52] mb-2 block font-semibold">
                  Billing ZIP Code *
                </Label>
                <Input
                  id="billingZip"
                  type="text"
                  value={formData.billingZip}
                  onChange={(e) => handleChange("billingZip", e.target.value)}
                  placeholder="34291"
                  maxLength={10}
                  className="bg-gray-50"
                  required
                  data-testid="input-billing-zip"
                />
              </div>

              {/* Security Notice */}
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <Lock className="text-[#7dd3e8] flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-gray-600">
                  <strong className="text-[#1a3a52]">Secure Payment:</strong> Your payment information is encrypted and secure. We do not store your card details.
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-bold py-6 text-lg"
                data-testid="button-submit-payment"
              >
                <Lock className="mr-2" size={20} />
                Process Secure Payment
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting payment, you agree to our terms of service
              </p>
            </form>
          </div>

          {/* Right: Info & Trust Elements */}
          <div className="space-y-6">
            {/* Why Pay Online */}
            <div className="bg-gradient-to-br from-[#1a3a52] to-[#2c4a5f] text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Why Pay Online?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#7dd3e8] flex-shrink-0 mt-0.5" size={20} />
                  <span>Fast & Convenient - Pay from anywhere, anytime</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#7dd3e8] flex-shrink-0 mt-0.5" size={20} />
                  <span>Secure Encryption - Bank-level security for all transactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#7dd3e8] flex-shrink-0 mt-0.5" size={20} />
                  <span>Instant Receipt - Emailed confirmation immediately</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#7dd3e8] flex-shrink-0 mt-0.5" size={20} />
                  <span>Multiple Cards - Accept Visa, Mastercard, Amex, Discover</span>
                </li>
              </ul>
            </div>

            {/* Accepted Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#1a3a52] mb-4">We Accept</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center aspect-[3/2]">
                  <span className="text-xs font-bold text-gray-600">VISA</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center aspect-[3/2]">
                  <span className="text-xs font-bold text-gray-600">MC</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center aspect-[3/2]">
                  <span className="text-xs font-bold text-gray-600">AMEX</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center aspect-[3/2]">
                  <span className="text-xs font-bold text-gray-600">DISC</span>
                </div>
              </div>
            </div>

            {/* Other Payment Methods */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#1a3a52] mb-4">Other Payment Options</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <DollarSign className="text-[#7dd3e8] flex-shrink-0 mt-0.5" size={18} />
                  <span>Cash (on-site)</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="text-[#7dd3e8] flex-shrink-0 mt-0.5" size={18} />
                  <span>Zelle</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="text-[#7dd3e8] flex-shrink-0 mt-0.5" size={18} />
                  <span>Venmo</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="text-[#7dd3e8] flex-shrink-0 mt-0.5" size={18} />
                  <span>PayPal</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="text-[#7dd3e8] flex-shrink-0 mt-0.5" size={18} />
                  <span>Check</span>
                </li>
              </ul>
            </div>

            {/* Contact for Questions */}
            <div className="bg-gradient-to-br from-[#7dd3e8] to-[#6bc3d8] rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#1a3a52] mb-3">Questions About Your Bill?</h3>
              <p className="text-[#1a3a52] mb-4">
                Contact us anytime for billing questions or invoice details.
              </p>
              <a href="tel:9415875050">
                <Button 
                  size="lg"
                  className="w-full bg-[#1a3a52] hover:bg-[#2c4a5f] text-white font-bold"
                  data-testid="button-call-billing"
                >
                  Call (941) 587-5050
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-4 py-2 bg-[#7dd3e8] text-[#1a3a52] text-sm font-bold rounded-lg">
                  SSL Encrypted
                </span>
                <span className="px-4 py-2 bg-[#7dd3e8] text-[#1a3a52] text-sm font-bold rounded-lg">
                  PCI Compliant
                </span>
                <span className="px-4 py-2 bg-[#7dd3e8] text-[#1a3a52] text-sm font-bold rounded-lg">
                  Licensed Business
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
