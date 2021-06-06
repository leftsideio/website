import styled, { css } from "styled-components"

interface Props {
  onClick?: (e?: any) => void
  loading?: boolean
  style?: any
}

const Button: React.FC<Props> = ({ loading, children, style, onClick }) => {
  return (
    <Wrap $loading={loading} style={style} onClick={onClick}>
      <span>{children}</span>
    </Wrap>
  )
}

export default Button

const Wrap = styled.button`
  padding: 1rem;
  color: #2d2a32;
  text-transform: uppercase;
  font-family: Orbitron;
  font-weight: 500;
  font-size: 2.6rem;
  background: white;
  border: none;
  filter: drop-shadow(8px 8px 0 #2d2a32) drop-shadow(-8px -8px 0 #2d2a32);
  transition: all 0.2s;
  span {
    filter: drop-shadow(6px 6px 0 rgba(235, 235, 235, 1)) drop-shadow(-6px -6px 0 rgba(235, 235, 235, 0.5));
  }
  &:hover {
    cursor: pointer;
    letter-spacing: 2px;
    filter: drop-shadow(10px 10px 0 #2d2a32) drop-shadow(-10px -10px 0 #2d2a32);
  }
  ${({ $loading }) =>
    $loading &&
    css`
      pointer-events: none;
      span {
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        animation: blink 0.5s step-start 0s infinite;
      }
    `}
`
