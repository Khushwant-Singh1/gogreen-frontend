import React from "react";
import { notFound } from "next/navigation";
import { productData } from "@/data/product-data";
import { countryData } from "@/data/country-data";
import ProductDetail from "@/components/ProductDetail";
import CountryDetail from "@/components/CountryDetail";

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

  // Not found
  return notFound();
}
