import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/loc-install-process",
        destination: "/loc-installation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
