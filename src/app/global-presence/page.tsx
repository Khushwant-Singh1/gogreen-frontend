import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import LazyWorldMap from "@/components/LazyWorldMap";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Presence - Irrigation Products Exporter to 50+ Countries | Vidhi Enterprises",
  description: "Vidhi Enterprises exports drip irrigation systems, sprinklers & HDPE pipes to 50+ countries including UAE, Saudi Arabia, Qatar, Kenya, Tanzania, Nepal. Trusted agricultural irrigation supplier worldwide since 1983.",
  keywords: [
    "irrigation products exporter",
    "drip irrigation exporter India",
    "agricultural sprinkler manufacturer",
    "irrigation accessories supplier",
    "drip irrigation products India",
    "sprinkler system exporter",
    "HDPE pipes exporter",
    "irrigation fittings supplier",
    "drip irrigation UAE",
    "sprinklers Middle East",
    "irrigation equipment Africa",
    "farm irrigation exporter",
    "micro irrigation exporter",
    "irrigation products Kenya",
    "drip systems Tanzania",
    "agricultural irrigation Qatar",
    "greenhouse irrigation exporter",
    "orchard irrigation supplier",
    "landscape irrigation products",
    "water-saving irrigation exporter"
  ],
  openGraph: {
    title: "Global Irrigation Presence - Exporting to 50+ Countries Worldwide",
    description: "Leading exporter of drip irrigation & sprinkler systems to UAE, Saudi Arabia, Qatar, Kenya, Africa & Asia. ISO-certified quality trusted globally.",
    url: "https://vidhienterprises.com/global-presence",
    type: "website"
  },
  alternates: {
    canonical: "https://vidhienterprises.com/global-presence"
  }
};

const GlobalPresencePage = () => {
  const organizationPlaceSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vidhi Enterprises",
    "description": "Leading exporter of agricultural irrigation systems, drip irrigation products, sprinklers and micro-irrigation solutions to 50+ countries",
    "areaServed": [
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Saudi Arabia" },
      { "@type": "Country", "name": "Qatar" },
      { "@type": "Country", "name": "Oman" },
      { "@type": "Country", "name": "Kuwait" },
      { "@type": "Country", "name": "Kenya" },
      { "@type": "Country", "name": "Tanzania" },
      { "@type": "Country", "name": "Uganda" },
      { "@type": "Country", "name": "Nigeria" },
      { "@type": "Country", "name": "Ghana" },
      { "@type": "Country", "name": "Ethiopia" },
      { "@type": "Country", "name": "Nepal" },
      { "@type": "Country", "name": "Bangladesh" },
      { "@type": "Country", "name": "Sri Lanka" },
      { "@type": "Country", "name": "India" }
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Drip Irrigation Systems and Agricultural Irrigation Equipment",
        "description": "Complete range of drip irrigation products, sprinkler systems, HDPE pipes, filters and micro-irrigation accessories"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationPlaceSchema) }}
      />
      
      <main className="min-h-screen bg-whitesmoke" itemScope itemType="https://schema.org/AboutPage">
        <Navbar />
        
        {/* Header */}
        <header className="relative h-[45vh] min-h-[450px] flex items-center justify-center text-center text-white overflow-hidden">
          <Image
          src="https://d170mw2nhcb1v0.cloudfront.net/img/gp.png"
          alt="Global Presence Background"
          fill
          className="object-cover"
          priority
          />
          <div className="absolute inset-0 z-10"></div>
          <div className="container mx-auto px-4 relative z-20 animate-fadeInUp">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading text-green-900 drop-shadow-lg">Global Presence</h1>
            <nav className="flex justify-center mb-6">
              <ol className="flex items-center space-x-2 bg-white/20 px-6 backdrop-blur-sm py-2 rounded-full font-bold">
                <li><Link href="/" className="hover:text-primary transition text-green-900">Home</Link></li>
                <li><i className="fa fa-chevron-right mx-2 text-[10px] text-green-900"></i></li>
                <li className="text-green-700">Global Presence</li>
              </ol>
            </nav>
            <p className="text-xl lg:text-2xl font-light opacity-95 max-w-3xl mx-auto text-blue-900">
              Trusted Irrigation Components Across Continents
            </p>
          </div>
        </header>

        {/* Intro Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-6 text-lg text-[#1b4332] leading-relaxed text-center">
              <p>
                Vidhi Enterprises has evolved from a small workshop in India into a <strong>trusted manufacturer and exporter</strong> of drip and sprinkler irrigation components across international markets.
              </p>
              <p>
                Today, our products are supplied through strong distributor networks and long-term partnerships across the <strong>Middle East, Africa and Asia</strong>. Our growth is driven by consistent quality, reliable performance and a deep understanding of global agricultural needs.
              </p>
            </div>
          </div>
        </section>

        {/* Regions Section */}
        <section className="py-16 bg-gradient-to-br from-[#e8f5e9] to-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1b4332] mb-8 font-heading">
              We Supply High-Performance Irrigation Products To:
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-8">
              {["UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Kenya", "Uganda", "Tanzania", "Nepal", "Sri Lanka"].map((country, i) => (
                <span key={i} className="px-6 py-3 bg-white rounded-full shadow-md text-[#2d6a4f] font-semibold border border-green-100">
                  {country}
                </span>
              ))}
              <span className="px-6 py-3 bg-[#2d6a4f] rounded-full shadow-md text-white font-semibold">
                and more...
              </span>
            </div>
            <p className="text-lg text-[#2d6a4f] max-w-3xl mx-auto italic">
              With every new market, we maintain the same commitment to consistently produce quality products, timely deliveries and irrigation solutions engineered for diverse farming conditions worldwide.
            </p>
          </div>
        </section>

        <LazyWorldMap />
        <Footer />
      </main>
    </>
  );
};

export default GlobalPresencePage;