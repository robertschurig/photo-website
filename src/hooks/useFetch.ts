import { useEffect, useState } from 'react';

export const useFetch = <S = undefined>(
  url: string
): [data: S | undefined, loading: boolean] => {
  const [data, setData] = useState<S | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUrl = async () => {
      const response = await fetch(url);
      const json = await response.json();

      setData(json);
      setLoading(false);
    };

    fetchUrl();
  }, [url]);

  return [data, loading];
};
