import fetchSitemap from "./fetchSiteMap.js";
import generateAiSummary from "./generateAiSummary.js";
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

        const firstFiveProd = await Promise.all(
            products.slice(1, 6).map(async prod=>{
            const summary = await generateAiSummary(prod.loc)
            return {
                url: prod.loc,
                images: prod.images,
                summary: summary
            }
        }));
        return JSON.stringify(firstFiveProd, null, 2);
    } catch (error) {
        return error
    }

}

export default extractProductInfo;