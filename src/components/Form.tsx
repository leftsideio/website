import styled from "styled-components"
// import { useSpring } from "@react-spring/core"
// import { a as web } from "@react-spring/web"
import { useSnapshot } from "valtio"
import { state } from "@/store"

const Form: React.FC = () => {
  const { isLaptopOpen, name } = useSnapshot(state, { sync: true })
  // const springProps = useSpring({ open: Number(isLaptopOpen) })
  if (isLaptopOpen)
    return (
      <Box>
        <Input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={e => (state.name = e.target.value)}
          autoFocus
        />
      </Box>
    )
  else return null
}

export default Form

const Box = styled.div`
  padding: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.7);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Input = styled.input`
  text-align: center;
  margin: 2rem 0;
  font-size: 3rem;
  filter: drop-shadow(1rem 1rem 0 rgba(0, 0, 0, 1)) drop-shadow(-1rem -1rem 0 rgba(0, 0, 0, 1));
  border: none;
  padding: 1rem;
  outline: none;
  &:focus {
    filter: drop-shadow(1rem 1rem 0 rgba(1, 2, 123, 1)) drop-shadow(-1rem -1rem 0 rgba(1, 2, 123, 1));
    &::placeholder {
      color: #ebebeb;
      filter: none;
    }
  }
`
