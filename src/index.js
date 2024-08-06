import robotsTxtParser from "../controllers/robotsTxtParser.js";
const url = 'https://plumgoodness.com'

console.log(await robotsTxtParser(url))