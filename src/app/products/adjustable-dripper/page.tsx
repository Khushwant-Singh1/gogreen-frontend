import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function AdjustableDripper() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Drip Irrigation", href: "/dripirri" },
    { label: "Adjustable Dripper", active: true },
  ];

  const features = [
    "Variable flow rate for different crop requirements.",
    "Made from UV-stabilized 100% virgin raw materials.",
    "Clog-resistant design ensures consistent water flow.",
    "Easy to install on lateral pipes.",
    "Compatible with fertilizers and chemicals (fertigation safe).",
    "Precise and targeted watering for efficient water use.",
    "Durable and long-lasting.",
    "Ensures uniform crop growth.",
    "Available in Vari Flow and Single Flow options.",
    "Color-coded for easy identification of flow ranges.",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Adjustable Dripper"
        backgroundImage="/img/drip-head-7.png"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                <Image
                  src="/img/Drip-7.jpg"
                  alt="Adjustable Dripper"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block leading-tight">
                Adjustable Dripper
              </h1>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start text-primary font-medium text-lg leading-relaxed">
                    <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                <Image
                  src="/img/Drip-8.jpg"
                  alt="Adjustable Dripper Application"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block">
                Application
              </h2>
              <div className="bg-whitesmoke p-6 rounded-xl border-l-4 border-primary italic">
                <p className="text-xl text-primary font-semibold leading-relaxed">
                  Suitable for vegetable crops, fruit orchards, nurseries, and garden plants, ensuring precise irrigation and nutrient delivery. Ideal for uneven terrains and variable soil conditions.
                </p>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 max-w-sm mx-auto lg:mx-0">
                <Image src="/img/Model-34.png" alt="Model Diagram" width={400} height={300} className="w-full h-auto" />
              </div>

              <div className="pt-4">
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
