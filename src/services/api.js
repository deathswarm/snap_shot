import axios from 'axios';


const API_KEY = process.env.REACT_APP_PROJECT_API_KEY;
const URL = 'https://pixabay.com/api'

export const getImages = (text, count) => {
    try {
        const data = axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}
