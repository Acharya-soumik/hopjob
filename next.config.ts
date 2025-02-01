import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // add support for png images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
