import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages; the chatbot runs on a Cloudflare Worker (see worker/)
  output: "export",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
