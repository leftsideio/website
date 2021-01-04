import styled, { css } from "styled-components"
import { ColorMode, EnableSound } from "@/components/widgets"
import useStore from "@/store"

const Splash = () => {
  const mode = useStore(state => state.mode)
  return (
    <Container>
      <Text>We build</Text>
      <Text>software</Text>
      <Text>
        the
        <Neon $isDark={mode === "dark"}>
          <a>Right</a>
        </Neon>
        way.
      </Text>
      <Subtext>
        Which is to say: we build it your way. Using the right methodologies,
        technologies, and tools. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Subtext>
      <ColorMode />
      <EnableSound />
    </Container>
  )
}

export default Splash

const Container = styled.section`
  margin: 0 auto;
  position: relative;
  max-width: 1200px;
  width: 100%;
  height: 100%;
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

const Neon = styled.p`
  margin-left: 2.5rem;
  margin-right: 1rem;
  display: inline-block;
  font-size: 8rem;
  a {
    font-family: "Neoneon";
    color: #fe00fe;
    text-decoration: none;
    ${({ $isDark }) =>
      $isDark &&
      css`
        color: white;
        animation: neon 1.5s ease-in-out infinite alternate;
      `}
  }

  @keyframes neon {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de,
        0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de,
        0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
    }
  }
`
