import { useViewportScroll } from "framer-motion"
import { useEffect, useState } from "react"
import styled, { keyframes, css } from "styled-components"
import { Neon } from "@/components/media"
import { ColorMode, CarouselSeat } from "@/components/widgets"
// import useStore from "@/store"

const Intro: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  const [isVis, setVis] = useState(true)
  useEffect(() => {
    return scrollYProgress.onChange(x => {
      if (x <= 0.25) setVis(true)
      else setVis(false)
    })
  }, [scrollYProgress])
  return (
    <CarouselSeat stops={[0, 0.25]} initVis="visible">
      <div />
      <Wrap $vis={isVis}>
        <Text>We build</Text>
        <Text>software</Text>
        <Text>
          the
          <Neon>Right</Neon>
          way.
        </Text>
        <Subtext>
          Which is to say: we build it your way. Using the right technology and tools. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Subtext>
        <ColorMode />
      </Wrap>
    </CarouselSeat>
  )
}

export default Intro

const zoom = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
  `

const Wrap = styled.div`
  ${({ $vis }) =>
    $vis &&
    css`
      animation: ${zoom} 0.4s;
    `}
`
const Text = styled.h1`
  font-feature-settings: "smcp";
  font-size: 8rem;
  line-height: 8.5rem;
  /* text-transform: uppercase; */
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
