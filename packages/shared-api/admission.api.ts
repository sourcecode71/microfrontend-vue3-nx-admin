import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 1000,
});

export const getData = () => axiosInstance.get('/data');
export default axiosInstance;