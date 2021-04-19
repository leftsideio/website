import { useViewportScroll } from "framer-motion"
import { useState, useEffect } from "react"

export const useCarouselSeat = ({ comparator }) => {
  const { scrollYProgress } = useViewportScroll()
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    return scrollYProgress.onChange(y => {
      if (comparator(y)) setVisible(true)
      else setVisible(false)
    })
  }, [scrollYProgress])
  return { isOn: visible }
}
