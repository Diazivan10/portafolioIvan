import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Experience from './components/experience'
import Education from './components/education'
import Contact from './components/contact'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  )
}
