import { createGlobalStyle } from "styled-components"
import cssReset from "styled-reset"

const GlobalStyle = createGlobalStyle`
${cssReset}
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
  overflow-x: hidden;
  @media (max-width: 500px) {
    font-size: 56.25%;
  }
  @media (max-width: 420px) {
    font-size: 50%;

  }
}
body {
  position: relative;
  background: #efefef;
  /* background: #141414; */
  color: #000;
  font-family: "Baloo Tamma 2", cursive;
  font-weight: 800;
  font-style: normal;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Titan One', cursive;
  font-weight: 400;
}
code {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
}
::selection {}
`

export { GlobalStyle }
