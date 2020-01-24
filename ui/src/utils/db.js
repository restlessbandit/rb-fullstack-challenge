import axios from 'axios';
import { useState, useEffect } from 'react';

export const useSelect = query => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post('/api', { query });

        setResponse(res.data.rows);
      } catch (error) {
        setError(error.response.data.error);
      }
    };
    fetchData();
  }, [query]);

  return { error, response };
};
