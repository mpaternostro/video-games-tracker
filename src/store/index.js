import { writable } from "svelte/store";
import { fetchGames } from "../api/games";

export const games = writable(fetchGames());
