import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Keep the live development server independent from production builds.
  // A build can otherwise replace the files a running `next dev` serves.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
