"use client";

import { useState } from "react";
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
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    address: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
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
            Book Your Locksmith Appointment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule professional locksmith service in North Port, Port Charlotte, Punta Gorda, 
            Venice & Englewood. 24/7 emergency service available!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Booking Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-[#1a3a52] mb-6">Service Details</h2>
            
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
                  className="bg-gray-50"
                  required
                  data-testid="input-email"
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-[#1a3a52] mb-2 block font-semibold">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="bg-gray-50"
                  required
                  data-testid="input-phone"
                />
              </div>

              {/* Service Type */}
              <div>
                <Label htmlFor="service" className="text-[#1a3a52] mb-2 block font-semibold">
                  Service Type *
                </Label>
                <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                  <SelectTrigger id="service" className="bg-gray-50" data-testid="select-service">
                    <SelectValue placeholder="Select a service..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency">Emergency Lockout</SelectItem>
                    <SelectItem value="automotive">Automotive Key Programming</SelectItem>
                    <SelectItem value="residential">Residential Lock Service</SelectItem>
                    <SelectItem value="commercial">Commercial Lock Service</SelectItem>
                    <SelectItem value="rekey">Lock Rekey</SelectItem>
                    <SelectItem value="installation">Lock Installation</SelectItem>
                    <SelectItem value="smart-lock">Smart Lock Setup</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div>
                <Label htmlFor="date" className="text-[#1a3a52] mb-2 block font-semibold">
                  Preferred Date *
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  className="bg-gray-50"
                  required
                  data-testid="input-date"
                />
              </div>

              {/* Time */}
              <div>
                <Label htmlFor="time" className="text-[#1a3a52] mb-2 block font-semibold">
                  Preferred Time *
                </Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleChange("time", e.target.value)}
                  className="bg-gray-50"
                  required
                  data-testid="input-time"
                />
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address" className="text-[#1a3a52] mb-2 block font-semibold">
                  Service Address *
                </Label>
                <Input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  placeholder="Street address, city, ZIP"
                  className="bg-gray-50"
                  required
                  data-testid="input-address"
                />
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-[#1a3a52] mb-2 block font-semibold">
                  Additional Details
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us more about what you need..."
                  rows={4}
                  className="bg-gray-50"
                  data-testid="textarea-message"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-bold py-6 text-lg"
                data-testid="button-submit-booking"
              >
                Book Appointment
              </Button>

              <p className="text-sm text-gray-500 text-center">
                * All fields are required
              </p>
            </form>
          </div>

          {/* Right: Contact Info & Trust Elements */}
          <div className="space-y-6">
            {/* Emergency Contact Card */}
            <div className="bg-[#1a3a52] text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="mb-6 text-white/90">
                For emergency locksmith services, call us directly 24/7:
              </p>
              <a href="tel:9415875050">
                <Button 
                  size="lg"
                  className="w-full bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-bold py-6 text-lg"
                  data-testid="button-call-emergency"
                >
                  <Phone className="mr-2" size={20} />
                  Call (941) 587-5050
                </Button>
              </a>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-[#7dd3e8]" size={28} />
                <h3 className="text-xl font-bold text-[#1a3a52]">Service Areas</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7dd3e8]">•</span>
                  <span>North Port (10-15 min response)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7dd3e8]">•</span>
                  <span>Port Charlotte (15-20 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7dd3e8]">•</span>
                  <span>Punta Gorda (20-25 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7dd3e8]">•</span>
                  <span>Venice (15-20 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7dd3e8]">•</span>
                  <span>Englewood (20-30 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7dd3e8]">•</span>
                  <span>Rotonda West (25-30 min)</span>
                </li>
              </ul>
            </div>

            {/* Why Book With Us */}
            <div className="bg-gradient-to-br from-[#7dd3e8] to-[#6bc3d8] rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-6">Why Book With Us?</h3>
              <ul className="space-y-3 text-[#1a3a52]">
                <li className="flex items-start gap-2">
                  <Calendar className="flex-shrink-0 mt-0.5" size={20} />
                  <span className="font-semibold">Flexible Scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="flex-shrink-0 mt-0.5" size={20} />
                  <span className="font-semibold">15-Min Average Response</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="flex-shrink-0 mt-0.5" size={20} />
                  <span className="font-semibold">24/7 Availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="flex-shrink-0 mt-0.5" size={20} />
                  <span className="font-semibold">Mobile Service</span>
                </li>
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-4 py-2 bg-[#7dd3e8] text-[#1a3a52] text-sm font-bold rounded-lg">
                  Licensed & Insured
                </span>
                <span className="px-4 py-2 bg-[#7dd3e8] text-[#1a3a52] text-sm font-bold rounded-lg">
                  Background Checked
                </span>
                <span className="px-4 py-2 bg-[#7dd3e8] text-[#1a3a52] text-sm font-bold rounded-lg">
                  90-Day Warranty
                </span>
                <span className="px-4 py-2 bg-[#7dd3e8] text-[#1a3a52] text-sm font-bold rounded-lg">
                  Transparent Pricing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
