import { type FC, type PropsWithChildren } from "react";
import { RootStore, RootStoreContext } from "./RootStore";

const rootStore = new RootStore();

export const RootStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
}; 