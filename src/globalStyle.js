import { createGlobalStyle } from "styled-components";
import { COLORS } from "./components/__shared/variables";

/********** STYLED-COMPONENTS GLOBALS **********/

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
    min-width: 100vw;
    min-height: 100vh;
    height: 100%;
    width: 100%;
  }
  body {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background: ${COLORS.white.main};
    font-family: 'Concert One', 'Helvetica Neue','Arial', sans-serif;
    color: #263238;
    > #app {
      height: 100%;
      width: 100%;
    }
  }
  p {
    font-family: 'Nothing You Could Do', cursive !important;
  }
  `;
