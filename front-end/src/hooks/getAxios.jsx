import { useState, useEffect } from 'react';
import axios from 'axios';
// it's axios to get the api content
const getAxios=(url)=>{
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(url);
        setData(response.data);
        console.log('Response data:', response.data); 
      } catch (error) {
        setError(true);
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};
export default getAxios;
