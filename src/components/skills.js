import React from "react"
import { Container, Accordion, Row, Col, Image } from "react-bootstrap"
import DevIcon2 from "../images/commits_dev.svg"

const Skills = () => {
  return (
    <Container fluid className="pt-3">
      <Row className="px-5">
        <Col>
          <Image fluid="md" src={DevIcon2} alt="Dev Icon 2"></Image>
        </Col>
        <Col>
          <h1 className="text-center">What I Know</h1>

          <Accordion className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Languages</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Java</li>
                  <li>C/C++</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>NoSQL</li>
                  <li>x86 Assembly</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Frameworks and Environments</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>React Native</li>
                  <li>Android Studio</li>
                  <li>Python Flask</li>
                  <li>Google Firebase</li>
                  <li>REST APIs</li>
                  <li>Git/GitHub</li>
                  <li>Docker</li>
                  <li>Linux</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Teamwork and Concepts</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Agile</li>
                  <li>Scrum</li>
                  <li>Object-Oriented Programming</li>
                  <li>Functional Programming</li>
                  <li>Multi-threading</li>
                  <li>Full-Stack</li>
                  <li>Mobile Development</li>
                  <li>Web Development</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}

export default Skills
