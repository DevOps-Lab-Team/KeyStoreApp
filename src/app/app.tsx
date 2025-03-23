import { createGlobalStyle } from "styled-components";

import { Router } from "@/app/router";

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
    <>
      <Router/>
      <GlobalStyle/>
    </>
  );
};

export default App;
