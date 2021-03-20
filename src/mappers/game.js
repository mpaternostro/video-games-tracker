import Game from "../entities/Game";
import GamesList from "../entities/GamesList";

export function mapGame(apiData) {
  const {
    id,
    name,
    background_image: backgroundImage,
    released,
    tba,
    rating,
    metacritic,
    playtime,
  } = apiData;
  const parentPlatforms = apiData.parent_platforms.map(({ platform }) => platform.slug);
  const platforms = apiData.platforms.map(({ platform }) => platform.slug);
  const genres = apiData.genres.map(({ slug }) => slug);
  return new Game(
    id,
    name,
    backgroundImage,
    released,
    tba,
    rating,
    metacritic,
    playtime,
    parentPlatforms,
    platforms,
    genres
  );
}

export function mapGamesList(apiData) {
  const { count, previous, next } = apiData;
  const results = apiData.results.map((game) => mapGame(game));
  return new GamesList(count, previous, next, results);
}
