import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, // next.config.js
  images: {
    loader: 'imgix',
    path: 'https://cdn-my-wedding-gallery-jorge-maria.imgix.net/',
  },
}

export default nextConfig
