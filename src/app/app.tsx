import { createGlobalStyle, ThemeProvider } from "styled-components";

import { Router } from "@/app/router";
import { theme } from "@/shared/theme";

const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      appearance: none;
      box-sizing: border-box;
    }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
      <GlobalStyle/>
    </ThemeProvider>
  );
};

export default App;
