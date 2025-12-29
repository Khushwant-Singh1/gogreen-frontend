"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/img/C1.png",
    text: "“Engineering Smart Irrigation Solutions for a Greener Tomorrow”",
  },
  {
    image: "/img/C11.png",
    text: "“Delivering Precision Watering Systems That Grow More with Less”",
  },
  {
    image: "/img/C3.png",
    text: "“Trusted Manufacturer of Drip, Sprinkler & Micro Irrigation Products”",
  },
  {
    image: "/img/C4.png",
    text: "“Empowering Farmers Through Advanced Water-Saving Technologies”",
  },
  {
    image: "/img/C5.png",
    text: "“Quality Irrigation Components Designed for Durability and Performance”",
  },
  {
    image: "/img/C6.png",
    text: "“Smart Irrigation Made Simple — Because Every Drop Counts”",
  },
  {
    image: "/img/C9.png",
    text: "“Building a Sustainable World, One Drop at a Time”",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${index}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center p-4">
            <div className="max-w-4xl animate-slideDown">
              <h2 className="text-2xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                {slide.text}
              </h2>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <i className="fa fa-chevron-left"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <i className="fa fa-chevron-right"></i>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
