/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   // images: {
//   //   domains: "prismic.io",
//   // },
// };

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
