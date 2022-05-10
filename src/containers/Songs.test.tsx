import { render, renderHook, screen } from "@testing-library/react";
import SearchProvider, { useSearchOptions } from "../context/SearchContext";
import Songs from "./Songs";

describe("Songs component test", () => {
  test("Render <Songs> and check if there is a loading container", () => {
    const { result } = renderHook(useSearchOptions);

    render(
      <SearchProvider {...result.current}>
        <Songs />
      </SearchProvider>
    );
    expect(screen.getByTestId("loading-container")).toBeInTheDocument();
  });
});
