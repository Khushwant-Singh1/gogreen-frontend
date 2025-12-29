import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CareersPage = () => {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      
      <header className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6] text-white py-32 text-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 animate-fadeInUp">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading">👥 Careers</h1>
          <p className="text-xl lg:text-2xl font-light opacity-95 max-w-3xl mx-auto">
            Join a Legacy of Engineering, Integrity & Growth
          </p>
        </div>
      </header>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#1e40af] mb-12 font-heading relative after:content-[''] after:block after:w-32 after:h-1 after:bg-[#3b82f6] after:mx-auto after:mt-4">
            Why Work With Us?
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-4xl mx-auto mb-20 leading-relaxed italic">
            At Vidhi Enterprises, we believe people are the strength behind every milestone we achieve. For over four decades, our company has been built by individuals who value precision, honesty, teamwork, and excellence — the same values our founder lived by.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "fa-history", title: "1. A Legacy of 40+ Years", desc: "Be part of a company built on strong principles, consistent growth, and engineering excellence." },
              { icon: "fa-graduation-cap", title: "2. Learning-Focused Environment", desc: "From moulding and production to quality testing and export management — every team member gets opportunities to learn, evolve, and upskill." },
              { icon: "fa-globe", title: "3. Exposure to Global Markets", desc: "Work with clients and partners from the Middle East, Africa, and Asia and learn how international business works." },
              { icon: "fa-shield-alt", title: "4. Stable, Ethical & Value-Driven Workplace", desc: "Built on trust, the company culture is rooted in honesty, discipline, and respect for every employee." },
              { icon: "fa-tools", title: "5. Innovation & Modern Manufacturing", desc: "Get hands-on experience with advanced moulding, extrusion, tool room systems, die casting, and quality labs." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-xl border border-blue-50 hover:-translate-y-3 transition-all duration-500 group text-center">
                <i className={`fas ${item.icon} text-5xl text-[#3b82f6] mb-6 animate-float`}></i>
                <h3 className="text-xl font-bold text-[#1e40af] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#dbeafe]/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#1e40af] mb-16 font-heading">Current Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Production & Operations", roles: ["Machine Operators", "Production Supervisors", "Quality Control Assistants", "Tool Room Technicians", "Assembly Line Workers"] },
              { title: "Office & Management", roles: ["Accounts Executive", "Marketing Coordinator", "Export Documentation", "Inventory & Store Management"] },
              { title: "Field & Technical", roles: ["Service Technician", "Field Support Engineer", "Irrigation Trainer"] },
              { title: "Internships", roles: ["Engineering Intern", "Marketing Intern", "Supply Chain Intern"] },
            ].map((cat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#3b82f6]">
                <h3 className="text-2xl font-bold text-[#1e40af] mb-6 pb-2 border-b border-blue-100">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.roles.map((role, rIdx) => (
                    <li key={rIdx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3 shrink-0"></span>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold mb-10 font-heading text-white">How to Apply</h2>
          <p className="text-2xl font-light mb-12 max-w-2xl mx-auto">
            Email your resume to:<br />
            <strong className="text-3xl lg:text-4xl block mt-4 font-bold">careers@vidhienterprises.com</strong>
          </p>
          <a href="mailto:careers@vidhienterprises.com" className="inline-block bg-white text-[#1e40af] px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:scale-110 hover:shadow-white/20 transition-all animate-pulse">
            Send Your Resume
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CareersPage;