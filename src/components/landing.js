import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Highlight from "react-highlight.js"
import { useInterval, useMediaQuery } from "beautiful-react-hooks"
import Logo from "../assets/svg/fist.svg"
import { colors } from "../components/shared/styles"
import hello from "./hello.json"
const Landing = () => {
  const [step, setStep] = useState(0)
  const isBreakText = useMediaQuery("(max-width: 700px)")
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
  const TopText = isBreakText ? (
    <>
      <Message>Looking for some</Message>
      <Message>
        <Titan>high</Titan>-quality,
      </Message>
      <Message>
        <Titan>top</Titan>-of-the-line,
      </Message>
      <Message>
        <Titan>out</Titan>-of-this
      </Message>
    </>
  ) : (
    <>
      <Message>
        Looking for some <Titan>high</Titan>-quality,
      </Message>
      <Message>
        <Titan>top</Titan>-of-the-line, <Titan>out</Titan>-of-this
      </Message>
    </>
  )
  return (
    <>
      <Construction>🚧</Construction>
      <UnderConstruction>(site under construction)</UnderConstruction>
      <Box>
        {TopText}
        <CodeBlock key={step} language={lang}>
          {block}
        </CodeBlock>
        <Message>software development?</Message>
      </Box>
      <Foot>
        <Company>
          <Fist />
          <Leftside>
            Left[<Baloo>side</Baloo>]
          </Leftside>
        </Company>
        <Email href="mailto:hello@leftside.io">
          <Underline>hello</Underline>
          <span>@leftside.io</span>
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
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  animation: ${fadeIn} 1s;
  @media (max-height: 700px) {
    justify-content: flex-start;
  }
  @media (max-width: 550px) {
    padding-right: 4rem;
    padding-left: 4rem;
    margin: auto 0;
  }
`

const Message = styled.p`
  font-size: 4.5rem;
`

const CodeBlock = styled(Highlight)`
  margin: 1.5rem 0;
  min-height: 20rem;
  background: #282828;
  padding: 2rem;
  border-radius: 4px;
  width: 100%;
  animation: ${fadeInWidth} 0.6s;
  @media (max-width: 450px) {
    padding: 1rem;
  }
  @media (max-width: 380px) {
    display: flex;
    align-items: center;
    height: 18rem;
  }
  code {
    font-size: 1.8rem;
    overflow: hidden;
    @media (max-width: 380px) {
      font-size: 1.6rem;
    }
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
  @media (max-height: 700px) {
    position: static;
  }
  @media (max-width: 550px) {
    position: static;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: auto;
  }
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
const Email = styled.a`
  font-size: 3rem;
  font-family: "Titan One", cursive;
  font-weight: 400;
  text-decoration: none;
  color: ${colors.raisin};
`

const UnderConstruction = styled.p`
  position: absolute;
  top: 8rem;
  left: 0;
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
  font-size: 2.5rem;
  font-family: "Titan One";
  @media (max-height: 700px) {
    display: none;
  }
  @media (max-width: 550px) {
    display: none;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover + ${UnderConstruction} {
    opacity: 1;
  }
`
const Titan = styled.span`
  font-family: "Titan One", cursive;
  font-weight: 400;
`
const Baloo = styled.span`
  font-family: "Baloo Tamma 2", monospace;
  font-weight: 800;
  font-size: 125%;
`

const Underline = styled(Baloo)`
  text-decoration: underline wavy #f78764;
`
