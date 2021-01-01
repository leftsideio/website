import { Switch } from "~/components/buttons"
import { COLORS } from "~/style/constants"
import useStore from "~/store"

const ColorMode = () => {
  const setter = useStore(state => state.setter)
  const callback = isOn => {
    const mode = isOn ? "light" : "dark"
    setter(state => void (state.mode = mode))
    document.documentElement.style.setProperty(
      "--color-background",
      COLORS[mode].backgroundColor
    )
    document.documentElement.style.setProperty("--color-text", COLORS[mode].textColor)
    document.documentElement.style.setProperty("--color-icon", COLORS[mode].iconColor)
  }
  return <Switch on={{ icon: "sun" }} off={{ icon: "moon" }} cb={callback} />
}

export default ColorMode
