import styled from "styled-components";
import { Button } from "antd";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CreateGameButton = styled(Button)`
`;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default {
  ListWrapper,
  TitleWrapper,
  CreateGameButton
};
