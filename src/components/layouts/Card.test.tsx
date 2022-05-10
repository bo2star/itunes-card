import { render, screen } from "@testing-library/react";
import Card, { CardData } from "./Card";

describe("Card component test", () => {
  test("Render <Card> and check its props", () => {
    const card: CardData = {
      image: {
        src: "https://is1-ssl.mzstatic.com/image/thumb/Music126/…17c1-31d90a935dcb/5037300009513.jpg/170x170bb.png",
        height: "170",
        width: "170",
      },
      title: "WE - Arcade Fire",
      artist: "Arcade Fire",
      price: "$9.99",
    };

    render(<Card data={card} />);
    const cardEl = screen.getByTestId("card");

    const image = cardEl.getElementsByTagName("img")[0];
    const imageSrc = image.getAttribute("src");
    const imageAlt = image.getAttribute("alt");

    expect(imageSrc).toBe(card.image.src);
    expect(imageAlt).toBe(card.title);
    expect(image.height).toBeCloseTo(170);
    expect(image.width).toBeCloseTo(170);

    expect(cardEl.innerHTML).toMatch(/WE - Arcade Fire/);
    expect(cardEl.innerHTML).toMatch(/Arcade Fire/);
    expect(cardEl.innerHTML).toMatch(/\$9.99/);
  });
});
