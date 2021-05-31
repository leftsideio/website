import styled from "styled-components"
import { GlobalStyle } from "@/style"
import { Backdrop } from "@/components/media"
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Backdrop />
      <Main>{children}</Main>
    </>
  )
}

export default Layout

const Main = styled.main`
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  min-width: 100vw;
  width: 100%;
`
