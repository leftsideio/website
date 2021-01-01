import styled from "styled-components"
import { GlobalStyle } from "~/style"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Main>{children}</Main>
    </>
  )
}

export default Layout

const Main = styled.main`
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
  /* max-width: 960px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`
