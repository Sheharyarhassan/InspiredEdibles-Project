/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export', // Enables static export
   trailingSlash: true, // Ensures proper URL structure
   reactStrictMode: true,
   images: {
      unoptimized: true, // Disable image optimization
   },
};

export default nextConfig;
