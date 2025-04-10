import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import gamesStore from "@/store/games";

import S from "./home.style.ts";
import { GameCard } from "./components/gameCard";

import type { FC } from "react";

const HomePage: FC = () => {
  const { games, fetchGames } = gamesStore;

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <S.Container>
      <S.Title>Популярные игры</S.Title>
      <S.GamesGrid>
        {games.map((game) => (
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
