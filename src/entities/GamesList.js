/**
 * @typedef {import('./Game.js').default} Game
 */

export default class GamesList {
  /**
   * @param {Number} count
   * @param {String} previous
   * @param {String} next
   * @param {Array<Game>} results
   */
  constructor(count, previous, next, results) {
    this.count = count;
    this.previous = previous;
    this.next = next;
    this.results = results;
  }
}
