import { createGlobalStyle } from "styled-components"
import cssReset from "styled-reset"
import { COLORS, LAYOUT } from "./constants"

const GlobalStyle = createGlobalStyle`
${cssReset}
:root {
  --layout-site-width: ${LAYOUT.maxWidth};
  --layout-navbar-height: ${LAYOUT.topBarHeight};
  --color-text: ${COLORS.light.textColor};
  --color-background: ${COLORS.light.backgroundColor};
  --color-icon: ${COLORS.light.iconColor};
  --ribbon-background: #fff;
}
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  scroll-behavior: smooth;
  font-size: 62.5%;
  min-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  /* -ms-overflow-style: none; 
  scrollbar-width: none; 
  &::-webkit-scrollbar {
  display: none;
  } */
  @media (max-width: 500px) {
    font-size: 56.25%;
  }
  @media (max-width: 420px) {
    font-size: 50%;
  }
}
body {
  position: relative;
  background: var(--color-background);
  color: var(--color-text);
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-style: normal;
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Orbitron', sans-serif;
  font-weight: 500;
}
input, textarea {
  color: #2D2A32;
  font-family: 'Orbitron', sans-serif;
  font-weight: 500;
}
::placeholder {
  color: #2d2a32;
  filter: drop-shadow(6px 6px 0 rgba(235, 235, 235, 1)) drop-shadow(-6px -6px 0 rgba(235, 235, 235, 0.5));
}
::selection {}
`

export { GlobalStyle }
