import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

import S from "./header.style.ts";
import { SearchBar } from "./searchBar";

const Header = () => {
  const handleSearch = (query: string) => {
    // TODO: Implement search functionality
    console.log("Search query:", query);
  };

  return (
    <S.HeaderWrapper>
      <Link to="/home">
        <S.Logo>GameKeys</S.Logo>
      </Link>

      <S.Nav>
        <S.NavLink to="/catalog">Каталог</S.NavLink>
        <S.NavLink to="/deals">Специальные предложения</S.NavLink>
        {/*<S.NavLink to="/new">Новинки</S.NavLink>*/}
        {/*<S.NavLink to="/popular">Популярное</S.NavLink>*/}
      </S.Nav>

      <SearchBar onSearch={handleSearch} />

      <S.UserActions>
        <S.CartButton>
          <FaShoppingCart />
          <span>Корзина</span>
        </S.CartButton>
        <S.ProfileButton>
          <FaUser />
          <span>Профиль</span>
        </S.ProfileButton>
      </S.UserActions>
    </S.HeaderWrapper>
  );
};

export default Header;
