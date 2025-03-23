import styled from "styled-components";

import { theme } from "@/shared/theme";

const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background: ${theme.palette.primary};
`;

export default {
  LayoutWrapper
};
