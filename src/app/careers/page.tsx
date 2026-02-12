import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers at Vidhi Enterprises - Join Leading Irrigation Manufacturing Company",
  description: "Join Vidhi Enterprises, a leading irrigation manufacturing company. Explore careers in drip irrigation production, sprinkler manufacturing, quality control, engineering & export operations. 40+ years of excellence.",
  keywords: [
    "irrigation company jobs",
    "drip irrigation manufacturer careers",
    "agricultural equipment jobs",
    "production jobs irrigation",
    "quality control careers",
    "export documentation jobs",
    "engineering internship irrigation",
    "manufacturing jobs India",
    "injection moulding jobs",
    "tool room technician jobs",
    "irrigation field engineer",
    "irrigation manufacturing company careers"
  ],
  openGraph: {
    title: "Career Opportunities at Vidhi Enterprises - Irrigation Manufacturing",
    description: "Join a 40+ year legacy in irrigation manufacturing. Opportunities in production, quality control, engineering & exports.",
    url: "https://vidhienterprises.com/careers",
    type: "website"
  },
  alternates: {
    canonical: "https://vidhienterprises.com/careers"
  }
};

const CareersPage = () => {
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Multiple Positions Available",
    "description": "Join Vidhi Enterprises - Leading irrigation manufacturing company with 40+ years of excellence",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Vidhi Enterprises",
      "sameAs": "https://vidhienterprises.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "employmentType": "FULL_TIME"
  };

  const whyWorkWithUs = [
    { icon: "fa-history", title: "A Legacy of 40+ Years", desc: "Join an organization built on strong principles, consistent progress and a deep commitment to engineering quality. Our experience reflects stability, trust and long-term vision." },
    { icon: "fa-graduation-cap", title: "A Learning-Focused Work Environment", desc: "From manufacturing and moulding to quality control, exports and operations — employees are encouraged to learn continuously, upgrade skills and grow within the organization." },
    { icon: "fa-globe", title: "Exposure to Global Markets", desc: "Work with clients and partners across the Middle East, Africa and Asia, and gain practical exposure to international business standards and export-driven operations." },
    { icon: "fa-handshake", title: "A Stable, Ethical and Value-Driven Workplace", desc: "Our work culture is rooted in discipline, integrity, mutual respect and fairness. We believe ethical practices create sustainable success for both employees and the company." },
    { icon: "fa-cogs", title: "Innovation and Modern Manufacturing Practices", desc: "Get hands-on experience with advanced injection moulding, extrusion processes, tool room operations, die casting and modern quality testing facilities." },
  ];

  const jobCategories = [
    { 
      title: "Production & Operations", 
      roles: [
        "Machine Operators (Injection Moulding and Extrusion)",
        "Production Supervisors",
        "Quality Control Assistants",
        "Tool Room Technicians",
        "Assembly Line Workers"
      ] 
    },
    { 
      title: "Office & Management", 
      roles: [
        "Accounts Executive",
        "Sales and Marketing Coordinator",
        "Export Documentation Executive",
        "Inventory & Store Management"
      ] 
    },
    { 
      title: "Field & Technical Roles", 
      roles: [
        "Service/Installation Technician",
        "Field Support Engineer",
        "Irrigation Product Trainer"
      ] 
    },
    { 
      title: "Internships", 
      roles: [
        "Engineering Intern (Mechanical or Plastic Technology)",
        "Marketing and International Business Intern",
        "Operations and Supply Chain Intern"
      ] 
    },
  ];

  const whatWeLookFor = [
    "Strong commitment to quality and accuracy",
    "Willingness to learn and grow",
    "Discipline and sense of responsibility",
    "Problem-solving mindset",
    "Respect for values, ethics and teamwork",
    "Technical curiosity, especially for manufacturing and production roles",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      
      <main className="min-h-screen bg-[#f8fafc]" itemScope itemType="https://schema.org/WebPage">
        <Navbar />
      
        <header className="relative h-[45vh] min-h-[450px] flex items-center justify-center text-center text-white overflow-hidden">
          <Image
          src="https://d170mw2nhcb1v0.cloudfront.net/img/career.png"
          alt="Career Background"
          fill
          className="object-cover"
          priority
          />
          <div className="absolute inset-0 z-10"></div>
          <div className="container mx-auto px-4 relative z-20 animate-fadeInUp">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading text-green-900 drop-shadow-lg">Careers</h1>
            <nav className="flex justify-center mb-6">
              <ol className="flex items-center space-x-2 bg-white/20 px-6 backdrop-blur-sm py-2 rounded-full font-bold">
                <li><Link href="/" className="hover:text-primary transition text-green-900">Home</Link></li>
                <li><i className="fa fa-chevron-right mx-2 text-[10px] text-green-900"></i></li>
                <li className="text-green-700">Careers</li>
              </ol>
            </nav>
            <p className="text-xl lg:text-2xl font-light max-w-3xl mx-auto text-blue-900">
              Join a Legacy of Engineering, Integrity and Growth
            </p>
          </div>
        </header>

        {/* Intro Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-6 text-lg text-[#1b4332] leading-relaxed text-center">
              <p>
                At Vidhi Enterprises, people are at the heart of everything we build. For more than four decades, our growth has been driven by individuals who believe in <strong>precision, honesty, teamwork and long-term excellence</strong>. These are the same values on which the company was founded and continues to grow today.
              </p>
              <p>
                We offer a workplace where you develop not only as a professional, but also as a responsible and skilled individual. Here, your work contributes to real-world engineering solutions and becomes part of a legacy that continues across generations.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-24 bg-gradient-to-br from-[#e0f2fe] to-white" aria-labelledby="why-work">
          <div className="container mx-auto px-4">
            <h2 id="why-work" className="text-4xl lg:text-5xl font-bold text-center text-[#1e40af] mb-16 font-heading">
              Why Work With Us?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyWorkWithUs.map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-blue-50 hover:-translate-y-2 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#3b82f6] rounded-2xl flex items-center justify-center mb-6">
                    <i className={`fas ${item.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e40af] mb-4">{i + 1}. {item.title}</h3>
                  <p className="text-[#2d6a4f] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Opportunities */}
        <section className="py-24" aria-labelledby="job-opportunities">
          <div className="container mx-auto px-4">
            <h2 id="job-opportunities" className="text-4xl lg:text-5xl font-bold text-center text-[#1e40af] mb-6 font-heading">Current Opportunities</h2>
            <p className="text-center text-[#2d6a4f] mb-16 italic">(Positions may be updated based on current requirements)</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {jobCategories.map((cat, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#3b82f6]">
                  <h3 className="text-xl font-bold text-[#1e40af] mb-6 pb-2 border-b border-blue-100">{cat.title}</h3>
                  <ul className="space-y-3">
                    {cat.roles.map((role, rIdx) => (
                      <li key={rIdx} className="flex items-start text-[#1b4332] text-sm">
                        <span className="w-2 h-2 bg-[#1c9e1c] rounded-full mr-3 mt-1.5 shrink-0"></span>
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Look For */}
        <section className="py-24 bg-[#1e40af] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 font-heading">What Do We Really Look For?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whatWeLookFor.map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 flex items-center gap-4">
                  <span className="text-[#93c5fd] text-xl">✔</span>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="py-32 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold mb-10 font-heading text-white">How Can You Apply?</h2>
            <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
              Email your resume to:
            </p>
            <p className="text-3xl lg:text-4xl font-bold mb-8">careers@vidhienterprises.com</p>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-12">
              Our HR team will review applications and contact shortlisted candidates for the next stages of the selection process.
            </p>
            <Link href="mailto:careers@vidhienterprises.com" className="inline-block bg-white text-[#1e40af] px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-all">
              Send Your Resume
            </Link>
          </div>
        </section>

        {/* Life at Vidhi */}
        <section className="py-24 bg-gradient-to-br from-[#e0f2fe] to-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e40af] mb-8 font-heading">Life at Vidhi Enterprises</h2>
            <p className="text-xl text-[#1b4332] leading-relaxed italic">
              A workplace where you grow as both a professional and an individual gaining discipline, precision and strong values shaped by decades of experience and a legacy built since the 1980s.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default CareersPage;
