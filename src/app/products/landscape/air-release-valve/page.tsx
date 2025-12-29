import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function AirReleaseValve() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Landscape Irrigation", href: "/landscape" },
    { label: "Air Release Valve", active: true },
  ];

  const plasticFeatures = [
    "Made from high-quality plastic material ensuring durability and corrosion resistance.",
    "Available in 3/4” and 1” Male BSP/NPT connections for easy installation and compatibility.",
    "Equipped with a solid plastic float ball specially designed for smooth and reliable operation.",
    "Offers excellent seating characteristics, preventing leakage and ensuring efficient performance.",
    "Operates trouble-free under working pressure up to 4 kg/cm², maintaining consistent flow.",
    "Lightweight and compact design, suitable for various irrigation and water management setups.",
  ];

  const aluminumFeatures = [
    "Gravity Die Cast Aluminum body provides exceptional strength and long-lasting durability.",
    "Available in 1-1/2”, 2”, and 3” Female BSP/NPT connections for versatile installation options.",
    "Fitted with a solid plastic float ball designed for smooth and reliable operation.",
    "Offers excellent seating characteristics, ensuring leak-proof and efficient performance",
    "Performs reliably under pressure up to 10 kg/cm², ideal for high-pressure irrigation systems.",
    "Corrosion-resistant and robust construction, suitable for outdoor and industrial environments.",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Air Release Valve"
        backgroundImage="/img/drip-head-41.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-bold text-xl uppercase tracking-wider mb-2">Landscape Irrigation</p>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-primary italic">Control Valves & ACC</h2>
            <div className="w-full h-px bg-secondary mt-6"></div>
          </div>

          {/* ARV in Plastic */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                <Image
                  src="/img/Drip-50.png"
                  alt="Air Release Valve Plastic"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block leading-tight">
                ARV in Plastic
              </h1>
              <ul className="space-y-4">
                {plasticFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start text-primary font-medium text-lg leading-relaxed">
                    <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="bg-whitesmoke p-6 rounded-xl border-l-4 border-primary mt-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Application</h3>
                <ul className="space-y-2 text-lg text-gray-700 font-medium leading-relaxed">
                  <li>Commonly used in drip and sprinkler irrigation systems for automatic air release and pressure regulation.</li>
                  <li>Ideal for agriculture, water supply systems, and filtration units, ensuring smooth and uninterrupted water flow.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ARV in Aluminum */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                <Image
                  src="/img/Drip-51.png"
                  alt="Air Release Valve Aluminum"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block leading-tight">
                ARV in Aluminum
              </h1>
              <ul className="space-y-4">
                {aluminumFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start text-primary font-medium text-lg leading-relaxed">
                    <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="bg-whitesmoke p-6 rounded-xl border-l-4 border-primary mt-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Application</h3>
                <ul className="space-y-2 text-lg text-gray-700 font-medium leading-relaxed">
                  <li>Widely used in irrigation systems such as drip, sprinkler, and filtration units for air release and pressure control.</li>
                  <li>Ideal for agricultural, industrial, and water management systems, ensuring smooth flow and system safety.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
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
