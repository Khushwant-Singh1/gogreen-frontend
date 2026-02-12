"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 bg-whitesmoke watermark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-end gap-12"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
            className="lg:w-1/4 w-full"
          >
            <Image 
              src="https://d170mw2nhcb1v0.cloudfront.net/img/Thank_you_vidhi.png" 
              alt="About Us" 
              width={400}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
            className="lg:w-1/2 w-full"
          >
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-7xl lg:text-9xl font-bold text-primary"
            >
              40+
            </motion.h1>
            <p className="text-xl sm:text-3xl lg:text-4xl font-black text-primary mb-6 relative z-10">Years of making Every Drop Count</p>
            <h5 className="text-5xl font-bold text-[#0f4c75] mb-6">&apos;We Make Every Drop Work Smarter&apos;</h5>
            <p className="text-2xl text-primary font-semibold mb-6">
              &quot;Helping you water better, grow stronger &amp; make the most of every single drop&quot;
            </p>
            <h4 className="text-3xl font-bold text-[#0f4c75] italic mb-8">
              &quot;Smart Irrigation Starts here --- because every drop matter&quot;
            </h4>
            <Link href="/#products">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(28,158,28,0.3)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="btn-primary-custom btn-ripple text-white py-4 px-8 rounded font-bold"
            >
              Explore More
            </motion.button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
            className="lg:w-1/4 w-full space-y-12"
          >
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="border-l-4 border-primary pl-6"
            >
              <i className="fa fa-award text-4xl text-primary mb-4"></i>
              <h4 className="text-xl font-bold text-primary mb-2">Trusted Quality</h4>
              <p className="text-gray-700 font-semibold">We are known for durability, innovation & customer focus</p>
            </motion.div>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="border-l-4 border-primary pl-6"
            >
              <i className="fa fa-users text-4xl text-primary mb-4"></i>
              <h4 className="text-xl font-bold text-primary mb-2">Dedicated Team</h4>
              <p className="text-gray-700 font-semibold">
                From choosing the right component to after sales support, Our experts are always here to help you at every step of the way
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
