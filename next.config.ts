import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const isProd = process.env.NODE_ENV === "production";
const repoName = "gsc-rs"; // Replace with your GitHub repo name

const nextConfig: NextConfig = {
  output: "export", // Ensures static file generation
  assetPrefix: isProd ? `/${repoName}/` : "",
  basePath: isProd ? `/${repoName}` : "",
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
  
};

export default withNextIntl(nextConfig);
