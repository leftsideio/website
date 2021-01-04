import { useState } from "react"
import styled from "styled-components"
import useSound from "use-sound"
import { Icon as I } from "@/components/media"
import onSfx from "#/sounds/sound-on.mp3"
import offSfx from "#/sounds/sound-off.mp3"
import useStore from "@/store"

const EnableSound = () => {
  const { sound, setter } = useStore(state => ({
    sound: state.sound,
    setter: state.setter,
  }))
  const [playOn] = useSound(onSfx)
  const [playOff] = useSound(offSfx)
  return (
    <Icon
      name={`volume-${sound ? "on" : "off"}`}
      onClick={() => {
        const playSound = sound ? playOff : playOn
        playSound()
        setter(state => void (state.sound = !sound))
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
