import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import axios from "axios";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ProductSpecifications } from "@/components/ProductSpecifications";
import ProductImageGallery from "@/components/ProductImageGallery";
import ShareButton from "@/components/ShareButton";
import { Contact } from "lucide-react";

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
  coverImage?: string;
  isActive: boolean;
  isFeatured: boolean;
  metaTitle?: string;
  metaDescription?: string;
  seoKeywords?: string[];
  pdfUrl?: string;
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
    const response = await axios.get(`${API_BASE_URL}/products`, {
      headers: { 'Cache-Control': 'no-store' },
    });
    
    const products = response.data.data || [];
    
    return products.find((prod: Product) => prod.slug === slug && prod.isActive) || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

async function getSubcategoryById(id: string): Promise<Subcategory | null> {
  try {
    const response = await axios.get(`${API_BASE_URL}/subcategories/${id}`, {
      headers: { 'Cache-Control': 'no-store' },
    });
    
    return response.data.data || null;
  } catch (error) {
    return null;
  }
}

async function getCategoryById(id: string): Promise<Category | null> {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories/${id}`, {
      headers: { 'Cache-Control': 'no-store' },
    });
    
    return response.data.data || null;
  } catch (error) {
    return null;
  }
}

// Generate SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  const title = product.metaTitle || `${product.name} | GoGreen`;
  const description = product.metaDescription || product.shortDescription || product.description?.substring(0, 160) || `Buy ${product.name} from GoGreen`;
  const keywords = product.seoKeywords?.join(', ') || product.name;
  const mainImage = product.images && product.images.length > 0 
    ? product.images[0] 
    : 'https://d170mw2nhcb1v0.cloudfront.net/img/default-product.png';

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'GoGreen' }],
    creator: 'GoGreen',
    publisher: 'GoGreen',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: mainImage,
          width: 1200,
          height: 630,
          alt: product.name,
        }
      ],
      type: 'website',
      siteName: 'GoGreen',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [mainImage],
      creator: '@gogreen',
    },
    alternates: {
      canonical: `/products/${slug}`,
    },
    other: {
      'product:price:amount': product.price?.replace(/[^0-9.]/g, '') || '',
      'product:price:currency': 'USD',
      'product:availability': 'in stock',
    },
  };
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
    : 'https://d170mw2nhcb1v0.cloudfront.net/img/default-product.png';

  // Use coverImage for banner/header, fall back to mainImage
  const bannerImage = product.coverImage || mainImage;

  // Generate JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.shortDescription || product.description || `Buy ${product.name} from GoGreen`,
    "image": mainImage,
    "brand": {
      "@type": "Brand",
      "name": "GoGreen"
    },
    ...(product.price && {
      "offers": {
        "@type": "Offer",
        "price": product.price.replace(/[^0-9.]/g, ''),
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }),
    ...(product.seoKeywords && product.seoKeywords.length > 0 && {
      "keywords": product.seoKeywords.join(", ")
    })
  };

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Navbar />
      <PageHeader
        title={product.name}
        backgroundImage={bannerImage}
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
            {/* Product Images Gallery */}
            <ProductImageGallery 
              images={product.images || []} 
              productName={product.name} 
            />

            {/* Product Information */}
            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-green-900 border-b-4 border-secondary pb-4 inline-block leading-tight">
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
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Key Features</h3>
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
            </div>
          </div>

          {/* Full Description */}
          {product.description && (
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-green-900 mb-6">Product Description</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {product.description}
              </div>
            </div>
          )}

          {/* PDF Download Section */}
          {/* Specifications */}
          {product.specifications && product.specifications.length > 0 && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Product Specifications</h2>
              <ProductSpecifications specifications={product.specifications} />
            </div>
          )}

          <div className="max-w-4xl mx-auto mb-16 text-center space-y-6">
            {product.pdfUrl && (
               <a 
                 href={product.pdfUrl} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold py-3 px-8 rounded-lg hover:bg-primary hover:text-white transition duration-300"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
                 Download Product Brochure (PDF)
               </a>
            )}
            
            <div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
               >
                
                Contact for Quote
              </Link>
          
            </div>
            
            {/* Share Button */}
            <div>
              <ShareButton 
                title={product.name} 
                text={product.shortDescription || `Check out ${product.name} from GoGreen`} 
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
