import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.enad.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
