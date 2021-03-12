import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { IndexQuery } from "../graphql"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../blocks/hero"
import About from "../blocks/about"
import Resume from "../blocks/resume"
import Portfolio from "../blocks/portfolio"
import Cta from "../blocks/cta"
import Testimonials from "../blocks/testimonials"
import Contact from "../blocks/contact"

const IndexPage: React.FC = () => {
  const { github }: IndexQuery = useStaticQuery(graphql`
    query Index {
      github {
        viewer {
          name
          avatarUrl
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero name={github.viewer.name} />
      <About avatarUrl={github.viewer.avatarUrl} />
      <Resume />
      <Portfolio />
      <Cta />
      <Testimonials />
      <Contact />
    </Layout>
  )
}

export default IndexPage
