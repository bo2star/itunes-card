import React, { createContext, useCallback, useContext, useState } from "react";

export interface SearchOption {
  artist: string;
  price: number | undefined;
  title: string;
}

export interface SearchProps extends SearchOption {
  changeArtist: (artist: string) => void;
  changePrice: (price: number) => void;
  changeTitle: (title: string) => void;
  children?: React.ReactNode;
}

const SearchContext = createContext<SearchProps | undefined>(undefined);
SearchContext.displayName = "SearchContext";

export const useSearch = () => {
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error("useSearch must be used within SearchProvider");
  }

  return searchContext;
};

export const useSearchOptions = (): SearchProps => {
  const [option, setOption] = useState<SearchOption>({
    artist: "",
    price: undefined,
    title: "",
  });

  const changeArtist = useCallback((artist: string) => {
    setOption((option) => ({ ...option, artist }));
  }, []);

  const changePrice = useCallback((price: number) => {
    setOption((option) => ({ ...option, price }));
  }, []);

  const changeTitle = useCallback((title: string) => {
    setOption((option) => ({ ...option, title }));
  }, []);

  return {
    ...option,
    changeArtist,
    changePrice,
    changeTitle,
  };
};

const SearchProvider: React.FC<SearchProps> = ({
  children,
  ...remainingProps
}) => {
  return (
    <SearchContext.Provider value={remainingProps}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
