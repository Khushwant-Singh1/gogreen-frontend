import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function TwoFourWayConnector() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Drip Irrigation", href: "/dripirri" },
    { label: "2-Way/4-Way Connector", active: true },
  ];

  const features2Way = [
    "Dual-outlet single barb connector designed to divide one dripper/emitter line into two.",
    "Compact, one-piece structure ensuring leak-free performance.",
    "Suitable for use with both PC (Pressure Compensating) and NPC (Non-Pressure Compensating) drippers/emitters.",
    "Manufactured from high-strength engineering 100% virgin raw materials for superior durability.",
    "Corrosion-free and resistant to most agricultural chemicals and fertilizers.",
    "Easy to install and remove, ensuring convenient maintenance.",
    "Designed for 5.5 mm extension tubing and compatible with pot drippers.",
    "UV-stabilized material ensures long-lasting performance under sunlight exposure.",
    "Lightweight yet sturdy construction ideal for all irrigation setups.",
    "Provides uniform water distribution for efficient irrigation management.",
  ];

  const features4Way = [
    "Designed for connecting four outlets from a single Dripper or Emitter.",
    "Compact one-piece construction ensures durability and leak-free performance.",
    "Compatible with both PC and NPC Drippers/Emitters.",
    "Made from high-strength engineering plastic for long-lasting use.",
    "Non-corrosive and chemical-resistant for harsh agricultural conditions.",
    "Suitable for 6 mm extension tubes and Pot Drippers.",
    "UV stabilized to withstand sunlight exposure.",
    "Ensures uniform water distribution across multiple plants.",
    "Ideal for space-saving irrigation setups in compact areas.",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="2-Way/4-Way Connector"
        backgroundImage="/img/drip-head-9.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-bold text-xl uppercase tracking-wider mb-2">Drip Irrigation</p>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-primary italic">Emitting Devices</h2>
            <div className="w-full h-px bg-secondary mt-6"></div>
          </div>

          {/* 2-Way Connector Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                <Image
                  src="/img/Land-6.png"
                  alt="2-Way Connector"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block">
                2-Way Connector
              </h1>
              <ul className="space-y-4">
                {features2Way.map((feature, i) => (
                  <li key={i} className="flex items-start text-primary font-medium text-lg leading-relaxed">
                    <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="bg-whitesmoke p-6 rounded-xl border-l-4 border-primary mt-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Application</h3>
                <p className="text-lg text-gray-700 font-medium leading-relaxed">
                  Widely used in home gardens, polyhouses, greenhouses, and nurseries to extend two outlets 
                  from a single dripper/emitter, ensuring balanced and efficient watering across multiple plants.
                </p>
              </div>
            </div>
          </div>

          {/* 4-Way Connector Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="relative group lg:hidden mb-8">
                 <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                  <Image
                    src="/img/Land-7.png"
                    alt="4-Way Connector"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block">
                4-Way Connector
              </h1>
              <ul className="space-y-4">
                {features4Way.map((feature, i) => (
                  <li key={i} className="flex items-start text-primary font-medium text-lg leading-relaxed">
                    <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="bg-whitesmoke p-6 rounded-xl border-l-4 border-primary mt-6 mb-8">
                <h3 className="text-2xl font-bold text-primary mb-3">Application</h3>
                <p className="text-lg text-gray-700 font-medium leading-relaxed">
                  Perfect for Home Gardens, Poly Houses, Green Houses, and Nurseries — efficiently distributing 
                  water to four plants from one emitter, ensuring uniform irrigation and improved water efficiency.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 max-w-sm mx-auto lg:mx-0">
                <Image src="/img/Model-36.png" alt="Application Diagram" width={400} height={300} className="w-full h-auto" />
              </div>
            </div>

            <div className="order-1 lg:order-2 relative group hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                <Image
                  src="/img/Land-7.png"
                  alt="4-Way Connector"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <a 
              href="/pdf/AM pdf.pdf" 
              target="_blank" 
              className="btn-primary-custom btn-ripple text-white px-10 py-4 rounded-full font-bold text-lg inline-flex items-center shadow-xl transition"
            >
              <i className="fa fa-file-pdf mr-3"></i> View PDF
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
