import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@thaimooc/ui", "@thaimooc/contracts"],
};

export default nextConfig;
