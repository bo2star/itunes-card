import React, { useMemo } from "react";
import CardBoard from "../components/CardBoard";
import LoadingContainer from "../components/layouts/LoadingContainer";
import { useSearch } from "../context/SearchContext";
import useFetchTunes from "../hooks/useFetchTunes";
import filterTunes from "../utils/filterTunes";

const Albums: React.FC = () => {
  const { loading, error, data, retry } = useFetchTunes(
    "/us/rss/topalbums/limit=100/json"
  );
  const { title, artist, price } = useSearch();

  const tunes = useMemo(() => {
    return filterTunes(data, { title, artist, price });
  }, [data, title, artist, price]);

  return (
    <LoadingContainer
      loading={!!loading}
      error={!error ? "" : error.message}
      retry={retry}
    >
      <CardBoard tunes={tunes} />
    </LoadingContainer>
  );
};

export default Albums;
