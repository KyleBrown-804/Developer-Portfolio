import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Form,
  Alert,
} from "react-bootstrap"
import contactDevIcon from "../images/contact_dev.svg"

const Contact = () => {
  const [formSuccess, setFormSuccess] = useState(false)

  return (
    <Container fluid id="contact" className="pt-3">
      <Row className="px-5">
        <Col className="d-flex flex-column">
          <h1>Let's Talk!</h1>
          <Image
            fluid="md"
            src={contactDevIcon}
            alt="Contact Dev Icon"
            className="mt-auto"
          ></Image>
        </Col>
        <Col className="d-flex flex-column">
          <h1 className="text-center">Send Me An Email!</h1>
          <Card className="mt-auto">
            <Form className="px-3 py-3">
              {formSuccess === false ? (
                <></>
              ) : (
                <Alert variant="success">
                  <Alert.Heading>
                    Thank you, I have received your email!
                  </Alert.Heading>
                  I will respond within the next few days as soon as I am able
                  to. as possible.
                </Alert>
              )}

              <Form.Group controlId="formContactName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name Last Name"
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="formContactEmail" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="yourName@company.com"
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="formContactMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Hello Kyle! My name is ___, I found your portfolio and wanted to schedule an interview with you sometime this week."
                  style={{ resize: "none" }}
                ></Form.Control>
              </Form.Group>

              <Button
                variant="outline-secondary"
                type="submit"
                className="w-100 mt-auto"
              >
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
