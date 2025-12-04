import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment - Unlock SRQ LLC | Professional Locksmith Services",
  description:
    "Schedule your locksmith appointment online. Fast, convenient booking with instant confirmation. Available 24/7 for emergency services in Sarasota, North Port, and surrounding areas.",
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
