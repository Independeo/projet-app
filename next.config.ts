import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   experimental: {
    optimizeCss: false, // Désactive LightningCSS
  },
};

export default nextConfig;