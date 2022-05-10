import { SearchOption } from "../context/SearchContext";
import filterTunes from "./filterTunes";
import tunesJson from "../data/tunes.json";
import { Tunes } from "../models";

describe("filterTunes function test", () => {
  test("test function with empty data", () => {
    const searchOption: SearchOption = {
      artist: "",
      price: undefined,
      title: "",
    };

    expect(filterTunes(null, searchOption)).toBeNull();
  });

  test("test function with real data", () => {
    const searchOption: SearchOption = {
      artist: "Arc",
      price: 9.99,
      title: "WE",
    };

    expect(
      filterTunes(tunesJson as unknown as Tunes, searchOption)
    ).toHaveLength(1);
  });
});
