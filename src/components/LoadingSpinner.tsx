"use client";

import React from "react";
import { motion } from "framer-motion";

type LoadingVariant = "spinner" | "dots" | "pulse" | "skeleton" | "leaf";
type LoadingSize = "sm" | "md" | "lg" | "xl";

interface LoadingSpinnerProps {
  variant?: LoadingVariant;
  size?: LoadingSize;
  text?: string;
  className?: string;
  fullScreen?: boolean;
}

const sizeClasses: Record<LoadingSize, { container: string; icon: string; text: string }> = {
  sm: { container: "p-2", icon: "w-5 h-5", text: "text-xs" },
  md: { container: "p-4", icon: "w-8 h-8", text: "text-sm" },
  lg: { container: "p-6", icon: "w-12 h-12", text: "text-base" },
  xl: { container: "p-8", icon: "w-16 h-16", text: "text-lg" },
};

// Animated leaf/droplet SVG for agriculture theme
const LeafSpinner = ({ size }: { size: LoadingSize }) => {
  const iconSize = sizeClasses[size].icon;
  
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className={iconSize}
      >
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Water droplet */}
          <motion.path
            d="M25 5 C25 5 10 25 10 32 C10 40 17 45 25 45 C33 45 40 40 40 32 C40 25 25 5 25 5Z"
            fill="url(#dropGradient)"
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: [0.8, 1, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="dropGradient" x1="10" y1="5" x2="40" y2="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1c9e1c" />
              <stop offset="1" stopColor="#178017" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      {/* Ripple effect */}
      <motion.div
        className={`absolute rounded-full border-2 border-primary ${iconSize}`}
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{ scale: [1, 1.5, 2], opacity: [0.6, 0.3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
      />
    </div>
  );
};

// Classic spinner
const Spinner = ({ size }: { size: LoadingSize }) => {
  const iconSize = sizeClasses[size].icon;
  
  return (
    <motion.div
      className={`${iconSize} border-4 border-gray-200 border-t-primary rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
};

// Bouncing dots
const DotsLoader = ({ size }: { size: LoadingSize }) => {
  const dotSize = size === "sm" ? "w-2 h-2" : size === "md" ? "w-3 h-3" : size === "lg" ? "w-4 h-4" : "w-5 h-5";
  const gap = size === "sm" ? "gap-1" : size === "md" ? "gap-2" : "gap-3";
  
  return (
    <div className={`flex ${gap}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`${dotSize} bg-primary rounded-full`}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Pulse animation
const PulseLoader = ({ size }: { size: LoadingSize }) => {
  const iconSize = sizeClasses[size].icon;
  
  return (
    <motion.div
      className={`${iconSize} bg-primary rounded-full`}
      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
};

// Skeleton loading placeholder - using pure Tailwind
export const SkeletonLoader = ({ className = "h-4 w-full" }: { className?: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);

// Card skeleton for product grids
export const CardSkeleton = () => (
  <div className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
    <div className="bg-gray-200 h-48 rounded-lg mb-4" />
    <div className="bg-gray-200 h-6 w-3/4 rounded mb-2" />
    <div className="bg-gray-200 h-4 w-full rounded mb-2" />
    <div className="bg-gray-200 h-4 w-2/3 rounded" />
  </div>
);

// Grid skeleton for product listings
export const ProductGridSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array.from({ length: count }).map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);

// List item skeleton
export const ListItemSkeleton = ({ count = 5 }: { count?: number }) => (
  <div className="space-y-4">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="flex items-center gap-4 animate-pulse">
        <div className="bg-gray-200 w-12 h-12 rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="bg-gray-200 h-4 w-3/4 rounded" />
          <div className="bg-gray-200 h-3 w-1/2 rounded" />
        </div>
      </div>
    ))}
  </div>
);

// Main LoadingSpinner component
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  variant = "leaf",
  size = "md",
  text,
  className = "",
  fullScreen = false,
}) => {
  const renderLoader = () => {
    switch (variant) {
      case "spinner":
        return <Spinner size={size} />;
      case "dots":
        return <DotsLoader size={size} />;
      case "pulse":
        return <PulseLoader size={size} />;
      case "leaf":
      default:
        return <LeafSpinner size={size} />;
    }
  };

  const content = (
    <div className={`flex flex-col items-center justify-center ${sizeClasses[size].container} ${className}`}>
      {renderLoader()}
      {text && (
        <motion.p
          className={`mt-3 text-gray-600 font-medium ${sizeClasses[size].text}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return content;
};

// Section loading wrapper
export const SectionLoading = ({ text = "Loading..." }: { text?: string }) => (
  <div className="flex flex-col items-center justify-center py-20">
    <LoadingSpinner variant="leaf" size="lg" text={text} />
  </div>
);

// Inline loading for buttons/forms
export const InlineLoading = ({ text = "Loading..." }: { text?: string }) => (
  <span className="inline-flex items-center gap-2">
    <LoadingSpinner variant="spinner" size="sm" />
    <span className="text-sm">{text}</span>
  </span>
);

// Page transition loading
export const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-whitesmoke">
    <LoadingSpinner variant="leaf" size="xl" text="Loading page..." />
  </div>
);

export default LoadingSpinner;
