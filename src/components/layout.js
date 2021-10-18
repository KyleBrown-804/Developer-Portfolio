import * as React from "react"
import Header from "./header"
import { Container } from "react-bootstrap"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <Container fluid className="px-0" style={{ maxWidth: 1920 }}>
      <Header />
      <main>{children}</main>
    </Container>
  )
}

export default Layout
