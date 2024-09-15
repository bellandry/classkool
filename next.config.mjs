/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "finance-academy.laclass.dev",
      },
    ],
  },
};

export default nextConfig;
