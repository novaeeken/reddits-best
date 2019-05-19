import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = url => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(url);
        setItems(result.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
    // add second parameter to useEffect, to prevent refetching on update
    // also declares that it's dependent on the parameter url. If one of these dependencies change,the hook runs again
  }, [url]);

  return {
    error,
    loading,
    items,
  };
};

export default useFetchData;
