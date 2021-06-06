import styled from "styled-components"
import { GlobalStyle } from "@/style"
import { Backdrop } from "@/components/media"
import left from "@/assets/images/logo-full.svg"
import Footer from "./Footer"
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Backdrop />
      <Main>{children}</Main>
      <Logo src={left} />
      <Footer />
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
const Logo = styled.img`
  position: absolute;
  top: 2rem;
  left: 2rem;
  height: auto;
  width: 8rem;
`
