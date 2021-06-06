import styled, { css } from "styled-components"
// import { useSpring } from "@react-spring/core"
// import { a as web } from "@react-spring/web"
import { useSnapshot } from "valtio"
import { state } from "@/store"

import Input from "./Input"
import FileDrop from "./FileDrop"
import Review from "./Review"
import { Icon } from "@/components/media"
import { media } from "@/style"

const Form: React.FC = () => {
  const { isLaptopOpen, step, isNextStep, message } = useSnapshot(state)
  // const springProps = useSpring({ open: Number(isLaptopOpen) })

  if (!isLaptopOpen) return null

  return (
    <Box>
      <Navigate
        $back
        $show={step !== 1}
        onClick={() => {
          if (step > 1) --state.step
        }}
      >
        Back
      </Navigate>
      {step === 1 && <Input type="text" placeholder="Enter name" param="name" requirement={str => str.length >= 2} />}
      {step === 2 && (
        <Input
          type="email"
          placeholder="Enter email"
          param="email"
          requirement={str => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)}
        />
      )}
      {step === 3 && (
        <TextAreaWrap>
          <Input
            as="textarea"
            rows="4"
            placeholder="Enter message"
            param="message"
            style={{ resize: "none" }}
            maxLength={500}
            requirement={str => str.length > 1}
          />
          <WordLimit $show={message.length === 500}>Limit to 500 characters.</WordLimit>
        </TextAreaWrap>
      )}
      {step === 4 && <FileDrop />}
      {step === 5 && <Review />}
      <Navigate
        $show={isNextStep && step !== 5}
        onClick={() => {
          if (step < 5) ++state.step
        }}
      >
        Next
      </Navigate>
    </Box>
  )
}

export default Form

const Box = styled.div`
  padding: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.75);
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  transition: all 0.4s;
  ${media[400]`
    padding: 4rem 2rem;
    background: white;
    grid-template-columns: repeat(2, 1fr);
  `}
`
const Navigate = styled(Icon).attrs({ name: "left" })`
  height: 8rem;
  width: auto;
  opacity: 0;
  visibility: hidden;
  overflow: visible;
  .left_svg__outer {
    transform: translateX(4rem);
    transition: all 0.2s;
  }
  &:hover {
    cursor: pointer;
    .left_svg__outer {
      transform: translateX(0);
    }
  }
  ${({ $show }) =>
    $show &&
    css`
      opacity: 1;
      visibility: visible;
    `}
  ${media[575]`
    height: 6rem;
  `}
  ${media[400]`
    height: 8rem;
    justify-self: start;
  `}
  ${({ $back }) =>
    $back &&
    css`
      transform: rotate(-180deg);
      ${media[400]`
       justify-self: end;
      `}
    `}
`
const TextAreaWrap = styled.div`
  display: flex;
  flex-direction: column;
  ${media[400]`
    grid-row: 1;
    grid-column: 1 / -1;
    width: 100%;
  `}
`
const WordLimit = styled.span`
  align-self: flex-end;
  opacity: 0;
  visibility: hidden;
  ${({ $show }) =>
    $show &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`
