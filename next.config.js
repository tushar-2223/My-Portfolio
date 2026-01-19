/** @type {import('next').NextConfig} */
const nextConfig = {
  // pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"], // Removed mdx
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
