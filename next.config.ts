import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd170mw2nhcb1v0.cloudfront.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '**.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '**.s3.us-east-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
    ],
  },
  async rewrites() {
    return [
      // 1. Specific Admin Routes that MUST go to Backend (Express)
      {
        source: '/api/admin/home-popup',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'}/admin/home-popup`,
      },
      // 2. Specific Public Routes that MUST go to Backend (Express)
      {
        source: '/api/home-popup',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'}/home-popup`,
      },
       {
        source: '/api/upload',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'}/upload`,
      },
      // 3. General Rule: Proxy all other API requests to Backend
      // EXCLUDING /api/admin/* because those are Next.js API Routes (e.g. Categories, Products)
      {
        source: '/api/:path((?!admin).*)',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'}/:path*`,
      },
    ];
  },
};

export default nextConfig;
