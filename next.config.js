/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Removemos experimental.optimizeCss ya que requiere critters
  // experimental: {
  //   optimizeCss: true
  // }
}

module.exports = nextConfig