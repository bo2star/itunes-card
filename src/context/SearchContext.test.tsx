import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import SearchProvider, { useSearchOptions } from "./SearchContext";

describe("SearchContext test", () => {
  test("SearchProvider shows default value", () => {
    const { result } = renderHook(useSearchOptions);

    render(
      <SearchProvider {...result.current}>
        <Footer />
      </SearchProvider>
    );
    const footer = screen.getByTestId("footer");
    const titleSearchInput = footer.getElementsByTagName("input")[0];
    const priceSearchInput = footer.getElementsByTagName("input")[1];
    const artistSearchInput = footer.getElementsByTagName("input")[2];

    expect(titleSearchInput.value).toBe(result.current.title);
    expect(priceSearchInput.value).toBe(
      result.current.price ? `${result.current.price}` : ""
    );
    expect(artistSearchInput.value).toBe(result.current.artist);
  });

  test("SearchProvider interacts with seach input fields", () => {
    const { result } = renderHook(useSearchOptions);

    render(
      <SearchProvider {...result.current}>
        <Footer />
      </SearchProvider>
    );
    const footer = screen.getByTestId("footer");
    const titleSearchInput = footer.getElementsByTagName("input")[0];
    const priceSearchInput = footer.getElementsByTagName("input")[1];
    const artistSearchInput = footer.getElementsByTagName("input")[2];

    fireEvent.change(titleSearchInput, { target: { value: "We" } });
    fireEvent.change(priceSearchInput, { target: { value: 9.99 } });
    fireEvent.change(artistSearchInput, { target: { value: "Arc" } });
    expect(result.current.title).toBe("We");
    expect(result.current.price).toBe(9.99);
    expect(result.current.artist).toBe("Arc");
  });
});
