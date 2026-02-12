import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const SustainabilityPage = () => {
  const pillars = [
    {
      title: "1. Water-Efficient Products",
      intro: "Our drip irrigation systems, sprinklers, emitters, valves and fittings are carefully engineered to:",
      points: [
        "Deliver consistent and uniform water flow",
        "Minimise water wastage",
        "Improve overall field water distribution",
        "Perform efficiently in harsh and varied climates",
        "Support farming in water-scarce regions",
      ],
      footer: "Each product is designed with a single purpose of maximising crop output per drop of water.",
      icon: "fa-tint",
    },
    {
      title: "2. Sustainable Manufacturing Practices",
      intro: "We follow responsible and controlled manufacturing processes to reduce environmental impact:",
      points: [
        "Use of recyclable-grade plastics and metals",
        "Optimised injection moulding to minimise material waste",
        "Regular machine calibration to prevent overconsumption",
        "In-house tool room for extended mould life and reduced scrap",
        "Energy-efficient machinery with controlled power usage",
      ],
      footer: "Our focus is to deliver high-quality irrigation components while protecting the environment.",
      icon: "fa-industry",
    },
    {
      title: "3. Supporting Farmers for a Better Tomorrow",
      intro: "Our founder believed that supporting farmers strengthens the nation. This belief continues to guide our operations. We honour this vision by:",
      points: [
        "Supplying durable and reliable irrigation products",
        "Ensuring long product life with low maintenance",
        "Delivering consistent field performance",
        "Keeping products affordable without compromising quality",
        "Enabling farmers to irrigate smarter and work more efficiently",
      ],
      footer: "Sustainability begins on the farm, and we stand alongside every farmer who trusts our solutions.",
      icon: "fa-users",
    },
    {
      title: "4. Long-Lasting and High-Quality Components",
      intro: "Durability plays a vital role in sustainable agriculture. Stronger components result in:",
      points: [
        "Reduced replacement frequency",
        "Lower waste generation",
        "Decreased environmental impact",
        "Greater cost savings for farmers and installers",
      ],
      footer: "Each production batch is tested for flow accuracy, discharge consistency, strength, and long-term performance.",
      icon: "fa-shield-alt",
    },
    {
      title: "5. Commitment to Continuous Improvement",
      intro: "We believe sustainability requires constant progress. Our efforts basically focus on:",
      points: [
        "Investing in research and development for eco-efficient technologies",
        "Reducing carbon footprint across manufacturing processes",
        "Enhancing product designs for improved water savings",
        "Exploring sustainable and advanced raw materials",
        "Modernising production methods to minimise waste",
      ],
      footer: "Our objective is continuous improvement, year after year.",
      icon: "fa-chart-line",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f9f5]">
      <Navbar />

      <header className="relative h-[45vh] min-h-[450px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="https://d170mw2nhcb1v0.cloudfront.net/img/sc.png"
          alt="Sustainability Commitment Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 animate-fadeInUp">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading text-green-900 drop-shadow-lg">Sustainability Commitment</h1>
          <nav className="flex justify-center mb-6">
            <ol className="flex items-center space-x-2 bg-white/20 px-6 backdrop-blur-sm py-2 rounded-full font-bold">
              <li><Link href="/" className="hover:text-primary transition text-green-900">Home</Link></li>
              <li><i className="fa fa-chevron-right mx-2 text-[10px] text-green-900"></i></li>
              <li className="text-green-700">Sustainability</li>
            </ol>
          </nav>
          <p className="text-xl lg:text-2xl font-light opacity-95 max-w-3xl mx-auto text-blue-900">
            Efficient Irrigation | Responsible Manufacturing | A Greener Future
          </p>
        </div>
      </header>

      {/* Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-6 text-lg text-green-900 leading-relaxed text-center">
            <p>
              At Vidhi Enterprises, sustainability is not a campaign or a trend instead, it is a <strong>responsibility</strong> shaped by our founder's vision and carried forward across generations.
            </p>
            <p>
              We believe that <strong>water is life</strong> and responsible water use is the foundation of sustainable agriculture.
            </p>
            <p className="text-[#2d6a4f] font-medium text-xl">
              Our commitment is clear: to design and manufacture irrigation components that conserve water, reduce energy consumption and help farmers achieve higher productivity with fewer resources.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 bg-gradient-to-br from-[#e8f5e9] to-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-5xl mx-auto">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="hidden md:flex w-16 h-16 bg-gradient-to-br from-[#2d6a4f] to-[#40916c] rounded-2xl items-center justify-center flex-shrink-0">
                    <i className={`fas ${pillar.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-900 mb-4">{pillar.title}</h3>
                    <p className="text-blue-900 mb-4">{pillar.intro}</p>
                    <ul className="space-y-2 mb-4">
                      {pillar.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start text-blue-900">
                          <span className="text-[#40916c] mr-3 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <p className="text-green-900 font-medium italic">{pillar.footer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-32 bg-gradient-to-br from-[#1b4332] to-[#2d6a4f] text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 font-heading">Our Promise</h2>
          <p className="text-2xl mb-16 opacity-90 italic">We aim to build irrigation systems that support:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "fa-users", title: "Farmers" },
              { icon: "fa-child", title: "Future Generations" },
              { icon: "fa-globe", title: "The Environment" },
              { icon: "fa-seedling", title: "Sustainable Agriculture Worldwide" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl hover:bg-white/20 transition-all border border-white/10">
                <i className={`fas ${item.icon} text-5xl mb-6 text-[#95d5b2]`}></i>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
            ))}
          </div>

          <p className="text-2xl lg:text-3xl max-w-4xl mx-auto mt-20 font-light leading-relaxed">
            <strong>Vidhi Enterprises</strong> remains committed to developing products that respect water, protect nature and contribute to a greener future.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SustainabilityPage;
