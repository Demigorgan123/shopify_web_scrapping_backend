import axios from "axios";
import cheerio from 'cheerio';
import Groq from "groq-sdk";
import 'dotenv/config'
const groq = new Groq({ apiKey: process.env.GROK_API_KEY});
export async function getGroqChatCompletion(text) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: `Read the text provided below and generate a summary of 5 points about the products information and each point should have at most 10 words ${text}`,
            },
        ],
        model: "llama3-8b-8192",
    });
}
const generateAiSummary = async (url) => {
    const resp = await axios.get(url);
    const pageHTML = resp.data;
    const $ = cheerio.load(pageHTML);
    const text = $('main').text().replace(/\s+/g, ' ').trim();
    const chatCompletion = await getGroqChatCompletion(text);
    return chatCompletion.choices[0]?.message?.content || "";
}
export default generateAiSummary;