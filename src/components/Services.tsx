import { useViewportScroll } from "framer-motion"
import { useEffect } from "react"
import styled from "styled-components"
// import { Neon } from "@/components/media"
import { CarouselSeat } from "@/components/widgets"
// import useStore from "@/store"

const Services: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  // useEffect(() => {
  //   return scrollYProgress.onChange(x => {})
  // }, [scrollYProgress])
  return (
    <CarouselSeat stops={[0.5, 0.75]}>
      <div />
      <div>
        <Text>This is services.</Text>
        <Subtext>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtext>
      </div>
    </CarouselSeat>
  )
}

export default Services

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
