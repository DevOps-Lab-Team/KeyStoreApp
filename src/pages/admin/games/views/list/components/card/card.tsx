import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

import { gamesStore } from "@/pages/admin/games/store";

import S from "./card.style.ts";

import type { FC, MouseEventHandler } from "react";
import type IGameCard from "./card.type.ts";

const GameCard: FC<IGameCard> = props => {
  const { game } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/games/${game.id}`);
  };

  const handleRemove: MouseEventHandler = (event) => {
    event.stopPropagation();
    gamesStore.deleteGame(game.id);
  };

  return (
    <S.CardWrapper onClick={handleClick}>
      <S.CardTitleWrapper>
        <h1>{game.name}</h1>
        <p>{game.genre}</p>
      </S.CardTitleWrapper>
      <S.RemoveButton onClick={handleRemove}>
        <FaTrash/>
      </S.RemoveButton>
    </S.CardWrapper>
  );
};

export default GameCard;
