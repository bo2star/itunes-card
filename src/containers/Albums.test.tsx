import { render, renderHook, screen } from "@testing-library/react";
import SearchProvider, { useSearchOptions } from "../context/SearchContext";
import Albums from "./Albums";

describe("Albums component test", () => {
  test("Render <Albums> and check if there is a loading container", () => {
    const { result } = renderHook(useSearchOptions);

    render(
      <SearchProvider {...result.current}>
        <Albums />
      </SearchProvider>
    );
    expect(screen.getByTestId("loading-container")).toBeInTheDocument();
  });
});
