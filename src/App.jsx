import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <main className="font-light text-white antialiased selection:bg-lime-300 selection:text-black">
        <Navbar />
        <Hero />
      </main>
    </div>
  )
}

export default App