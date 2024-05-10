import { useState, useCallback } from 'react';
import axios from 'axios';

export default function postAxios(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const makeRequest = useCallback(async (requestData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(url, requestData);
      setData(response.data);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  }, [url]);

  return { makeRequest, data, isLoading, error };
}
