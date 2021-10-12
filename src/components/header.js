import * as React from "react"
import { Link } from "gatsby"
import { Container, Nav, Navbar } from "react-bootstrap"
import openInNewTab from "./util"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Header = () => {
  return (
    <Container fluid className="px-0">
      <Navbar expand="md" bg="light" variant="light" className="px-4">
        <Navbar.Brand href="/">Kyle Brown</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ms-auto">
            <Nav.Item as="li">
              <Link
                to="#about"
                className="nav-link"
                activeClassName="active"
                style={{ fontSize: "larger" }}
              >
                About
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                to="#skills"
                className="nav-link"
                activeClassName="active"
                style={{ fontSize: "larger" }}
              >
                Skills
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                to="#projects"
                className="nav-link"
                activeClassName="active"
                style={{ fontSize: "larger" }}
              >
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                to="#experience"
                className="nav-link"
                activeClassName="active"
                style={{ fontSize: "larger" }}
              >
                Education
              </Link>
            </Nav.Item>
            <Nav.Item as="li" className="pe-3">
              <Link
                to="#contact"
                className="nav-link"
                activeClassName="active"
                style={{ fontSize: "larger" }}
              >
                Contact
              </Link>
            </Nav.Item>

            <Nav.Item className="d-flex align-items-center pe-3">
              <button
                style={{
                  border: "none",
                  background: "transparent",
                }}
                onClick={() => openInNewTab("https://github.com/KyleBrown-804")}
              >
                <FontAwesomeIcon icon={faGithub} size="2x" title="GitHub" />
              </button>
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center">
              <button
                style={{
                  border: "none",
                  background: "transparent",
                }}
                onClick={() =>
                  openInNewTab(
                    "https://www.linkedin.com/in/kyle-brown-709a231a0/"
                  )
                }
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" title="LinkedIn" />
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default Header
