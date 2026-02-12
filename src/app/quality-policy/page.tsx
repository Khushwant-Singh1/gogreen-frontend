import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const QualityPolicyPage = () => {
  const qualityCommitments = [
    {
      icon: "fa-ruler-combined",
      title: "1. Precision Engineering",
      content: "Every product, from emitters and connectors to sprinklers and quick coupling valves (QCVs) is manufactured with strict control over dimensional accuracy, flow uniformity and performance standards.",
    },
    {
      icon: "fa-vial",
      title: "2. 100% Batch Testing",
      intro: "Each production batch undergoes thorough quality checks, including:",
      points: [
        "Flow & discharge testing",
        "Pressure testing",
        "Strength & durability checks",
        "Visual and dimensional inspection",
        "Field simulation testing",
      ],
      footer: "Only products that meet defined standards are approved for dispatch.",
    },
    {
      icon: "fa-gem",
      title: "3. High-Grade Raw Materials",
      content: "We use certified and tested raw materials to ensure long service life and stable performance under varied climatic and field conditions.",
    },
    {
      icon: "fa-tools",
      title: "4. In-House Tool Room Control",
      intro: "All moulds and dies are designed, developed and maintained in-house to ensure:",
      points: [
        "Long mould life",
        "Zero dimensional variation",
        "Consistent production output",
        "Faster development of new products",
      ],
      footer: "This in-house capability forms the foundation of our manufacturing precision.",
    },
    {
      icon: "fa-cogs",
      title: "5. Standardized Manufacturing Practices",
      intro: "Our production follows systematic processes across:",
      points: [
        "Injection moulding",
        "Extrusion",
        "Gravity die casting",
        "Assembly and finishing",
        "Packaging and palletization",
      ],
      footer: "This ensures uniform quality across every batch and shipment.",
    },
    {
      icon: "fa-chart-line",
      title: "6. Continuous Improvement",
      intro: "We continuously enhance our operations by:",
      points: [
        "Upgrading machinery and moulds",
        "Strengthening testing systems",
        "Regular team training",
        "Incorporating customer feedback",
        "Investing in research and development",
        "Reducing waste through improved process control",
      ],
      footer: "Our focus is long-term improvement, every day, every second.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f9f5]">
      <Navbar />

      {/* Header */}
      {/* Header */}
      <header className="relative h-[45vh] min-h-[450px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="https://d170mw2nhcb1v0.cloudfront.net/img/qp.png"
          alt="Quality Policy Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 animate-fadeInUp">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading text-green-900 drop-shadow-lg">Quality Policy</h1>
          <nav className="flex justify-center mb-6">
            <ol className="flex items-center space-x-2 bg-white/20 px-6 backdrop-blur-sm py-2 rounded-full font-bold">
              <li><Link href="/" className="hover:text-primary transition text-green-900">Home</Link></li>
              <li><i className="fa fa-chevron-right mx-2 text-[10px] text-green-900"></i></li>
              <li className="text-green-700">Quality Policy</li>
            </ol>
          </nav>
          <p className="text-xl lg:text-2xl font-light opacity-95 max-w-3xl mx-auto text-blue-900">
            Precision is not a feature it is our identity.
          </p>
        </div>
      </header>

      {/* Quality Commitments Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#1e40af] mb-16 font-heading">
            Our Quality Commitments
          </h2>

          <div className="space-y-8">
            {qualityCommitments.map((item, i) => (
              <div key={i} className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg border border-blue-50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="hidden md:flex w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#3b82f6] rounded-2xl items-center justify-center flex-shrink-0">
                    <i className={`fas ${item.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1e40af] mb-4">{item.title}</h3>
                    
                    {item.content && (
                      <p className="text-[#1b4332] leading-relaxed">{item.content}</p>
                    )}
                    
                    {item.intro && (
                      <p className="text-[#1b4332] mb-4">{item.intro}</p>
                    )}
                    
                    {item.points && (
                      <ul className="space-y-2 mb-4">
                        {item.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start text-[#2d6a4f]">
                            <span className="text-[#1c9e1c] mr-3 mt-1">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {item.footer && (
                      <p className="text-[#1b4332] font-medium italic">{item.footer}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-24 bg-gradient-to-br from-[#1e40af] to-[#3b82f6] text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 font-heading">Our Promise</h2>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            To supply irrigation components that <strong>farmers trust</strong>, <strong>partners rely on</strong>, and <strong>global markets value</strong>.
          </p>
          <p className="text-2xl lg:text-3xl font-medium">
            Quality is our identity and it will <strong>never be compromised</strong>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default QualityPolicyPage;
