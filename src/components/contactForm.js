import React, { useState } from "react"
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import contactDevIcon from "../images/contact_dev.svg"

const Contact = () => {
  return (
    <Container>
      <Row>
        <h1>Let's Talk!</h1>
        <Col>
          <Image src={contactDevIcon} alt="Contact Dev Icon"></Image>
        </Col>
        <Col>
          <h4>placeholder (add form here)</h4>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
