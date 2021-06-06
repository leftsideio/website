import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
// import { useSnapshot } from "valtio"
// import { useSpring } from "@react-spring/core"
// import { a as web } from "@react-spring/web"
// import { state } from "@/store"
const Backdrop = () => {
  // const { isLaptopOpen } = useSnapshot(state)
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
  // ? dark mode flip
  // const springProps = useSpring({ open: Number(isLaptopOpen) })
  //  style={{ filter: springProps.open.to([0, 1], ["invert(100%) contrast(200%)", "invert(0) contrast(200%)"]) }}
  return (
    <Box>
      <Background image={pluginImage} />
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
  filter: invert(100%) contrast(200%);
`
const Background = styled(BgImage)`
  min-width: 400;
  min-height: 800;
  height: 100%;
  width: 100%;
`
