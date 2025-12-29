import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function FivePointFiveMmTube() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Drip Irrigation", href: "/dripirri" },
    { label: "5.5 mm Spagetty/ distribution Pipes / Connecting Tube/ Micro Tube", active: true },
  ];

  const features = [
    "Made from high-quality, flexible, and UV-resistant material.",
    "Ensures easy installation and secure connections with drippers and emitters.",
    "It is used in drip irrigation, typically in gardens and greenhouses.",
    "Used with 5.5mm drip fittings.",
    "Resistant to chemicals, algae growth, and environmental stress.",
    "Provides uniform water flow without leakage.",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="5.5 mm Spagetty/ distribution Pipes / Connecting Tube/ Micro Tube"
        backgroundImage="/img/drip-head-11.png"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                <Image
                  src="/img/Drip-12.jpg"
                  alt="5.5 mm Spagetty Tube"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block leading-tight">
                5.5 mm Spagetty/ distribution Pipes / Connecting Tube/ Micro Tube
              </h1>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start text-primary font-medium text-lg leading-relaxed">
                    <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="bg-whitesmoke p-6 rounded-xl border-l-4 border-primary mt-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Application</h3>
                <p className="text-lg text-gray-700 font-medium leading-relaxed">
                  <b>Used for connecting drippers, emitters, and micro-sprinklers in home gardens, greenhouses, nurseries, and landscape irrigation systems for efficient water distribution.</b>
                </p>
              </div>

              <div className="mt-8">
                <a 
                  href="/pdf/AM pdf.pdf" 
                  target="_blank" 
                  className="btn-primary-custom btn-ripple text-white px-10 py-4 rounded-full font-bold text-lg inline-flex items-center shadow-xl transition"
                >
                  <i className="fa fa-file-pdf mr-3"></i> View PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
