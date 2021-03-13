export default class Game {
  /**
   * @param {Number} id
   * @param {String} name
   * @param {String} backgroundImg
   * @param {String} released
   * @param {Boolean} tba
   * @param {Number} rating
   * @param {Number} metacritic
   * @param {Number} playtime
   * @param {Array<String>} parentPlatforms
   * @param {Array<String>} platforms
   * @param {Array<String>} genres
   */
  constructor(
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
  ) {
    this.id = id;
    this.name = name;
    this.backgroundImage = backgroundImage;
    this.released = released;
    this.tba = tba;
    this.rating = rating;
    this.metacritic = metacritic;
    this.playtime = playtime;
    this.parentPlatforms = parentPlatforms;
    this.platforms = platforms;
    this.genres = genres;
  }
}
