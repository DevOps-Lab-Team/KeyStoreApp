import styled from "styled-components";

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 360px 1fr;
`;

const LayoutContent = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export default {
  LayoutWrapper,
  LayoutContent
};
