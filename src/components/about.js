import React from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import DevIcon from "../images/proud_dev.svg"

const About = ({ isMobile }) => {
  return (
    <div>
      <Container fluid className="pt-3">
        <Row className={isMobile ? "px-1" : "px-5"}>
          <Col lg={true} className="h-100 pt-3">
            <h1>Who I Am</h1>
            <h4>
              I am a Computer Science graduate from Central Washington
              University. I have experience in multiple languages, frameworks,
              environments, and experience between both back-end and front-end
              development. I am interested in Web Development as well as
              back-end server side code and handling API connections. I enjoy
              writing queries and interactions between databases too.
              <br />
              <br />I am a fan of many genres of music and have been playing
              guitar for several years. I enjoy playing video games, primarily
              RPG's, but I also enjoy a few FPS games too. When I am not doing
              those hobbies, I am most likely hiking with my girlfriend and our
              cute little Corgi/Pug, Dio (named after the Anime villian).
            </h4>
          </Col>
          <Col xl className="pt-3">
            <Image fluid="md" src={DevIcon} alt="Dev Icon"></Image>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
