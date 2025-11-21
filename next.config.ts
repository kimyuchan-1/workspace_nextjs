import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/kobisopenapi/:path*",
        destination: "https://kobis.or.kr/kobisopenapi/:path*",
      },
      {
        source: "/dataApi/:path*",
        destination: "https://apis.data.go.kr/:path*",
      },
    ];
  },
};

export default nextConfig;
