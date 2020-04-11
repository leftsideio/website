import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import styled, { createGlobalStyle } from "styled-components"
import cssReset from "styled-reset"
import { colors } from "./shared/styles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&family=Titan+One&family=IBM+Plex+Mono:wght@500&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://highlightjs.org/static/demo/styles/gruvbox-dark.css"
        />
      </Helmet>
      <GlobalStyle />
      <Container>{children}</Container>
    </>
  )
}

export default Layout

const Container = styled.main`
  min-height: 100vh;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const GlobalStyle = createGlobalStyle`
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
}
body {
  background: ${colors.almond};
  color: ${colors.raisin};
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
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
}
code {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
}
::selection {}
`
