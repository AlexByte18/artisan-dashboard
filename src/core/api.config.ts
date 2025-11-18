export const API_BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_API_URL || 'https://api.example.com'
  : '/api';

export const createApiUrl = (path: string): string => {
  return `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};
