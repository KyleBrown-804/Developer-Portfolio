import React, { useState } from "react"
import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Experience from "../components/experience"
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap"
import Layout from "../components/layout"
import "../styles/style.css"

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
      <div style={{ marginBottom: "15%" }}>
        <Hero skillList={skillsList} />
      </div>

      <div style={{ marginBottom: "15%" }}>
        <About />
      </div>

      <div style={{ marginBottom: "15%" }}>
        <Skills />
      </div>

      <div style={{ marginBottom: "15%" }}>
        <Projects />
      </div>

      <div style={{ marginBottom: "15%" }}>
        <Experience />
      </div>

      {/* Contact section
        provide a simple form to send an email for job opportunities */}
    </Layout>
  )
}

export default IndexPage
