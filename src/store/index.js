import { writable } from "svelte/store";
import { getGames } from "../services/games";

export const games = writable(getGames());
