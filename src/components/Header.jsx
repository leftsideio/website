import styled from "styled-components"
import left from "@/assets/images/logo-full.svg"

const Header = () => {
  return (
    <Box>
      <Logo src={left} />
    </Box>
  )
}

export default Header

const Box = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8px 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.img`
  position: absolute;
  top: 2rem;
  left: 2rem;
  height: auto;
  width: 8rem;
`
