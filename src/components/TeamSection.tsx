import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Late Shri D.K. Jain",
    role: "Founder - The Visionary",
    img: "/img/dada-ji.png",
  },
  {
    name: "Mr. Vineet Jain",
    role: "Proprietor - Expansion Leader",
    img: "/img/vineet-jain.png",
  },
  {
    name: "Mr. Vibhor Jain",
    role: "International Business & Innovation",
    img: "/img/vibhor-jain.png",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-bold text-xl uppercase tracking-wider mb-2">Our Team</p>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="team-item group relative overflow-hidden rounded-xl shadow-lg border border-gray-100">
              <div className="relative h-[450px] w-full bg-gray-50">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <div className="flex space-x-3">
                    <a href="https://www.linkedin.com/company/vidhi_enterprises/" target="_blank" className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all shadow-lg">
                      <i className="fab fa-linkedin-in text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 text-center bg-white border-t-4 border-primary relative z-20">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-primary font-bold text-lg">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;