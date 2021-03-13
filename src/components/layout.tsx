/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
// import { GlobalStyles } from "../globalStyles"

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <GlobalStyles /> */}

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
