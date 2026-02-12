import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

const LegacyLeaderPage = () => {
  const founderValues = [
    { icon: "fa-cogs", title: "Precision Engineering", desc: "Every emitter, connector and sprinkler must perform consistently in the field." },
    { icon: "fa-handshake", title: "Integrity First", desc: "Long-term relationships matter more than short-term gains." },
    { icon: "fa-star", title: "Commitment to Quality", desc: "No compromises at any stage." },
    { icon: "fa-graduation-cap", title: "Continuous Learning", desc: "Adapting with evolving technology." },
    { icon: "fa-briefcase", title: "Hard Work and Discipline", desc: "Growth is earned through dedication." },
  ];

  const generations = [
    {
      badge: "1st Generation The Visionary",
      name: "Late Shri Dhirendar Kumar Jain (D.K. Jain)",
      title: "Founder – Engineer, Architect and Precision Specialist",
      img: "https://d170mw2nhcb1v0.cloudfront.net/img/canva2.png",
      points: [
        "Pioneer in OEM and white-label manufacturing for irrigation brands.",
        "Renowned for deep expertise in flow discharge accuracy and sprinkler performance.",
        "Established the company's core manufacturing and engineering foundation.",
        "Expanded operations from manual moulding to automated injection moulding, extrusion lines and a fully equipped tool room.",
        "Inspired future generations through discipline, honesty and technical mastery.",
      ],
      imageCaption: "The man who built Vidhi from a single room with precision, honesty and discipline is the foundation of everything we stand for today.",
      quote: "I named this company Vidhi because Vidhi means \"the right way\" the right way of doing any work. My vision was simple: manufacture every product with honesty, precision and discipline. When the process is right, the results will always follow. I wanted our work to support farmers by providing reliable and durable irrigation products that make farming easier and fields more productive.",
      quoteLabel: "Founder's Words",
      theme: "blue"
    },
    {
      badge: "2nd Generation The Expansion Leader",
      name: "Mr. Vineet Jain",
      title: "Driving Growth, Modernisation, and Global Expansion",
      img: "https://d170mw2nhcb1v0.cloudfront.net/img/canva3.png",
      intro: "Joining the business in 1995, he led Vidhi Enterprises into a phase of structured growth and international presence through:",
      points: [
        "Technological advancements",
        "Expansion into global markets",
        "Plastic and brass sprinkler manufacturing",
        "Gravity die casting capabilities",
        "Development of large-format rain sprinklers",
        "Strengthening OEM partnerships across India",
      ],
      extraText: "Under his leadership, the company expanded into international markets including the UAE, Saudi Arabia, Qatar, Oman and the wider Middle East. He ensured that the founder's principles remained central to every operational and strategic decision.",
      imageCaption: "Expanding the founder's vision through global reach, innovation and lasting partnerships.",
      quote: "I joined Vidhi Enterprises with the responsibility of carrying my father's vision forward and preparing the company for a global future. My focus has always been on quality, consistency and long-term relationships the values he believed in. Every expansion, every product addition and every international step has been guided by the belief that farmers and partners deserve the very best. I remain committed to strengthening this legacy and ensuring Vidhi stands for trust wherever we operate.",
      quoteLabel: "Leadership Message",
      theme: "green"
    },
    {
      badge: "3rd Generation The Future-Ready Vision",
      name: "Mr. Vibhor Jain",
      title: "Innovation, Global Strategy and Next-Generation Precision",
      email: "vibhor@vidhienterprises.com",
      img: "https://d170mw2nhcb1v0.cloudfront.net/img/canva1.png",
      intro: "Joining the company in 2018, he began his journey on the factory floor, gaining hands-on experience in production, moulding, testing and quality control. Before representing Vidhi Enterprises globally, he immersed himself in the company's technical foundation. His key contributions include:",
      points: [
        "Expansion into African markets, with significant success in Kenya in 2024",
        "Strengthening the brand's digital presence and identity",
        "Enhancing export packaging, documentation and regulatory compliance",
        "Modernising product lines to meet international standards",
        "Building new distributor and partner networks",
      ],
      extraText: "He represents the future of Vidhi Enterprises by blending tradition with innovation.",
      imageCaption: "Carrying forward a three-generation legacy with fresh ideas, new markets and the same commitment to quality.",
      quote: "The vision my grandfather began in the early 1980s continues to guide every decision I make. I am committed to preserving his values while building Vidhi Enterprises into a globally recognised name defined by quality, trust, and engineering excellence.",
      quoteLabel: "Vision Statement",
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
      
      <header className="relative h-[45vh] min-h-[450px] flex items-center justify-center text-center text-white overflow-hidden">
         <Image
          src="https://d170mw2nhcb1v0.cloudfront.net/img/ll.png"
          alt="Legacy & Leadership Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 animate-fadeInUp">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading text-green-900 drop-shadow-lg">Legacy & Leadership</h1>
          <nav className="flex justify-center mb-6">
            <ol className="flex items-center space-x-2 bg-white/20 px-6 backdrop-blur-sm py-2 rounded-full font-bold">
              <li><Link href="/" className="hover:text-primary transition text-green-900">Home</Link></li>
              <li><i className="fa fa-chevron-right mx-2 text-[10px] text-green-900"></i></li>
              <li className="text-green-700">Legacy & Leadership</li>
            </ol>
          </nav>
          <p className="text-xl lg:text-2xl font-light tracking-wide text-blue-900">
            Three generations, one vision and endless commitment to quality.
          </p>
        </div>
      </header>

      {/* A Legacy Built on Precision & Integrity */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-[#1c9e1c] mb-12 font-heading">A Legacy Built on Precision & Integrity</h2>
          <div className="space-y-6 text-lg text-blue-900 leading-relaxed">
            <p>
              Vidhi Enterprises was founded on the vision, dedication and engineering excellence of Late Shri Dhirendar Kumar Jain (D.K. Jain) an engineer, architect and visionary whose passion for precision reshaped the manufacturing of micro-irrigation components in India.
            </p>
            <p>
              Beginning in the early 1980s with a single helper and a small home-based setup, he transformed a modest idea into a trusted manufacturing enterprise known for accuracy and reliability.
            </p>
            <p>
              His legacy lives on in every product we manufacture, from precise flow rates and uniform discharge to exact dimensions and consistent performance. He firmly believed that precision is the backbone of irrigation technology.
            </p>
            <p className="italic text-[#166616] border-l-4 border-[#1c9e1c] pl-6">
              His journey was not just about building a company, but about setting a benchmark of excellence that future generations would proudly uphold.
            </p>
          </div>

          {/* Founder's Values */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-[#1c9e1c] mb-8">Founder's Values That Guide Us Today</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {founderValues.map((value, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-green-50 text-center hover:-translate-y-2 transition-all duration-300">
                  <i className={`fas ${value.icon} text-3xl text-green-900 mb-4`}></i>
                  <h4 className="font-bold text-green-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-blue-900">{value.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-lg text-blue-900 mt-8">
              These values continue to define how Vidhi Enterprises operates every day.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Through Generations */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-[#1c9e1c] mb-16 font-heading">Leadership Through Generations</h2>
        </div>

        <div className="space-y-24">
          {generations.map((gen, i) => (
            <div key={i} className="container mx-auto px-4">
              <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-green-50/50 max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-stretch">
                  <div className="p-8 lg:p-12 flex-1 space-y-6">
                    <div className={`inline-block px-6 py-2 rounded-full text-white font-bold text-base shadow-lg ${themeClasses[gen.theme]}`}>
                      {gen.badge}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#3d2b1f] font-heading">{gen.name}</h2>
                    <p className="text-lg text-[#1c9e1c] italic font-medium">{gen.title}</p>
                    {gen.email && (
                      <a href={`mailto:${gen.email}`} className="text-blue-900 hover:text-[#1c9e1c] transition-colors inline-flex items-center mt-1 font-medium">
                        <i className="fas fa-envelope mr-2"></i>{gen.email}
                      </a>
                    )}
                    
                    {gen.intro && (
                      <p className="text-blue-900">{gen.intro}</p>
                    )}

                    <ul className="space-y-3">
                      {gen.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start text-blue-900 leading-relaxed">
                          <span className="text-[#1c9e1c] mr-3 mt-1">✔</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {gen.extraText && (
                      <p className="text-blue-900">{gen.extraText}</p>
                    )}

                    {i === 0 && (
                      <p className="text-blue-900 italic">His principles remain the heartbeat of Vidhi Enterprises.</p>
                    )}

                    <div className="bg-[#e8f5e9] p-8 rounded-2xl border-l-8 border-[#1c9e1c] shadow-inner mt-8">
                      <p className="text-sm font-bold text-[#1c9e1c] mb-3">{gen.quoteLabel}:</p>
                      <p className="italic text-lg text-[#166616] leading-relaxed">"{gen.quote}"</p>
                      {i === 2 && <p className="text-right mt-2 font-medium text-[#1c9e1c]">— Vibhor Jain</p>}
                    </div>
                  </div>
                  
                  <div className="lg:w-2/5 bg-gradient-to-b from-[#e8f5e9] to-white flex flex-col items-center justify-center p-8 lg:p-12 lg:border-l border-green-50">
                    <div className="relative w-full aspect-square max-w-[280px] rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6">
                      <Image
                        src={gen.img}
                        alt={gen.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-center text-sm text-[#166616] italic max-w-xs">{gen.imageCaption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-24 bg-[#1c9e1c] text-white text-center mt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://d170mw2nhcb1v0.cloudfront.net/img/design-5.png')] bg-repeat bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white font-heading">Leadership Philosophy</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Across three generations, Vidhi Enterprises is guided by one enduring belief:
          </p>
          <div className="text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed font-light mb-12 italic space-y-2">
            <p>"Build products that last,</p>
            <p>Build relationships based on trust,</p>
            <p>Build a company that stands the test of time."</p>
          </div>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Our leadership does more than manage operations they protect the company's legacy, uphold its standards and ensure growth that is sustainable and purposeful.
          </p>
        </div>
      </section>

      {/* Moving Forward with Purpose */}
      <section className="py-24 bg-gradient-to-br from-[#e8f5e9] to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1c9e1c] mb-8 font-heading">Moving Forward with Purpose</h2>
          <p className="text-xl text-blue-900 max-w-3xl mx-auto mb-12">
            Vidhi Enterprises continues to progress through the combined strength of:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
              <i className="fas fa-seedling text-4xl text-[#1c9e1c] mb-4"></i>
              <h3 className="font-bold text-[#1c9e1c] text-lg">The Founder's Principles</h3>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
              <i className="fas fa-balance-scale text-4xl text-[#1c9e1c] mb-4"></i>
              <h3 className="font-bold text-[#1c9e1c] text-lg">The Experience & Stability of the Second Generation</h3>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
              <i className="fas fa-rocket text-4xl text-[#1c9e1c] mb-4"></i>
              <h3 className="font-bold text-[#1c9e1c] text-lg">The Innovation & Energy of the Third Generation</h3>
            </div>
          </div>
          <p className="text-xl text-blue-900 max-w-4xl mx-auto italic">
            Together, they are shaping Vidhi Enterprises into a global benchmark in micro-irrigation technology, delivering dependable irrigation components trusted by farmers, contractors and industries worldwide.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LegacyLeaderPage;
