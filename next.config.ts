import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1600],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2_592_000,
  },
};

export default nextConfig;
