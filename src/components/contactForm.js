import React, { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import Media from "react-media"
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

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === "undefined") {
  throw new Error(`Env var SITE_RECAPTCHA_KEY is undefined!`)
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = ({ isMobile }) => {
  const [formSuccess, setFormSuccess] = useState(false)
  const [formFailure, setFormFailure] = useState(false)
  const recaptchaRef = useRef()
  const [submissionContent, setSubmissionConent] = useState({})
  // const [isMobile, setIsMobile] = useState(true)

  const handleChange = event => {
    setSubmissionConent({
      ...submissionContent,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setFormFailure(false)
    const recaptchaValue = recaptchaRef.current.getValue()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...submissionContent,
        "g-recaptcha-response": recaptchaValue,
      }),
    })
      .then(response => {
        if (response.status === 200 && !response.redirected) {
          setFormSuccess(true)
        } else {
          console.log("Error occured:")
          console.log(response.json())
          setFormFailure(true)
        }
      })
      .catch(error => {
        setFormFailure(true)
        console.log(error)
      })
  }

  return (
    <Container fluid className="pt-3">
      {/* Section row */}
      <Row className={isMobile ? "px-1" : "px-5"}>
        {/* Image Column */}
        <Col lg={true} className="d-flex flex-column pt-3">
          <h1>Let's Talk!</h1>
          <Image
            fluid="md"
            src={contactDevIcon}
            alt="Contact Dev Icon"
            className="mt-auto"
          ></Image>
        </Col>

        {/* Form Column */}
        <Col lg={true} className="d-flex flex-column pt-3">
          <h1 className="text-center">Send Me An Email!</h1>

          <Card className="mt-auto">
            <Form
              className="px-3 py-3"
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out:{" "}
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </p>

              {formSuccess === false ? (
                <></>
              ) : (
                <Alert variant="success">
                  <Alert.Heading>Thank you!</Alert.Heading>I will respond to
                  your email as soon as possible.
                </Alert>
              )}

              {formFailure === false ? (
                <></>
              ) : (
                <Alert variant="danger">
                  <Alert.Heading>Oops!</Alert.Heading>An error occurred when
                  trying to submit your email. If this error persists, please
                  reach out to me on LinkedIn!
                </Alert>
              )}

              <Form.Group controlId="formContactName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name Last Name"
                  maxLength={100}
                  name="name"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="formContactEmail" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="yourName@company.com"
                  maxLength={254}
                  name="email"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="formContactMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Hello Kyle! My name is ___, I found your portfolio and wanted to schedule an interview with you sometime this week."
                  style={{ resize: "none" }}
                  maxLength={2200}
                  name="message"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>

              <Media
                queries={{
                  mobile: "(max-width: 599px)",
                  desktop: "(min-width: 600px)",
                }}
              >
                {matches => (
                  <>
                    {matches.mobile && (
                      <ReCAPTCHA
                        size="compact"
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_KEY}
                      />
                    )}
                    {matches.desktop && (
                      <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
                    )}
                  </>
                )}
              </Media>

              <Button
                variant="outline-secondary"
                type="submit"
                className="w-100 mt-3"
                disabled={true}
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
