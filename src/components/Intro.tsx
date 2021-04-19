import styled from "styled-components"
import { Neon } from "@/components/media"
import { ColorMode, CarouselSeat } from "@/components/widgets"
import { TextScene } from "@/components/common"
import { useCarouselSeat } from "@/hooks"
// import useStore from "@/store"

const Intro: React.FC = () => {
  const { isOn } = useCarouselSeat({ comparator: pos => pos <= 0.25 })
  return (
    <CarouselSeat stops={[0, 0.25]} initVis="visible">
      <div />
      <TextScene $isOn={isOn}>
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
      </TextScene>
    </CarouselSeat>
  )
}

export default Intro

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
