import { render, screen } from "@testing-library/react";
import React from "react";
import Card, { CardData } from "./Card";
import LoadingContainer, { ILoadingContainerProps } from "./LoadingContainer";

describe("LoadingContainer component test", () => {
  test("Render <LoadingContainer> and test it when it's loading === true", () => {
    const props: ILoadingContainerProps = {
      loading: true,
      error: "",
      retry: () => {},
      children: React.createElement("div"),
    };

    render(<LoadingContainer {...props} />);
    const loadingContainer = screen.getByTestId("loading-container");

    expect(loadingContainer).toBeInTheDocument();
  });

  test("Render <LoadingContainer> and test it when it's loading === false and error is not empty", () => {
    const retryFn = jest.fn();

    const props: ILoadingContainerProps = {
      loading: false,
      error: "Too many requests",
      retry: retryFn,
      children: React.createElement("div"),
    };

    render(<LoadingContainer {...props} />);
    const errorContainer = screen.getByTestId("error-container");

    expect(errorContainer).toBeInTheDocument();
    expect(errorContainer.innerHTML).toMatch(/Too many requests/);

    const retryBtn = screen.getByTestId("retry-button");
    retryBtn.click();
    expect(retryFn).toBeCalled();

    retryFn.mockClear();
  });

  test("Render <LoadingContainer> and test it when it's loading and error is false", () => {
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

    const props: ILoadingContainerProps = {
      loading: false,
      error: "",
      retry: () => {},
      children: <Card data={card} />,
    };

    render(<LoadingContainer {...props} />);
    const contentContainer = screen.getByTestId("content-container");

    expect(contentContainer).toBeInTheDocument();
    expect(contentContainer).toContainElement(screen.getByTestId("card"));
  });
});
