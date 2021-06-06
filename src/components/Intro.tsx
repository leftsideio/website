import styled, { css } from "styled-components"
import { useSpring } from "@react-spring/core"
import { a as web } from "@react-spring/web"
import { useSnapshot } from "valtio"
import { state } from "@/store"
import { media } from "@/style"
import { Button } from "@/components/media"
const Intro: React.FC = () => {
  const { isLaptopOpen, isEmailSent } = useSnapshot(state)
  const springProps = useSpring({ open: Number(isLaptopOpen) })
  return (
    <About
      style={{
        opacity: springProps.open.to([0, 1], [1, 0]),
        transform: springProps.open.to(o => `translate3d(-50%,${o * 50 - 160}px,0)`),
      }}
      $open={isLaptopOpen}
    >
      {isEmailSent ? (
        <>
          <Head>
            <span>EMAIL SENT</span>
          </Head>
          <SubHead>We look forward to building something incredible together.</SubHead>
        </>
      ) : (
        <>
          <Head>
            <span>LEFTSIDE</span>
          </Head>
          <SubHead>
            Full service software development studio delivering timeless products while wielding tech of the future.
          </SubHead>
          <Button
            onClick={() => {
              state.isLaptopOpen = true
            }}
          >
            Let's Talk
          </Button>
        </>
      )}
    </About>
  )
}

export default Intro

const About = styled(web.div)`
  padding: 1rem;
  background: white;
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
  justify-items: start;
  ${({ $open }) =>
    $open &&
    css`
      visibility: hidden;
    `}
`
const Head = styled(web.h1)`
  color: #2d2a32;
  font-size: 10rem;
  span {
    filter: drop-shadow(6px 6px 0 rgba(235, 235, 235, 1)) drop-shadow(-6px -6px 0 rgba(235, 235, 235, 0.5));
  }
  ${media[650]`
   font-size: 8rem;
  `}
  ${media[400]`
  font-size: 7rem;
  `}
  ${media[340]`
  font-size: 5rem;
  `}
`
const SubHead = styled(web.p)`
  font-size: 3.2rem;
  line-height: 4.4rem;
  min-width: 50rem;
  ${media[650]`
   font-size: 2.8rem;
   line-height: 3.8rem;
   min-width: 40rem;
  `}
  ${media[400]`
   font-size: 2.2rem;
   line-height: 3.2rem;
   width: 100%;
   min-width: 20rem;
  `}
  ${media[340]`
  font-size: 1.8rem;
  `}
`
