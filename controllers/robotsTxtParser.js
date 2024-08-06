import axios from 'axios'
import robotsParser from 'robots-parser';
const robotsTxtParser = async (url) => {
    try {
        const response = await axios.get(`${url}/robots.txt`);
        const robotsTxt = response.data;
        const sitemaps = robotsParser(`${url}/robots.txt`, robotsTxt).getSitemaps();
        return sitemaps[0];
    } catch (error) {
        return error
    }
}

export default robotsTxtParser;