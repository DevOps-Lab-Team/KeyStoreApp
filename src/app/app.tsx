import { createGlobalStyle, ThemeProvider } from "styled-components";

import { Router } from "@/app/router";
import { theme } from "@/shared/theme";
import { RootStoreProvider } from "@/store/RootStoreProvider";

const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      appearance: none;
      box-sizing: border-box;
    }
`;

const App = () => {
  console.log("App");
  return (
    <RootStoreProvider>
      <ThemeProvider theme={theme}>
        <Router/>
        <GlobalStyle/>
      </ThemeProvider>
    </RootStoreProvider>
  );
};

export default App;
