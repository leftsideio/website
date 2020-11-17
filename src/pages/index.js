import styled from "styled-components"
import Layout from "~/components/Layout"
import SEO from "~/components/SEO"
import Splash from "~/components/Splash"
import Synthwave from "~/components/3d/Synthwave"
import macintosh from "~/assets/images/macintosh.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Leftside" />
    <Splash>
      <Mac src={macintosh} />
      <Synthwave />
    </Splash>
  </Layout>
)

export default IndexPage

const Mac = styled.img`
  position: absolute;
  bottom: 0;
  right: 2rem;
  max-width: 60rem;
  height: auto;
`
