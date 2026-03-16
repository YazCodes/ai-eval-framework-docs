/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES_BASE
    ? process.env.GITHUB_PAGES_BASE
    : '',
  assetPrefix: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES_BASE
    ? process.env.GITHUB_PAGES_BASE.endsWith('/')
      ? process.env.GITHUB_PAGES_BASE.slice(0, -1)
      : process.env.GITHUB_PAGES_BASE
    : '',
};

module.exports = nextConfig;
