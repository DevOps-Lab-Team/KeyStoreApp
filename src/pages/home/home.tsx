import { gamePreviewsMock } from "./home.mocks.ts";
import S from "./home.style.ts";
import { GameCard } from "./components/gameCard";

import type { FC } from "react";

const HomePage: FC = () => {
  // Пример данных
  // const games = [
  //   {
  //     id: 1,
  //     name: "Cyberpunk 2077",
  //     price: 1999,
  //     img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "The Witcher 3: Wild Hunt",
  //     price: 999,
  //     img: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Red Dead Redemption 2",
  //     price: 2499,
  //     img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg"
  //   }
  // ];

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

export default HomePage;
