/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: 'https://nsnodes.com/$1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
