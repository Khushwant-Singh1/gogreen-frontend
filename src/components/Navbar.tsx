"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import axios from "axios";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories for navbar:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <nav className="sticky top-0 z-50 main-navbar py-2">
      <div className="max-w-full px-0">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between px-4 lg:px-10">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/img/vidhi_logo-removebg-preview.png"
              width={120}
              height={100}
              className="logo-img"
              alt="Vidhi Enterprises Logo"
              priority
            />
          </Link>

          {/* Search Bar (Desktop & Tablet) */}
          <div className="hidden sm:flex flex-grow max-w-[400px] mx-4">
            <div className="search-bar-rounded w-full relative flex items-center">
              <input 
                type="search" 
                className="w-full bg-transparent py-3 pl-6 pr-12 text-lg outline-none border-none focus:ring-0" 
                placeholder="Search" 
              />
              <button className="absolute right-0 top-0 w-12 h-12 flex items-center justify-center bg-primary text-white hover:bg-dark transition-colors rounded-full m-0.5">
                <i className="fa fa-search"></i>
              </button>
            </div>
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
              <Link href="/" className="nav-link"><b>Home</b></Link>
              
              <div className="relative group">
                <button className="nav-link flex items-center">
                  <b>Products</b> <i className="fa fa-chevron-down ml-2 text-[10px]"></i>
                </button>
                <div className="lg:absolute left-0 mt-0 w-48 bg-light border-none rounded shadow-xl hidden group-hover:block z-50">
                  {categories.length > 0 ? (
                    categories.map((cat) => (
                      <Link key={cat._id} href={`/${cat.slug}`} className="dropdown-item"><b>{cat.name}</b></Link>
                    ))
                  ) : (
                    <>
                      <Link key="dripirri" href="/dripirri" className="dropdown-item"><b>Drip Irrigation</b></Link>
                      <Link key="sprinkler" href="/sprinkler" className="dropdown-item"><b>Sprinkler Irrigation</b></Link>
                      <Link key="rainsprinkler" href="/rainsprinkler" className="dropdown-item"><b>Rain Sprinkler</b></Link>
                      <Link key="landscape" href="/landscape" className="dropdown-item"><b>Landscape Irrigation</b></Link>
                      <Link key="economical" href="/economical" className="dropdown-item"><b>Economical Irrigation</b></Link>
                      <Link key="vidhi-kit" href="/vidhi-kit" className="dropdown-item"><b>Vidhi Kit</b></Link>
                    </>
                  )}
                </div>
              </div>

              <div className="relative group">
                <button className="nav-link flex items-center">
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
                </div>
              </div>

              <Link href="/contact" className="nav-link"><b>Contact Us</b></Link>

              {/* Right Logo (Colored) */}
              <Link href="/" className="hidden lg:flex items-center ml-4">
                <Image
                  src="/img/logo-olored.png"
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
    </nav>
  );
};

export default Navbar;
