import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "highlandchurch.us",
        pathname: "/wp-content/uploads/**",
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
