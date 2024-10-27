import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'diegotorresmijarra.github.io',
        pathname: '/gallery/cdn-images/**',
      },
    ],
  },
}

export default nextConfig
