import { axiosInstance } from "./axios";
import type { TGame } from "../pages/home/home.type";

export const gamesApi = {
  // Получить все игры
  getGames: async () => {
    const { data } = await axiosInstance.get<TGame[]>("/games");
    return data;
  },

  // Получить игру по ID
  getGameById: async (id: string) => {
    const { data } = await axiosInstance.get<TGame>(`/games/${id}`);
    return data;
  },

  // Создать новую игру
  createGame: async (game: Omit<TGame, "id">) => {
    const { data } = await axiosInstance.post<TGame>("/games", game);
    return data;
  },

  // Обновить игру
  updateGame: async (id: string, game: Partial<TGame>) => {
    const { data } = await axiosInstance.patch<TGame>(`/games/${id}`, game);
    return data;
  },

  // Удалить игру
  deleteGame: async (id: string) => {
    await axiosInstance.delete(`/games/${id}`);
  },

  // Поиск игр по названию
  searchGames: async (query: string) => {
    const { data } = await axiosInstance.get<TGame[]>("/games/search", {
      params: { query }
    });
    return data;
  }
}; 