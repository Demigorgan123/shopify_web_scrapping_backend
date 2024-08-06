import fetchSitemap from "./fetchSiteMap.js";
import parseSitemap from "./parseSiteMap.js";

const extractProductInfo = async (productSitemapUrl) => {
    try {
        const productSitemapXml = await fetchSitemap(productSitemapUrl);
        const productSitemap = await parseSitemap(productSitemapXml);
        const products = productSitemap.urlset.url.map(urlEntry => {
            if (!urlEntry['image:image']) return;
            const loc = urlEntry.loc[0];
            const images = urlEntry['image:image'].map(img => ({
                loc: img['image:loc'][0],
                title: img['image:title'][0]
            }))
            return { loc, images }
        })

        return JSON.stringify(products.slice(0, 5), null, 2);
    } catch (error) {
        return error
    }

}

export default extractProductInfo;