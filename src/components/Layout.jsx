import styled from "styled-components"
import { GlobalStyle } from "@/style"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout

const Main = styled.main`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
`
