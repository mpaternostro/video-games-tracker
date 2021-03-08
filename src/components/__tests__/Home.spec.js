import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import Home from "../Home.svelte";

describe("Home", () => {
  it("should render component", () => {
    const { getByTestId } = render(Home);

    const element = getByTestId("home");

    expect(element).toBeInstanceOf(HTMLElement);
  });
});
