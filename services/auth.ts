// services/auth.ts
import axios from '../lib/axiosConfig';

interface AuthResponse {
  token: string;
  // Adicione outros campos conforme necessário
}

export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>('/auth/login', { email, password });
  return response.data;
};

export const registerUser = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>('/auth/register', { email, password });
  return response.data;
};