import { Switch } from "@/components/buttons"
import { COLORS, setCSSProp } from "@/style"
import useStore from "@/store"

const ColorMode = () => {
  const setter = useStore(state => state.setter)
  const callback = isOn => {
    const mode = isOn ? "light" : "dark"
    setter(state => void (state.mode = mode))
    setCSSProp("--color-background", COLORS[mode].backgroundColor)
    setCSSProp("--color-text", COLORS[mode].textColor)
    setCSSProp("--color-icon", COLORS[mode].iconColor)
  }
  return <Switch on={{ icon: "sun" }} off={{ icon: "moon" }} cb={callback} />
}

export default ColorMode
