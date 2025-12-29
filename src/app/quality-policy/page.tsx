import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const QualityPolicyPage = () => {
  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      
      <header className="min-h-[100vh] bg-gradient-to-br from-[#0a1a2f] via-[#1e3a8a] to-[#00a0df] flex items-center justify-center text-center relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,212,255,0.2)_0%,transparent_60%)]"></div>
        <div className="container mx-auto px-4 relative z-10 animate-fadeInDown">
          <h1 className="text-6xl lg:text-8xl font-bold mb-6 font-heading bg-gradient-to-r from-[#87cefa] via-[#00e0ff] to-[#ffd700] bg-clip-text text-transparent drop-shadow-2xl">
            Our Quality Commitment
          </h1>
          <p className="text-xl lg:text-3xl font-light opacity-90 max-w-3xl mx-auto">
            Precision is not a feature — it is our identity.
          </p>
        </div>
      </header>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-20 font-heading bg-gradient-to-r from-[#1e3a8a] to-[#00a0df] bg-clip-text text-transparent relative after:content-[''] after:block after:w-44 after:h-1.5 after:bg-[#00d4ff] after:mx-auto after:mt-6 after:shadow-[0_0_20px_#00d4ff]">
            Quality Commitments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { 
                icon: "fa-ruler-combined", 
                title: "1. Precision Engineering", 
                points: ["Strict dimensional accuracy", "Perfect flow uniformity", "Consistent performance parameters"],
                back: "Every component is born perfect."
              },
              { 
                icon: "fa-vial", 
                title: "2. 100% Batch Testing", 
                points: ["Flow & discharge testing", "Pressure testing", "Strength & durability checks", "Visual & dimensional inspection"],
                back: "Zero defects. Zero exceptions."
              },
              { 
                icon: "fa-gem", 
                title: "3. High-Grade Raw Materials", 
                points: ["Certified & tested polymers", "UV-stabilized compounds", "Food-grade options available"],
                back: "Only the best goes in."
              },
              { 
                icon: "fa-tools", 
                title: "4. In-House Tool Room Control", 
                points: ["Long mould life", "Zero variation", "Fast new product development"],
                back: "Precision starts at the mould."
              },
              { 
                icon: "fa-cogs", 
                title: "5. Standardized Manufacturing", 
                points: ["Injection moulding", "Extrusion", "Gravity die casting", "Assembly & packaging"],
                back: "Uniformity in every batch."
              },
              { 
                icon: "fa-chart-line", 
                title: "6. Continuous Improvement", 
                points: ["Machine & mould upgrades", "Advanced testing systems", "Team training"],
                back: "We get better every day."
              },
            ].map((item, i) => (
              <div key={i} className="group h-[480px] [perspective:1500px]">
                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-2xl rounded-[32px]">
                  {/* Front */}
                  <div className="absolute inset-0 h-full w-full rounded-[32px] bg-gradient-to-br from-[#0f4c81]/90 to-[#00a0df]/70 backdrop-blur-md p-10 flex flex-col items-center justify-center text-center [backface-visibility:hidden] border border-blue-200/40">
                    <i className={`fas ${item.icon} text-7xl text-[#00d4ff] mb-8 animate-float`}></i>
                    <h3 className="text-2xl font-bold text-white mb-6">{item.title}</h3>
                    <ul className="text-left w-full space-y-3">
                      {item.points.map((p, idx) => (
                        <li key={idx} className="text-white/90 flex items-start text-lg">
                          <span className="text-[#ffd700] mr-3">✔</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-[32px] bg-gradient-to-br from-[#001f3f] to-[#0f4c75] p-10 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <strong className="text-3xl font-bold text-[#ffd700]">{item.back}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-[#1e3a8a] to-[#001f3f] text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold mb-12 font-heading">Our Promise</h2>
          <p className="text-2xl lg:text-4xl max-w-4xl mx-auto leading-relaxed font-light mb-16">
            To supply irrigation components that <strong>farmers trust</strong>, <strong>partners rely on</strong>, and <strong>global markets value</strong>.
            <br /><br />
            Quality is our identity — and it will <strong>never be compromised</strong>.
          </p>
          <div className="w-56 h-56 mx-auto bg-gradient-to-br from-[#ffd700] to-[#ffb300] rounded-full flex items-center justify-center text-3xl font-bold text-[#0a1a2f] shadow-[0_0_80px_rgba(255,215,0,0.6)] animate-pulse">
            QUALITY<br />GUARANTEED
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default QualityPolicyPage;
