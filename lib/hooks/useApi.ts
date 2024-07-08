import { useState } from 'react';
import axiosInstance from '@/api/axiosInstance';

const useApi = (url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE') => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (body?: any) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance({
        url,
        method,
        data: body,
      });
      setData(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useApi;
