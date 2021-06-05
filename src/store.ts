import { proxy, ref } from "valtio"

export const state = proxy<any>({
  step: 1,
  isNextStep: false,
  name: "",
  email: "",
  message: "",
  files: ref([]), // valtio bypass proxy -> https://github.com/pmndrs/valtio/issues/61
})
