import robotsTxtParser from "../controllers/robotsTxtParser.js";
import fetchSitemap from "../controllers/fetchSiteMap.js";
import parseSitemap from "../controllers/parseSiteMap.js";
const url = 'https://plumgoodness.com'
const siteMapUrl = await robotsTxtParser(url);
const siteMapXml = await fetchSitemap(siteMapUrl);
console.log(await parseSitemap(siteMapXml));
