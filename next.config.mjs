/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:"export",
  async headers() {
    return [
      {
        source: "/(.*)", // apply to all routes
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  }
};

export default nextConfig;
