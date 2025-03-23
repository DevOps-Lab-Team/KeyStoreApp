import S from "./gameCard.style.ts";

import type IGameCard from "./gameCard.type.ts";
import type { FC } from "react";

const GameCard: FC<IGameCard> = ({ name, price, img }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB"
    }).format(price);
  };

  return (
    <S.CardWrapper>
      <S.ImageWrapper>
        <S.GameImage src={img} alt={name} />
        <S.Overlay>
          <S.GameTitle>{name}</S.GameTitle>
        </S.Overlay>
      </S.ImageWrapper>
      <S.PriceWrapper>
        {/*{discount && (*/}
        {/*  <S.DiscountBadge>-{discount}%</S.DiscountBadge>*/}
        {/*)}*/}
        <S.Price>{formatPrice(price)}</S.Price>
      </S.PriceWrapper>
    </S.CardWrapper>
  );
};

export default GameCard;
