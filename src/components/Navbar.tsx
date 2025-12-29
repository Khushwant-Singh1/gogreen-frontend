"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 main-navbar py-2">
      <div className="container-fluid px-0">
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
            <div className="input-group input-group-lg shadow-sm search-bar-rounded w-full relative flex items-center bg-[#f8f9fa] rounded-full overflow-hidden">
              <input 
                type="search" 
                className="form-control border-none bg-transparent py-3 pl-6 pr-12 focus:ring-0 w-full text-lg outline-none" 
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
            <div className="navbar-nav flex flex-col lg:flex-row items-center lg:space-x-4 w-full">
              <Link href="/" className="nav-link"><b>Home</b></Link>
              
              <div className="nav-item dropdown group relative">
                <button className="nav-link flex items-center">
                  <b>Products</b> <i className="fa fa-chevron-down ml-2 text-[10px]"></i>
                </button>
                <div className="lg:absolute left-0 mt-0 w-48 bg-light border-none rounded shadow-xl hidden group-hover:block z-50">
                  <Link href="/dripirri" className="dropdown-item block px-4 py-2 hover:bg-white transition-colors"><b>Drip Irrigation</b></Link>
                  <Link href="/sprinkler" className="dropdown-item block px-4 py-2 hover:bg-white transition-colors"><b>Sprinkler Irrigation</b></Link>
                  <Link href="/rainsprinkler" className="dropdown-item block px-4 py-2 hover:bg-white transition-colors"><b>Rain Sprinkler</b></Link>
                  <Link href="/landscape" className="dropdown-item block px-4 py-2 hover:bg-white transition-colors"><b>Landscape Irrigation</b></Link>
                  <Link href="/economical" className="dropdown-item block px-4 py-2 hover:bg-white transition-colors"><b>Economical Irrigation</b></Link>
                  <Link href="/vidhi-kit" className="dropdown-item block px-4 py-2 hover:bg-white transition-colors"><b>Vidhi Kit</b></Link>
                </div>
              </div>

              <div className="nav-item dropdown group relative">
                <button className="nav-link flex items-center">
                  <b>About Us</b> <i className="fa fa-chevron-down ml-2 text-[10px]"></i>
                </button>
                <div className="lg:absolute left-0 mt-0 w-56 bg-light border-none rounded shadow-xl hidden group-hover:block z-50">
                  <Link href="/company-profile" className="dropdown-item block px-4 py-2 hover:bg-white transition-colors"><b>Company Profile</b></Link>
                  <Link href="/founder-vision" className="dropdown-item block px-4 py-2 hover:bg-white transition-colors"><b>Founder's Vision</b></Link>
                  <Link href="/our-journey" className="dropdown-item block px-4 py-2 hover:bg-white transition-colors"><b>Our Journey</b></Link>
                  <Link href="/legacy-leader" className="dropdown-item block px-4 py-2 hover:bg-white transition-colors"><b>Legacy & Leadership</b></Link>
                  <Link href="/manfacture" className="dropdown-item block px-4 py-2 hover:bg-white transition-colors"><b>Manufacturing & Infra</b></Link>
                  <Link href="/quality-policy" className="dropdown-item block px-4 py-2 hover:bg-white transition-colors"><b>Quality Policy</b></Link>
                  <Link href="/sustainable" className="dropdown-item block px-4 py-2 hover:bg-white transition-colors"><b>Sustainability</b></Link>
                  <Link href="/global-presence" className="dropdown-item block px-4 py-2 hover:bg-white transition-colors"><b>Global Presence</b></Link>
                  <Link href="/blog" className="dropdown-item block px-4 py-2 hover:bg-white transition-colors"><b>Blog</b></Link>
                  <Link href="/careers" className="dropdown-item block px-4 py-2 hover:bg-white transition-colors"><b>Careers</b></Link>
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
