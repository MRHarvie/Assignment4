/** @type {import('next').NextConfig} */
const nextConfig = {
  // Step 1: Enable static export for Netlify CDN deployment
  output: 'export',
  images: {
    domains: ['rickandmortyapi.com'],
    // Step 1: Disable image optimization for static export
    unoptimized: true,
  },
}

module.exports = nextConfig
