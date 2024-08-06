import robotsTxtParser from "../controllers/robotsTxtParser.js";
import fetchSitemap from "../controllers/fetchSiteMap.js";
import parseSitemap from "../controllers/parseSiteMap.js";
import findProductSitemap from "../controllers/findProductSitemap.js";
import extractProductInfo from "../controllers/extractProductInfo.js";
const url = 'https://plumgoodness.com'
const siteMapUrl = await robotsTxtParser(url);
const siteMapXml = await fetchSitemap(siteMapUrl);
const siteMapData = await parseSitemap(siteMapXml);
const productSitemapUrl = await findProductSitemap(siteMapData);
const productInfo = await extractProductInfo(productSitemapUrl);
console.log(productInfo);