import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Substitua pela URL da sua API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;