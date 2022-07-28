/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/token/:task*',
        destination: '/api/token/:task*', // Matched parameters can be used in the destination
      },
    ]
  },
}

module.exports = nextConfig
