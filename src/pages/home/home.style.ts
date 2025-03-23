import styled from "styled-components";

const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.palette.gray[100]};
  font-size: 32px;
  text-align: center;
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

export default {
  Container,
  Title,
  GamesGrid
};
