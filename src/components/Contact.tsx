import styled from "styled-components"
// import { Neon } from "@/components/media"
import { CarouselSeat } from "@/components/widgets"
import { TextScene } from "@/components/common"
import { useCarouselSeat } from "@/hooks"
// import useStore from "@/store"

const Contact: React.FC = () => {
  const { isOn } = useCarouselSeat({ comparator: pos => pos >= 0.75 })
  return (
    <CarouselSeat isLast stops={[0.75, 1]}>
      <div />
      <TextScene $isOn={isOn}>
        <Text>This is contact.</Text>
        <Subtext>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtext>
      </TextScene>
    </CarouselSeat>
  )
}

export default Contact

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
