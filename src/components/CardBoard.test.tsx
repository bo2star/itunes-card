import { render, screen } from "@testing-library/react";
import CardBoard, { ICardBoardProps } from "./CardBoard";
import tunes from "../data/tunes.json";

describe("CardBoard component test", () => {
  test("Render <CardBoard> with tunes = null", () => {
    const props: ICardBoardProps = {
      tunes: null,
    };

    render(<CardBoard {...props} />);
    const board = screen.getByTestId("board");

    expect(board.childElementCount).toBeCloseTo(0);
  });

  test("Render <CardBoard> with tunes which has 69-length", () => {
    const props: ICardBoardProps = {
      tunes: tunes.feed.entry,
    };

    render(<CardBoard {...props} />);
    const board = screen.getByTestId("board");

    expect(board.childElementCount).toBeCloseTo(69);
  });
});
