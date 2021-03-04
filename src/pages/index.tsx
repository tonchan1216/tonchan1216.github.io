import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Hero from "../blocks/hero"
import About from "../blocks/about"
import Resume from "../blocks/resume"
import Portfolio from "../blocks/portfolio"
import Cta from "../blocks/cta"
import Testimonials from "../blocks/testimonials"
import Contact from "../blocks/contact"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Cta />
      <Testimonials />
      <Contact />
    </Layout>
  )
}

export default IndexPage
