import type { NextConfig } from "next";

// Static export: `next build` writes plain HTML to /out, served by GitHub Pages on dailyvokab.com.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
};

export default nextConfig;
