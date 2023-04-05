/** @type {import('next').NextConfig} */
export const nextConfig = {
  output: "export",
  distDir: "dist",
  experimental: {
    appDir: true,
  },
  typescript: { 
    // In order to build tsparticle from vue config without type errors
    ignoreBuildErrors: true,
  } 
}

export default nextConfig