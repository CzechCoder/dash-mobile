/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "tomasburian.com",
      },
    ],
  },
};

module.exports = nextConfig;
