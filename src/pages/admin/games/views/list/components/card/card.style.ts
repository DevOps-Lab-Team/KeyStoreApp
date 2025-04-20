import styled from "styled-components";
import { Button } from "antd";

const CardWrapper = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #dedede;

  transition: background 0.3s ease-in;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  position: relative;

  & > button {
    display: none;
  }

  &:hover {
    background: #f1f1f1;

    & > button {
      display: block;
    }
  }
  &:active {
    background: #e1e1e1;
  }
`;

const CardTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }
`;

const RemoveButton = styled(Button)`
  position: absolute;
  right: 16px;
  top: 16px;
`;

export default {
  CardWrapper,
  CardTitleWrapper,
  RemoveButton
};
