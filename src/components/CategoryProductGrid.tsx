"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";

interface ProductLink {
  name: string;
  url: string;
}

interface Product {
  title: string;
  image: string;
  links: ProductLink[];
  subcategoryUrl?: string;
}

interface CategoryProductGridProps {
  products: Product[];
}

const CategoryProductGrid: React.FC<CategoryProductGridProps> = ({ products }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Clear loading state when path changes
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  // Handle product link click with loading
  const handleProductClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsNavigating(true);
    router.push(href);
  };

  return (
    <>
      {/* Loading Overlay */}
      {isNavigating && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <LoadingSpinner variant="leaf" size="xl" text="Loading product..." />
        </div>
      )}

      <section className="py-20 bg-whitesmoke">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-bold uppercase tracking-wider mb-2">Our Products</p>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <h2 className="text-4xl lg:text-5xl font-bold text-green-900">Products That We Offer For You</h2>
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
                  {product.subcategoryUrl ? (
                    <a 
                      href={product.subcategoryUrl}
                      onClick={(e) => handleProductClick(e, product.subcategoryUrl!)}
                      className="cursor-pointer"
                    >
                      <h2 className="text-2xl font-bold text-green-900 mb-6 text-center hover:text-primary transition-colors">{product.title}</h2>
                    </a>
                  ) : (
                    <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">{product.title}</h2>
                  )}
                  <ul className="space-y-3 w-full">
                    {product.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="text-center">
                        <a 
                          href={link.url}
                          onClick={(e) => handleProductClick(e, link.url)}
                          className="text-gray-700 font-semibold hover:text-primary hover:underline transition cursor-pointer"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryProductGrid;
