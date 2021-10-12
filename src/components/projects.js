import React, { useState } from "react"
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap"

// Logos
import nodeLogo from "../images/node_logo.svg"
import reactLogo from "../images/react_icon.png"

import codingSvg from "../images/code_computer.svg"
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
    image: codingSvg,
    id: 5,
    demo: "",
    github: "https://github.com/KyleBrown-804/Developer-Portfolio",
  },
  {
    name: "CPU Scheduler",
    image: cpuSimImg,
    id: 6,
    demo: "",
    github: "https://github.com/KyleBrown-804/CS470-Lab5",
  },
]

const descriptions = [
  {
    id: 1,
    desc:
      "I am currently developing a full-stack budgeting and expense tracking website. The website is being " +
      "built using React, Node.js, Express.js, PostgreSQL, and Firebase (for Authentication). The goal of " +
      "this website is to provide users a convienent central hub to manage all financial aspects of their life. " +
      "It will allow for users to categorize expenses how they desire, set finanical goals, and track spending, in " +
      "a simple and customizable way. So far, a full authentication flow has been implemented and intial integrations " +
      "and connections of front-end and back-end technologies. This project is actively and constantly being developed, " +
      "follow this project on my GitHub to stay up to date on its development!",
  },
  {
    id: 2,
    desc:
      "BuggyAI was my Senior Capstone project which I developed with a team of 3 other peers. " +
      "The goal of the project was to create a website which would allow users to upload a picture of " +
      "an insect, which would be identified using machine learning to determine if the insect was harmful " +
      "to crops. I implemented a REST API using Python Flask and hosted it on a Linux server and used NGINX " +
      "as a reverse proxy to handle routing API requests. I implemented front-end to back-end connections " +
      "by sending user images to the API using AJAX, which would then be validated with a machine learning model kept " +
      "server side. I also handled integrating SSL certification with Certbot and added Fail2Ban for security measures. " +
      "The full repository for this website including the machine learning training can be found by clicking the GitHub " +
      "button to the right! This website is still live and can be viewed by clicking the Demo button to the right!",
  },
  {
    id: 3,
    desc:
      "As a summer project, I created a cross-platform food recipe logging app using React Native, Expo, and Google Firebase. " +
      "This project is still a work in progress and currently allows users to add and view food recipes for later " +
      "referencing during cooking. Any user added food recipes allow for cooking instructions, a list of ingredients, nutrition " +
      "and serving information, and a picture of the finished product. Once a recipe is added a user is then able to " +
      "switch to a viewing tab where they can scroll through and click to view any saved recipes. I also implemented " +
      "an authentication flow with Firebase, allowing users to create accounts, login, and logout. Check out the development " +
      "of this project on my GitHub to stay up to date!",
  },
  {
    id: 4,
    desc:
      "Synthy was fun small project in which I made a synthesizer keyboard Web App using only vanilla HTML, CSS, and JavaScript. " +
      "The synth is a modern looking 2 octave keyboard which is able to be moved around the screen as desired. " +
      "It is playable by either clicking keys with a mouse or pressing associated hot keys which are displayed for each key. " +
      "My original plans were more ambitious and would have included adding sound effects and drum loop modules as well. " +
      "Another future plan that may still be implemented is a touch up of the background and implementing cycling vaporwave " +
      "aesthetic imagery with visual effects to accompany the playing. The full repository for this interactive synth project " +
      "can be found on my GitHub!",
  },
  {
    id: 5,
    desc:
      "The current website you are viewing is another example of my Web Development skills! This portfolio website " +
      "was made using Gatsby for Search Engine Optimization and to leverage faster performance with static rendering. " +
      "The purpose of this site is to not only show that I am capable and confident developer, but to also learn Gatsby " +
      "and practice responsive styling with React Bootstrap. If you are enjoying what you have seen so far, then keep " +
      "reading, there's more! Also note that the full repository for this website can be found on my GitHub!",
  },
  {
    id: 6,
    desc:
      "For my Senior year Operating Systems class I implemented several challenging labs in C/C++ that I am proud of. " +
      "The last lab I completed for that class was to implement a simulation of a multiprocessor CPU scheduler. " +
      "The goal was to implement several scheduling algorithms including first-come first-served, priority, round-robin " +
      "and shortest job first scheduling. Multiple processors were simulated with their own individual threads and types " +
      "of scheduling algorithms used. I also implemented an aging mechanism specifically for priority based scheduling. I also " +
      "implemented a load balancer which would redistribute and balance work loads between multiple processor threads. This " +
      "lab had much more going on than what I have described here, check out the full readme on my GitHub!",
  },
]

const Projects = () => {
  const [currentProject, setCurrentProject] = useState("")
  const [projectImage, setProjectImage] = useState(null)
  const [projectDescription, setProjectDescription] = useState("")
  const [projectDemo, setProjectDemo] = useState("")
  const [projectGithub, setProjectGithub] = useState("")

  const chunk = (arr, cols) => {
    let res = []
    arr.forEach((elem, i) => {
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
    <Container fluid id="projects" className="pt-3">
      <Row className="px-5">
        {/* Grid wrapping icons */}
        <Col className="d-flex flex-column">
          <h1>What I've Developed</h1>

          <Row className="mb-3">
            {chunk(projectsList, 2).map((row, i) => {
              return (
                <Row key={i}>
                  {row.map(item => {
                    return (
                      <Col className="my-3" key={item.id}>
                        <Button
                          as="div"
                          variant="outline-secondary"
                          style={{
                            display: "inline-flex",
                            width: "100%",
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

          <Row className="mt-auto">
            {currentProject === "" ? (
              <h4 className="text-center">
                Click on one of the projects above to view
              </h4>
            ) : (
              <Card>
                <Card.Title className="px-3 mt-3 mb-0">
                  <h4>About this project:</h4>
                </Card.Title>
                <Card.Body className="px-3 pt-0">
                  <p>{projectDescription}</p>
                </Card.Body>
              </Card>
            )}
          </Row>
        </Col>

        {/* Image preview and links */}
        <Col className="d-flex flex-column">
          {projectImage === null ? (
            <></>
          ) : (
            <h1 className="text-center">{currentProject}</h1>
          )}
          {projectImage === null ? (
            <></>
          ) : (
            <Row className="mt-auto">
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
                  <Button
                    variant="outline-secondary"
                    className="w-100"
                    onClick={() => openInNewTab(projectDemo)}
                  >
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
