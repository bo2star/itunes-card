import { render, renderHook, screen } from "@testing-library/react";
import SearchProvider, { useSearchOptions } from "../context/SearchContext";
import Footer from "./Footer";

describe("Footer component test", () => {
  test("Render <Footer> and test if there are 3 input fields", () => {
    const { result } = renderHook(useSearchOptions);

    render(
      <SearchProvider {...result.current}>
        <Footer />
      </SearchProvider>
    );

    expect(
      screen.getByTestId("footer").getElementsByTagName("input").length
    ).toBeCloseTo(3);
  });
});
