import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Doris Jordan",
    role: "Landscape Designer",
    img: "/img/team-1.jpg",
  },
  {
    name: "Johnny Ramirez",
    role: "Garden Designer",
    img: "/img/team-2.jpg",
  },
  {
    name: "Diana Wagner",
    role: "Senior Gardener",
    img: "/img/team-3.jpg",
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
            Dedicated & Experienced Team Members
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="team-item group relative overflow-hidden rounded-xl shadow-lg">
              <div className="relative h-96 w-full">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <div className="flex space-x-3">
                    <a href="#" className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors duration-300">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors duration-300">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors duration-300">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-0 bg-white w-[calc(100%-40px)] py-4 px-6 rounded-r-lg shadow-md transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-20">
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
