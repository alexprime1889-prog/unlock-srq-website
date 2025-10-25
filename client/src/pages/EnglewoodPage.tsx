import LocationPage, { LocationPageConfig } from "./LocationPage";

const englewoodConfig: LocationPageConfig = {
  city: "Englewood",
  county: "Charlotte County",
  slug: "locksmith-englewood",
  title: "24/7 Locksmith Englewood FL | Fast Emergency Locksmith Service",
  description: "Trusted locksmith in Englewood FL. 20-30 min response. Emergency car lockout, key programming, residential & commercial locksmith services. Call (941) 587-5050",
  heroTitle: "Englewood's Reliable 24/7 Emergency Locksmith",
  heroSubtitle: "24/7 Emergency Locksmith • Serving Englewood & Rotonda West",
  responseTime: "20-30 Minute",
  coordinates: { lat: "26.9620", lon: "-82.3526" },
  services: {
    residential: [
      "House Lockout Service (24/7)",
      "Lock Rekey & Master Key Systems",
      "High-Security Lock Installation",
      "Smart Lock Installation",
      "Broken Key Extraction",
      "Weatherproof Lock Solutions"
    ],
    commercial: [
      "Office Lockout Emergency Service",
      "Access Control Systems",
      "Master Key System Design",
      "File Cabinet & Desk Locks",
      "Storefront Door Locks",
      "Commercial Security Consultation"
    ],
    automotive: [
      "Emergency Car Lockout",
      "Transponder Key Programming",
      "Smart Key & Push-to-Start Keys",
      "Key Fob Replacement",
      "All Makes & Models",
      "Mobile Key Cutting Service"
    ],
    emergency: [
      "24/7 Immediate Response",
      "Break-in Damage Repair",
      "Lost Key Replacement",
      "Hurricane Damage Lock Repair",
      "Eviction Locksmith Service",
      "Emergency Rekeying"
    ]
  },
  nearbyAreas: [
    "Englewood",
    "Rotonda West",
    "Port Charlotte",
    "Venice",
    "Grove City",
    "Manasota Key",
    "Charlotte County",
    "Sarasota County"
  ]
};

export default function EnglewoodPage() {
  return <LocationPage config={englewoodConfig} />;
}
