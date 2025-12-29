import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function OneWayFogger() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Drip Irrigation", href: "/dripirri" },
    { label: "1-Way-Fogger", active: true },
  ];

  const features = [
    "Equipped with a specially designed Anti-Drip device that instantly prevents water dripping after each irrigation cycle.",
    "Operates automatically when pressure exceeds 1.5 kg/cm².",
    "Automatically shuts down when water pressure drops below 0.7 kg/cm².",
    "Bridgeless design ensures completely drip-free operation.",
    "Produces fine droplets with an average size of 65 microns for uniform misting.",
    "Provides consistent and even water distribution at nominal pressure.",
    "Made from acid-resistant raw materials suitable for chemical applications in agriculture.",
    "Compatible with acid cleaning treatment for easy maintenance and clog prevention.",
    "Ensures efficient fogging for effective cooling and humidification.",
    "Durable construction for long-lasting performance under greenhouse and livestock conditions.",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="1-Way-Fogger"
        backgroundImage="/img/drip-head-15.png"
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
                  src="/img/Drip-18.jpg"
                  alt="1-Way Fogger"
                  width={550}
                  height={650}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block">
                1-Way-Fogger
              </h1>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start text-primary font-medium text-lg leading-relaxed">
                    <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="w-full h-px bg-primary/20 pt-4"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="hidden lg:block"></div> {/* Placeholder for alignment matching original layout */}
            
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block">
                Application
              </h2>
              <p className="text-xl text-primary font-semibold leading-relaxed">
                Ideal for cooling and humidifying greenhouses and rooting tables, creating optimal conditions 
                for plant propagation and seed germination. Widely used in poultry sheds, cow sheds, 
                and livestock areas for temperature and humidity control. Ensures a uniform microclimate 
                that promotes healthy plant and animal growth.
              </p>
              <div className="w-full h-px bg-primary/20"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <Image src="/img/drip-table-15.png" alt="Application 1" width={400} height={300} className="w-full h-auto" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <Image src="/img/drip-table-16.png" alt="Application 2" width={400} height={300} className="w-full h-auto" />
                </div>
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
