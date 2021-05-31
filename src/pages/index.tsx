import { PageProps } from "gatsby"

import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import Intro from "@/components/Intro"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Leftside" />
      <Intro />
    </Layout>
  )
}

export default IndexPage
