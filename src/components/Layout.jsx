import { Helmet } from "react-helmet"
import styled from "styled-components"
import { GlobalStyle } from "~/style/global"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@800&family=Titan+One&family=IBM+Plex+Mono:wght@700&display=swap"
          rel="stylesheet"
        ></link>
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
  overflow: hidden;
`
