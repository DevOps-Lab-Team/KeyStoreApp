import styled from "styled-components";

import { theme } from "@/shared/theme";

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.palette.gray[400]};
  border-radius: 8px;
  padding: 8px 16px;
  width: 300px;
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  color: ${theme.palette.gray[100]};
  width: 100%;
  outline: none;
  font-size: 14px;

  &::placeholder {
    color: ${theme.palette.gray[300]};
  }
`;

export default {
  SearchBar,
  SearchInput
}; 