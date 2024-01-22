/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "tomasburian.com",
        port: "",
        pathname: "/dev/**",
      },
    ],
  },
};

module.exports = nextConfig;
