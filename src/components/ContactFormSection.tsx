"use client";

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

export default function ContactFormSection() {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Emergency Service Image */}
        <figure 
          itemScope 
          itemType="https://schema.org/ImageObject"
          className="relative h-96 lg:h-auto overflow-hidden"
        >
          <picture>
            <source 
              srcSet="/emergency-lockout-service-action-sarasota-florida.webp" 
              type="image/webp"
            />
            <img 
              src="/emergency-lockout-service-action-sarasota-florida.png"
              alt="24/7 emergency lockout service in action - professional mobile locksmith unlocking vehicle in North Port, Port Charlotte, Sarasota County, and Charlotte County Florida"
              itemProp="contentUrl"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
              data-testid="img-emergency-service"
            />
          </picture>
          <meta itemProp="creator" content="Unlock SRQ LLC" />
          <meta itemProp="copyrightHolder" content="Unlock SRQ LLC" />
          <figcaption itemProp="caption" className="sr-only">
            Professional locksmith providing emergency vehicle lockout service in Sarasota, Florida
          </figcaption>
        </figure>

        {/* Right: Form */}
        <div className="bg-[#1a3a52] p-12 lg:p-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-white/80 mb-8">
            Have a question for the best Unlock SRQ? We're here to help. Send us a message and we'll get be in touch.
          </p>

          <form className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-white mb-2 block">Name</Label>
              <Input id="name" type="text" className="bg-white" />
            </div>

            <div>
              <Label htmlFor="email" className="text-white mb-2 block">Email</Label>
              <Input id="email" type="email" className="bg-white" />
            </div>

            <div>
              <Label htmlFor="phone" className="text-white mb-2 block">Phone</Label>
              <Input id="phone" type="tel" className="bg-white" />
            </div>

            <div>
              <Label htmlFor="options" className="text-white mb-2 block">Choose Options</Label>
              <Select>
                <SelectTrigger id="options" className="bg-white">
                  <SelectValue placeholder="Select a service..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="automotive">Automotive</SelectItem>
                  <SelectItem value="emergency">Emergency</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="text-white mb-2 block">Message</Label>
              <Textarea id="message" rows={4} className="bg-white" />
            </div>

            <Button type="submit" className="w-full bg-[#7dd3e8] hover:bg-[#6bc3d8] text-[#1a3a52] font-semibold py-6 text-lg">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
