import LocationPage, { LocationPageConfig } from "./LocationPage";

const portCharlotteConfig: LocationPageConfig = {
  city: "Port Charlotte",
  county: "Charlotte County",
  slug: "locksmith-port-charlotte",
  title: "24/7 Locksmith Port Charlotte FL | Emergency Car & Home Locksmith",
  description: "Trusted locksmith in Port Charlotte FL. 15-20 min response time. Emergency car lockout, key programming, residential & commercial locksmith. Call (941) 587-5050",
  heroTitle: "Expert Locksmith Services in Port Charlotte, FL",
  heroSubtitle: "24/7 Emergency Locksmith • Serving Charlotte County",
  responseTime: "15-20 Minute",
  coordinates: { lat: "26.9762", lon: "-82.0906" },
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
    "Port Charlotte",
    "North Port",
    "Punta Gorda",
    "Englewood",
    "Rotonda West",
    "Charlotte Harbor",
    "Deep Creek",
    "Solana"
  ]
};

export default function PortCharlottePage() {
  return <LocationPage config={portCharlotteConfig} />;
}
