import LocationPage, { LocationPageConfig } from "./LocationPage";

const charlotteCountyConfig: LocationPageConfig = {
  city: "Charlotte County",
  county: "Charlotte County",
  slug: "emergency-locksmith-charlotte-county",
  title: "24/7 Emergency Locksmith Charlotte County FL | Unlock SRQ",
  description: "Emergency locksmith Charlotte County FL. Immediate response 24/7/365. Car lockout, house lockout, commercial locksmith. 15-20 min average. Call (941) 587-5050",
  heroTitle: "Emergency Locksmith Services in Charlotte County, FL",
  heroSubtitle: "24/7 Immediate Response • Fastest Emergency Locksmith in Charlotte County",
  responseTime: "15-20 Minute",
  coordinates: { lat: "26.9403", lon: "-81.8653" },
  services: {
    residential: [
      "Emergency House Lockout (24/7)",
      "Lock Rekey After Break-In",
      "High-Security Lock Installation",
      "Smart Lock Emergency Programming",
      "Broken Key Extraction",
      "Storm Damage Lock Repair"
    ],
    commercial: [
      "Emergency Office Lockout",
      "Break-in Damage Repair",
      "Emergency Master Key Systems",
      "After-Hours Lock Replacement",
      "Panic Bar Emergency Repair",
      "24/7 Access Control Systems"
    ],
    automotive: [
      "Emergency Car Lockout",
      "Lost Car Key Replacement",
      "Transponder Key Programming",
      "Ignition Emergency Repair",
      "Trunk Lockout Service",
      "Motorcycle Emergency Service"
    ],
    emergency: [
      "24/7 Immediate Response",
      "Break-in Damage Repair",
      "Lost Key Replacement",
      "Storm Damage Lock Repair",
      "Eviction Locksmith Service",
      "Safe Opening & Emergency Access"
    ]
  },
  nearbyAreas: [
    "Port Charlotte",
    "Punta Gorda",
    "Englewood",
    "Rotonda West",
    "Charlotte Harbor",
    "Deep Creek",
    "Burnt Store",
    "Harbour Heights",
    "Solana",
    "Cleveland"
  ]
};

export default function CharlotteCountyPage() {
  return <LocationPage config={charlotteCountyConfig} />;
}
