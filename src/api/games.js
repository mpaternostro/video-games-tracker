import "dotenv/config";

/**
 * @returns {Promise[]}
 */
export async function fetchGames() {
  return fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`).then((response) =>
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
  return fetch(
    `https://api.rawg.io/api/games/${id}?key=${process.env.RAWG_API_KEY}`
  ).then((response) => response.json());
}
