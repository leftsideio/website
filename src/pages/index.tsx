import { PageProps } from "gatsby"
import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import Splash from "@/components/Splash"
import Philo from "@/components/Philo"

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="Leftside" />
    <Splash />
    <Philo />
  </Layout>
)

export default IndexPage
