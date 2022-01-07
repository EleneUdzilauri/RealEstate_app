import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '2ad66dc6c9mshc4ace3bddd24d14p1cb69cjsn423a40f56ea3'
        }
    })
    return data;
}