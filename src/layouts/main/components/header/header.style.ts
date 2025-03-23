import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "@/shared/theme";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 72px;
  padding: 0 24px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.palette.gray[500]};
  border-bottom: 2px solid ${theme.palette.red[500]};
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.palette.gray[100]};
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 32px;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${theme.palette.gray[100]};
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${theme.palette.red[500]};
  }
`;

const UserActions = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const CartButton = styled.button`
  background: none;
  border: none;
  color: ${theme.palette.gray[100]};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  transition: color 0.2s;

  &:hover {
    color: ${theme.palette.red[500]};
  }
`;

const ProfileButton = styled.button`
  background: none;
  border: none;
  color: ${theme.palette.gray[100]};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  transition: color 0.2s;

  &:hover {
    color: ${theme.palette.red[500]};
  }
`;

export default {
  HeaderWrapper,
  Logo,
  Nav,
  NavLink,
  UserActions,
  CartButton,
  ProfileButton
};
