import { render, screen } from "@testing-library/react";
import Toggler, { ITogglerProps } from "./Toggler";

describe("Test Toggler component", () => {
  test("Render <Toggler> and test it props", () => {
    const toggleFn = jest.fn();

    const props: ITogglerProps = {
      defaultChecked: false,
      rightLabel: "Songs",
      leftLabel: "Albums",
      onToggle: toggleFn,
    };

    render(<Toggler {...props} />);
    const toggler = screen.getByTestId("toggler");

    expect(toggler.getElementsByTagName("span")[0]).toContainHTML(
      "<span>Albums</span>"
    );
    expect(toggler.getElementsByTagName("span")[2]).toContainHTML(
      "<span>Songs</span>"
    );

    const toggleSlider = screen.getByTestId("toggle-slider");
    toggleSlider.click();
    expect(toggleFn).toBeCalledTimes(1);
  });
});
