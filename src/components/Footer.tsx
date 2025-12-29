import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Image 
              src="/img/vidhi_logo-removebg-preview.png" 
              alt="Logo" 
              width={150}
              height={60}
              className="h-16 w-auto brightness-0 invert" 
            />
            <p className="text-gray-400">
              Engineering Smart Irrigation Solutions for a Greener Tomorrow. Trusted manufacturer of Drip, Sprinkler & Micro Irrigation Products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-primary transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-primary transition"><i className="fab fa-twitter"></i></a>
              <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-primary transition"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-primary transition"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-primary">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/company-profile" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Our Products</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-primary">Our Products</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/dripirri" className="hover:text-white transition">Drip Irrigation</Link></li>
              <li><Link href="/sprinkler" className="hover:text-white transition">Sprinkler Irrigation</Link></li>
              <li><Link href="/rainsprinkler" className="hover:text-white transition">Rain Gun</Link></li>
              <li><Link href="/landscape" className="hover:text-white transition">Landscape Irrigation</Link></li>
              <li><Link href="/vidhi-kit" className="hover:text-white transition">Vidhi Kit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-primary">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <i className="fa fa-map-marker-alt mt-1 mr-4 text-primary"></i>
                <span>123 Irrigation Way, Agri Tech Park, Industrial Area, India</span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-phone-alt mr-4 text-primary"></i>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-envelope mr-4 text-primary"></i>
                <span>info@vidhienterprises.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Vidhi Enterprises. All Rights Reserved. Designed by Go Green.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
