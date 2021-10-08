import React, { useState } from "react"
import { Container, Card, Row, Col, Button, Image } from "react-bootstrap"
import { useTransition, animated } from "react-spring"
import useInterval from "react-useinterval"
import headshot from "../images/developer.jpg"

const Hero = props => {
  const [index, setIndex] = useState(0)
  const [skill, setSkill] = useState(props.skillList[index])

  const cycleSkill = () => {
    setIndex((index + 1) % props.skillList.length)
    setSkill(props.skillList[index])
  }

  useInterval(cycleSkill, 2000)

  return (
    <Container fluid className="px-0 mt-5">
      <Card className="mx-5">
        <Row className="ps-2">
          <Col className="d-flex flex-column">
            <h1>
              I'm Kyle Brown, a Computer Science Graduate based in Auburn,
              Washington
            </h1>
            <animated.h3 className="py-2">
              I have expierence in several languages, frameworks, and
              development environments.
              <br />
              <br />
              <em>Just to name a few:</em>
              &nbsp; {skill}
            </animated.h3>

            <Button
              size="lg"
              variant="outline-secondary"
              className="mt-auto mb-2"
            >
              Let's Schedule an Interview
            </Button>
          </Col>

          <Col>
            <Image src={headshot} alt="Headshot" fluid />
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default Hero
