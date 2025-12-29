"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LEFT LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/img/vidhi_logo-removebg-preview.png"
              width={200}
              height={64}
              className="h-12 lg:h-16 w-auto"
              alt="Vidhi Enterprises Logo"
              priority
            />
          </Link>

          {/* DESKTOP SEARCH */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="search"
                className="w-full pl-6 pr-12 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Search products..."
              />
              <button className="absolute right-0 top-0 h-full px-4 text-white bg-primary rounded-r-full">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>

          {/* RIGHT ICONS (MOBILE) */}
          <div className="flex items-center lg:hidden">
            <button
              className="p-2 mr-2 text-gray-600 focus:outline-none"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <i className="fa fa-search text-xl"></i>
            </button>
            <button
              className="p-2 text-gray-600 focus:outline-none"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <i className={`fa ${isNavOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>

          {/* NAV LINKS */}
          <div className={`lg:flex lg:items-center ${isNavOpen ? 'block' : 'hidden'} absolute lg:relative top-20 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}>
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <Link href="/" className="text-gray-800 font-bold hover:text-primary transition">Home</Link>
              
              <div className="relative group">
                <button className="flex items-center font-bold text-gray-800 hover:text-primary transition">
                  Products <i className="fa fa-chevron-down ml-1 text-xs"></i>
                </button>
                <div className="lg:absolute left-0 mt-2 w-48 bg-white border rounded shadow-xl hidden group-hover:block">
                  <Link href="/dripirri" className="block px-4 py-2 hover:bg-gray-100">Drip Irrigation</Link>
                  <Link href="/sprinkler" className="block px-4 py-2 hover:bg-gray-100">Sprinkler Irrigation</Link>
                  <Link href="/rainsprinkler" className="block px-4 py-2 hover:bg-gray-100">Rain Sprinkler</Link>
                  <Link href="/landscape" className="block px-4 py-2 hover:bg-gray-100">Landscape Irrigation</Link>
                  <Link href="/economical" className="block px-4 py-2 hover:bg-gray-100">Economical Irrigation</Link>
                  <Link href="/vidhi-kit" className="block px-4 py-2 hover:bg-gray-100">Vidhi Kit</Link>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center font-bold text-gray-800 hover:text-primary transition">
                  About Us <i className="fa fa-chevron-down ml-1 text-xs"></i>
                </button>
                <div className="lg:absolute left-0 mt-2 w-56 bg-white border rounded shadow-xl hidden group-hover:block max-h-[70vh] overflow-y-auto">
                  <Link href="/company-profile" className="block px-4 py-2 hover:bg-gray-100">Company Profile</Link>
                  <Link href="/founder-vision" className="block px-4 py-2 hover:bg-gray-100">Founder&apos;s Vision</Link>
                  <Link href="/our-journey" className="block px-4 py-2 hover:bg-gray-100">Our Journey</Link>
                  <Link href="/legacy-leader" className="block px-4 py-2 hover:bg-gray-100">Legacy & Leadership</Link>
                  <Link href="/manfacture" className="block px-4 py-2 hover:bg-gray-100">Manufacturing & Infra</Link>
                  <Link href="/quality-policy" className="block px-4 py-2 hover:bg-gray-100">Quality Policy</Link>
                  <Link href="/sustainable" className="block px-4 py-2 hover:bg-gray-100">Sustainability</Link>
                  <Link href="/global-presence" className="block px-4 py-2 hover:bg-gray-100">Global Presence</Link>
                  <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
                  <Link href="/careers" className="block px-4 py-2 hover:bg-gray-100">Careers</Link>
                </div>
              </div>

              <Link href="/contact" className="text-gray-800 font-bold hover:text-primary transition">Contact Us</Link>

              {/* RIGHT LOGO (DESKTOP ONLY) */}
              <Link href="/" className="hidden lg:block ml-4">
                <Image
                  src="/img/logo-olored.png"
                  width={200}
                  height={64}
                  className="h-12 w-auto"
                  alt="Vidhi Enterprises Logo Right"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE SEARCH BAR */}
        {isSearchOpen && (
          <div className="lg:hidden py-4 animate-fadeIn">
            <div className="flex relative">
              <input
                type="search"
                className="w-full pl-6 pr-12 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Search products..."
              />
              <button className="absolute right-0 top-0 h-full px-4 text-white bg-primary rounded-r-full">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
