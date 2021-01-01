import styled from "styled-components"
import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import Splash from "@/components/Splash"

const IndexPage = () => (
  <Layout>
    <SEO title="Leftside" />
    <Splash />
  </Layout>
)

export default IndexPage

const Mac = styled.img`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  max-width: 60rem;
  height: auto;
  transform: translateX(-50%);
`
