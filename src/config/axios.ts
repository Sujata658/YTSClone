import axios from 'axios';

const baseURL ='https://yts.mx/api/v2';


export const axiosInstance = axios.create({
    baseURL: baseURL,
});