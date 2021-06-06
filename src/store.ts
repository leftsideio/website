import { proxy, ref } from "valtio"

export const state = proxy<any>({
  isLaptopOpen: false,
  isNextStep: false,
  isEmailSent: false,
  step: 1,
  name: "",
  email: "",
  message: "",
  files: ref([]), // valtio bypass proxy -> https://github.com/pmndrs/valtio/issues/61
})
