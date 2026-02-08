
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import axiosInstance from "@/lib/axios";

interface Popup {
  id: string;
  imageUrl: string;
  isActive: boolean;
  startDate: string | null;
  endDate: string | null;
}

export default function PopupModal() {
  const [popups, setPopups] = useState<Popup[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check sessionStorage (resets when tab/browser is closed)
    const isClosed = sessionStorage.getItem("home_popup_session_closed");
    
    console.log("PopupModal: Checking visibility...", { isClosed });

    if (isClosed) {
      console.log("PopupModal: Hidden (closed this session)");
      setIsLoading(false);
      return;
    }

    // Fetch active popups
    console.log("PopupModal: Fetching popups...");
    axiosInstance.get("/home-popup")
      .then((res) => {
        if (res.data.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
          setPopups(res.data.data);
          setIsOpen(true);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch popups:", err);
        setIsOpen(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("home_popup_session_closed", "true");
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % popups.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + popups.length) % popups.length);
  };

  if (!isOpen || popups.length === 0) return null;

  if (!isOpen || popups.length === 0) return null;

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) closePopup();
      }}
    >
      <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition-colors shadow-sm"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-800" />
        </button>

        {/* Image Carousel */}
        <div className="relative aspect-square md:aspect-[4/3] w-full bg-gray-100">
           <Image
             src={popups[currentIndex].imageUrl}
             alt="Announcement"
             fill
             className="object-contain"
             priority
             sizes="(max-width: 768px) 100vw, 600px"
           />
           
           {/* Navigation Buttons (only if multiple) */}
           {popups.length > 1 && (
             <>
               <button 
                 onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                 className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-full shadow-md transition-all"
               >
                 <ChevronLeft className="w-5 h-5 text-gray-800" />
               </button>
               <button 
                 onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                 className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-full shadow-md transition-all"
               >
                 <ChevronRight className="w-5 h-5 text-gray-800" />
               </button>
               
               {/* Dots */}
               <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                 {popups.map((_, idx) => (
                   <div
                     key={idx}
                     className={`w-2 h-2 rounded-full transition-all ${
                       idx === currentIndex ? "bg-primary w-4" : "bg-gray-300"
                     }`}
                   />
                 ))}
               </div>
             </>
           )}
        </div>
      </div>
    </div>
  );
}
