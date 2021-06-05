import styled, { css } from "styled-components"
import { useSnapshot } from "valtio"
import { state } from "@/store"

interface Props {
  onFileClick?: (e: any, file: any) => void
  style?: any
}

const FileZone: React.FC<Props> = ({ onFileClick, style }) => {
  const { files } = useSnapshot(state)
  return (
    <Box style={style}>
      {files.map((file: any) => (
        <File
          key={file.path}
          onClick={e => {
            if (onFileClick) onFileClick(e, file)
          }}
          $doDelete={!!onFileClick}
        >{`${file.name.length > 22 ? "..." : ""}${file.name.slice(-22)}`}</File>
      ))}
    </Box>
  )
}

export default FileZone

const Box = styled.div`
  background: white;
  padding: 1rem;
  border: 2px dashed #eee;
  height: 6rem;
  overflow-x: scroll;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`
const File = styled.p`
  white-space: nowrap;
  margin: 0 1rem;
  padding: 5px;
  font-size: 1.6rem;
  background: white;
  filter: drop-shadow(4px 4px 0 #2d2a32) drop-shadow(-4px -4px 0 #2d2a32);
  position: relative;
  transition: all 0.2s;
  ${({ $doDelete }) =>
    $doDelete &&
    css`
      &:hover {
        cursor: pointer;
        filter: drop-shadow(4px 4px 0 #b10f2e) drop-shadow(-4px -4px 0 #b10f2e);
        &:after {
          opacity: 1;
          visibility: visible;
        }
      }
      &:after {
        content: "DELETE";
        background: white;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        font-family: Orbitron;
        font-weight: 500;
      }
    `}
`
