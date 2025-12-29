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
    <div className="container-fluid top-feature py-5 pt-lg-0">
      <div className="container py-5 pt-lg-0">
        <div className="row gx-0">
          {features.map((f, i) => (
            <div key={i} className="col-lg-4 animate-fadeIn">
              <div className="bg-white shadow-lg d-flex align-items-center h-100 px-10 py-8 min-h-[180px] hover:-translate-y-2 transition-transform duration-300">
                <div className="d-flex w-full items-center">
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-light flex items-center justify-center">
                    <Image src={f.icon} alt={f.title} width={80} height={80} className="w-16 h-16 object-contain" />
                  </div>
                  <div className="ps-6">
                    <h4 className="text-primary font-bold mb-2 leading-tight">{f.title}</h4>
                    <span className="text-secondary font-bold text-sm">{f.description}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
