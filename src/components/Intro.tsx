import { useState } from "react"
import styled, { css } from "styled-components"
import { useSpring } from "@react-spring/core"
import { a as web } from "@react-spring/web"
import Laptop from "@/components/3d/Laptop"

const Intro: React.FC = () => {
  const [open, setOpen] = useState(false)
  const props = useSpring({ open: Number(open) })
  return (
    <>
      <About
        style={{
          opacity: props.open.to([0, 1], [1, 0]),
          transform: props.open.to(o => `translate3d(-50%,${o * 50 - 160}px,0)`),
        }}
      >
        <Left>
          <span>LEFTSIDE</span>
        </Left>
        <Description>
          Full service software development studio delivering timeless products via the technologies of the future.
        </Description>
      </About>

      <Laptop open={open} setOpen={setOpen} />
      {open && (
        <Form>
          <Input type="text" placeholder="Enter name" />
          {/* <Input type="email" placeholder="Email" /> */}
        </Form>
      )}
    </>
  )
}

export default Intro

const About = styled(web.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);

  display: grid;
  grid-template-columns: min-content;
  grid-row-gap: 2rem;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
`
const Left = styled(web.h1)`
  justify-self: start;
  color: #2d2a32;
  font-size: 10rem;
  span {
    filter: drop-shadow(6px 6px 0 rgba(235, 235, 235, 1)) drop-shadow(-6px -6px 0 rgba(235, 235, 235, 0.5));
  }
`
const Description = styled(web.p)`
  font-size: 4rem;
  line-height: 5rem;
`
const Form = styled.div`
  padding: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.7);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Input = styled.input`
  text-align: center;
  margin: 2rem 0;
  font-size: 3rem;
  filter: drop-shadow(1rem 1rem 0 rgba(0, 0, 0, 1)) drop-shadow(-1rem -1rem 0 rgba(0, 0, 0, 1));
  border: none;
  padding: 1rem;
  outline: none;
  &:focus {
    filter: drop-shadow(1rem 1rem 0 rgba(1, 2, 123, 1)) drop-shadow(-1rem -1rem 0 rgba(1, 2, 123, 1));
    &::placeholder {
      color: #ebebeb;
      filter: none;
    }
  }
`
