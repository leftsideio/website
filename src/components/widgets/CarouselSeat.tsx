import { motion, useViewportScroll, useTransform } from "framer-motion"
import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import { Neon } from "@/components/media"
import { ColorMode } from "@/components/widgets"

type CarouselProps = { children: React.ReactNode; stops: number[]; isLast?: boolean; initVis?: string }

const CarouselSeat = ({ children, stops, isLast, initVis = "hidden" }: CarouselProps) => {
  const [vis, setVis] = useState(initVis)
  const { scrollYProgress } = useViewportScroll()
  const values = isLast ? [1, 1] : [1, 0]
  const opacity = useTransform(scrollYProgress, stops, values)
  useEffect(() => {
    return scrollYProgress.onChange(x => {
      const compare = stops[0]
      setVis(x < compare ? "hidden" : "visible")
    })
  }, [scrollYProgress])

  return <Section style={{ opacity, visibility: vis }}>{children}</Section>
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
