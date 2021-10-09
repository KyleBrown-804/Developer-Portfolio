import React, { useState } from "react"
import { Container, Accordion, Row, Col, Image, Button } from "react-bootstrap"
// Logos
import jsLogo from "../images/javascript_logo.svg"
import nodeLogo from "../images/node_logo.svg"
import cplusLogo from "../images/c++_logo.svg"
import buggyAILogo from "../images/beetle.png"
import gatsbyLogo from "../images/gatsby-icon.png"
import reactLogo from "../images/react_icon.png"

// Screenshots
import cpuSimImg from "../images/screenshots/cpu_sim1.png"
import buggyAIImg from "../images/screenshots/buggyAI1.png"
import synthImg from "../images/screenshots/synthy1.png"

const projectsList = [
  {
    name: "Budgeting App",
    image: nodeLogo,
    id: 1,
    demo: "",
    github: "https://github.com/KyleBrown-804/Budget-Bois",
  },
  {
    name: "BuggyAI",
    image: buggyAIImg,
    id: 2,
    demo: "https://buggyai.com/",
    github: "https://github.com/CWU-BuggyAI/BuggyAI_Source",
  },
  {
    name: "Recipe Logger",
    image: reactLogo,
    id: 3,
    demo: "",
    github: "https://github.com/KyleBrown-804/Recipe-App",
  },
  {
    name: "Synthy",
    image: synthImg,
    id: 4,
    demo: "",
    github: "https://github.com/KyleBrown-804/Synthy",
  },
  {
    name: "Portfolio Site",
    image: gatsbyLogo,
    id: 5,
    demo: "",
    github: "https://github.com/KyleBrown-804/Developer-Portfolio",
  },
  {
    name: "CPU Scheduler Simulation",
    image: cpuSimImg,
    id: 6,
    demo: "",
    github: "https://github.com/KyleBrown-804/CS470-Lab5",
  },
]

const descriptions = [
  { id: 1, desc: "Budgeting app" },
  {
    id: 2,
    desc:
      "BuggyAI was my Senior Capstone project which I developed with a team of 3 other peers. " +
      "The goal of the project was to create a website which would allow users to upload a picture of " +
      "an insect, which would be identified using machine learning to determine if the insect was harmful " +
      "to crops. I worked on",
  },
  { id: 3, desc: "Recipe Logger" },
  { id: 4, desc: "Synthy" },
  { id: 5, desc: "Portfolio Site" },
  { id: 6, desc: "CPU Scheduler Simulation" },
]

const Projects = () => {
  const [currentProject, setCurrentProject] = useState("")
  const [projectImage, setProjectImage] = useState(null)
  const [projectDescription, setProjectDescription] = useState("")
  const [projectDemo, setProjectDemo] = useState("")
  const [projectGithub, setProjectGithub] = useState("")

  const chunk = (arr, cols) => {
    let res = []
    arr.map((item, i) => {
      if (i % cols === 0) {
        res.push(arr.slice(i, i + cols))
      }
    })
    return res
  }

  const onProjectSwitch = proj => {
    setCurrentProject(proj.name)
    setProjectImage(proj.image)
    setProjectDescription(descriptions[proj.id - 1].desc)
    setProjectDemo(proj.demo)
    setProjectGithub(proj.github)
  }

  const openInNewTab = url => {
    const newWindow = window.open(url, "_blank", "noopener, noreferrer")
    if (newWindow) {
      newWindow.opener = null
    }
  }

  return (
    <Container fluid>
      <Row className="px-5">
        {/* Grid wrapping icons */}
        <Col>
          <h1>What I've Developed</h1>
          <Row className="mb-5">
            {chunk(projectsList, 3).map(row => {
              return (
                <Row className="my-3">
                  {row.map(item => {
                    return (
                      <Col>
                        <Button
                          variant="outline-secondary"
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          onClick={() => onProjectSwitch(item)}
                        >
                          {item.name}
                        </Button>
                      </Col>
                    )
                  })}
                </Row>
              )
            })}
          </Row>

          <Row>
            <h4>About this project:</h4>
            <p>{projectDescription}</p>
          </Row>
        </Col>

        {/* Image preview and links */}
        <Col>
          <h1 style={{ textAlign: "center" }}>{currentProject}</h1>

          {projectImage === null ? (
            <></>
          ) : (
            <Row>
              <Image
                src={projectImage}
                alt="CPU Sim Screenshot"
                className="my-3"
                size="md"
              ></Image>
              <Col>
                <Button
                  variant="outline-secondary"
                  className="w-100"
                  onClick={() => openInNewTab(projectGithub)}
                >
                  Github
                </Button>
              </Col>

              {projectDemo === "" ? (
                <></>
              ) : (
                <Col>
                  <Button variant="outline-secondary" className="w-100">
                    Demo
                  </Button>
                </Col>
              )}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Projects
