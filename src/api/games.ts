import { axiosInstance } from "./axios";

import type { TGame } from "@/shared/types";

export const gamesApi = {
  getGames: async () => {
    const { data } = await axiosInstance.get<TGame[]>("/Game");
    return data;
  },
};
