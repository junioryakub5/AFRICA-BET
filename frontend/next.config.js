/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      // Secret path → serves admin page without changing URL to /admin
      {
        source: "/portal",
        destination: "/admin",
      },
      // Proxy backend API calls through Vercel to avoid mixed-content (HTTP→HTTPS) issues.
      // Browser calls /backend/api/* → Vercel server proxies to VPS http://72.60.23.133:8081/api/*
      {
        source: "/backend/:path*",
        destination: "http://72.60.23.133:8081/:path*",
      },
    ];
  },
  async redirects() {
    return [
      // Block direct access to /admin — redirect to home
      {
        source: "/admin",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
