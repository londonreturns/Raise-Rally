
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CostumeReactQuery() {
  const getAxios = async (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          setError(false);
          const response = await axios.get(url);
          setData(response.data);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    return { data, error, loading };
  };

  return getAxios;
}

export default CostumeReactQuery;
