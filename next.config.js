/** @type {import('next').NextConfig} */
const nextConfig = {
    generateRobotsTxt: true,
    reactStrictMode: true,
    // eslint-disable-next-line node/prefer-global/process
    siteUrl: process.env.SITE_URL || 'https://www.lukeshay.com',
};

module.exports = nextConfig;
