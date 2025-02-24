/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ["images.unsplash.com", "i.imgur.com"],
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
