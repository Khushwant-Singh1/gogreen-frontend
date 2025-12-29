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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-primary font-bold uppercase tracking-wider mb-2">Our Products</p>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Products That We Offer For You</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="product-card group relative overflow-hidden flex flex-col h-full p-2">
              <div className="relative h-64 overflow-hidden rounded-xl">
                <Image 
                  src={p.img} 
                  alt={p.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition duration-500"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-1 items-center">
                <div className="w-20 h-20 bg-white shadow-lg rounded-full p-4 -mt-16 relative z-10 mb-6 flex items-center justify-center">
                  <Image src={p.icon} alt="icon" width={80} height={80} className="w-full h-full object-contain" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{p.title}</h4>
                <p className="text-gray-600 mb-8 flex-1"><b>{p.desc}</b></p>
                <Link href={p.link} className="inline-flex items-center text-primary font-bold hover:text-secondary transition">
                  <i className="fa fa-plus mr-2"></i> Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
