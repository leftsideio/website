import { css } from "styled-components"

export function setCSSProp(prop, value) {
  document.documentElement.style.setProperty(prop, value)
}

const sizes = {
  [700]: 700,
  [650]: 650,
  [575]: 575,
  [400]: 400,
  [340]: 340,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})
