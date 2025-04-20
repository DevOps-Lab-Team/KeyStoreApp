import { makeAutoObservable } from "mobx";

import { gamesApi } from "@/api/admin/games";

import type { TGame } from "@/shared/types";

export class GamesStore {
  games: TGame[] = [];
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchGames = async () => {
    this.setLoading(true);
    this.setError(null);
    try {
      const games = await gamesApi.getGames();
      this.setGames(games);
    } catch (error) {
      this.setError(error instanceof Error ? error.message : "Failed to fetch games");
    } finally {
      this.setLoading(false);
    }
  };

  fetchGameById = async (id: string) => {
    try {
      return await gamesApi.getGameById(id);
    } catch (error) {
      this.setError(error instanceof Error ? error.message : "Failed to fetch game");
      return null;
    }
  };

  updateGame = async (id: string, updatedGame: Partial<TGame>) => {
    this.setLoading(true);
    this.setError(null);
    try {
      await gamesApi.updateGame(id, updatedGame);
    } catch (error) {
      this.setError(error instanceof Error ? error.message : "Failed to update game");
    } finally {
      this.setLoading(false);
    }
  };

  createGame = async (game: Omit<TGame, "id">) => {
    this.setLoading(true);
    this.setError(null);
    try {
      await gamesApi.createGame(game);
    } catch (error) {
      this.setError(error instanceof Error ? error.message : "Failed to create game");
    } finally {
      this.setLoading(false);
    }
  };

  deleteGame = async (id: string) => {
    try {
      await gamesApi.deleteGame(id);
      await this.fetchGames();
    } catch (error) {
      this.setError(error instanceof Error ? error.message : "Failed to delete game");
    }
  };

  private setGames = (games: TGame[]) => {
    this.games = games;
  };

  private setLoading = (loading: boolean) => {
    this.isLoading = loading;
  };

  private setError = (error: string | null) => {
    this.error = error;
  };
}

export type TGamesStore = GamesStore;

export const gamesStore = new GamesStore();
