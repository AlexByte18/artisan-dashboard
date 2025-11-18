import axios from 'axios';
import { API_BASE_URL } from '../api.config';

export const productsApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
});

productsApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

if (import.meta.env.DEV) {
  productsApi.interceptors.request.use((config) => {
    console.log('📡 API Request:', config.method?.toUpperCase(), config.url);
    return config;
  });

  productsApi.interceptors.response.use(
    (response) => {
      console.log('✅ API Response:', response.status, response.config.url);
      return response;
    },
    (error) => {
      console.error('❌ API Error:', error.response?.status, error.config?.url);
      return Promise.reject(error);
    }
  );
}
