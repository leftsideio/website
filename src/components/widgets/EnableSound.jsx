import { useState } from "react"
import styled from "styled-components"
import useSound from "use-sound"
import { Icon as I } from "@/components/media"
import onSfx from "#/sounds/sound-on.mp3"
import offSfx from "#/sounds/sound-off.mp3"

const EnableSound = () => {
  const [isEnable, setEnable] = useState(true)
  const [playOn] = useSound(onSfx)
  const [playOff] = useSound(offSfx)
  return (
    <Icon
      name={`volume-${isEnable ? "on" : "off"}`}
      onClick={() => {
        const playSound = isEnable ? playOff : playOn
        playSound()
        setEnable(!isEnable)
      }}
    />
  )
}

export default EnableSound

const Icon = styled(I)`
  height: auto;
  width: 5rem;
  &:hover {
    cursor: pointer;
  }
`
