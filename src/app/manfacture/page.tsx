import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ManufacturingPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[450px] flex items-center justify-center text-center text-white overflow-hidden bg-gray-900 mt-2">
        {/* Simplified Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a5f3d]/95 to-[#0e3d27]/98 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 animate-fadeInUp">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading text-[#b1e2b8] drop-shadow-lg">
            Manufacturing & Infrastructure
          </h1>
          <p className="text-xl lg:text-3xl max-w-3xl mx-auto font-light tracking-wide opacity-90">
            Precision Engineering • Cutting-Edge Technology • Global Quality Standards
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-[#f8fdfa]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl lg:text-3xl lg:leading-relaxed text-gray-600 max-w-5xl mx-auto">
            At <strong>Vidhi Enterprises</strong>, we operate one of New Delhi’s most advanced and fully integrated manufacturing facilities for irrigation components — delivering unmatched precision and reliability to farmers across India and the world.
          </p>
        </div>
      </section>

      {/* Production Excellence */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-center text-[#0e3d27] mb-20 font-heading relative after:content-[''] after:block after:w-32 after:h-1 after:bg-[#9c7a3a] after:mx-auto after:mt-6">
            Our Production Excellence
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                icon: "fa-tint",
                title: "Advanced Manufacturing Unit",
                points: [
                  "Drip irrigation pipes & laterals",
                  "Online/inline drippers & emitters",
                  "Plastic sprinklers & micro accessories",
                  "Precision fittings & connectors",
                ],
                footer: "Dedicated molds → 100% leak-proof & durable",
              },
              {
                icon: "fa-cogs",
                title: "High-Tech Metal Components Unit",
                points: [
                  "Brass & aluminum sprinklers",
                  "Rain guns & long-range nozzles",
                  "Heavy-duty fittings & adaptors",
                  "Corrosion-resistant valves",
                ],
                footer: "Superior strength & consistent field performance",
              },
            ].map((unit, i) => (
              <div key={i} className="bg-white rounded-[24px] shadow-2xl overflow-hidden border border-green-50 group hover:-translate-y-4 transition-all duration-500">
                <div className="h-48 bg-gradient-to-br from-[#1a5f3d] to-[#b1e2b8] flex items-center justify-center text-white text-7xl">
                  <i className={`fas ${unit.icon}`}></i>
                </div>
                <div className="p-10 lg:p-12">
                  <h3 className="text-3xl font-bold text-[#0e3d27] mb-8 font-heading">{unit.title}</h3>
                  <ul className="space-y-4 mb-8">
                    {unit.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center text-xl text-gray-700">
                        <span className="w-2 h-2 bg-[#9c7a3a] rounded-full mr-4 shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xl text-[#1a5f3d] font-bold border-t border-green-100 pt-6">
                    {unit.footer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Journey */}
      <section className="py-24 bg-[#f8fdfa]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl lg:text-6xl font-bold text-center text-[#0e3d27] mb-20 font-heading">
            Uncompromising Quality Journey
          </h2>
          <div className="relative space-y-12 before:content-[''] before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-[#b1e2b8] before:-translate-x-1/2 hidden md:block">
            {[
              { title: "Material Inspection", desc: "Virgin polymers & certified metals only" },
              { title: "Pressure & Burst Testing", desc: "Validated up to 10 bar" },
              { title: "Flow Rate Precision", desc: "Uniform discharge guaranteed" },
              { title: "UV Resistance Testing", desc: "5000+ hours accelerated weathering" },
              { title: "Final Certification", desc: "IS Standards & International Compliance" },
            ].map((step, i) => (
              <div key={i} className={`relative flex items-center justify-between ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-[45%] bg-white p-8 rounded-2xl shadow-lg border border-green-50">
                  <h5 className="text-xl font-bold text-[#0e3d27] mb-2">{step.title}</h5>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[#9c7a3a] border-4 border-white rounded-full z-10"></div>
                <div className="w-[45%]"></div>
              </div>
            ))}
          </div>
          {/* Mobile Quality View */}
          <div className="md:hidden space-y-6">
             {[
              { title: "Material Inspection", desc: "Virgin polymers & certified metals only" },
              { title: "Pressure & Burst Testing", desc: "Validated up to 10 bar" },
              { title: "Flow Rate Precision", desc: "Uniform discharge guaranteed" },
              { title: "UV Resistance Testing", desc: "5000+ hours accelerated weathering" },
              { title: "Final Certification", desc: "IS Standards & International Compliance" },
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#9c7a3a]">
                <h5 className="text-xl font-bold text-[#0e3d27] mb-1">{step.title}</h5>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-32 bg-gradient-to-br from-[#0e3d27] to-[#1a5f3d] text-white text-center rounded-[40px] mx-4 lg:mx-20 my-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white font-heading">Our Promise to Every Farmer</h2>
          <p className="text-2xl lg:text-3xl max-w-4xl mx-auto font-light leading-relaxed mb-10">
            Reliable, affordable, and water-efficient irrigation solutions that increase productivity and conserve every precious drop.
          </p>
          <p className="text-2xl lg:text-4xl font-bold text-[#b1e2b8]">
            Vidhi Enterprises <span className="font-light block lg:inline text-xl lg:text-2xl mt-4 lg:mt-0 lg:ml-4 text-white/80 tracking-widest uppercase">— Engineered for tomorrow’s agriculture.</span>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ManufacturingPage;