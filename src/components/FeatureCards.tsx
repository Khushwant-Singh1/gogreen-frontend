import React from "react";
import Image from "next/image";

const FeatureCards = () => {
  const features = [
    {
      icon: "/img/few Logo.png",
      title: "100+ Reliable Products for Small & Large Farms",
      description: "Builds instant credibility and trust",
    },
    {
      icon: "/img/2.png",
      title: "Quality You Can Rely On",
      description: "Simple, strong, and customer-focused",
    },
    {
      icon: "/img/3.png",
      title: "Innovation Meets Integrity",
      description: "Shows modern, forward-thinking values with honesty",
    },
  ];

  return (
    <div className="container mx-auto px-4 -mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="bg-white p-8 shadow-xl flex items-center space-x-6 min-h-[180px] hover:transform hover:-translate-y-2 transition-all duration-300 rounded-xl">
            <div className="flex-shrink-0 bg-whitesmoke p-4 rounded-full w-20 h-20 flex items-center justify-center text-primary">
              <Image src={f.icon} alt={f.title} width={80} height={80} className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="text-primary font-bold text-lg mb-2 leading-tight">{f.title}</h4>
              <p className="text-secondary/80 font-medium text-sm">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
