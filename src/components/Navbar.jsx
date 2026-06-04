import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu when clicking a link
  const handleNavClick = () => setMenuOpen(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled premium-nav' : 'premium-nav'}>
        <div className="nav-logo">
          <div className="nav-logo-icon"></div>
          KASTIK
        </div>

        {/* Desktop Nav Links */}
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


        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

  
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <nav className="mobile-nav-links">
            <a href="#features" onClick={handleNavClick}>Platform</a>
            <a href="#solution" onClick={handleNavClick}>Solutions</a>
            <a href="#showcase" onClick={handleNavClick}>Case Studies</a>
            <a href="#pricing" onClick={handleNavClick}>Pricing</a>
          </nav>
          <div className="mobile-nav-btns">
            <button className="btn-ghost mobile-btn-ghost" onClick={handleNavClick}>Log in</button>
            <button className="btn-primary premium-nav-btn mobile-btn-primary" onClick={handleNavClick}>Start building</button>
          </div>
        </div>
      </div>
    </>
  )
}
