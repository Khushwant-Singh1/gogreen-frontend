import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import FeatureCards from "@/components/FeatureCards";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ProductGrid from "@/components/ProductGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import YouTubeVideosSection from "@/components/YouTubeVideosSection";
import LazyWorldMap from "@/components/LazyWorldMap";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { Metadata } from "next";

// Lazy Popup - SSR: false removed (it renders null initially anyway)
const PopupModal = dynamic(() => import("@/components/PopupModal"));

export const metadata: Metadata = {
  title: "Vidhi Enterprises - Leading Drip Irrigation & Sprinkler System Manufacturer | ISO Certified",
  description: "Vidhi Enterprises: Premier manufacturer of drip irrigation systems, sprinklers, HDPE pipes, filters & micro-irrigation since 1983. Serving 50+ countries with ISO-certified quality products. Trusted by farmers worldwide.",
  keywords: [
    "drip irrigation manufacturer",
    "sprinkler irrigation systems",
    "HDPE pipes manufacturer India",
    "micro irrigation solutions",
    "drip irrigation systems exporter",
    "precision irrigation equipment",
    "agricultural irrigation manufacturer",
    "inline drippers supplier",
    "online emitters manufacturer",
    "irrigation filters India",
    "fertigation equipment",
    "drip lateral pipes",
    "brass sprinklers manufacturer",
    "plastic sprinklers supplier",
    "rain guns manufacturer",
    "irrigation valves India",
    "greenhouse irrigation systems",
    "landscape irrigation solutions",
    "water management systems",
    "ISO certified irrigation company"
  ],
  authors: [{ name: "Vidhi Enterprises" }],
  creator: "Vidhi Enterprises",
  publisher: "Vidhi Enterprises",
  openGraph: {
    title: "Vidhi Enterprises - ISO Certified Drip Irrigation & Sprinkler Manufacturer Since 1983",
    description: "Leading manufacturer & exporter of drip irrigation systems, sprinklers, HDPE pipes & precision irrigation products. Trusted across 50+ countries since 1983.",
    url: "https://vidhienterprises.com",
    siteName: "Vidhi Enterprises",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Vidhi Enterprises - Drip Irrigation & Sprinkler Systems Manufacturer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidhi Enterprises - Drip Irrigation Manufacturer Since 1983",
    description: "ISO-certified manufacturer of drip irrigation, sprinklers, HDPE pipes & micro-irrigation solutions serving global agriculture.",
    images: ["/og-home.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://vidhienterprises.com"
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code"
  }
};


async function getCategories() {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";
    
    // Check if we are in production build and URL is missing
    if (!process.env.NEXT_PUBLIC_API_URL && process.env.NODE_ENV === 'production') {
        return [];
    }

    const response = await fetch(`${backendUrl}/categories`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!response.ok) return [];
    
    const data = await response.json();
    return Array.isArray(data) ? data : []; 
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
}

export default async function Home() {
  const categories = await getCategories();

  // Structured Data for Organization and Website
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vidhi Enterprises",
    "alternateName": "Vidhi Irrigation",
    "description": "Leading manufacturer and exporter of drip irrigation systems, sprinklers, HDPE pipes, and precision irrigation solutions since 1983",
    "foundingDate": "1983",
    "url": "https://vidhienterprises.com",
    "logo": "https://vidhienterprises.com/logo.png",
    "image": "https://vidhienterprises.com/og-home.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "Sales",
      "availableLanguage": ["English", "Hindi"]
    }],
    "sameAs": [
      "https://www.linkedin.com/company/vidhi-enterprises",
      "https://www.facebook.com/vidhienterprises"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "Qatar"
      },
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      },
      {
        "@type": "Country",
        "name": "Oman"
      },
      {
        "@type": "Country",
        "name": "Kenya"
      },
      {
        "@type": "Country",
        "name": "Tanzania"
      },
      {
        "@type": "Country",
        "name": "Nepal"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Irrigation Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Drip Irrigation Systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Sprinkler Systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "HDPE Pipes and Fittings"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vidhi Enterprises",
    "url": "https://vidhienterprises.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://vidhienterprises.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      <main className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
        <Navbar initialCategories={categories} />
      <HeroCarousel />
      <FeatureCards />
      <AboutSection />
      <StatsSection />
      
      {/* YouTube Videos Section - Dynamic from Admin Panel */}
      <YouTubeVideosSection />
      
      {/* Why Choose Us Section - Integrated into About/Features or added here */}
      <section className="py-20 bg-whitesmoke" aria-labelledby="why-choose-us">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h1 className="text-3xl text-blue-900 font-bold lg:text-4xl mb-4 underline">Why Choose Vidhi Enterprises!</h1>
              <h2 id="why-choose-us" className="text-4xl lg:text-5xl font-bold mb-6 text-green-900 leading-tight">
                Leading ISO-Certified Irrigation Manufacturer - Trusted Since 1983
              </h2>
              <p className="text-green-900 text-lg font-bold mb-8">
                Every <strong>drip irrigation system</strong>, <strong>sprinkler</strong>, and <strong>HDPE pipe</strong> undergoes rigorous quality checks and is manufactured to meet ISO and international export standards, 
                ensuring long-lasting performance trusted by farmers, distributors, and importers across 50+ countries worldwide.
              </p>
              <Link href="/manfacture">
              <button className="btn-primary-custom btn-ripple text-white py-4 px-10 rounded font-bold shadow-lg transition" aria-label="Explore more about Vidhi Enterprises irrigation products">
                Explore More
              </button>
              </Link>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-2xl shadow-xl text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-whitesmoke rounded-full flex items-center justify-center mb-6">
                  <i className="fa fa-check text-primary text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold text-green-900">100% Satisfactions</h4>
              </div>
              
              <div className="bg-white p-10 rounded-2xl shadow-xl text-center flex flex-col items-center translate-y-0">
                <div className="w-20 h-20 bg-whitesmoke rounded-full flex items-center justify-center mb-6">
                  <i className="fa fa-users text-primary text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold text-green-900">Dedicated Team</h4>
              </div>
              
              <div className="bg-white p-10 rounded-2xl shadow-xl text-center flex flex-col items-center col-span-1 md:col-span-2 md:w-1/2 md:mx-auto">
                <div className="w-20 h-20 bg-whitesmoke rounded-full flex items-center justify-center mb-6">
                  <i className="fa fa-tools text-primary text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold text-green-900">Modern Equipment</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid />
      
      <div className="container mx-auto px-4 text-center mt-20 mb-8">
        <h2 className="text-5xl lg:text-6xl font-bold text-[#0f4c75] mb-4 font-heading">Our Global Presence</h2>
        <p className="text-2xl text-green-900">Where you can find our products</p>
      </div>

      <LazyWorldMap />
      <ContactForm />
      <Footer />
      <PopupModal />
    </main>
    </>
  );
}