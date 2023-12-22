import { httpService } from "../httpService";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    setLoading(true);
    const { data, error } = await httpService.get(url);

    if (data) {
      //console.log(data);
      setResult(data);
    }
    if (error) setError(error);

    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [url]);

  return { result, loading, error };
};

export default useFetch;
