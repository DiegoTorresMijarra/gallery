import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, // next.config.js
  images: {
    loader: 'imgix',
    path: 'https://your-imgix-subdomain.imgix.net/',
  },
}

export default nextConfig
