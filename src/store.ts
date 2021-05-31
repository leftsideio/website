import { proxy } from "valtio"

export const state = proxy({
  isLaptopOpen: false,
  name: "",
  email: "",
  message: "",
})
