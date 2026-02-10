"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";

interface Product {
  id: string;
  subcategoryId: string;
  name: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  price?: string;
  images?: string[];
  isActive: boolean;
  isFeatured: boolean;
}

interface SubcategoryProductGridProps {
  products: Product[];
  categorySlug: string;
  categoryName: string;
}

const SubcategoryProductGrid: React.FC<SubcategoryProductGridProps> = ({
  products,
  categorySlug,
  categoryName,
}) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Clear loading state when path changes
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  // Handle product click with loading
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

      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">No products available in this subcategory yet.</p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-green-900">
              Products ({products.length})
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <a
                key={product.id}
                href={`/products/${product.slug}`}
                onClick={(e) => handleProductClick(e, `/products/${product.slug}`)}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {product.images && product.images.length > 0 ? (
                  <div className="h-56 bg-gray-200 overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-56 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                    <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                )}
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-green-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  {product.shortDescription && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.shortDescription}
                    </p>
                  )}
                  
                  {product.price && (
                    <p className="text-blue-600 font-semibold text-lg mb-3">
                      {product.price}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold text-sm flex items-center">
                      View Details
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    
                    {product.isFeatured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </>
      )}

      {/* Navigation */}
      <div className="mt-12">
        <a
          href={`/${categorySlug}`}
          onClick={(e) => handleProductClick(e, `/${categorySlug}`)}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to {categoryName}
        </a>
      </div>
    </>
  );
};

export default SubcategoryProductGrid;
