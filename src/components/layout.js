import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/global.css"
import { Container } from "react-bootstrap"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
