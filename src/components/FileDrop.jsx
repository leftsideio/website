import { useState, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import styled, { css } from "styled-components"
import { useSnapshot, ref } from "valtio"
import { state } from "@/store"
import { setCSSProp, COLORS } from "@/style"
import FileZone from "./FileZone"

const maxUploadSize = 4000000

const FileDrop = () => {
  const { files } = useSnapshot(state)
  const [error, setError] = useState("")
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    // accept: `image/*,video/*,text/*,.pdf,.doc,.docx,xls,.xlsx,.ppt,.pptx,.csv,.json,.pages,.numbers,.keynote,.psd,.ai,.zip`,
    multiple: true,
    onDrop: files => {
      const merge = (a, b, p) => a.filter(aa => !b.find(bb => aa[p] === bb[p])).concat(b)
      const update = merge(state.files, files, "name")
      const size = update.reduce((acc, { size }) => acc + size, 0)
      if (size > maxUploadSize) return setError("Maximum upload size of 4MB.")
      state.files = ref(update)
      setError("")
    },
  })
  useEffect(() => {
    state.isNextStep = true
    setCSSProp("--ribbon-background", COLORS.light.inputs.dropzone.readyBorderColor)
  }, [])

  return (
    <Container>
      <Droppy {...getRootProps({ isDragActive })}>
        <input {...getInputProps()} />
        <Text>Click or drag files to upload</Text>
      </Droppy>
      {!!files.length && (
        <FileZone
          onFileClick={(e, file) => {
            e.stopPropagation()
            state.files = ref(files.filter(({ name }) => name !== file.name))
          }}
        />
      )}
      {error && <Err>{error}</Err>}
    </Container>
  )
}

export default FileDrop

const Container = styled.div`
  display: grid;
  grid-template-rows: min-content;
  grid-row-gap: 2rem;
`
const Droppy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 2px;
  background-color: #fafafa;
  outline: none;
  transition: all 0.24s ease-in-out;
  width: 45rem;
  height: 10rem;
  filter: drop-shadow(1rem 1rem 0 #2d2a32) drop-shadow(-1rem -1rem 0 #2d2a32);
  ${({ isDragActive }) =>
    isDragActive &&
    css`
      filter: drop-shadow(2rem 2rem 0 #2d2a32) drop-shadow(-2rem -2rem 0 #2d2a32);
    `}
`

const Text = styled.h6`
  font-size: 2.6rem;
  color: #2d2a32;
  filter: drop-shadow(6px 6px 0 rgba(235, 235, 235, 1)) drop-shadow(-6px -6px 0 rgba(235, 235, 235, 0.5));
`

const Err = styled.aside`
  color: #b80c09;
  justify-self: center;
  font-family: Orbitron;
  font-weight: 500;
  font-size: 2rem;
`
