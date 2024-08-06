import axios from "axios";

const fetchSitemap = async(url)=>{
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return error
    }
}
export default fetchSitemap