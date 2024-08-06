import xml2js from 'xml2js'
const parseSitemap = async (xml) => {
    try {
        const parser = new xml2js.Parser();
        const result = await parser.parseStringPromise(xml);
        return result;
    } catch (error) {
        return error
    }
}

export default parseSitemap;