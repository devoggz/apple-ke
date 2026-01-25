// next.config.js
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // optional if using styled components
  },
  images: {
    domains: ["localhost", "yourcdn.com"], // adjust as needed
  },
};

export default nextConfig;
