import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SustainabilityPage = () => {
  return (
    <main className="min-h-screen bg-[#f8f9f5]">
      <Navbar />
      
      <header className="relative bg-gradient-to-br from-[#1b4332] via-[#2d6a4f] to-[#40916c] text-white py-32 text-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 animate-fadeInUp">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading">Sustainability Commitment</h1>
          <p className="text-xl lg:text-2xl font-light opacity-95 max-w-3xl mx-auto">
            Efficient Irrigation. Responsible Manufacturing. A Greener Future.
          </p>
        </div>
      </header>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#2d6a4f] mb-12 font-heading relative after:content-[''] after:block after:w-32 after:h-1 after:bg-[#40916c] after:mx-auto after:mt-4">
            Our Vision for Sustainability
          </h2>
          <p className="text-xl text-center text-[#2d6a4f] max-w-4xl mx-auto mb-20 leading-relaxed italic">
            At Vidhi Enterprises, sustainability is not an initiative — it is a responsibility we carry forward from our founder’s values and through each generation. We believe that <strong>water is life</strong>, and using it wisely is the key to a sustainable agricultural future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "1. Water-Efficient Products", 
                text: "Our drip irrigation, sprinklers, emitters, valves, and fittings are engineered to deliver uniform flow, reduce wastage, improve field distribution, and work perfectly even in water-scarce regions — maximizing crop yield per drop." 
              },
              { 
                title: "2. Sustainable Manufacturing Practices", 
                text: "Recyclable-grade materials, optimized injection moulding, energy-efficient machines, in-house tool room for longer mould life, and strict waste-reduction processes — producing quality without harming the planet." 
              },
              { 
                title: "3. Supporting Farmers for a Better Tomorrow", 
                text: "Durable, reliable, and affordable components that help farmers irrigate smarter, increase productivity, reduce maintenance, and grow more with less water — honouring our founder’s belief that helping farmers means helping the nation." 
              },
              { 
                title: "4. Long-Lasting, High-Quality Components", 
                text: "Stronger products = fewer replacements = less waste = lower environmental burden and higher savings for farmers. Every batch is rigorously tested for flow, strength, accuracy, and longevity." 
              },
              { 
                title: "5. Commitment to Continuous Improvement", 
                text: "Investing in R&D for eco-efficient technologies, reducing carbon footprint, exploring new sustainable materials, and constantly modernising processes for minimal waste — we aim to be better every year." 
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-lg border border-green-50 hover:-translate-y-3 transition-all duration-500 group">
                <h3 className="text-2xl font-bold text-[#2d6a4f] mb-6 group-hover:text-[#1b4332]">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-[#1b4332] to-[#2d6a4f] text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 font-heading">Our Promise</h2>
          <p className="text-2xl mb-16 opacity-90 italic">We want to leave behind a system that supports:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "fa-users", title: "Farmers" },
              { icon: "fa-child", title: "Future Generations" },
              { icon: "fa-globe", title: "The Environment" },
              { icon: "fa-seedling", title: "Sustainable Agriculture Globally" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl hover:bg-white/20 transition-all border border-white/10">
                <i className={`fas ${item.icon} text-5xl mb-6 text-[#95d5b2]`}></i>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
            ))}
          </div>

          <p className="text-2xl lg:text-3xl max-w-4xl mx-auto mt-20 font-light leading-relaxed">
            <strong>Vidhi Enterprises</strong> will continue to design products that honour water, respect nature, and build a greener tomorrow — one precise drop at a time.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SustainabilityPage;
