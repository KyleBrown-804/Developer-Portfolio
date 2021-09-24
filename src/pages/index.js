import React, { useState } from "react"
import Seo from "../components/seo"
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap"
import Layout from "../components/layout"
import "../styles/style.css"
import headshot from "../images/developer.jpg"

const skillsList = [
  "Java",
  "C",
  "C++",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "NoSQL",
  "Web Development",
  "Mobile Development",
  "Full-Stack Development",
  "Node.js",
  "Express.js",
  "React",
  "React Native",
  "Android Studio",
  "Firebase",
  "Flask",
  "REST API's",
  "Multi-threading",
  "Git/GitHub",
  "Docker",
  "Linux",
  "Agile",
  "Scrum",
  "Object-Oriented Programming",
  "Functional Programming",
]

const IndexPage = () => {
  const [skill, setSkill] = useState("")

  function skillCycle() {}

  return (
    <Layout>
      <Seo title="Home" />

      {/* Hero Banner */}
      <Container fluid className="px-0 my-4">
        <Card className="mx-4">
          <Row className="ps-2">
            <Col className="d-flex flex-column">
              <h1>
                I'm Kyle Brown, a Computer Science Graduate based in Auburn,
                Washington
              </h1>
              <p className="py-2">
                I have expierence in Web, Mobile, and Full-Stack Development
                among many other skills and frameworks.
              </p>
              <Button
                size="lg"
                variant="outline-secondary"
                className="mt-auto mb-2"
              >
                Why you should hire me
              </Button>
            </Col>

            <Col>
              <Image src={headshot} alt="Headshot" fluid />
            </Col>
          </Row>
        </Card>
      </Container>

      {/* Carousel banner rotating some skills */}

      {/* About Section
        include svg developer clipart */}

      {/* Skills section 
        with accordian skill popouts */}

      {/* Projects section 
        with small screenshot and github icon with links
        also should have paragraphs next to it with descriptions  */}
    </Layout>
  )
}

export default IndexPage
