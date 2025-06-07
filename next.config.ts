import type { NextConfig } from "next";

const nextConfig: NextConfig= {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname:"oaidalleapiprodscus.blob.core.windows.net",
  },],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
