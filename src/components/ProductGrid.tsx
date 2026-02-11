"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";

const ProductGrid = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isNavigating, setIsNavigating] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const router = useRouter();
  const pathname = usePathname();

  // Clear loading state when path changes
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  // Handle click with loading
  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsNavigating(true);
    router.push(href);
  };

  // Fetch Categories on Mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('/api/categories');
        if (res.data) {
             const mapped = res.data.map((c: any) => ({
               title: c.name,
               desc: c.description || "",
               img: c.image || "https://d170mw2nhcb1v0.cloudfront.net/img/9.png", // fallback from static list
               icon: "https://d170mw2nhcb1v0.cloudfront.net/img/4.png", // fallback
               link: `/${c.slug}`
             }));
             setCategories(mapped);
        }
      } catch (err) {
        console.error("Failed to fetch categories", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Search Products
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        setIsSearching(true);
        try {
           const res = await axios.get(`/api/products?search=${encodeURIComponent(searchQuery)}`);
           if (res.data.success) {
             const mapped = res.data.data.map((p: any) => ({
               title: p.name,
               desc: p.description || p.shortDescription || "",
               img: p.images?.[0] || "https://d170mw2nhcb1v0.cloudfront.net/img/9.png",
               icon: "https://d170mw2nhcb1v0.cloudfront.net/img/4.png",
               link: `/products/${p.slug}`
             }));
             setProducts(mapped);
           } else {
             setProducts([]);
           }
        } catch (err) {
          console.error("Search failed", err);
          setProducts([]);
        } finally {
          setIsSearching(false);
        }
      } else {
        setProducts([]);
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const displayItems = searchQuery.trim() ? products : categories;
  const isShowCategories = !searchQuery.trim();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <>
      {/* Loading Overlay */}
      {isNavigating && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <LoadingSpinner variant="leaf" size="xl" text="Loading..." />
        </div>
      )}

      <section className="py-24 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto mb-8 max-w-lg"
        >
          <p className="text-lg font-bold text-primary mb-2">Our Offerings</p>
          <hr className="border-2 border-[#006400] mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-5">
            {isShowCategories ? "Product Categories" : "Search Results"}
          </h1>
          
          {/* Search Input */}
          <div className="relative max-w-md mx-auto mt-8">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 rounded-full border-2 border-green-100 focus:border-green-500 focus:ring-4 focus:ring-green-100/50 outline-none transition-all pl-12 text-gray-700 font-medium"
            />
            <i className={`fas ${isSearching ? "fa-spinner fa-spin" : "fa-search"} absolute left-5 top-1/2 -translate-y-1/2 text-gray-400`}></i>
          </div>
        </motion.div>
        
        {loading && !searchQuery ? (
           <div className="flex justify-center py-12">
             <LoadingSpinner variant="dots" size="lg" />
           </div>
        ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayItems.length > 0 ? (
            displayItems.map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="product-card group"
              >
                <div className="flex flex-col h-full rounded-2xl overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="relative flex-grow overflow-hidden min-h-[300px]"
                  >
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ backgroundColor: "rgb(255, 255, 255)" }}
                    whileHover={{
                      backgroundColor: "rgb(240, 253, 244)", 
                      transition: { duration: 0.4 },
                    }}
                    className="p-8 flex flex-col items-center flex-grow"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-24 h-24 rounded-full bg-white shadow-lg mx-auto mb-6 flex items-center justify-center p-3"
                    >
                      <a 
                        href={item.link}
                        onClick={(e) => handleItemClick(e, item.link)}
                        className="cursor-pointer"
                      >
                         {/* Use item.icon if valid image URL, else fallback icon */}
                        <Image src={item.icon} alt="Icon" width={200} height={200} className="w-24 h-24 object-contain" />
                      </a>
                    </motion.div>
                    <h4 className="text-2xl font-bold mb-4 text-heading transition-colors duration-300">{item.title}</h4>
                    <p className="mb-8 font-semibold leading-relaxed text-green-900 transition-colors duration-300 line-clamp-3">
                      {item.desc}
                    </p>
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <a 
                        href={item.link}
                        onClick={(e) => handleItemClick(e, item.link)}
                        className="inline-flex items-center text-primary font-bold transition-all duration-300 gap-2 cursor-pointer"
                      >
                        <i className="fa fa-plus"></i>
                        <span>{isShowCategories ? "Explore Category" : "View Product"}</span>
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))
          ) : (
             <div className="col-span-3 text-center py-12 text-gray-500">
               {searchQuery ? `No products found for "${searchQuery}"` : "No categories found."}
             </div>
          )}
        </motion.div>
        )}
      </div>
    </section>
    </>
  );
};

export default ProductGrid;
