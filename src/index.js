import robotsTxtParser from "../controllers/robotsTxtParser.js";
import fetchSitemap from "../controllers/fetchSiteMap.js";
const url = 'https://plumgoodness.com'
const siteMapUrl = await robotsTxtParser(url);
console.log(await fetchSitemap(siteMapUrl))
