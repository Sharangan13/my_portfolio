import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  reactStrictMode: true,
  output: "export", // ✅ tells Next.js to generate static HTML in /out
  images: {
    unoptimized: true, // ✅ required if you use <Image /> in static export
  },
};

export default nextConfig;
