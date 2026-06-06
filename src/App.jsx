import { useRef } from 'react'
import useFadeUp from './hooks/useFadeUp'
import ParticlesBackground from './components/ParticlesBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Solution from './components/Solution'
import Features from './components/Features'
import Workflow from './components/Workflow'
import DemoChat from './components/DemoChat'
import Showcase from './components/Showcase'
import Industries from './components/Industries'
import Integrations from './components/Integrations'
import Security from './components/Security'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  const appRef = useRef(null)
  useFadeUp(appRef)

  return (
    <div ref={appRef}>
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <Features />
      <Workflow />
      <DemoChat />
      <Showcase />
      <Industries />
      <Integrations />
      <Security />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
