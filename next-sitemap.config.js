/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://theincognita.com", // <- absolute URL, no trailing “/”
  generateRobotsTxt: true, // produces /robots.txt + “Sitemap: …”
  sitemapSize: 7000, // split if >7 000 URLs
};
