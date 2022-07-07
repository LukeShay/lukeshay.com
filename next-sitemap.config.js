/** @type {import('next-sitemap').IConfig} */
const config = {
  generateRobotsTxt: true,
  // eslint-disable-next-line node/prefer-global/process
  siteUrl: process.env.SITE_URL || 'https://www.lukeshay.com',
};

export default config;
