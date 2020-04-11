import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Highlight from "react-highlight.js"
import { useInterval } from "beautiful-react-hooks"
import Logo from "../assets/svg/fist.svg"
import { colors } from "../components/shared/styles"
import hello from "./hello.json"
const Landing = () => {
  const [step, setStep] = useState(0)
  useInterval(() => {
    if (step === 5) setStep(0)
    else setStep(step + 1)
  }, 8000)
  const getKey = step => {
    switch (step) {
      case 0:
        return "react"
      case 1:
        return "graphql"
      case 2:
        return "express"
      case 3:
        return "flask"
      case 4:
        return "postgres"
      case 5:
        return "bash"
    }
  }
  const { lang, block } = hello[getKey(step)]
  return (
    <>
      <Construction>🚧👷🏼👷🏽🚧</Construction>
      <UnderConstruction>(site under construction)</UnderConstruction>
      <Box>
        <Message>Looking for some</Message>
        <Message style={{ alignSelf: "flex-end" }}>HIGH-quality,</Message>
        <Message>top-of-the-LINE,</Message>
        <Message style={{ alignSelf: "flex-end" }}>OUT-of-this</Message>
        <CodeBlock key={step} language={lang}>
          {block}
        </CodeBlock>
        <Message>software development?</Message>
      </Box>
      <Foot>
        <Company>
          <Fist />
          <Leftside>Left[side]</Leftside>
        </Company>
        <Email>
          <Underline>hello</Underline>@leftside.io
        </Email>
      </Foot>
    </>
  )
}

export default Landing

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
const fadeInWidth = keyframes`
  from {
    width: 0;
    opacity: 0;
  }

  to {
    width: 100%;
    opacity: 1;
  }
`
const Box = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  animation: ${fadeIn} 1s;
`

const Message = styled.h1`
  font-size: 3.5rem;
  line-height: 4.5rem;
`

const CodeBlock = styled(Highlight)`
  margin: 1.5rem 0;
  min-height: 20rem;
  background: #282828;
  padding: 2rem;
  border-radius: 4px;
  width: 100%;
  animation: ${fadeInWidth} 0.6s;
  code {
    font-size: 1.8rem;
    overflow: hidden;
  }
`
const Foot = styled.div`
  padding: 0 3rem;
  position: absolute;
  bottom: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const Company = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Fist = styled(Logo)`
  width: 6rem;
`
const Leftside = styled.h4`
  margin-top: 0.5rem;
  font-size: 2.5rem;
`
const Email = styled.h4`
  font-size: 3rem;
`

const Underline = styled.span`
  text-decoration: underline wavy #f78764;
`

const UnderConstruction = styled.h6`
  position: absolute;
  top: 7rem;
  left: -1.5rem;
  transform: rotate(-45deg);
  font-size: 1.4rem;
  opacity: 0;
  transition: all 0.4s;
`
const Construction = styled.aside`
  position: absolute;
  width: 20rem;
  top: 2.5rem;
  left: -5rem;
  line-height: 5rem;
  background: ${colors.raisin};
  text-align: center;
  transform: rotate(-45deg);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  font-size: 2rem;
  font-family: "Titan One", cursive;
  &:hover {
    cursor: pointer;
  }
  &:hover + ${UnderConstruction} {
    opacity: 1;
  }
`
