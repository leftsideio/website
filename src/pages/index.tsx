import { PageProps } from "gatsby"

import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import Intro from "@/components/Intro"
import Form from "@/components/Form"
import Laptop from "@/components/3d/Laptop"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Leftside" />
      <Laptop />
      <Intro />
      <Form />
    </Layout>
  )
}

export default IndexPage
