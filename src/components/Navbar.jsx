import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="navbar" className={scrolled ? 'scrolled premium-nav' : 'premium-nav'}>
      <div className="nav-logo">
        <div className="nav-logo-icon"></div>
        KASTIK
      </div>
      <div className="nav-links">
        <a href="#features">Platform</a>
        <a href="#solution">Solutions</a>
        <a href="#showcase">Case Studies</a>
        <a href="#pricing">Pricing</a>
      </div>
      <div className="nav-btns">
        <button className="btn-ghost">Log in</button>
        <button className="btn-primary premium-nav-btn">Start building</button>
      </div>
    </nav>
  )
}
