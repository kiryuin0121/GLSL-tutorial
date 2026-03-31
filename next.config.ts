import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   webpack: (config) => {
    config.module.rules.push({
      test: /\.glsl$/,
      use: 'raw-loader',
    })
    return config
  },
  turbopack: {}
};

export default nextConfig;
