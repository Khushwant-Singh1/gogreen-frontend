import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { ProductSpecifications } from "@/components/ProductSpecifications";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

interface Product {
  id: string;
  subcategoryId: string;
  categoryId: string;
  name: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  features?: string[];
  price?: string;
  sku?: string;
  images?: string[];
  isActive: boolean;
  isFeatured: boolean;
  metaTitle?: string;
  metaDescription?: string;
  specifications?: any[];
}

interface Subcategory {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      cache: 'no-store',
    });
    
    if (!response.ok) return null;
    
    const data = await response.json();
    const products = data.data || [];
    
    return products.find((prod: Product) => prod.slug === slug && prod.isActive) || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

async function getSubcategoryById(id: string): Promise<Subcategory | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/subcategories/${id}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) return null;
    
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    return null;
  }
}

async function getCategoryById(id: string): Promise<Category | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) return null;
    
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    return null;
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const product = await getProductBySlug(slug);
  
  if (!product) {
    return notFound();
  }

  // Fetch related data
  const subcategory = product.subcategoryId ? await getSubcategoryById(product.subcategoryId) : null;
  const category = subcategory?.categoryId ? await getCategoryById(subcategory.categoryId) : null;

  // Build breadcrumbs
  const breadcrumbs: Array<{ label: string; href?: string; active?: boolean }> = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
  ];

  if (category) {
    breadcrumbs.push({ label: category.name, href: `/${category.slug}` });
  }

  if (subcategory) {
    breadcrumbs.push({
      label: subcategory.name,
      href: category ? `/${category.slug}/${subcategory.slug}` : "#",
    });
  }

  breadcrumbs.push({ label: product.name, active: true });

  // Parse features if they're stored as JSON string
  let features: string[] = [];
  if (product.features) {
    features = Array.isArray(product.features) 
      ? product.features 
      : typeof product.features === 'string'
      ? JSON.parse(product.features)
      : [];
  }

  const mainImage = product.images && product.images.length > 0 
    ? product.images[0] 
    : '/img/default-product.png';

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title={product.name}
        backgroundImage={mainImage}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            {category && (
              <>
                <p className="text-primary font-bold text-xl uppercase tracking-wider mb-2">
                  {category.name}
                </p>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
              </>
            )}
            {subcategory && (
              <>
                <h2 className="text-4xl font-bold text-primary italic">{subcategory.name}</h2>
                <div className="w-full h-px bg-secondary mt-6"></div>
              </>
            )}
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            {/* Product Image */}
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                <Image
                  src={mainImage}
                  alt={product.name}
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Additional Images */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {product.images.slice(1, 5).map((img, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden border-2 border-gray-200 hover:border-primary transition">
                      <Image
                        src={img}
                        alt={`${product.name} - ${idx + 2}`}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block leading-tight">
                {product.name}
              </h1>

              {product.price && (
                <div className="text-3xl font-bold text-primary">
                  {product.price}
                </div>
              )}

              {product.shortDescription && (
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.shortDescription}
                </p>
              )}

              {features.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-4">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-start text-primary font-medium text-lg leading-relaxed">
                        <span className="inline-block w-3 h-3 bg-secondary rounded-full mr-4 mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.sku && (
                <div className="text-gray-600">
                  <span className="font-semibold">SKU:</span> {product.sku}
                </div>
              )}

              <div className="pt-6">
                <button className="bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
                  Contact for Quote
                </button>
              </div>
            </div>
          </div>

          {/* Full Description */}
          {product.description && (
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Description</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {product.description}
              </div>
            </div>
          )}

          {/* Specifications */}
          {product.specifications && product.specifications.length > 0 && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Product Specifications</h2>
              <ProductSpecifications specifications={product.specifications} />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
