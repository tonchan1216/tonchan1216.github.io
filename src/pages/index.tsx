import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { IndexQuery } from "../graphql"
import loadable from "@loadable/component"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../blocks/hero"
import About from "../blocks/about"
import Testimonials from "../blocks/testimonials"
// lazy load
const Resume = loadable(() => import("../blocks/resume"))
const Portfolio = loadable(() => import("../blocks/portfolio"))
const Contact = loadable(() => import("../blocks/contact"))

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
      <SEO title="Home" links={[{ url: herobg.publicURL, as: "image" }]} />
      <Hero
        name={github.viewer.name}
        url={herobg.publicURL}
        contents={contents.nodes.filter((data) => data.key == "introduce")}
      />
      <About
        avatarUrl={github.viewer.avatarUrl}
        contents={contents.nodes.filter((data) => data.key == "about_me")}
      />
      <Testimonials url={testbg.publicURL} />
      <Resume />
      <Portfolio />
      <Contact
        contents={contents.nodes.filter(
          (data) => data.key == "contact_details",
        )}
      />
    </Layout>
  )
}

export default IndexPage
