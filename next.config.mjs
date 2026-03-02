/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // All images are now served locally from public/images/
  },
}

export default nextConfig
