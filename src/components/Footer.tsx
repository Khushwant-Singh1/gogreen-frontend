"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import axios from "axios";

interface Category {
  id: string;
  name: string;
  slug: string;
  isActive: boolean;
}

// Default hardcoded categories as fallback
const defaultCategories: Category[] = [
  { id: '1', name: 'Drip Irrigation', slug: 'dripirri', isActive: true },
  { id: '2', name: 'Sprinkler Irrigation', slug: 'sprinkler', isActive: true },
  { id: '3', name: 'Rain Sprinkler', slug: 'rainsprinkler', isActive: true },
  { id: '4', name: 'Landscape Irrigation', slug: 'landscape', isActive: true },
  { id: '5', name: 'Vidhi Kit', slug: 'vidhi-kit', isActive: true },
  { id: '6', name: 'Economical Irrigation', slug: 'economical', isActive: true },
];

const Footer = () => {
  const [categories, setCategories] = useState<Category[]>(defaultCategories);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';
        const res = await axios.get(`${API_URL}/api/categories`);
        if (res.data.success && res.data.data.length > 0) {
          const activeCategories = res.data.data.filter((cat: Category) => cat.isActive);
          // Use fetched categories if available, otherwise keep default
          if (activeCategories.length > 0) {
            setCategories(activeCategories);
          }
        }
      } catch (error) {
        console.error('Error fetching categories for footer:', error);
        // Keep default categories on error
      }
    };

    fetchCategories();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <Image 
              src="https://d170mw2nhcb1v0.cloudfront.net/img/vidhi_logo.png" 
              alt="Logo" 
              width={300}
              height={150}
              className="h-36 w-auto brightness-0 invert" 
            />
            <div className="flex items-center justify-start">
              <Image 
                src="https://d170mw2nhcb1v0.cloudfront.net/img/images.png" 
                alt="Made in India" 
                width={120}
                height={60}
                className="h-20 w-auto mt-2"
              />
            </div>
            <p className="text-gray-400">
              Engineering Smart Irrigation Solutions for a Greener Tomorrow. Trusted manufacturer of Drip, Sprinkler & Micro Irrigation Products.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, backgroundColor: "rgb(28, 158, 28)" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                href="https://www.facebook.com/p/Vidhi-Enterprises-61560940581059/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, backgroundColor: "rgb(28, 158, 28)" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                href="#"
                className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, backgroundColor: "rgb(28, 158, 28)" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                href="https://www.instagram.com/vidhi_enterprises_delhi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, backgroundColor: "rgb(28, 158, 28)" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                href="https://in.linkedin.com/company/vidhi_enterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, backgroundColor: "rgb(28, 158, 28)" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                href="https://www.youtube.com/@vidhi_enterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-primary">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              {[
                { href: "/", label: "Home" },
                { href: "/company-profile", label: "Company Profile" },
                { href: "/products", label: "Our Products" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact Us" },

              ].map((link, i) => (
                <motion.li key={i} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-primary">Our Products</h4>
            <ul className="space-y-4 text-gray-400">
              {categories.map((category) => (
                <motion.li key={category.id} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={`/${category.slug}`} className="hover:text-white transition">
                    {category.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-primary">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <motion.li whileHover={{ x: 5 }} className="flex items-start">
                <i className="fa fa-map-marker-alt mt-1 mr-4 text-primary"></i>
                <span>Factory Address: 485-A/7A. Ahinsa Compound, Dilshad Garden Industrial Area, G.T. Road, Shahadra, Delhi – 110095, India</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-start">
                <i className="fa fa-phone mt-1 mr-4 text-primary"></i>
                <span>+91-8376007474</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center">
                <i className="fa fa-envelope mr-4 text-primary"></i>
                <Link href="mailto:info@vidhienterprises.com" className="hover:text-primary transition-colors">info@vidhienterprises.com</Link>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm"
        >
          <p>
            © {new Date().getFullYear()} Vidhi Enterprises. All Rights Reserved. Designed by greenO2.
            <span className="mx-2">|</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
