import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  images: {
    qualities: [55, 65, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "highlandchurch.us",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/prayer-2",
        destination: "/prayer",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
