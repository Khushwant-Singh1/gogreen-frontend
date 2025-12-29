import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductData } from "@/data/product-data";
import Navbar from "./Navbar";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

const ProductDetail = ({ product }: { product: ProductData }) => {
  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      <PageHeader
        title={product.title}
        backgroundImage={product.heroImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: product.category, href: product.categoryLink },
          { label: product.title, active: true },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-bold uppercase tracking-wider mb-2">{product.category}</p>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">{product.subCategory}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] w-full bg-white rounded-xl shadow-lg p-4">
              <Image
                src={product.productImage}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-success mb-6">{product.title}</h3>
              <div className="w-full h-1 bg-primary mb-6"></div>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="text-gray-700 font-medium text-lg leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {product.application && (
            <div className="mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="lg:order-2">
                   <h3 className="text-3xl font-bold text-success mb-6">Application</h3>
                   <div className="w-full h-1 bg-primary mb-6"></div>
                   {product.application.text && (
                     <p className="text-gray-700 font-medium text-lg leading-relaxed mb-8">
                       {product.application.text}
                     </p>
                   )}
                </div>
                <div className="lg:order-1 flex flex-col gap-6 justify-center items-center">
                   {product.application.image && (
                     <div className="relative w-full h-64 lg:h-80">
                        <Image src={product.application.image} alt="Application" fill className="object-contain" />
                     </div>
                   )}
                   {product.application.images && product.application.images.map((img, idx) => (
                      <div key={idx} className="relative w-full h-64 lg:h-80">
                        <Image src={img} alt={`Application ${idx}`} fill className="object-contain" />
                      </div>
                   ))}
                </div>
              </div>
            </div>
          )}

          {product.pdf && (
             <div className="mt-16 text-center">
               <a 
                 href={`/${product.pdf}`} 
                 target="_blank" 
                 className="inline-block border-2 border-primary text-primary font-bold py-3 px-8 rounded hover:bg-primary hover:text-white transition"
               >
                 View PDF
               </a>
             </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductDetail;
