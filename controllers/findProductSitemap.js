const findProductSitemap = (sitemap) => {
    try {
        const sitemaps = sitemap.sitemapindex.sitemap;
        for (const sitemapEntry of sitemaps) {
            if (sitemapEntry.loc[0].includes('product')) {
                return sitemapEntry.loc[0];
            }
        }
        return null;
    } catch (error) {
        return error;
    }
}

export default findProductSitemap;