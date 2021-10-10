import React, { useState } from "react"
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap"
import resumeDevIcon from "../images/resume_dev.svg"

const schoolsList = [
  {
    id: 1,
    name: "Central Washington University",
    degree: "Bachelor of Science",
    major: "Computer Science",
    date: "June 2021",
  },
  {
    id: 2,
    name: "Pierce College (Puyallup)",
    degree: "Associate of Arts",
    major: "General Studies",
    date: "March 2017",
  },
  {
    id: 3,
    name: "Franklin Pierce High School",
    degree: "High School Diploma",
    major: "",
    date: "June 2016",
  },
]

const Experience = () => {
  const [currentSchool, setCurrentSchool] = useState(null)

  return (
    <Container fluid>
      <Row className="px-5">
        {/* Experience Half */}
        <Col>
          <h1>My Experience</h1>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>
                <b>Computer Science Teaching Assistant</b>
              </Card.Title>
              <Card.Text>
                During my time at Central Washington University, I became a paid
                department wide teaching assistant and tutor for the Computer
                Science Department. Throughout my Junior and Senior years at CWU
                I helped students of all levels with understanding various
                Computer Science concepts. This also helped to solidify my own
                understanding of many concepts as I gained expierence teaching
                and walking other students through things I previously struggled
                through.
                <br />
                <br />
                These concepts included: Data Structures, Algorithms, Databases
                & Queries, Mobile Development, Computer Architecture, and
                programming languages such as Java, Python, JavaScript, HTML,
                CSS, SQL, C, C++, and Assembly.
                <br />
                <br />
                When the pandemic began and learning switched to fully remote, I
                led and managed a Discord server of other peers and students in
                the CS Department. The popularity of the server grew as it was
                an efficient way to facilitate communication between classmates.
                It also helped as a place for myself and the couple of other
                department-wide Teaching Assistants to virtually tutor. This
                server would eventually grow to include over roughly 400
                students and a few professors and faculty. As my supervisor was
                also the department secretary, I would also become the person
                who would make department wide announcements and relay
                information to the entire student body.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Education Half */}
        <Col>
          <Row className="mb-3">
            <h1>My Education</h1>
            <Image src={resumeDevIcon} alt="Resume Dev Icon"></Image>
          </Row>
          <Row>
            <Col>
              <Button
                variant="outline-secondary"
                onClick={() => setCurrentSchool(schoolsList[0])}
              >
                Central Washington University
              </Button>
            </Col>
            <Col>
              <Button
                variant="outline-secondary"
                onClick={() => setCurrentSchool(schoolsList[1])}
              >
                Pierce College (Puyallup)
              </Button>
            </Col>
            <Col>
              <Button
                variant="outline-secondary"
                onClick={() => setCurrentSchool(schoolsList[2])}
              >
                Franklin Pierce High School
              </Button>
            </Col>

            {/* Dynamically rendered description box (full width on bottom) */}
            <Row className="mt-3">
              {currentSchool === null ? (
                <></>
              ) : (
                <h4>
                  {currentSchool.name}
                  <br />
                  {currentSchool.degree}{" "}
                  {currentSchool.major !== "" ? "in" : ""} {currentSchool.major}
                  <br />
                  Acquired in {currentSchool.date}
                </h4>
              )}
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Experience
