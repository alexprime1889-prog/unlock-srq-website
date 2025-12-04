import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Payment - Unlock SRQ LLC | Secure Payment Portal",
  description:
    "Pay securely online for locksmith services. Fast, convenient, and secure payment processing. Accept all major credit cards for emergency locksmith, key programming, and lock installation services.",
};

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
