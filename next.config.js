/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "www.shutterstock.com",
      },
      // {
      //   protocol: "http",
      //   hostname: "tomasburian.com",
      // },
    ],
  },
};

module.exports = nextConfig;
