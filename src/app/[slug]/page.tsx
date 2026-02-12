 import React from "react";
import { notFound } from "next/navigation";
import axios from "axios";
import { productData } from "@/data/product-data";
import { countryData } from "@/data/country-data";
import ProductDetail from "@/components/ProductDetail";
import CountryDetail from "@/components/CountryDetail";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import CategoryProductGrid from "@/components/CategoryProductGrid";
import Footer from "@/components/Footer";

import { Metadata } from "next";

const API_BASE_URL = process.env.NEXT_PUBLIC_NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';
const API_URL = `${API_BASE_URL}/api`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (productData[slug]) {
    return {
      title: productData[slug].name,
      description: `Premium ${productData[slug].name} - Quality irrigation components from Vidhi Enterprises.`,
    };
  }

  if (countryData[slug]) {
    return {
      title: `Irrigation Solutions in ${countryData[slug].title}`,
      description: countryData[slug].metaDescription || countryData[slug].intro,
    };
  }

  return {
    title: slug.charAt(0).toUpperCase() + slug.slice(1),
  };
}

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
    const response = await axios.get(`${API_URL}/categories`, {
      headers: { 'Cache-Control': 'no-store' },
    });
    
    const categories = response.data.data || [];
    
    return categories.find((cat: Category) => cat.slug === slug && cat.isActive) || null;
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}

async function getSubcategoriesWithProducts(categoryId: string, categorySlug: string) {
  try {
    // Fetch subcategories
    const subResponse = await axios.get(`${API_URL}/subcategories?categoryId=${categoryId}`, {
      headers: { 'Cache-Control': 'no-store' },
    });
    
    const subcategories = (subResponse.data.data || []).filter((sub: Subcategory) => sub.isActive);
    
    // Fetch all products
    let allProducts: Product[] = [];
    try {
      const prodResponse = await axios.get(`${API_URL}/products`, {
        headers: { 'Cache-Control': 'no-store' },
      });
      allProducts = (prodResponse.data.data || []).filter((prod: Product) => prod.isActive);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    
    // Map subcategories to the format needed for CategoryProductGrid
    return subcategories.map((sub: Subcategory) => {
      const subProducts = allProducts.filter((prod: Product) => prod.subcategoryId === sub.id);
      
      return {
        title: sub.name,
        image: sub.image || 'https://d170mw2nhcb1v0.cloudfront.net/img/default-product.png',
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
          backgroundImage={category.image || 'https://d170mw2nhcb1v0.cloudfront.net/img/default-header.png'}
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
