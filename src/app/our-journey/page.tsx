"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

const JourneyPage = () => {
  const milestones = [
    {
      year: "Early 1980s",
      title: "The Beginning of a Vision",
      points: [
        "Vidhi Enterprises was founded by Late Shri Dhirendar Kumar Jain (Bauji), an engineer, architect and perfectionist by nature.",
        "He began operations from his home with just one helper and a clear vision to bring precision and reliability to irrigation components.",
        "In the early 1980s, he started manufacturing connectors and supplying them on an OEM and white-label basis, much before OEM manufacturing became an industry norm.",
        "His discipline, technical knowledge and attention to detail quickly earned the trust of dealers and manufacturers alike.",
      ],
    },
    {
      year: "1983",
      title: "Entry into Emitters",
      points: [
        "With growing demand and a strong interest in micro-irrigation engineering, the company expanded into emitter manufacturing around 1983.",
        "The focus was on precise flow rates, discharge accuracy and uniform discharge diameter the most critical factors in high-performance emitters and sprinklers.",
        "This deep focus on flow control became the foundation of Vidhi Enterprises' reputation for quality.",
      ],
    },
    {
      year: "1983–1988",
      title: "Expanding Home-Based Manufacturing",
      points: [
        "Began with one semi-automatic hand moulding machine.",
        "Within five years, expanded to three semi-automatic hand moulding machines.",
        "Manufacturing volumes grew steadily due to increasing OEM demand and the accuracy-driven approach earned industry-wide respect.",
      ],
    },
    {
      year: "1990s",
      title: "The First Major Expansion",
      points: [
        "With rising bulk orders and the need for higher precision manufacturing:",
        "Transitioned to fully automatic injection moulding machines.",
        "Installed the company's first pipe extrusion line.",
        "Established an in-house tool room a rare capability for small manufacturers at that time.",
        "Strengthened OEM partnerships with leading irrigation brands across India.",
      ],
    },
    {
      year: "1995",
      title: "Operating at Full Capacity",
      points: [
        "By 1995, Vidhi Enterprises had established a strong manufacturing base with: Two extrusion lines, Six automatic injection moulding machines, Three semi-automatic moulding machines, A fully equipped in-house tool room, A skilled workforce operating at full production capacity.",
        "This year marked a major milestone with the entry of Mr. Vineet Jain, the founder's son, into the business.",
        "He introduced a growth-oriented mindset and began exploring international markets such as the UAE, Saudi Arabia and the wider Middle East.",
      ],
    },
    {
      year: "Early 2000s",
      title: "Introduction of Plastic Sprinklers",
      points: [
        "Entered the 1/2\" and 3/4\" plastic sprinkler segment.",
        "Improved product design and flow accuracy to match international quality benchmarks.",
        "Continued to strengthen the company's reputation as a reliable OEM manufacturer.",
      ],
    },
    {
      year: "2007",
      title: "Entry into Brass Sprinklers",
      points: [
        "In response to strong demand from Saudi Arabia, the UAE, and Middle Eastern markets, the company began manufacturing brass sprinklers.",
        "Adopted a hybrid manufacturing model with casting done through job-work and machining and assembly handled in-house.",
        "This expansion positioned Vidhi Enterprises as a versatile supplier of both plastic and brass irrigation components.",
      ],
    },
    {
      year: "2007",
      title: "Introduction of Gravity Die Casting",
      points: [
        "Implemented gravity die casting to enhance quality control and consistency in brass components.",
        "Enabled the production of stronger, more durable sprinkler bodies and nozzles.",
        "Improved long-term performance and reliability of brass irrigation products.",
      ],
    },
    {
      year: "2010",
      title: "Launch of High-Capacity Rain Sprinklers",
      points: [
        "Introduced the 1-1/4\" rain sprinkler with up to 48-meter diameter coverage.",
        "Expanded into large-format sprinklers, including: 1-1/4\" rain silver sprinklers, 1-1/2\" rain gold sprinklers, 2\" rain violet sprinklers.",
        "These developments strengthened the company's position as a technically advanced irrigation manufacturer.",
      ],
    },
    {
      year: "2018",
      title: "Third Generation Joins the Business",
      points: [
        "Mr. Vibhor Jain, the founder's grandson, joined Vidhi Enterprises in 2018.",
        "He began with hands-on training on the factory floor, learning production processes, moulding, flow testing and quality control.",
        "After mastering operations, he focused on international expansion, particularly in African markets.",
        "Under his leadership, the company entered Kenya and achieved strong market success by 2024.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f7fa]">
      <Navbar />
      
      <header className="relative h-[45vh] min-h-[450px] flex items-center justify-center text-center text-white overflow-hidden">
         <Image
          src="https://d170mw2nhcb1v0.cloudfront.net/img/journey.png"
          alt="Our Journey Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading animate-fadeInUp text-green-900 drop-shadow-lg">Our Journey</h1>
          <nav className="flex justify-center mb-6 animate-fadeInUp delay-100">
            <ol className="flex items-center space-x-2 bg-white/20 px-6 backdrop-blur-sm py-2 rounded-full font-bold">
              <li><Link href="/" className="hover:text-primary transition text-green-900">Home</Link></li>
              <li><i className="fa fa-chevron-right mx-2 text-[10px] text-green-900"></i></li>
              <li className="text-green-700">Our Journey</li>
            </ol>
          </nav>
          <p className="text-xl lg:text-2xl font-light opacity-90 max-w-3xl mx-auto animate-fadeInUp delay-200 text-blue-900">
            From a one-room beginning to a global irrigation components manufacturer
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
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full md:w-[45%] bg-white p-8 rounded-2xl shadow-xl border border-blue-50 hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div className="text-3xl font-bold text-[#0f4c75] mb-4 group-hover:scale-105 transition-transform origin-left">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-[#2c7da0] mb-6">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start text-blue-900 leading-relaxed">
                        <span className="text-[#4a90e2] mr-2 mt-1 shrink-0 text-xs">▶</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#4a90e2] border-4 border-white rounded-full shadow-lg z-10 hidden md:block"></div>
                
                {/* Spacer */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#0f4c75] mb-8 font-heading">Today A Legacy Moving Forward</h2>
          <p className="text-xl text-center text-green-900 max-w-4xl mx-auto mb-12">
            From a single helper and a hand moulding machine to a multi-generational global enterprise, the journey of Vidhi Enterprises has been shaped by:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "fa-cogs", title: "Precision Engineering" },
              { icon: "fa-handshake", title: "Strong OEM Expertise" },
              { icon: "fa-star", title: "Technical Excellence" },
              { icon: "fa-chart-line", title: "Sustainable and Steady Growth" },
              { icon: "fa-users", title: "Family-Led Leadership" },
              { icon: "fa-shield-alt", title: "Trust Built Over Decades" },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-blue-50 border border-blue-100 hover:shadow-lg transition-all text-center">
                <i className={`fas ${item.icon} text-4xl text-[#4a90e2] mb-4`}></i>
                <h3 className="text-xl font-bold text-[#0f4c75]">{item.title}</h3>
              </div>
            ))}
          </div>
          <p className="text-xl text-center text-green-900 max-w-4xl mx-auto">
            Today, Vidhi Enterprises is a trusted global supplier of drip irrigation, sprinkler systems and micro-irrigation components, serving markets across the Middle East, Africa, and Asia.
          </p>
        </div>
      </section>

      {/* The Road Ahead Section */}
      <section className="py-24 bg-gradient-to-r from-[#0f4c75] to-[#2c7da0] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 font-heading">The Road Ahead</h2>
          <p className="text-xl max-w-4xl mx-auto mb-12 opacity-90">
            With continuous innovation, upgraded manufacturing infrastructure and a strong commitment to water efficiency, Vidhi Enterprises aims to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[
              "Expand its global footprint",
              "Introduce advanced and efficient irrigation technologies",
              "Strengthen OEM and private-label partnerships worldwide",
              "Uphold the legacy of Late Shri D.K. Jain through uncompromised quality, honesty and precision",
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-xl max-w-4xl mx-auto italic opacity-90">
            Our journey continues, rooted in family values, driven by engineering excellence and committed to building a water-efficient future for global agriculture.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default JourneyPage;
