import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://srqunlock.com'),
  title: "24/7 Emergency Locksmith North Port & Port Charlotte FL | Unlock SRQ",
  description: "24/7 emergency locksmith serving North Port, Port Charlotte, Punta Gorda, Venice. Licensed & insured. 15-minute response. Lost keys, lockouts, commercial. Call (941) 587-5050",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R0JFDJZ0MW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R0JFDJZ0MW');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
