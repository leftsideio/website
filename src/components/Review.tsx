import { useState } from "react"
import styled, { css } from "styled-components"
import { useSnapshot } from "valtio"
import { state } from "@/store"

import FileZone from "./FileZone"
import { Button } from "@/components/media"

const toBase64 = (file: any): Promise<any> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

const Review: React.FC = () => {
  const { name, email, message, files } = useSnapshot(state)
  const [isSending, setSending] = useState(false)
  return (
    <Box>
      <Content>
        <Key>Name:</Key>
        <Value>{name}</Value>
        <Key>Email:</Key>
        <Value>{email}</Value>
        <Key>Message:</Key>
        <Value>{message}</Value>
        <Key $full>Attachments:</Key>
        {!!files.length && <FileZone style={{ gridColumn: "1 / -1", marginTop: "-1.5rem" }} />}
      </Content>
      <Button
        loading={isSending}
        onClick={async () => {
          setSending(true)
          try {
            const based: string[] = []
            for (const file of files) {
              const lilB = await toBase64(file)
              based.push(lilB)
            }
            const res = await fetch("/.netlify/functions/send-email", {
              method: "POST",
              body: JSON.stringify({ name, email, message, files: based }),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
            if (!res.ok) throw new Error(`An error has occured: ${res.status}`)
          } catch (e) {
            console.log("ERROR", e)
          }
          setSending(false)
          state.isLaptopOpen = false
          state.isEmailSent = true
        }}
      >
        {isSending ? "SENDING" : "SEND EMAIL"}
      </Button>
    </Box>
  )
}

export default Review

const Box = styled.div`
  display: flex;
  flex-direction: column;
`
const Content = styled.div`
  padding: 2rem 2rem 0;
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 1rem;
  filter: drop-shadow(1rem 1rem 0 #2d2a32) drop-shadow(-1rem -1rem 0 #2d2a32);
  max-height: 45rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &:after {
    content: "";
    height: 1rem; // bottom padding on overflow because CSS grid?
  }
`
const Key = styled.h4`
  justify-self: end;
  font-size: 2rem;
  ${({ $full }) =>
    $full &&
    css`
      grid-column: 1 / -1;
      justify-self: start;
    `}
`
const Value = styled.p`
  max-width: 25rem;
  font-size: 2rem;
  word-wrap: break-word;
`
