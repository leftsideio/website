import styled from "styled-components"

const Footer = () => {
  return (
    <Box>
      <BLM>#BlackLivesMatter ✊🏿</BLM>
      <Copyright>&copy; Leftside</Copyright>
    </Box>
  )
}

export default Footer

const Box = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  padding: 8px 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Copyright = styled.aside`
  font-family: Orbitron;
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
`
const BLM = styled.aside`
  font-size: 1.4rem;
`
