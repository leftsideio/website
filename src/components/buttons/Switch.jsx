import { useState } from "react"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"
import useSound from "use-sound"
import { Icon as I } from "@/components/media"
import onSfx from "#/sounds/switch-on.mp3"
import offSfx from "#/sounds/switch-off.mp3"
import useStore from "@/store"
const Switch = ({ on, off, cb }) => {
  const isSoundOn = useStore(state => state.sound)
  const [isSwitchOn, setSwitchOn] = useState(true) // todo: come from localStorage / external settings
  const [playOn] = useSound(onSfx)
  const [playOff] = useSound(offSfx)
  const transitions = useTransition(isSwitchOn, null, {
    config: {
      tension: 300,
      friction: 10,
    },
    from: { opacity: 0, transform: "rotate(90deg)" },
    enter: { opacity: 1, transform: "rotate(0)" },
    leave: { opacity: 0, transform: "rotate(90deg)" },
  })

  const onSwitchClick = () => {
    const playSound = isSwitchOn ? playOff : playOn
    if (isSoundOn) playSound()
    setSwitchOn(!isSwitchOn)
    cb(!isSwitchOn)
  }

  return (
    <Box onClick={onSwitchClick}>
      {transitions.map(({ item, key, props }) => (
        <Icon key={key} name={item ? on.icon : off.icon} style={props} />
      ))}
    </Box>
  )
}

export default Switch

const Box = styled.button`
  background: transparent;
  height: 3rem;
  width: 3rem;
  border: none;
  outline: none;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`
const Icon = styled(animated(I))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
