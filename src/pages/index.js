import * as React from "react"
import HeroSection from "../components/HeroSection"
import ExperienceSection from "../components/ExperienceSection"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Voyage Travel" />
    <HeroSection />
    <ExperienceSection />
    <Image />
  </Layout>
)

export default IndexPage
