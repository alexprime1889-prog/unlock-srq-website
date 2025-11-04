import LocationPage, { LocationPageConfig } from "./LocationPage";

const sarasotaConfig: LocationPageConfig = {
  city: "Sarasota",
  county: "Sarasota County",
  slug: "locksmith-sarasota",
  title: "24/7 Locksmith Sarasota FL | Emergency Automotive & Residential Locksmith",
  description: "Professional locksmith in Sarasota FL. 15-20 min response. Emergency car lockout, key programming, residential & commercial locksmith services. Call (941) 587-5050",
  heroTitle: "Sarasota's Most Trusted 24/7 Locksmith Service",
  heroSubtitle: "24/7 Emergency Locksmith • Serving All of Sarasota",
  responseTime: "15-20 Minute",
  coordinates: { lat: "27.3364", lon: "-82.5307" },
  services: {
    residential: [
      "House Lockout Service (24/7)",
      "Lock Rekey & Master Key Systems",
      "High-Security Lock Installation",
      "Smart Lock Installation & Programming",
      "Deadbolt Installation & Repair",
      "Home Security Consultation"
    ],
    commercial: [
      "Office Lockout Emergency Service",
      "Access Control Systems",
      "Master Key System Design",
      "Electronic Lock Systems",
      "Panic Bar Installation & Repair",
      "Commercial Security Upgrades"
    ],
    automotive: [
      "Emergency Car Lockout",
      "Transponder Key Programming (NASTF Certified)",
      "Smart Key & Push-to-Start Keys",
      "Key Fob Replacement & Programming",
      "All Makes & Models - 95% Keys in Stock",
      "Laser Cut Keys"
    ],
    emergency: [
      "24/7 Immediate Response",
      "Break-in Damage Repair",
      "Lost Key Replacement",
      "Storm Damage Lock Repair",
      "Eviction Locksmith Service",
      "Safe Opening & Combination Reset"
    ]
  },
  nearbyAreas: [
    "Sarasota",
    "Siesta Key",
    "St. Armands",
    "Longboat Key",
    "Lakewood Ranch",
    "Bee Ridge",
    "Gulf Gate",
    "Southside Village"
  ]
};

export default function SarasotaPage() {
  return <LocationPage config={sarasotaConfig} />;
}
