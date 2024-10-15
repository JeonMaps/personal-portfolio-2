import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Marquee from "./components/Marquee"
import Projects from "./components/Projects"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div>
      <main className="font-light text-white antialiased selection:bg-lime-300 selection:text-black">
        <Navbar />
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App