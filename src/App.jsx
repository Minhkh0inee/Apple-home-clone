import Hero from "./components/Hero"
import Highlight from "./components/Highlight"
import Model from "./components/Model"
import Navbar from "./components/Navbar"
import Features from './components/Features'
import * as Sentry from '@sentry/react'
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"

function App() {

  

  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlight/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  )
}

export default Sentry.withProfiler(App)
