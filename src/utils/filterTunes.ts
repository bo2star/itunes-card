import { SearchOption } from "../context/SearchContext";
import { Imitem, Tunes } from "../models";

export default function filterTunes(
  data: Tunes | null,
  searchOption: SearchOption
): Imitem[] | null {
  if (!data) {
    return null;
  }

  const entry = data!.feed.entry;
  let { title, artist, price } = searchOption;
  title = title ? title.toLowerCase() : "";
  artist = artist ? artist.toLowerCase() : "";

  return entry
    .filter(
      (item) =>
        item.title.label.toLowerCase().includes(title || "") &&
        item["im:artist"].label.toLowerCase().includes(artist || "") &&
        item["im:price"].label.includes(`${price || ""}`)
    )
    .slice(0, 30);
}
