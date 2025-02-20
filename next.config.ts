import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "gsc-rs"; // Replace with your GitHub repo name

const nextConfig: NextConfig = {
  assetPrefix: isProd ? `/${repoName}/` : "",
  basePath: isProd ? `/${repoName}` : "",
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
  
};

export default nextConfig;
