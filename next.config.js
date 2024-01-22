/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "tomasburian.com",
      },
    ],
  },
};

module.exports = nextConfig;
