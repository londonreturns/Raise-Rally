import axios from 'axios';
import { useState } from 'react';

function usePatchAxios(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const makePatchRequest = async (payload) => {
    setLoading(true);
    try {
      const response = await axios.patch(url, payload);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { makePatchRequest, data, error, loading };
}

export default usePatchAxios;
