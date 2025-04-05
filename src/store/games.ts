import { makeAutoObservable } from "mobx";

import { gamesApi } from "../api/games";

import type { TGame } from "../pages/home/home.type";

export class GamesStore {
  games: TGame[] = [];
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Actions для изменения состояния
  private setGamesAction = (games: TGame[]) => {
    this.games = games;
  };

  private addGameAction = (game: TGame) => {
    this.games.push(game);
  };

  private removeGameAction = (id: string) => {
    this.games = this.games.filter(game => game.id !== id);
  };

  private updateGameAction = (id: string, updatedGame: TGame) => {
    const index = this.games.findIndex(game => game.id === id);
    if (index !== -1) {
      this.games[index] = updatedGame;
    }
  };

  private setLoadingAction = (loading: boolean) => {
    this.isLoading = loading;
  };

  private setErrorAction = (error: string | null) => {
    this.error = error;
  };

  // Загрузить все игры
  fetchGames = async () => {
    this.setLoadingAction(true);
    this.setErrorAction(null);
    try {
      const games = await gamesApi.getGames();
      this.setGamesAction(games);
    } catch (error) {
      this.setErrorAction(error instanceof Error ? error.message : "Failed to fetch games");
    } finally {
      this.setLoadingAction(false);
    }
  };

  // Добавить игру
  addGame = async (game: Omit<TGame, "id">) => {
    this.setLoadingAction(true);
    this.setErrorAction(null);
    try {
      const newGame = await gamesApi.createGame(game);
      this.addGameAction(newGame);
    } catch (error) {
      this.setErrorAction(error instanceof Error ? error.message : "Failed to add game");
    } finally {
      this.setLoadingAction(false);
    }
  };

  // Удалить игру по ID
  removeGame = async (id: string) => {
    this.setLoadingAction(true);
    this.setErrorAction(null);
    try {
      await gamesApi.deleteGame(id);
      this.removeGameAction(id);
    } catch (error) {
      this.setErrorAction(error instanceof Error ? error.message : "Failed to remove game");
    } finally {
      this.setLoadingAction(false);
    }
  };

  // Обновить игру
  updateGame = async (id: string, updatedGame: Partial<TGame>) => {
    this.setLoadingAction(true);
    this.setErrorAction(null);
    try {
      const updated = await gamesApi.updateGame(id, updatedGame);
      this.updateGameAction(id, updated);
    } catch (error) {
      this.setErrorAction(error instanceof Error ? error.message : "Failed to update game");
    } finally {
      this.setLoadingAction(false);
    }
  };

  // Получить игру по ID
  getGameById = async (id: string) => {
    try {
      return await gamesApi.getGameById(id);
    } catch (error) {
      this.setErrorAction(error instanceof Error ? error.message : "Failed to fetch game");
      return null;
    }
  };

  // Поиск игр по названию
  searchGames = async (query: string) => {
    this.setLoadingAction(true);
    this.setErrorAction(null);
    try {
      const games = await gamesApi.searchGames(query);
      this.setGamesAction(games);
    } catch (error) {
      this.setErrorAction(error instanceof Error ? error.message : "Failed to search games");
    } finally {
      this.setLoadingAction(false);
    }
  };

  // Сортировка игр по цене (локальная операция)
  sortGamesByPrice = (ascending: boolean = true) => {
    return [...this.games].sort((a, b) =>
      ascending ? a.price - b.price : b.price - a.price
    );
  };
}

export type TGamesStore = GamesStore;

const instance = new GamesStore();

export default instance;
