import { useEffect, useState } from 'react';

export const useFetch = <S = undefined>(
  url: string
): [data: S | undefined, loading: boolean] => {
  const [data, setData] = useState<S | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUrl(): Promise<void> {
      const response = await fetch(url);
      const json = response.json() as Promise<S | undefined>;

      setData(await json);
      setLoading(false);
    }

    fetchUrl().catch(() => {
      //...
    });
  }, [url]);

  return [data, loading];
};
