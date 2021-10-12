import * as React from "react"
import Header from "./header"
import "../styles/global.css"

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
