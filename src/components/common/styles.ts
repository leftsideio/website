import styled, { keyframes, css } from "styled-components"

export const TextScene = styled.div`
  ${({ $isOn }) =>
    $isOn &&
    css`
      animation: ${zoom} 0.4s;
    `}
`
const zoom = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
  `
