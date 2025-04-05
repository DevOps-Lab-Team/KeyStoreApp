import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import gamesStore from "@/store/games";

import { gamePreviewsMock } from "./home.mocks.ts";
import S from "./home.style.ts";
import { GameCard } from "./components/gameCard";

import type { FC } from "react";

const HomePage: FC = () => {
  const { games, fetchGames } = gamesStore;

  useEffect(() => {
    fetchGames().then(() => console.log(games));
    console.log("its worked");
  }, []);

  return (
    <S.Container>
      <S.Title>Популярные игры</S.Title>
      <S.GamesGrid>
        {gamePreviewsMock.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            price={game.price}
            img={game.img}
          />
        ))}
      </S.GamesGrid>
    </S.Container>
  );
};

export default observer(HomePage);
