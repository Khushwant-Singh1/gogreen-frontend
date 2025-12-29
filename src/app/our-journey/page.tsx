import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JourneyPage = () => {
  const milestones = [
    {
      year: "Early 1980s",
      title: "The Beginning of a Vision",
      points: [
        "Vidhi Enterprises was founded by Late Shri Dhirendar Kumar Jain (Bauji) — an engineer, architect, and perfectionist.",
        "He began his journey from his home with just one helper and a vision to bring precision to irrigation components.",
        "In the early 80s, he started manufacturing connectors, supplying them on an OEM and white-label basis — long before OEM became a common practice.",
        "His engineering discipline and eye for detail made his components trusted by dealers and manufacturers.",
      ],
    },
    {
      year: "1983",
      title: "Moving into Emitters",
      points: [
        "With rising demand and his interest in micro-irrigation engineering, he expanded into emitters around 1983.",
        "His strength was precision flow rates, discharge accuracy, and consistent discharge diameter — the most critical parameters for high-performing emitters and sprinklers.",
        "This reputation for exceptional flow control set the foundation for Vidhi Enterprises.",
      ],
    },
    {
      year: "1983–1988",
      title: "Growing Home-Based Manufacturing",
      points: [
        "Started with 1 semi-automatic hand moulding machine.",
        "Within five years, expanded to 3 semi-automatic hand moulding machines.",
        "Production increased rapidly due to OEM demand, and his accuracy-driven approach earned industry-wide respect.",
      ],
    },
    {
      year: "1990s",
      title: "The First Major Expansion",
      points: [
        "With increasing bulk orders and the need for higher precision: Shifted to fully automatic injection moulding machines.",
        "Added the company’s first pipe extruder.",
        "Established an in-house tool room — extremely rare for small manufacturers at that time.",
        "Focused strongly on OEM supply, building relationships with irrigation brands across India.",
      ],
    },
    {
      year: "1995",
      title: "Reaching Full Capacity",
      points: [
        "By 1995, Vidhi Enterprises had: 2 extrusion lines, 6 automatic injection moulding machines, 3 semi-automatic moulding machines, A complete, well-equipped tool room.",
        "👨‍🔧 Mr. Vineet Jain (Founder’s Son) Joins the Business",
        "He brought a dynamic, growth-focused approach and began exploring international markets such as UAE, Saudi Arabia, and the Middle East.",
      ],
    },
    {
      year: "Early 2000s",
      title: "Introducing Plastic Sprinklers",
      points: [
        "Entered the 1/2” and 3/4” plastic sprinkler segment.",
        "Enhanced design and flow accuracy to match international brands.",
        "Continued to strengthen their OEM manufacturing reputation.",
      ],
    },
    {
      year: "2007",
      title: "Entry into Brass Sprinklers",
      points: [
        "Due to demand from Saudi Arabia, UAE, and Middle Eastern markets, the company began manufacturing brass sprinklers.",
        "Adopted a hybrid model: Casting on job-work, Machining and assembly in-house.",
        "This move positioned Vidhi Enterprises as a versatile supplier offering both plastic and brass models.",
      ],
    },
    {
      year: "2010",
      title: "Launch of High-Capacity Sprinklers",
      points: [
        "Introduced the 1-1/4” rain sprinkler with an impressive 48-meter diameter coverage.",
        "Expanded into larger formats, developing: 1-1/4” rain silver sprinklers, 1-1/2” rain gold sprinklers, 2” rain violet sprinklers.",
      ],
    },
    {
      year: "2018",
      title: "Third Generation Joins: Mr. Vibhor Jain",
      points: [
        "Mr. Vibhor Jain, the founder’s grandson, joined the company in 2018.",
        "Mastered operations and expanded into international markets, focusing especially on Africa.",
        "Under his efforts, Vidhi Enterprises entered Kenya, achieving strong market success by 2024.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f7fa]">
      <Navbar />
      
      <header className="bg-gradient-to-r from-[#0f4c75] via-[#2c7da0] to-[#4a90e2] text-white py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading animate-fadeInUp">Our Journey</h1>
          <p className="text-xl lg:text-2xl font-light opacity-90 max-w-3xl mx-auto animate-fadeInUp delay-200">
            From a One-Room Beginning to a Global Irrigation Components Manufacturer
          </p>
        </div>
      </header>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0f4c75] to-[#4a90e2] -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16">
            {milestones.map((item, i) => (
              <div key={i} className={`relative flex items-center justify-between md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className="w-full md:w-[45%] bg-white p-8 rounded-2xl shadow-xl border border-blue-50 hover:-translate-y-2 transition-all duration-500 group">
                  <div className="text-3xl font-bold text-[#0f4c75] mb-4 group-hover:scale-105 transition-transform origin-left">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-[#2c7da0] mb-6">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start text-gray-700 leading-relaxed">
                        <span className="text-[#4a90e2] mr-2 mt-1 shrink-0 text-xs">▶</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#4a90e2] border-4 border-white rounded-full shadow-lg z-10 hidden md:block"></div>
                
                {/* Spacer */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f4c75] mb-12 font-heading">⭐ Today — A Legacy Continuing Forward</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "fa-cogs", title: "Precision Engineering" },
              { icon: "fa-handshake", title: "OEM Expertise" },
              { icon: "fa-star", title: "Technical Excellence" },
              { icon: "fa-chart-line", title: "Sustainable Growth" },
              { icon: "fa-users", title: "Strong Family Leadership" },
              { icon: "fa-shield-alt", title: "Trust Built Over Decades" },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-blue-50 border border-blue-100 hover:shadow-lg transition-all">
                <i className={`fas ${item.icon} text-4xl text-[#4a90e2] mb-4`}></i>
                <h3 className="text-xl font-bold text-[#0f4c75]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default JourneyPage;
