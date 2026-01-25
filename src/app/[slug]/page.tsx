 import React from "react";
import { notFound } from "next/navigation";
import { productData } from "@/data/product-data";
import { countryData } from "@/data/country-data";
import ProductDetail from "@/components/ProductDetail";
import CountryDetail from "@/components/CountryDetail";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import CategoryProductGrid from "@/components/CategoryProductGrid";
import Footer from "@/components/Footer";

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';
const API_URL = `${API_BASE_URL}/api`;

interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  isActive: boolean;
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
  isActive: boolean;
}

async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const response = await fetch(`${API_URL}/categories`, {
      cache: 'no-store',
    });
    
    if (!response.ok) return null;
    
    const data = await response.json();
    const categories = data.data || [];
    
    return categories.find((cat: Category) => cat.slug === slug && cat.isActive) || null;
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}

async function getSubcategoriesWithProducts(categoryId: string, categorySlug: string) {
  try {
    // Fetch subcategories
    const subResponse = await fetch(`${API_URL}/subcategories?categoryId=${categoryId}`, {
      cache: 'no-store',
    });
    
    if (!subResponse.ok) return [];
    
    const subData = await subResponse.json();
    const subcategories = (subData.data || []).filter((sub: Subcategory) => sub.isActive);
    
    // Fetch all products
    const prodResponse = await fetch(`${API_URL}/products`, {
      cache: 'no-store',
    });
    
    let allProducts: Product[] = [];
    if (prodResponse.ok) {
      const prodData = await prodResponse.json();
      allProducts = (prodData.data || []).filter((prod: Product) => prod.isActive);
    }
    
    // Map subcategories to the format needed for CategoryProductGrid
    return subcategories.map((sub: Subcategory) => {
      const subProducts = allProducts.filter((prod: Product) => prod.subcategoryId === sub.id);
      
      return {
        title: sub.name,
        image: sub.image || '/img/default-product.png',
        subcategoryUrl: `/${categorySlug}/${sub.slug}`,
        links: subProducts.map((prod: Product) => ({
          name: prod.name,
          url: `/products/${prod.slug}`,
        })),
      };
    });
  } catch (error) {
    console.error('Error fetching subcategories and products:', error);
    return [];
  }
}

// Next.js 15 handling of params
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Check if it's a product
  if (productData[slug]) {
    return <ProductDetail product={productData[slug]} />;
  }

  // Check if it's a country
  if (countryData[slug]) {
    return <CountryDetail country={countryData[slug]} slug={slug} />;
  }

  // Check if it's a category
  const category = await getCategoryBySlug(slug);
  if (category) {
    const products = await getSubcategoriesWithProducts(category.id, category.slug);
    
    return (
      <main className="min-h-screen bg-whitesmoke">
        <Navbar />
        <PageHeader 
          title={category.name}
          backgroundImage={category.image || '/img/default-header.png'}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: category.name, active: true }
          ]}
        />
        <CategoryProductGrid products={products} />
        <Footer />
      </main>
    );
  }

  // Not found
  return notFound();
}
