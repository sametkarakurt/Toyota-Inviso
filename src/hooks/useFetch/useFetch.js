import {useEffect, useState} from 'react';
import axios from 'axios';
function useFetch(url) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data};
}

export default useFetch;
