import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Respect reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      document.documentElement.style.setProperty('--motion-reduce', '1')
    }
  }, [])

  return (
    <div className="min-h-screen bg-neutral-light">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

