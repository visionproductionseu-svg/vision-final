import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alfacreative.eu"),

  title: {
    default: "Alfa Creative Agency | Video, CGI, VFX e Motion",
    template: "%s | Alfa Creative Agency",
  },

  description:
    "Alfa Creative Agency — produzione video, CGI, VFX, motion design e contenuti creativi per brand e aziende.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Alfa Creative Agency | Video, CGI, VFX e Motion",
    description:
      "Produzione video, CGI, VFX, motion design e contenuti creativi per brand e aziende.",
    url: "https://alfacreative.eu",
    siteName: "Alfa Creative Agency",
    locale: "it_IT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alfa Creative Agency | Video, CGI, VFX e Motion",
    description:
      "Produzione video, CGI, VFX, motion design e contenuti creativi per brand e aziende.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PMLD438SR2"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PMLD438SR2');
          `}
        </Script>
      </body>
    </html>
  );
}