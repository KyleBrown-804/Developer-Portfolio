import React from "react"
import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Experience from "../components/experience"
import Contact from "../components/contactForm"
import Layout from "../components/layout"

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
  return (
    <Layout>
      <Seo title="Home" />

      {/* Give spacing between components in parent container */}
      <div style={{ marginBottom: "20%" }}>
        <Hero skillList={skillsList} />
      </div>

      <div style={{ marginBottom: "20%" }}>
        <About />
      </div>

      <div style={{ marginBottom: "20%" }}>
        <Skills />
      </div>

      <div style={{ marginBottom: "20%" }}>
        <Projects />
      </div>

      <div style={{ marginBottom: "20%" }}>
        <Experience />
      </div>

      <div style={{ marginBottom: "20%" }}>
        <Contact />
      </div>
    </Layout>
  )
}

export default IndexPage
