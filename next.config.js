/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['via.placeholder.com', 'www.themealdb.com'],
    },
};

module.exports = nextConfig;
