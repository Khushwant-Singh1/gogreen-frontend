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
    <div className="relative w-full h-[500px] overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
          <div className="carousel-caption">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto animate-slideDown">
                <h3 className="text-xl lg:text-5xl font-bold text-white mb-5 leading-tight drop-shadow-lg">
                  {slide.text}
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="carousel-control-prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        onClick={nextSlide}
        className="carousel-control-next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
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
