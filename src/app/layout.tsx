import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Unlock SRQ LLC - Professional Locksmith Services in Sarasota, FL",
  description:
    "24/7 emergency locksmith services in Sarasota, North Port, Port Charlotte, Englewood, and Bradenton. Expert key programming, lock installation, and automotive locksmith services. Fast response within 15-30 minutes.",
  keywords:
    "locksmith Sarasota, locksmith North Port, emergency locksmith Florida, car key programming, lock installation, automotive locksmith, 24/7 locksmith, mobile locksmith, key duplication, smart lock installation",
  authors: [{ name: "Unlock SRQ LLC" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://srqunlock.com",
    title: "Unlock SRQ LLC - Professional Locksmith Services in Sarasota, FL",
    description:
      "24/7 emergency locksmith services in Sarasota, North Port, Port Charlotte, Englewood, and Bradenton. Expert key programming, lock installation, and automotive locksmith services.",
    images: ["/logo.png"],
    siteName: "Unlock SRQ LLC",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unlock SRQ LLC - Professional Locksmith Services in Sarasota, FL",
    description:
      "24/7 emergency locksmith services in Sarasota, North Port, Port Charlotte, Englewood, and Bradenton. Expert key programming, lock installation, and automotive locksmith services.",
    images: ["/logo.png"],
  },
  metadataBase: new URL("https://srqunlock.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="North Port" />
        <meta name="geo.position" content="27.0442;-82.2359" />
        <meta name="ICBM" content="27.0442, -82.2359" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Locksmith",
              name: "Unlock SRQ LLC",
              image: "https://srqunlock.com/logo.png",
              description:
                "24/7 emergency locksmith services in Sarasota, North Port, Port Charlotte, Englewood, and Bradenton. Expert key programming, lock installation, and automotive locksmith services.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2456 Yancy Street",
                addressLocality: "North Port",
                addressRegion: "FL",
                postalCode: "34291",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "27.0442",
                longitude: "-82.2359",
              },
              telephone: "+19415875050",
              email: "info@srqunlock.com",
              url: "https://srqunlock.com",
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              areaServed: [
                { "@type": "City", name: "Sarasota" },
                { "@type": "City", name: "North Port" },
                { "@type": "City", name: "Port Charlotte" },
                { "@type": "City", name: "Englewood" },
                { "@type": "City", name: "Bradenton" },
              ],
              serviceType: [
                "Emergency Locksmith",
                "Automotive Locksmith",
                "Residential Locksmith",
                "Commercial Locksmith",
                "Key Programming",
                "Lock Installation",
                "Lock Repair",
                "Key Duplication",
                "Smart Lock Installation",
              ],
              owner: {
                "@type": "Person",
                name: "Maxim Yepichin",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <TooltipProvider>
          <Toaster />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
