import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";

import { gamesStore } from "@/pages/admin/games/store";

import { GameCard } from "./components/card";
import S from "./list.style";

const GamesListPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gamesStore.fetchGames();
  }, []);

  return (
    <>
      <S.TitleWrapper>
        <Title>Игры</Title>
        <S.CreateGameButton
          onClick={() => navigate("/admin/games/create")}
        >
          Добавить игру
        </S.CreateGameButton>
      </S.TitleWrapper>
      <S.ListWrapper>
        {gamesStore.games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </S.ListWrapper>
    </>
  );
};

export default observer(GamesListPage);
