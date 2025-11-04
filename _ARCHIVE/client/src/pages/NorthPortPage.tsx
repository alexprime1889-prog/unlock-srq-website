import LocationPage, { LocationPageConfig } from "./LocationPage";

const northPortConfig: LocationPageConfig = {
  city: "North Port",
  county: "Sarasota County",
  slug: "locksmith-north-port",
  title: "24/7 Locksmith North Port FL | Local Emergency Car & Home Locksmith",
  description: "North Port's trusted local locksmith. Headquartered in North Port. 10-15 min response. Emergency car lockout, key programming, residential & commercial. Call (941) 587-5050",
  heroTitle: "North Port's Premier Local Locksmith Service",
  heroSubtitle: "24/7 Emergency Locksmith • Headquartered in Your Community",
  responseTime: "10-15 Minute",
  coordinates: { lat: "27.0442", lon: "-82.2359" },
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
      "Security System Integration"
    ],
    automotive: [
      "Emergency Car Lockout",
      "Transponder Key Programming (NASTF Certified)",
      "Smart Key & Push-to-Start Keys",
      "Ignition Repair & Replacement",
      "All Makes & Models - 95% Keys in Stock",
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
    "North Port",
    "Port Charlotte",
    "Venice",
    "Englewood",
    "Warm Mineral Springs",
    "South Gulf Cove",
    "Toledo Blade",
    "Sarasota County"
  ]
};

export default function NorthPortPage() {
  return <LocationPage config={northPortConfig} />;
}
