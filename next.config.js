/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "***",
        port: "",
      }

    ]
  }
  // reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '.githubusercontent.com',
  //       port: '',
  //       pathname: '/u/**',
  //     },
  //   ],
  // },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '**.githubusercontent.com',
  //     },
  //   ],
  // },
  // images: {
  //   domains: ['avatars.githubusercontent.com'],
  // },
  // images: {
  //   unoptimized: true,
  // },
}

module.exports = nextConfig;
