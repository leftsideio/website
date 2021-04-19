import styled from "styled-components"
import { GlobalStyle } from "@/style"
import { Backdrop } from "@/components/media"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Backdrop />
      <Main>
        <Container>{children}</Container>
      </Main>
    </>
  )
}

export default Layout

const Main = styled.main`
  height: 1000vh;
`

const Container = styled.div`
  margin: 0 auto;
  width: var(--layout-site-width);
  height: 100%;
`
