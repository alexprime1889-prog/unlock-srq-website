import LocationPage, { LocationPageConfig } from "./LocationPage";

const bradentonConfig: LocationPageConfig = {
  city: "Bradenton",
  county: "Manatee County",
  slug: "locksmith-bradenton",
  title: "24/7 Locksmith Bradenton FL | Professional Emergency Locksmith",
  description: "Professional locksmith in Bradenton FL. 20-25 min response. Emergency car lockout, key programming, residential & commercial locksmith services. Call (941) 587-5050",
  heroTitle: "Bradenton's Professional 24/7 Emergency Locksmith",
  heroSubtitle: "24/7 Emergency Locksmith • Serving All of Manatee County",
  responseTime: "20-25 Minute",
  coordinates: { lat: "27.4989", lon: "-82.5748" },
  services: {
    residential: [
      "House Lockout Service (24/7)",
      "Lock Rekey & Master Key Systems",
      "High-Security Lock Installation",
      "Smart Lock Installation & Programming",
      "Deadbolt Installation",
      "Home Security Upgrades"
    ],
    commercial: [
      "Office Lockout Emergency Service",
      "Access Control Systems",
      "Master Key System Design",
      "Electronic Lock Systems",
      "Panic Bar Installation & Repair",
      "Retail Security Solutions"
    ],
    automotive: [
      "Emergency Car Lockout",
      "Transponder Key Programming (NASTF Certified)",
      "Smart Key & Push-to-Start Keys",
      "Key Fob Replacement & Programming",
      "All Makes & Models - 95% Keys in Stock",
      "Ignition Repair & Replacement"
    ],
    emergency: [
      "24/7 Immediate Response",
      "Break-in Damage Repair",
      "Lost Key Replacement",
      "Storm Damage Lock Repair",
      "Eviction Locksmith Service",
      "Safe Opening"
    ]
  },
  nearbyAreas: [
    "Bradenton",
    "Palmetto",
    "Ellenton",
    "Parrish",
    "Lakewood Ranch",
    "Bayshore Gardens",
    "Cortez",
    "Manatee County"
  ]
};

export default function BradentonPage() {
  return <LocationPage config={bradentonConfig} />;
}
