import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tours/golden-triangle-tour",
        destination: "/tours/golden-triangle-5-day-tour",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;