/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this 'images' block
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;