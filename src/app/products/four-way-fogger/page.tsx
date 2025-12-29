import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function FourWayFogger() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Drip Irrigation", href: "/dripirri" },
    { label: "4-Way Fogger", active: true },
  ];

  const features = [
    "Specially designed Anti-Drip device prevents water dripping after each irrigation cycle.",
    "Anti-Drip device activates automatically at pressures above 1.5 kg/cm² to start fogger operation.",
    "Shuts down automatically when pressure drops below 0.7 kg/cm², stopping fogger operation.",
    "Bridgeless design ensures completely drip-free performance.",
    "Produces fine, uniform droplets of approximately 65 microns at a nominal pressure of 4 kg/cm².",
    "Constructed from acid-resistant materials, allowing safe use with agricultural chemicals.",
    "System can be easily cleaned using suitable acid treatment.",
    "Operates efficiently within a pressure range of 2.5 to 5 kg/cm².",
    "Recommended working pressure is 4.0 kg/cm² for optimal performance.",
    "Equipped with a press-fit type inlet connector and 120 mesh (130 micron) filtration for clog-free operation.",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="4-Way Fogger"
        backgroundImage="/img/drip-head-16.png"
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
                  src="/img/Drip-19.jpg"
                  alt="4-Way Fogger"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block">
                4-Way Fogger
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
            <div className="hidden lg:block"></div> 
            
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block">
                Application
              </h2>
              <div className="bg-whitesmoke p-6 rounded-xl border-l-4 border-primary">
                <p className="text-xl text-primary font-semibold leading-relaxed">
                  Designed for efficient cooling and humidification in greenhouses, poultry sheds, cow sheds, 
                  and other livestock environments. Ideal for irrigation over rooting tables, plant propagation, 
                  and seed germination under controlled conditions. Ensures uniform fogging and moisture distribution, 
                  creating an optimal microclimate for plant and animal growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <Image src="/img/drip-table-21.png" alt="Application 1" width={400} height={300} className="w-full h-auto" />
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
