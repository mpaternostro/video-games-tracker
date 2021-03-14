import { render } from "@testing-library/svelte";
import App from "../App.svelte";

beforeEach(() => {
  global.fetch = jest.fn();
  global.fetch.mockImplementationOnce(
    () =>
      new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r({});
        });
        resolve({ json: () => jsonPromise });
      })
  );
});

describe("App", () => {
  it("should render Home", () => {
    const { getByTestId } = render(App);

    const element = getByTestId("home-title");

    expect(element).toHaveTextContent("Games");
  });
});
