import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider";
import axios from "axios";
import Script from "next/script";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vidhienterprises.com'),
  title: {
    default: "Vidhi Enterprises - Manufacturer and Exporter of Drip and Sprinkler Components",
    template: "%s | Vidhi Enterprises"
  },
  description: "Leading manufacturer & exporter of drip irrigation systems, sprinklers, HDPE pipes & micro-irrigation products. ISO-certified quality serving 50+ countries. Trusted agricultural irrigation solutions since 1983.",
  keywords: [
    "drip irrigation manufacturer",
    "sprinkler irrigation systems",
    "HDPE pipes manufacturer India",
    "micro irrigation solutions",
    "agricultural irrigation equipment",
    "drip irrigation exporter",
    "brass sprinklers manufacturer",
    "irrigation fittings supplier",
    "drip emitters manufacturer",
    "online drippers supplier",
    "inline driplines",
    "irrigation accessories India",
    "fertigation equipment",
    "greenhouse irrigation systems",
    "orchard irrigation solutions",
    "water-efficient irrigation",
    "precision irrigation equipment",
    "ISO certified irrigation company",
    "UV-stabilized irrigation products",
    "virgin raw material irrigation"
  ],
  authors: [{ name: "Vidhi Enterprises" }],
  creator: "Vidhi Enterprises",
  publisher: "Vidhi Enterprises",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vidhienterprises.com",
    siteName: "Vidhi Enterprises",
    title: "Vidhi Enterprises - Leading Drip Irrigation & Sprinkler Systems Manufacturer",
    description: "ISO-certified manufacturer of drip irrigation, sprinklers & HDPE pipes serving 50+ countries since 1983. Trusted by farmers worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vidhi Enterprises - Irrigation Systems Manufacturer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidhi Enterprises - Drip Irrigation Manufacturer",
    description: "Leading manufacturer of drip irrigation systems, sprinklers & agricultural irrigation equipment since 1983.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
    // other: "your-other-verification-code",
  },
  category: "Agriculture & Irrigation",
};

import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

// Enable static generation with revalidation (e.g., every hour)
export const revalidate = 3600;

async function getGlobalSettings() {
  try {
    // Determine backend URL - usage of env var or default
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";
    
    // Skip during build if backend is not available
    if (!process.env.NEXT_PUBLIC_API_URL && process.env.NODE_ENV === 'production') {
      console.warn('NEXT_PUBLIC_API_URL not set, skipping settings fetch during build');
      return null;
    }
    
    // Use fetch for Next.js caching with a timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    try {
      const response = await fetch(`${backendUrl}/settings`, {
        next: { revalidate: 3600, tags: ['global-settings'] }, // Cache for 1 hour, tag for on-demand revalidation
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
          throw new Error(`Failed to fetch settings: ${response.status}`);
      }
      
      const data = await response.json();
      // API returns { success: true, data: { ... } }
      return data.success ? data.data : null;
    } catch (fetchError) {
      clearTimeout(timeoutId);
      throw fetchError;
    }
  } catch (error) {
    // Silently return null on error - WhatsApp button just won't show
    console.warn('Failed to fetch global settings (timeout or error):', error instanceof Error ? error.message : String(error));
    return null;
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getGlobalSettings();
  const whatsappNumber = settings?.whatsapp_number;

  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
        <link rel="icon" href="https://d170mw2nhcb1v0.cloudfront.net/img/vidhi_logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="https://d170mw2nhcb1v0.cloudfront.net/img/vidhi_logo.png" />
        <meta name="theme-color" content="#0f4c81" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>

      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5T7R9GG3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5T7R9GG3');
          `}
        </Script>
        <TanStackProvider>{children}</TanStackProvider>
        <WhatsAppFloatingButton phoneNumber={whatsappNumber} />
      </body>

    </html>
  );
}
