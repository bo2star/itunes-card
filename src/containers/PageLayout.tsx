import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchProvider, { useSearchOptions } from "../context/SearchContext";

const PageLayout: React.FC = () => {
  const searchOptions = useSearchOptions();

  return (
    <SearchProvider {...searchOptions}>
      <Header />
      <Outlet />
      <Footer />
    </SearchProvider>
  );
};

export default PageLayout;
