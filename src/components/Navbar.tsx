"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import axios from "axios";


interface NavbarProps {
  initialCategories?: any[];
}

const Navbar = ({ initialCategories = [] }: NavbarProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [categories, setCategories] = useState<any[]>(initialCategories);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Clear loading state when path changes
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  // Handle category navigation with loading
  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsNavigating(true);
    setIsNavOpen(false);
    router.push(href);
  };

  useEffect(() => {
    // Only fetch if no initial data provided
    if (categories.length === 0) {
      const fetchCategories = async () => {
        try {
          const response = await axios.get('/api/categories');
          setCategories(response.data);
        } catch (error) {
          console.error('Error fetching categories for navbar:', error);
        }
      };
      fetchCategories();
    }
  }, [categories.length]);

  // Handle click outside to close search results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search function with debouncing
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchQuery.trim().length >= 2) {
        setIsSearching(true);
        try {
          const response = await axios.get(`/api/products?search=${encodeURIComponent(searchQuery)}`);
          setSearchResults(response.data.data || []);
          setShowResults(true);
        } catch (error) {
          console.error('Error searching products:', error);
          setSearchResults([]);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowResults(false);
      setSearchQuery("");
    }
  };

  const handleProductClick = () => {
    setShowResults(false);
    setSearchQuery("");
  };

  return (
    <nav className="sticky top-0 z-50 main-navbar py-2 bg-green-200">
      <div className="max-w-full px-0">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between px-4 lg:px-10">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://d170mw2nhcb1v0.cloudfront.net/img/vidhi_logo.png"
              width={120}
              height={100}
              className="logo-img"
              alt="Vidhi Enterprises Logo"
              priority
            />
          </Link>

          {/* Search Bar (Desktop & Tablet) */}
          <div className="hidden sm:flex flex-grow max-w-[400px] mx-4" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="w-full">
              <div className="search-bar-rounded w-full relative flex items-center">
                <input 
                  type="search" 
                  className="w-full bg-transparent py-3 pl-6 pr-12 text-lg outline-none border-none focus:ring-0" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery.trim().length >= 2 && setShowResults(true)}
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-0 w-12 h-12 flex items-center justify-center bg-primary text-white hover:bg-dark transition-colors rounded-full m-0.5"
                >
                  {isSearching ? (
                    <i className="fa fa-spinner fa-spin"></i>
                  ) : (
                    <i className="fa fa-search"></i>
                  )}
                </button>
                
                {/* Search Results Dropdown */}
                {showResults && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-96 overflow-y-auto z-50">
                    {searchResults.length > 0 ? (
                      <>
                        {searchResults.slice(0, 10).map((product) => (
                          <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            className="block px-4 py-3 hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                            onClick={handleProductClick}
                          >
                            <div className="flex items-center">
                              {product.image && (
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  width={40}
                                  height={40}
                                  className="rounded mr-3"
                                />
                              )}
                              <div>
                                <div className="font-semibold text-green-900">{product.name}</div>
                                {product.description && (
                                  <div className="text-sm text-gray-600 truncate max-w-md">
                                    {product.description}
                                  </div>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                        {searchResults.length > 10 && (
                          <Link
                            href={`/search?q=${encodeURIComponent(searchQuery)}`}
                            className="block px-4 py-3 text-center text-primary hover:bg-gray-50 font-semibold"
                            onClick={handleProductClick}
                          >
                            View all {searchResults.length} results
                          </Link>
                        )}
                      </>
                    ) : (
                      <div className="px-4 py-8 text-center text-gray-500">
                        {searchQuery.trim().length < 2 ? 
                          "Type at least 2 characters to search" : 
                          "No products found"
                        }
                      </div>
                    )}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Mobile Toggler */}
          <button 
            className="lg:hidden p-2 text-dark focus:outline-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="fa fa-bars text-2xl"></span>
          </button>

          {/* Navigation Links */}
          <div className={`${isNavOpen ? 'block' : 'hidden'} lg:flex w-full lg:w-auto items-center mt-4 lg:mt-0`}>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-4 w-full">
              
              {/* Mobile Search Bar */}
              <div className="sm:hidden w-full px-4 mb-4">
                <form onSubmit={handleSearchSubmit} className="w-full">
                  <div className="search-bar-rounded w-full relative flex items-center">
                    <input 
                      type="search" 
                      className="w-full bg-transparent py-3 pl-6 pr-12 text-base outline-none border-none focus:ring-0" 
                      placeholder="Search products..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button 
                      type="submit"
                      className="absolute right-2 top-0 w-12 h-12 flex items-center justify-center bg-primary text-white hover:bg-dark transition-colors rounded-full m-0.5"
                    >
                      {isSearching ? (
                        <i className="fa fa-spinner fa-spin"></i>
                      ) : (
                        <i className="fa fa-search"></i>
                      )}
                    </button>
                  </div>
                </form>
              </div>
              
              <Link href="/" className="nav-link text-lg"><b>Home</b></Link>
              
              <div className="relative group">
                <button className="nav-link text-lg flex items-center">
                  <b>Products</b> <i className="fa fa-chevron-down ml-2 text-[10px]"></i>
                </button>
                <div className="lg:absolute left-0 mt-0 w-48 bg-light border-none rounded shadow-xl hidden group-hover:block z-50">
                  {categories.length > 0 ? (
                    categories.map((cat) => (
                      <a 
                        key={cat._id} 
                        href={`/${cat.slug}`} 
                        onClick={(e) => handleCategoryClick(e, `/${cat.slug}`)}
                        className="dropdown-item cursor-pointer"
                      >
                        <b>{cat.name}</b>
                      </a>
                    ))
                  ) : [
                      <a key="dripirri" href="/dripirri" onClick={(e) => handleCategoryClick(e, '/dripirri')} className="dropdown-item cursor-pointer"><b>Drip Irrigation</b></a>,
                      <a key="sprinkler" href="/sprinkler" onClick={(e) => handleCategoryClick(e, '/sprinkler')} className="dropdown-item cursor-pointer"><b>Sprinkler Irrigation</b></a>,
                      <a key="rainsprinkler" href="/rainsprinkler" onClick={(e) => handleCategoryClick(e, '/rainsprinkler')} className="dropdown-item cursor-pointer"><b>Rain Sprinkler</b></a>,
                      <a key="landscape" href="/landscape" onClick={(e) => handleCategoryClick(e, '/landscape')} className="dropdown-item cursor-pointer"><b>Landscape Irrigation</b></a>,
                      <a key="economical" href="/economical" onClick={(e) => handleCategoryClick(e, '/economical')} className="dropdown-item cursor-pointer"><b>Economical Irrigation</b></a>,
                      <a key="vidhi-kit" href="/vidhi-kit" onClick={(e) => handleCategoryClick(e, '/vidhi-kit')} className="dropdown-item cursor-pointer"><b>Vidhi Kit</b></a>
                  ]}
                </div>
              </div>

              <div className="relative group">
                <button className="nav-link text-lg flex items-center">
                  <b>About Us</b> <i className="fa fa-chevron-down ml-2 text-[10px]"></i>
                </button>
                <div className="lg:absolute left-0 mt-0 w-56 bg-light border-none rounded shadow-xl hidden group-hover:block z-50">
                  <Link key="company-profile" href="/company-profile" className="dropdown-item"><b>Company Profile</b></Link>
                  <Link key="founder-vision" href="/founder-vision" className="dropdown-item"><b>Founder's Vision</b></Link>
                  <Link key="our-journey" href="/our-journey" className="dropdown-item"><b>Our Journey</b></Link>
                  <Link key="legacy-leader" href="/legacy-leader" className="dropdown-item"><b>Legacy & Leadership</b></Link>
                  <Link key="manufacture" href="/manfacture" className="dropdown-item"><b>Manufacturing & Infra</b></Link>
                  <Link key="quality-policy" href="/quality-policy" className="dropdown-item"><b>Quality Policy</b></Link>
                  <Link key="sustainable" href="/sustainable" className="dropdown-item"><b>Sustainability</b></Link>
                  <Link key="global-presence" href="/global-presence" className="dropdown-item"><b>Global Presence</b></Link>
                  <Link key="blog" href="/blog" className="dropdown-item"><b>Blog</b></Link>
                  <Link key="careers" href="/careers" className="dropdown-item"><b>Careers</b></Link>
                  <Link key="privacy-policy" href="/privacy-policy" className="dropdown-item"><b>Privacy Policy</b></Link>
                </div>
              </div>

              <Link href="/contact" className="nav-link text-lg"><b>Contact Us</b></Link>

              {/* Right Logo (Colored) */}
              <Link href="/" className="hidden lg:flex items-center ml-4">
                <Image
                  src="https://d170mw2nhcb1v0.cloudfront.net/img/logo-olored.png"
                  width={80}
                  height={60}
                  className="h-14 w-auto"
                  alt="Vidhi Enterprises Logo Right"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isNavigating && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <LoadingSpinner variant="leaf" size="xl" text="Loading products..." />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
