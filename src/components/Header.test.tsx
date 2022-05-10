import { render, renderHook, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchProvider, { useSearchOptions } from "../context/SearchContext";
import Header from "./Header";

describe("Header component test", () => {
  test("Render <Header> and test if there is a toggler", () => {
    const { result } = renderHook(useSearchOptions);

    render(
      <BrowserRouter>
        <SearchProvider {...result.current}>
          <Header />
        </SearchProvider>
      </BrowserRouter>
    );
    const headerEl = screen.getByTestId("header");

    expect(headerEl).toContainElement(screen.getByTestId("toggler"));
  });
});
