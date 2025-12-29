"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const KnowledgeHubPage = () => {
  const [openIndex, setOpenOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Why is my dripper not giving proper water?",
      a: "Reasons may be: Clogging due to dirt, low or high pressure, pipe bending, or air-lock in the system. Solution: Clean the filter regularly and flush the laterals.",
    },
    {
      q: "What is a venturi injector? Why is it used?",
      a: "A venturi injector is a device used to apply fertilizers through the irrigation system. It works on pressure differences and saves time & labor.",
    },
    {
      q: "What is the difference between sprinkler and rain gun?",
      a: "Sprinkler: Used for small to medium fields; uniform water distribution. Rain Gun: Covers large areas (up to 60–80 meters radius) and is useful for crops like sugarcane, fodder, groundnut, potato.",
    },
    {
      q: "How to prevent clogging in drip systems?",
      a: "Clean sand & screen filters weekly, flush lateral pipes, use clean water, use fertigation only with proper filtration, and install air release valves.",
    },
    {
      q: "Why are filters important in irrigation systems?",
      a: "Filters remove sand, mud, and other particles. Without filters, drippers and nozzles get blocked easily.",
    },
    {
      q: "What are micro sprinklers?",
      a: "Micro sprinklers are small sprinklers used for nurseries, orchards, and vegetables. They save water and give gentle irrigation.",
    },
    {
      q: "Do drip systems increase crop yield?",
      a: "Yes! Drip irrigation provides uniform water, reduces water stress, and allows efficient fertigation. Overall yield can increase by 20–60%.",
    },
    {
      q: "Why is my pipe bursting or leaking?",
      a: "Possible reasons: High pressure, poor quality pipes, wrong installation, or not using clamps or grommets properly. Solution: Use ISI-quality products and proper fittings.",
    },
    {
      q: "What is an air release valve? Why do we need it?",
      a: "It releases trapped air from pipes during irrigation. Prevents bursting, improves water flow, and protects pump and pipelines.",
    },
    {
      q: "Does drip irrigation reduce electricity cost?",
      a: "Yes! It requires less water and shorter pump running time, saving 30–50% electricity.",
    },
    {
      q: "Can I use drip irrigation for polyhouse farming?",
      a: "Yes, it is the best method for polyhouse crops like capsicum, cucumber, strawberry, tomato.",
    },
    {
      q: "What is drip irrigation?",
      a: "Drip irrigation is a system where water is supplied slowly and directly to the root zone of the plant. It saves water (up to 60–70%), increases yield, and reduces weed growth.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <header className="h-[45vh] min-h-[450px] bg-gradient-to-br from-black/60 to-black/70 flex items-center justify-center text-center text-white relative mt-2 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-blend-overlay">
        <div className="container mx-auto px-4 animate-fadeIn">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading drop-shadow-lg">Knowledge Hub</h1>
          <p className="text-xl lg:text-3xl max-w-3xl mx-auto font-light tracking-wide opacity-90">
            Expert Answers to Your Irrigation Questions
          </p>
        </div>
      </header>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#0e3d27] mb-16 font-heading relative after:content-[''] after:block after:w-32 after:h-1 after:bg-[#9c7a3a] after:mx-auto after:mt-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#f8fdfa] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-green-50">
                <button 
                  onClick={() => setOpenOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left bg-[#1a5f3d] text-white hover:bg-[#0e3d27] transition-colors"
                >
                  <span className="text-xl font-bold">{faq.q}</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}></i>
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-[500px] p-8 opacity-100' : 'max-h-0 p-0 opacity-0'}`}>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default KnowledgeHubPage;