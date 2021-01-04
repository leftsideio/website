import styled, { css } from "styled-components"
import { Neon } from "@/components/media"
import useStore from "@/store"

const Splash = () => {
  const mode = useStore(state => state.mode)
  return (
    <Container>
      <Text>We build</Text>
      <Text>software</Text>
      <Text>
        the
        <Neon>Right</Neon>
        way.
      </Text>
      <Subtext>
        Which is to say: we build it your way. Using the right technology and tools. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </Subtext>
    </Container>
  )
}

export default Splash

const Container = styled.section`
  margin: 0 auto;
  position: relative;
  max-width: var(--layout-site-width);
  width: 100%;
  height: calc(100vh - var(--layout-navbar-height));
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

const Text = styled.h1`
  font-feature-settings: "smcp";
  font-size: 8rem;
  /* text-transform: uppercase; */
  line-height: 8.5rem;
  /* span {
    font-family: "Neoneon";
    font-weight: normal
    font-size: 8rem;
  } */
`

const Subtext = styled.p`
  margin-top: 2rem;
  max-width: 60rem;
  font-size: 3rem;
  line-height: 4rem;
`
