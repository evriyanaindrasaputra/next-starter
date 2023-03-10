/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  images: {
    domains: ["assets.vercel.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
