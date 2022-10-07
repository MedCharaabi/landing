/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",
  },
  swcMinify: true,
  // distDir: '_next',

}

module.exports = nextConfig
