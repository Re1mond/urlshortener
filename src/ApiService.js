import axios from 'axios';
import { API_BASE_URL } from './config';

export const shortenUrl = async (url) => {
    const response = await axios.post(`${API_BASE_URL}/shorturl`, { url });
    return response.data;
};
