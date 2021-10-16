import React, { useState } from "react"
import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Experience from "../components/experience"
import Contact from "../components/contactForm"
import Layout from "../components/layout"
import Media from "react-media"

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
  const [deviceMobile, setDeviceMobile] = useState(true)

  return (
    <Layout>
      <Media
        queries={{
          mobile: "(max-width: 599px)",
          desktop: "(min-width: 600px)",
        }}
      >
        {matches => {
          matches.mobile ? setDeviceMobile(true) : setDeviceMobile(false)
          return <></>
        }}
      </Media>

      <Seo title="Home" />

      <div style={{ marginBottom: "20%" }}>
        <Hero skillList={skillsList} isMobile={deviceMobile} />
      </div>

      <div id="about" style={{ marginBottom: "20%", paddingTop: 70 }}>
        <About isMobile={deviceMobile} />
      </div>

      <div id="skills" style={{ marginBottom: "20%", paddingTop: 70 }}>
        <Skills isMobile={deviceMobile} />
      </div>

      <div id="projects" style={{ marginBottom: "20%", paddingTop: 70 }}>
        <Projects isMobile={deviceMobile} />
      </div>

      <div id="experience" style={{ marginBottom: "20%", paddingTop: 70 }}>
        <Experience isMobile={deviceMobile} />
      </div>

      <div id="contact" style={{ marginBottom: "20%", paddingTop: 70 }}>
        <Contact isMobile={deviceMobile} />
      </div>
    </Layout>
  )
}

export default IndexPage
