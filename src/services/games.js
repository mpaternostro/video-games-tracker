import { fetchGameById, fetchGames } from "../api/games";
import { mapGame, mapGamesList } from "../mappers/game";

export async function getGames() {
  const games = await fetchGames();
  return mapGamesList(games);
}

/**
 * @param {Number} id
 */
export async function getGameById(id) {
  if (!id) {
    throw new Error(`Game ID is required to get game`);
  }
  const game = await fetchGameById(id);
  return mapGame(game);
}
