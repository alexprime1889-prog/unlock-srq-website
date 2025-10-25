import LocationPage, { LocationPageConfig } from "./LocationPage";

const puntaGordaConfig: LocationPageConfig = {
  city: "Punta Gorda",
  county: "Charlotte County",
  slug: "locksmith-punta-gorda",
  title: "24/7 Locksmith Punta Gorda FL | Fast Response Locksmith Service",
  description: "Professional locksmith in Punta Gorda FL. 20-25 min response. Emergency lockout, key programming, commercial locksmith. Licensed & insured. Call (941) 587-5050",
  heroTitle: "Professional Locksmith Services in Punta Gorda, FL",
  heroSubtitle: "24/7 Emergency Locksmith • Charlotte County's Trusted Choice",
  responseTime: "20-25 Minute",
  coordinates: { lat: "26.9298", lon: "-81.9734" },
  services: {
    residential: [
      "House Lockout Service (24/7)",
      "Lock Rekey & Master Key Systems",
      "High-Security Lock Installation",
      "Smart Lock Installation & Programming",
      "Broken Key Extraction",
      "Door Security Upgrades"
    ],
    commercial: [
      "Office Lockout Emergency Service",
      "Access Control Systems",
      "Master Key System Design",
      "File Cabinet & Desk Locks",
      "Panic Bar Installation & Repair",
      "ADA Compliant Solutions"
    ],
    automotive: [
      "Emergency Car Lockout",
      "Transponder Key Programming",
      "Smart Key & Push-to-Start Keys",
      "Ignition Repair & Replacement",
      "All Makes & Models",
      "Motorcycle & RV Keys"
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
    "Punta Gorda",
    "Port Charlotte",
    "Charlotte Harbor",
    "Burnt Store",
    "Deep Creek",
    "Solana",
    "Cleveland",
    "Harbour Heights"
  ]
};

export default function PuntaGordaPage() {
  return <LocationPage config={puntaGordaConfig} />;
}
