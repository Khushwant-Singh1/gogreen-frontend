import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

interface Subcategory {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  isActive: boolean;
}

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

async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`, { cache: 'no-store' });
    if (!response.ok) return null;
    const data = await response.json();
    const categories = data.data || [];
    return categories.find((cat: Category) => cat.slug === slug) || null;
  } catch (error) {
    return null;
  }
}

async function getSubcategoryBySlug(categoryId: string, slug: string): Promise<Subcategory | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/subcategories?categoryId=${categoryId}`, {
      cache: 'no-store',
    });
    if (!response.ok) return null;
    const data = await response.json();
    const subcategories = data.data || [];
    return subcategories.find((sub: Subcategory) => sub.slug === slug && sub.isActive) || null;
  } catch (error) {
    return null;
  }
}

async function getProductsBySubcategory(subcategoryId: string): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products?subcategoryId=${subcategoryId}`, {
      cache: 'no-store',
    });
    if (!response.ok) return [];
    const data = await response.json();
    return (data.data || []).filter((prod: Product) => prod.isActive);
  } catch (error) {
    return [];
  }
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ slug: string; subcategorySlug: string }>;
}) {
  const { slug: categorySlug, subcategorySlug } = await params;
  
  const category = await getCategoryBySlug(categorySlug);
  if (!category) {
    return notFound();
  }
  
  const subcategory = await getSubcategoryBySlug(category.id, subcategorySlug);
  if (!subcategory) {
    return notFound();
  }
  
  const products = await getProductsBySubcategory(subcategory.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/products" className="text-blue-600 hover:text-blue-800">
              All Categories
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${categorySlug}`} className="text-blue-600 hover:text-blue-800">
              {category.name}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{subcategory.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{subcategory.name}</h1>
          {subcategory.description && (
            <p className="text-lg text-white/90 max-w-3xl">{subcategory.description}</p>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        {products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No products available in this subcategory yet.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Products ({products.length})
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
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
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 pb-12">
        <Link
          href={`/${categorySlug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to {category.name}
        </Link>
      </div>
    </div>
  );
}
