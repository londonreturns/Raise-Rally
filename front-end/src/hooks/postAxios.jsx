import { useState } from 'react';
import axios from 'axios';
// this is costume hook to post data to the api
function postAxios(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const postData = async (postData) => {
    setLoading(true);
    try {
      const response = await axios.post(url, postData);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, postData };
}

export default postAxios;
