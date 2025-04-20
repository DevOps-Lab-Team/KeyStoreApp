import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "@/shared/theme";

const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 16px 0;

  border-right: 1px solid #a0a0a0;
`;

const SidebarLogo = styled.div`
  padding: 16px;

  font-size: 24px;
  font-weight: bold;
  color: ${theme.palette.gray[100]};
  cursor: pointer;
`;

const SidebarOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SidebarOption = styled(Link)`
  text-decoration: none;
  color: #000;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 8px 16px;

  &:hover {
    background-color: #dedede;
  }
`;

export default {
  SidebarWrapper,
  SidebarLogo,
  SidebarOptions,
  SidebarOption
};
