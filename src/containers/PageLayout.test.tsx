import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PageLayout from "./PageLayout";

describe("PageLayout component test", () => {
  test("Render <PageLayout> and check there are footer and header", () => {
    render(
      <BrowserRouter>
        <PageLayout />
      </BrowserRouter>
    );

    const header = screen.getByTestId("header");
    const footer = screen.getByTestId("footer");

    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
