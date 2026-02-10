"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Prevent static generation - this page must be rendered dynamically
export const dynamic = 'force-dynamic';
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingSpinner, { ProductGridSkeleton } from "@/components/LoadingSpinner";
import axios from "axios";

const SearchContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query.trim()) {
        setResults([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get(`/api/products?search=${encodeURIComponent(query)}`);
        setResults(response.data.data || []);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Search Results</h1>
      {query && (
        <p className="text-xl text-gray-600 mb-8">
          Results for: <span className="font-semibold text-primary">{query}</span>
        </p>
      )}

      {loading ? (
        <div className="space-y-8">
          <LoadingSpinner variant="leaf" size="lg" text="Searching products..." className="mx-auto" />
          <ProductGridSkeleton count={6} />
        </div>
      ) : results.length > 0 ? (
        <>
          <p className="text-gray-600 mb-6">Found {results.length} product(s)</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                {product.image && (
                  <div className="relative w-full h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {product.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-20">
          <i className="fa fa-search text-6xl text-gray-300 mb-4"></i>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            No Results Found
          </h2>
          <p className="text-gray-600 mb-8">
            {query ? 
              `We couldn't find any products matching "${query}". Try different keywords.` :
              "Enter a search query to find products."
            }
          </p>
          <Link
            href="/"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-dark transition-colors"
          >
            Go to Homepage
          </Link>
        </div>
      )}
    </div>
  );
};

const SearchPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 px-4 lg:px-10">
        <Suspense fallback={
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner variant="leaf" size="lg" text="Loading search..." />
          </div>
        }>
          <SearchContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
