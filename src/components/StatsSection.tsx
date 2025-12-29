import React from "react";

const StatsSection = () => {
  const stats = [
    { label: "Happy Clients", value: "Trusted WorldWide" },
    { label: "Projects Completed", value: "Sustainable & Tailored" },
    { label: "Dedicated Experts", value: "Skilled and Reliable" },
    { label: "Award & Recognition", value: "Excellence in Innovations" },
  ];

  return (
    <section 
      className="relative py-24 bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/img/design-4.png')" }}
    >
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold">{stat.label}</h3>
              <p className="text-lg font-medium text-white/80">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
