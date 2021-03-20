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
  const {
    github,
    contents,
    herobg,
    testbg,
  }: IndexQuery = useStaticQuery(graphql`
    query Index {
      github {
        viewer {
          name
          avatarUrl
        }
      }
      contents: allGraphCmsContents {
        nodes {
          id
          key
          rich {
            html
          }
        }
      }
      herobg: file(name: { eq: "header-bg-3000" }) {
        publicURL
      }
      testbg: file(name: { eq: "testimonials-bg-3000" }) {
        publicURL
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        name={github.viewer.name}
        url={herobg.publicURL}
        contents={contents.nodes.filter((data) => data.key == "introduce")}
      />
      <About
        avatarUrl={github.viewer.avatarUrl}
        contents={contents.nodes.filter((data) => data.key == "about_me")}
      />
      <Resume />
      <Portfolio />
      <Cta contents={contents.nodes.filter((data) => data.key == "cta")} />
      <Testimonials url={testbg.publicURL} />
      <Contact
        contents={contents.nodes.filter(
          (data) => data.key == "contact_details",
        )}
      />
    </Layout>
  )
}

export default IndexPage
