import { useCallback, useEffect, useState } from "react";
import { Tunes } from "../models";
import { fetchTunes } from "../services";

interface FetchTunesState {
  loading: boolean | null;
  error: Record<string, any> | null;
  data: Tunes | null;
}

interface FetchTunesResponse extends FetchTunesState {
  retry: () => void;
}

export default function useFetchTunes(url: string): FetchTunesResponse {
  const [data, setData] = useState<FetchTunesState>({
    loading: null,
    error: null,
    data: null,
  });

  const getTunes = useCallback(() => {
    setData((data) => ({
      ...data,
      loading: true,
    }));

    fetchTunes(url)
      .then((response) => {
        setData((data) => ({
          ...data,
          loading: false,
          data: response,
        }));
      })
      .catch((error) => {
        setData({
          loading: false,
          error: error,
          data: null,
        });
      });
  }, [url]);

  useEffect(() => {
    getTunes();
  }, [getTunes]);

  return { ...data, retry: getTunes };
}
