import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const Backdrop = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "stars.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  )
  const pluginImage = getImage(placeholderImage)
  return (
    <Box>
      <Background image={pluginImage} style={{ minWidth: 400, minHeight: 800 }} />
    </Box>
  )
}

export default Backdrop

const Box = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`
const Background = styled(BgImage)`
  height: 100%;
  width: 100%;
  filter: invert(100%) opacity(100%) contrast(200%);
`
