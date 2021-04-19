import { PageProps } from "gatsby"

import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import Intro from "@/components/Intro"
import About from "@/components/About"
import Services from "@/components/Services"
import Contact from "@/components/Contact"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Leftside" />
      <Intro />
      <About />
      <Services />
      <Contact />
    </Layout>
  )
}

export default IndexPage
