import { motion, useViewportScroll, useTransform } from "framer-motion"
import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import { Neon } from "@/components/media"
import { ColorMode } from "@/components/widgets"

type CarouselProps = { children: React.ReactNode; stops: number[]; isEnd?: boolean; isStart?: boolean }

const CarouselSeat = ({ children, stops, isEnd, isStart }: CarouselProps) => {
  const [opacity, setOpacity] = useState(isStart ? 1 : 0)
  const { scrollYProgress } = useViewportScroll()
  useEffect(() => {
    return scrollYProgress.onChange(y => {
      const compare = isStart ? y < stops[1] : isEnd ? y > stops[0] : y >= stops[0] && y <= stops[1]
      setOpacity(compare ? 1 : 0)
    })
  }, [scrollYProgress])

  return <Section style={{ opacity, visibility: opacity ? "visible" : "hidden" }}>{children}</Section>
}

export default CarouselSeat

const Section = styled(motion.section)`
  border: 1px solid #000;
  width: var(--layout-site-width);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr 1fr;
`
