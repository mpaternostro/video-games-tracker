import { RAWG_API_KEY } from "../constants";

/**
 * @returns {Promise[]}
 */
export async function fetchGames() {
  return fetch(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}`).then((response) =>
    response.json()
  );
}

/**
 * @param {Number} id
 */
export async function fetchGameById(id) {
  if (!id) {
    throw new Error(`Game ID is required to fetch game`);
  }
  return fetch(`https://api.rawg.io/api/games/${id}?key=${RAWG_API_KEY}`).then((response) =>
    response.json()
  );
}
