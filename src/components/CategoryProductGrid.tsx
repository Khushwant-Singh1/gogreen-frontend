import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProductLink {
  name: string;
  url: string;
}

interface Product {
  title: string;
  image: string;
  links: ProductLink[];
}

interface CategoryProductGridProps {
  products: Product[];
}

const CategoryProductGrid: React.FC<CategoryProductGridProps> = ({ products }) => {
  return (
    <section className="py-20 bg-whitesmoke">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-bold uppercase tracking-wider mb-2">Our Products</p>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Products That We Offer For You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="product-card bg-white rounded-xl shadow-lg border border-primary/20 overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div className="p-8 flex flex-col h-full items-center">
                <div className="h-32 w-full relative mb-6">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-secondary mb-6 text-center">{product.title}</h2>
                <ul className="space-y-3 w-full">
                  {product.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="text-center">
                      <Link 
                        href={link.url} 
                        className="text-gray-700 font-semibold hover:text-primary hover:underline transition"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryProductGrid;
