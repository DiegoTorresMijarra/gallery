import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'diegotorresmijarra.github.io',
      //   pathname: '/gallery/cdn-images/**',
      // },
      {
        protocol: 'https',
        hostname: 'cdn-images-jorge-maria.imgix.net',
        pathname: '/**',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/gallery',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
