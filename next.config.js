/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ["images.microcms-assets.io"],
  },
};
