/** @type {import('next').NextConfig} */
// Next.js basePath must NOT end with / (GitHub Pages URL does, so we strip it here)
const rawBase = process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES_BASE
  ? process.env.GITHUB_PAGES_BASE.replace(/\/$/, '')
  : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: rawBase,
  assetPrefix: rawBase ? rawBase : undefined,
};

module.exports = nextConfig;
