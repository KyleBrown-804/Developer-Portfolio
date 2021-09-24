import * as React from "react"
import { Link } from "gatsby"
import { Container, Nav, Navbar } from "react-bootstrap"
import "../styles/style.css"

const Header = () => {
  return (
    <Container fluid className="px-0">
      <Navbar expand="sm" bg="light" variant="light" className="px-2">
        <Navbar.Brand href="/">Kyle Brown</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ms-auto">
            <Nav.Item as="li">
              <Link to="#about" className="nav-link" activeClassName="active">
                About
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="#skills" className="nav-link" activeClassName="active">
                Skills
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                to="#projects"
                className="nav-link"
                activeClassName="active"
              >
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                to="#education"
                className="nav-link"
                activeClassName="active"
              >
                Education
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="#contact" className="nav-link" activeClassName="active">
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default Header
