import React, { ReactNode } from "react"

import Header from "./header"
import Footer from "./footer"

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
