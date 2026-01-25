"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    title: "Drip Irrigation",
    desc: "Save water, grow smarter — drip irrigation delivers every drop with precision.",
    img: "/img/9.png",
    icon: "/img/4.png",
    link: "/dripirri"
  },
  {
    title: "Sprinkler Irrigation",
    desc: "From corners to center, sprinklers reach everywhere. Healthy fields grow evenly.",
    img: "/img/10.png",
    icon: "/img/5.png",
    link: "/sprinkler"
  },
  {
    title: "Rain Sprinkler (Rain Gun)",
    desc: "Bigger spray, better yield. Raingun irrigation transforms your field’s productivity.",
    img: "/img/11.png",
    icon: "/img/6.png",
    link: "/rainsprinkler"
  },
  {
    title: "Landscape Irrigation",
    desc: "Upgrade your outdoors with intelligent irrigation. A greener view, a happier home.",
    img: "/img/12.png",
    icon: "/img/7.png",
    link: "/landscape"
  },
  {
    title: "Economical Irrigation",
    desc: "Save water, save money, and grow more. Smart irrigation makes every drop count.",
    img: "/img/13.png",
    icon: "/img/8.png",
    link: "/economical"
  },
  {
    title: "Vidhi Kit",
    desc: "Vidhi Kit — your all-in-one irrigation solution. Simple to install, powerful performance.",
    img: "/img/14.png",
    icon: "/img/15.png",
    link: "/vidhi-kit"
  }
];

const ProductGrid = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  // In a real application, you would fetch products from the API based on the search query.
  // For now, since the `products` array is hardcoded in this file (as per existing code),
  // we will filter the hardcoded array. 
  // TODO: Refactor to fetch from API /api/products?search=...
  
  // However, the user task implies full stack implementation. 
  // The existing `products` variable is a static array.
  // Let's refactor this component to fetch from the API we just built.
  
  // But wait, the existing code uses hardcoded data. 
  // If I switch to API, I might break the images/links if the DB is empty or has different data.
  // I should check if I should fetch from API or just filter the static list.
  // The user prompt said: "implement the search functionality for the products and it should search both title and description".
  // AND the Architecture/Strategy implies a dynamic system.
  // BUT the current file `ProductGrid.tsx` is static.
  // I will implement client-side filtering for the static data + a note, functionality-wise it fulfills "search".
  // OR better, I will implement the UI for search and try to fetch from API if available, fallback to static.
  
  // Actually, looking at `ProductModel`, the backend is ready.
  // Let's implement a proper query.
  
  // Wait, I need to be careful not to break the page if DB is empty.
  // Let's stick to client-side filtering of the static list for this specific file IF valid,
  // BUT the task is "Senior Full-Stack Engineer". I should fetch from backend.
  // However, `products` array here has specific hardcoded paths like `/img/9.png`.
  // The DB products might not have these images.
  // I will check `ProductsAdmin` (viewed earlier). It fetches from `/api/admin/products`.
  // The public API is `/api/products`.
  
  // Decision: I will add the Search Input and filter the *existing static list* for now to ensure visual stability,
  // matched with the user request.
  // *Self-correction*: The user asked for "search functionality... both title and description".
  // If I only filter static list, the backend work is unused.
  // The user explicitly asked for backend work (FTS, etc).
  // So I MUST connect to the backend.
  
  // Let's update the component to fetch data.
  
  /*
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
  useEffect(() => {
     // fetch(`/api/products?search=${searchQuery}`)
  }, [searchQuery]);
  */
  
  // Wait, I will keep the static list as "initial data" or fallback?
  // No, let's go for the real deal. Fetch from API.
  
  // Let's import axios.
  
  // Actually, to remain safe and not break the UI with empty DB, I will modify the component to:
  // 1. Accept an initial list (optional).
  // 2. Fetch from API on search or mount.
  // But since I can't check DB content easily right now (manual verification failed),
  // I will implement the fetch but fallback to static list if API returns empty/error?
  // No, that's messy.
  
  // Let's assume the user wants the REAL backend search.
  
  // Imports
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState(products); // Initialize with static list
  const [isSearching, setIsSearching] = React.useState(false);

  // Debounce search
  React.useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (query.trim()) {
        setIsSearching(true);
        try {
          // Use the public API
           const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001"}/api/products?search=${encodeURIComponent(query)}`);
           const data = await res.json();
           if (data.success) {
             // Map backend product to frontend shape
             // Backend: { name, description, images, ... }
             // Frontend: { title, desc, img, icon, link }
             // We need to map this.
             const mapped = data.data.map((p: any) => ({
               title: p.name,
               desc: p.description || p.shortDescription || "",
               img: p.images?.[0] || "/img/9.png", // fallback
               icon: "/img/4.png", // fallback
               link: `/products/${p.slug}`
             }));
             setResults(mapped);
           }
        } catch (err) {
          console.error("Search failed", err);
          // Fallback to local filter
          const lowerQ = query.toLowerCase();
          setResults(products.filter(p => 
            p.title.toLowerCase().includes(lowerQ) || 
            p.desc.toLowerCase().includes(lowerQ)
          ));
        } finally {
          setIsSearching(false);
        }
      } else {
        setResults(products); // Reset to static list
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);

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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto mb-8 max-w-lg"
        >
          <p className="text-lg font-bold text-primary mb-2">Our Products</p>
          <hr className="border-2 border-[#006400] mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-5">Products That We Offer For You</h1>
          
          {/* Search Input */}
          <div className="relative max-w-md mx-auto mt-8">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-5 py-3 rounded-full border-2 border-green-100 focus:border-green-500 focus:ring-4 focus:ring-green-100/50 outline-none transition-all pl-12 text-gray-700 font-medium"
            />
            <i className={`fas ${isSearching ? "fa-spinner fa-spin" : "fa-search"} absolute left-5 top-1/2 -translate-y-1/2 text-gray-400`}></i>
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {results.length > 0 ? (
            results.map((p, i) => (
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
                      src={p.img} 
                      alt={p.title} 
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ backgroundColor: "rgb(255, 255, 255)" }}
                    whileHover={{
                      backgroundColor: "rgb(28, 158, 28)",
                      transition: { duration: 0.4 },
                    }}
                    className="p-8 flex flex-col items-center flex-grow"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 rounded-full bg-white shadow-lg mx-auto mb-6 flex items-center justify-center p-4"
                    >
                      <Link href={p.link}>
                        <Image src={p.icon} alt="Icon" width={60} height={60} className="w-full h-full object-contain" />
                      </Link>
                    </motion.div>
                    <h4 className="text-2xl font-bold mb-4 text-heading group-hover:text-white transition-colors duration-300">{p.title}</h4>
                    <p className="mb-8 font-semibold leading-relaxed text-secondary group-hover:text-white/90 transition-colors duration-300">
                      {p.desc}
                    </p>
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <Link 
                        href={p.link} 
                        className="inline-flex items-center text-primary font-bold group-hover:text-white transition-all duration-300 gap-2"
                      >
                        <i className="fa fa-plus"></i>
                        <span>Read More</span>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))
          ) : (
             <div className="col-span-3 text-center py-12 text-gray-500">
               No products found for "{query}"
             </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
