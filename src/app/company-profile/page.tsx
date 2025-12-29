import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CompanyProfilePage = () => {
  return (
    <main className="min-h-screen bg-[#f8fdff]">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative h-[100vh] min-h-[700px] bg-gradient-to-br from-[#0f4c81]/95 to-[#00a0df]/90 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
           {/* Placeholder for floating bubbles effect if needed */}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fadeInUp">
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl font-heading">
            Company Profile
          </h1>
          <p className="text-xl lg:text-3xl font-light text-white/95 mb-10 tracking-widest">
            “INNOVATING PRECISION IRRIGATION SINCE 1983”
          </p>
          <p className="text-lg lg:text-2xl max-w-4xl mx-auto text-white/90 leading-relaxed">
            At Vidhi Enterprises, we are committed to strengthening global agriculture and water-management systems through reliable, efficient, and high-quality irrigation components.
            <br /><br />
            Built on a strong foundation of engineering expertise, innovation, and uncompromising quality, we have grown into a trusted partner for farmers, distributors, irrigation companies, EPC contractors, landscaping firms, and government projects around the world.
          </p>
        </div>
      </header>

      {/* What We Do Section */}
      <section className="py-24 animate-fadeInUp">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-[#0f4c81] mb-20 relative after:content-[''] after:block after:w-44 after:h-1.5 after:bg-gradient-to-r after:from-[#0f4c81] after:to-[#00a0df] after:mx-auto after:mt-4 font-heading">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { icon: "fa-tint", title: "Drip Irrigation Pipes & Fittings" },
              { icon: "fa-snowflake", title: "Inline & Online Emitters" },
              { icon: "fa-water", title: "Sprinklers & Rainguns" },
              { icon: "fa-filter", title: "Filters (Screen, Disc, Hydrocyclone)" },
              { icon: "fa-pipe", title: "HDPE Pipes & Fittings" },
              { icon: "fa-valve", title: "Valves & Control Devices" },
              { icon: "fa-tools", title: "Micro-Irrigation Tools & Accessories" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[28px] shadow-xl text-center group hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 border border-blue-50">
                <i className={`fas ${item.icon} text-5xl text-[#00a0df] mb-6 group-hover:text-[#0f4c81] transition-colors`}></i>
                <h3 className="text-xl font-bold text-[#0f4c81]">{item.title}</h3>
              </div>
            ))}
          </div>
          <p className="text-center text-xl mt-16 text-gray-600 italic">
            Our products are designed to deliver <strong>maximum water efficiency</strong>, long field life, and dependable performance across diverse agricultural and landscape environments.
          </p>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-24 bg-blue-50/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-[#0f4c81] mb-20 font-heading">Our Manufacturing Strength</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "fa-industry", title: "High-Precision Extrusion Lines" },
              { icon: "fa-cogs", title: "Advanced Moulding & Injection Machinery" },
              { icon: "fa-flask", title: "In-House Tool Room & R&D" },
              { icon: "fa-vial", title: "Comprehensive Quality Testing Lab" },
              { icon: "fa-search", title: "Strict Inspection & Calibration" },
              { icon: "fa-certificate", title: "Certified International Standards" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[28px] shadow-lg text-center hover:-translate-y-2 transition-all duration-300">
                <i className={`fas ${item.icon} text-5xl text-[#00a0df] mb-6`}></i>
                <h3 className="text-xl font-bold text-[#0f4c81]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-32 bg-gradient-to-br from-[#0f4c81] to-[#00a0df] text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold mb-10 text-white font-heading">Our Promise</h2>
          <p className="text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed font-light">
            We believe irrigation is more than a system — it is the <strong>life source of crops</strong>.
            <br /><br />
            Our mission is to enable sustainable agriculture, reduce water wastage, and support communities with reliable irrigation solutions backed by strong engineering and customer service.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-[#0f4c81] mb-20 font-heading">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { icon: "fa-gem", title: "Quality First", desc: "No compromise on material, performance, or durability." },
              { icon: "fa-lightbulb", title: "Innovation", desc: "Continuous improvement in design and processes." },
              { icon: "fa-handshake", title: "Integrity", desc: "Transparent practices and long-term relationships." },
              { icon: "fa-leaf", title: "Sustainability", desc: "Products that optimize water and energy efficiency." },
              { icon: "fa-heart", title: "Customer Commitment", desc: "Delivering value, reliability, and support." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#00a0df] text-center hover:shadow-xl transition-all">
                <i className={`fas ${item.icon} text-4xl text-[#00a0df] mb-4`}></i>
                <h3 className="text-lg font-bold text-[#0f4c81] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CompanyProfilePage;