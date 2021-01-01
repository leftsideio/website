import { useState } from "react"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"
import { Icon as I } from "@/components/media"

const Switch = ({ on, off, cb }) => {
  const [isSwitchOn, setSwitchOn] = useState(true) // todo: come from localStorage / external settings
  const transitions = useTransition(isSwitchOn, null, {
    config: {
      tension: 300,
      friction: 10,
    },
    from: { opacity: 0, transform: "rotate(90deg)" },
    enter: { opacity: 1, transform: "rotate(0)" },
    leave: { opacity: 0, transform: "rotate(90deg)" },
  })

  return (
    <Box
      onClick={() => {
        const next = !isSwitchOn
        setSwitchOn(next)
        cb(next)
      }}
    >
      {transitions.map(({ item, key, props }) => (
        <Icon key={key} name={item ? on.icon : off.icon} style={props} />
      ))}
    </Box>
  )
}

export default Switch

const Box = styled.button`
  border: none;
  outline: none;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`
const Icon = styled(animated(I))`
  position: absolute;
  left: 0;
  height: 5rem;
  width: 5rem;
`
