import { createContext, useContext } from "react";
import { GameStore } from "./GameStore";

export class RootStore {
  gameStore: GameStore;

  constructor() {
    this.gameStore = new GameStore();
  }
}

export const RootStoreContext = createContext<RootStore | null>(null);

export const useStores = () => {
  const context = useContext(RootStoreContext);
  if (context === null) {
    throw new Error("useStores must be used within RootStoreProvider");
  }
  return context;
};

export const useGameStore = () => {
  const { gameStore } = useStores();
  return gameStore;
}; 