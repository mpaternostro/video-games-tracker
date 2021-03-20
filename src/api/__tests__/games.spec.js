import { RAWG_API_KEY } from "../../constants";
import { fetchGames, fetchGameById } from "../games";

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

describe("fetch games", () => {
  it("should fetch some games", () => {
    fetchGames();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}`);
  });

  it("should fetch a specific game", () => {
    fetchGameById(3498);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.rawg.io/api/games/3498?key=${RAWG_API_KEY}`
    );
  });

  it("should fail to fetch a specific game without providing an ID", () => {
    expect(fetchGameById()).rejects.toThrowError("Game ID is required to fetch game");
    expect(global.fetch).toHaveBeenCalledTimes(0);
  });
});
