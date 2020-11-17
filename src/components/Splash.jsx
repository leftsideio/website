import styled from "styled-components"

const Splash = ({ children }) => <Container>{children}</Container>

export default Splash

const Container = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  height: 100vh;
  width: 100vw;
  margin-bottom: 200rem;
`
