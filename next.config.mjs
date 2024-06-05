/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // images: { unoptimized: true },
    experimental: {
      optimizePackageImports: [
        "@svgr/webpack",
        "classnames",
        "date-fns",
        "framer-motion",
        "sass",
        "sharp",
      ],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    }
  };
  
  export default nextConfig;