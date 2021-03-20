import "@testing-library/jest-dom/extend-expect";
import renderWithRouter from "../../test/renderWithRouter";
import Nav from "../Nav.svelte";

describe("Nav", () => {
  it("should render component", () => {
    const { getByTestId } = renderWithRouter(Nav);

    const element = getByTestId("nav");
    const homeLink = getByTestId("nav-home");
    const aboutLink = getByTestId("nav-about");

    expect(element).toBeInstanceOf(HTMLElement);
    expect(homeLink).toBeInstanceOf(HTMLAnchorElement);
    expect(aboutLink).toBeInstanceOf(HTMLAnchorElement);
    expect(homeLink).toHaveTextContent(/^Home$/);
    expect(aboutLink).toHaveTextContent(/^About$/);
    expect(homeLink).toHaveAttribute("href", "/");
    expect(aboutLink).toHaveAttribute("href", "/about");
  });
});
