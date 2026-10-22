import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Legacy WordPress migration redirects
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/mowing",
        destination: "/services/lawn-mowing",
        permanent: true,
      },
      {
        source: "/lawn-mowing",
        destination: "/services/lawn-mowing",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/quote",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/quote",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/knightdale-lawn-care",
        destination: "/service-areas#knightdale",
        permanent: true,
      },
      {
        source: "/wendell-lawn-care",
        destination: "/service-areas#wendell",
        permanent: true,
      },
      {
        source: "/zebulon-lawn-care",
        destination: "/service-areas#zebulon",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
