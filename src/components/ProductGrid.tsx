import React from "react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    title: "Drip Irrigation",
    desc: "Save water, grow smarter — drip irrigation delivers every drop with precision.",
    img: "/img/9.png",
    icon: "/img/4.png",
    link: "/dripirri"
  },
  {
    title: "Sprinkler Irrigation",
    desc: "From corners to center, sprinklers reach everywhere. Healthy fields grow evenly.",
    img: "/img/10.png",
    icon: "/img/5.png",
    link: "/sprinkler"
  },
  {
    title: "Rain Sprinkler (Rain Gun)",
    desc: "Bigger spray, better yield. Raingun irrigation transforms your field’s productivity.",
    img: "/img/11.png",
    icon: "/img/6.png",
    link: "/rainsprinkler"
  },
  {
    title: "Landscape Irrigation",
    desc: "Upgrade your outdoors with intelligent irrigation. A greener view, a happier home.",
    img: "/img/12.png",
    icon: "/img/7.png",
    link: "/landscape"
  },
  {
    title: "Economical Irrigation",
    desc: "Save water, save money, and grow more. Smart irrigation makes every drop count.",
    img: "/img/13.png",
    icon: "/img/8.png",
    link: "/economical"
  },
  {
    title: "Vidhi Kit",
    desc: "Vidhi Kit — your all-in-one irrigation solution. Simple to install, powerful performance.",
    img: "/img/14.png",
    icon: "/img/15.png",
    link: "/vidhi-kit"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-16 max-w-lg animate-fadeInUp">
          <p className="fs-5 fw-bold text-primary mb-2">Our Products</p>
          <hr className="border-2 border-[#006400] mb-6" />
          <h1 className="display-5 mb-5">Products That We Offer For You</h1>
        </div>
        
        <div className="row g-4">
          {products.map((p, i) => (
            <div key={i} className="col-lg-4 col-md-6 animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="service-item rounded d-flex flex-column h-100">
                <div className="service-img rounded relative flex-grow overflow-hidden min-h-[300px]">
                  <Image 
                    src={p.img} 
                    alt={p.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="service-text rounded p-10 flex flex-col items-center flex-grow">
                  <div className="btn-square rounded-full mx-auto mb-6 flex items-center justify-center p-4">
                    <Link href={p.link}>
                      <Image src={p.icon} alt="Icon" width={60} height={60} className="w-full h-full object-contain" />
                    </Link>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{p.title}</h4>
                  <p className="mb-8 font-bold leading-relaxed text-gray-600 group-hover:text-white transition-colors">
                    {p.desc}
                  </p>
                  <Link href={p.link} className="btn btn-sm inline-flex items-center text-primary font-bold hover:text-white transition-all">
                    <i className="fa fa-plus me-2"></i>Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
