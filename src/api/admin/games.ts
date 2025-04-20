import { axiosInstance } from "./axios";

import type { TGame } from "@/shared/types";

export const gamesApi = {
  // Получить все игры
  getGames: async () => {
    const { data } = await axiosInstance.get<TGame[]>("/Game");
    return data;
  },

  // Получить игру по ID
  getGameById: async (id: string) => {
    const { data } = await axiosInstance.get<TGame>(`/Game/${id}`);
    return data;
  },

  // Создать новую игру
  createGame: async (game: Omit<TGame, "id">) => {
    const { data } = await axiosInstance.post<TGame>("/Game", game);
    return data;
  },

  // Обновить игру
  updateGame: async (id: string, game: Partial<TGame>) => {
    const { data } = await axiosInstance.put<TGame>(`/Game/${id}`, game);
    return data;
  },

  // Удалить игру
  deleteGame: async (id: string) => {
    await axiosInstance.delete(`/Game/${id}`);
  },
};
