import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import SubcategoryProductGrid from "@/components/SubcategoryProductGrid";

const API_BASE_URL = process.env.NEXT_PUBLIC_NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';
const API_URL = `${API_BASE_URL}/api`;

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
    const response = await axios.get(`${API_URL}/categories`, { 
      headers: { 'Cache-Control': 'no-store' } 
    });
    const categories = response.data.data || [];
    return categories.find((cat: Category) => cat.slug === slug) || null;
  } catch (error) {
    return null;
  }
}

async function getSubcategoryBySlug(categoryId: string, slug: string): Promise<Subcategory | null> {
  try {
    const response = await axios.get(`${API_URL}/subcategories?categoryId=${categoryId}`, {
      headers: { 'Cache-Control': 'no-store' },
    });
    const subcategories = response.data.data || [];
    return subcategories.find((sub: Subcategory) => sub.slug === slug && sub.isActive) || null;
  } catch (error) {
    return null;
  }
}

async function getProductsBySubcategory(subcategoryId: string): Promise<Product[]> {
  try {
    const response = await axios.get(`${API_URL}/products?subcategoryId=${subcategoryId}`, {
      headers: { 'Cache-Control': 'no-store' },
    });
    return (response.data.data || []).filter((prod: Product) => prod.isActive);
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
        <SubcategoryProductGrid 
          products={products} 
          categorySlug={categorySlug} 
          categoryName={category.name} 
        />
      </div>
    </div>
  );
}
