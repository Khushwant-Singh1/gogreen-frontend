import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

const LegacyLeaderPage = () => {
  const generations = [
    {
      badge: "First Generation — The Visionary",
      name: "Late Shri Dhirendar Kumar Jain (D.K. Jain)",
      title: "Founder – Engineer, Architect & Precision Expert",
      img: "/img/dada-ji.png",
      points: [
        "Pioneer in OEM and white-label production for irrigation brands.",
        "Known for unmatched mastery in flow discharge, emitter accuracy, and sprinkler performance.",
        "Built the foundation of the company’s manufacturing and engineering capabilities.",
        "Expanded production from hand moulding machines to automatic injection moulding lines, extruders, and a full tool room.",
        "Inspired future generations through discipline, honesty, and technical excellence.",
      ],
      quote: "“I named this company Vidhi because Vidhi means the right way — the right way of doing any work. My vision was simple: make every product with honesty, precision, and discipline. When the way is right, the results will always be right...”",
      theme: "blue"
    },
    {
      badge: "Second Generation — Expansion Leader",
      name: "Mr. Vineet Jain",
      title: "Driving Growth, Modernization & Global Markets",
      img: "/img/vineet-jain.png",
      points: [
        "Joining in 1995 — propelled Vidhi into technological upgrades",
        "Introduced plastic & brass sprinkler manufacturing",
        "Started gravity die casting & large-format rain sprinklers",
        "Led entry into UAE, Saudi Arabia, Qatar, Oman & Middle East markets",
        "Strengthened OEM partnerships across India",
        "Ensured founder’s values remain at the core of every decision",
      ],
      quote: "“My focus has always been on quality, consistency, and long-term relationships — values my father lived by. From expanding our product range to entering international markets, every step has been driven by the belief that farmers and partners deserve the best.”",
      theme: "green"
    },
    {
      badge: "Third Generation — Future-Ready Vision",
      name: "Mr. Vibhor Jain",
      title: "Innovation, Global Strategy & Next-Gen Precision",
      img: "/img/vibhor-jain.png",
      points: [
        "Started on the factory floor — learned every technical detail hands-on",
        "Led African market expansion — major success in Kenya (2024)",
        "Modernized digital presence & brand identity",
        "Improved export packaging, documentation & global compliance",
        "Upgraded product lines to latest international standards",
        "Building new distributor networks worldwide",
      ],
      quote: "“The vision my grandfather started in the early 80s lives through every decision I make. I am committed to preserving his values while shaping Vidhi Enterprises into a global name built on quality, trust, and engineering excellence.”",
      theme: "purple"
    }
  ];

  const themeClasses: Record<string, string> = {
    blue: "bg-gradient-to-br from-blue-600 to-blue-400",
    green: "bg-gradient-to-br from-green-600 to-green-400",
    purple: "bg-gradient-to-br from-purple-600 to-purple-400"
  };

  return (
    <main className="min-h-screen bg-[#fdfbf5]">
      <Navbar />
      
      <header className="bg-gradient-to-r from-[#8B4513] via-[#D2691E] to-[#DEB887] text-white py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 animate-fadeInUp">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading">⭐ Legacy & Leadership</h1>
          <p className="text-xl lg:text-2xl font-light opacity-90 tracking-wide">
            Three Generations. One Vision. Endless Commitment to Quality.
          </p>
        </div>
      </header>

      <section className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#8B4513] mb-8 font-heading">🌿 A Legacy Built on Precision & Integrity</h2>
          <p className="text-xl text-[#5d4037] leading-relaxed mb-8 italic border-l-4 border-[#D2691E] pl-8">
            Vidhi Enterprises was built on the dedication and engineering brilliance of Late Shri Dhirendar Kumar Jain (D.K. Jain) — an engineer, architect, and visionary whose passion for accuracy changed the way micro-irrigation components were made in India.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Starting in the early 1980s with just one helper and a small home-based setup, he transformed a simple idea into a respected manufacturing enterprise. His legacy lives in every product we create — the insistence on perfect flow rate, consistent discharge, accurate dimensions, and the belief that precision is the soul of irrigation technology.
          </p>
        </div>
      </section>

      <section className="py-12 space-y-32">
        {generations.map((gen, i) => (
          <div key={i} className="container mx-auto px-4">
            <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-orange-50/50">
              <div className="flex flex-col lg:flex-row items-stretch">
                <div className={`p-8 lg:p-16 flex-1 space-y-8`}>
                  <div className={`inline-block px-8 py-3 rounded-full text-white font-bold text-lg shadow-lg ${themeClasses[gen.theme]}`}>
                    {gen.badge}
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#3d2b1f] font-heading">{gen.name}</h2>
                  <p className="text-xl text-[#8B4513] italic font-medium tracking-wide">{gen.title}</p>
                  
                  <ul className="space-y-4">
                    {gen.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start text-gray-700 text-lg leading-relaxed">
                        <span className="text-[#D2691E] mr-4 mt-1">✔</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-[#f5f5dc] p-10 rounded-3xl border-l-8 border-[#D2691E] shadow-inner mt-12 italic text-xl text-[#5d4037] leading-relaxed relative">
                    <span className="absolute top-4 left-4 text-6xl text-[#D2691E]/20 font-serif">&ldquo;</span>
                    {gen.quote}
                  </div>
                </div>
                
                <div className="lg:w-1/3 bg-gradient-to-b from-[#f5f5dc] to-white flex items-center justify-center p-12 lg:border-l border-orange-50">
                  <div className="relative w-full aspect-[3/4] max-w-[320px] rounded-[160px] overflow-hidden border-4 border-white shadow-2xl">
                    <Image
                      src={gen.img}
                      alt={gen.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-32 bg-[#8B4513] text-white text-center mt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/img/design-5.png')] bg-repeat bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-white font-heading">🌎 Leadership Philosophy</h2>
          <p className="text-3xl max-w-4xl mx-auto leading-relaxed font-light mb-12 italic">
            &quot;Build products that last. Build relationships that trust. Build a company that stands the test of time.&quot;
          </p>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Together, we lead the company toward becoming a global benchmark in micro-irrigation technology — rooted in family values, driven by engineering excellence, and committed to a water-efficient future.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LegacyLeaderPage;