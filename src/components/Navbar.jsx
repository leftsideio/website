import styled from "styled-components"
import { ColorMode, EnableSound } from "@/components/widgets"
import logo from "@/assets/images/logo.svg"
const Navbar = () => {
  return (
    <Wrap>
      <Inner>
        <Company>
          <Logo />
          EFTSIDE
        </Company>

        <Nav></Nav>
        <Settings>
          <ColorMode />
          <EnableSound />
        </Settings>
      </Inner>
    </Wrap>
  )
}

export default Navbar

const Wrap = styled.div`
  width: 100%;
  height: 10rem;
`

const Inner = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: var(--layout-site-width);
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Nav = styled.nav``
const Settings = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, min-content);
  align-items: center;
  grid-column-gap: 2.5rem;
`

const Logo = styled.img.attrs({ src: logo })`
  height: 5rem;
  width: auto;
  margin-right: 5px;
  /* transform: rotate(-45deg); */
`
const Company = styled.h1`
  font-size: 4rem;
  display: flex;
  align-items: center;
`
