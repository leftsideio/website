import { proxy } from "valtio"

export const state = proxy({
  isLaptopOpen: false,
  step: 1,
  isNextStep: false,
  name: "",
  email: "",
  message: "",
  files: [],
})
