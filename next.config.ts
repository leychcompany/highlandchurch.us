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
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./lib/modern-polyfill.js",
      "next/dist/build/polyfills/polyfill-module": "./lib/modern-polyfill.js",
    },
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "../build/polyfills/polyfill-module": false,
      "next/dist/build/polyfills/polyfill-module": false,
    };
    return config;
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
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
