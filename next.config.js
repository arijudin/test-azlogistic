/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['image.tmdb.org'],
  },
  env: {
    MOVIE_API: process.env.MOVIE_API,
    MOVIE_API_KEY: process.env.MOVIE_API_KEY,
    MOVIE_IMAGE_URL: process.env.MOVIE_IMAGE_URL,
  }
}

module.exports = nextConfig
