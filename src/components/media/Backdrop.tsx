import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const Backdrop = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "wall.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  )
  const pluginImage = getImage(placeholderImage)
  return (
    <>
      <Background image={pluginImage} style={{ minWidth: 400, minHeight: 800 }} />
      <Grad />
      <Gradient />
    </>
  )
}

export default Backdrop

const Grad = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: radial-gradient(circle, transparent, #020016);
`
const Gradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: radial-gradient(circle at 35% 50%, rgba(255, 42, 109, 0.6) 10%, rgba(255, 42, 109, 0.2) 20%, #020016 30%);
  opacity: 0.2;
  //#020016
  /* opacity: 0; */
`
const Background = styled(BgImage)`
  position: fixed !important;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  filter: brightness(0.2);
  /* filter: brightness(2); */
`
