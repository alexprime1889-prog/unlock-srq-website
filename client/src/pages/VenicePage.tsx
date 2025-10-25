import LocationPage, { LocationPageConfig } from "./LocationPage";

const veniceConfig: LocationPageConfig = {
  city: "Venice",
  county: "Sarasota County",
  slug: "locksmith-venice-fl",
  title: "24/7 Locksmith Venice FL | Emergency Locksmith Sarasota County",
  description: "Top-rated locksmith in Venice FL. 15-20 min response. Car key programming, residential locksmith, commercial locks. Licensed & insured. Call (941) 587-5050",
  heroTitle: "Trusted Locksmith Services in Venice, FL",
  heroSubtitle: "24/7 Emergency Locksmith • Serving Venice & Sarasota County",
  responseTime: "15-20 Minute",
  coordinates: { lat: "27.0998", lon: "-82.4543" },
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
    "Venice",
    "North Port",
    "Englewood",
    "South Venice",
    "Nokomis",
    "Osprey",
    "Laurel",
    "Warm Mineral Springs"
  ]
};

export default function VenicePage() {
  return <LocationPage config={veniceConfig} />;
}
