import { useEffect } from "react"
import styled from "styled-components"
import { useSnapshot } from "valtio"
import { state } from "@/store"

const Input = ({ param, requirement, ...rest }) => {
  const snap = useSnapshot(state, { sync: true })
  useEffect(() => {
    state.isNextStep = requirement(state[param])
  }, [])
  return (
    <El
      value={snap[param]}
      onChange={e => {
        const val = e.target.value
        state[param] = val
        state.isNextStep = requirement ? requirement(val) : true
      }}
      autoFocus
      {...rest}
    />
  )
}

export default Input

const El = styled.input`
  width: 45rem;
  text-align: center;
  margin: 2rem 0;
  font-size: 2.6rem;
  filter: drop-shadow(1rem 1rem 0 #2d2a32) drop-shadow(-1rem -1rem 0 #2d2a32);
  border: none;
  padding: 1rem;
  outline: none;
  &:focus {
    filter: drop-shadow(1rem 1rem 0 #2d2a32) drop-shadow(-1rem -1rem 0 #2d2a32);
    &::placeholder {
      color: #ebebeb;
      filter: none;
    }
  }
`
