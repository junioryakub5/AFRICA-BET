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
      // Proxy /api/* server-side → Africa Tips backend on port 5005
      {
        source: "/api/:path*",
        destination: "http://72.60.23.133:5005/api/:path*",
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
