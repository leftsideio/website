import styled, { css } from "styled-components"
import useStore from "@/store"

const Neon = ({ children }) => {
  const mode = useStore(state => state.mode)
  return (
    <Text $isDark={mode === "dark"}>
      <a>{children}</a>
    </Text>
  )
}

export default Neon

const Text = styled.p`
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
