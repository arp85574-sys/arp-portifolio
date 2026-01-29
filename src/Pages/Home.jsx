import React from 'react'
import Project from './Project'
import Experience from './Experience'
import Skills from './Skills'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import ScrollReveal from '../Components/ScrollReveal'

function Home() {
  return (
    <div>

      {/* HERO */}
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      {/* ABOUT */}
      <ScrollReveal>
        <About />
      </ScrollReveal>

      {/* SKILLS */}
      <ScrollReveal>
        <Skills />
      </ScrollReveal>

      {/* PROJECTS */}
      <ScrollReveal>
        <Project />
      </ScrollReveal>

      {/* EXPERIENCE */}
      <ScrollReveal>
        <Experience />
      </ScrollReveal>

      {/* CONTACT */}
      <ScrollReveal>
        <Contact />
      </ScrollReveal>

    </div>
  )
}

export default Home
