/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for development
  reactStrictMode: true,

  // Image optimization for Vercel
  images: {
    domains: [],
  },
}

module.exports = nextConfig
