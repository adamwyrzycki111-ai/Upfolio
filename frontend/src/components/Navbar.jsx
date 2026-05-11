import { useState, useEffect } from 'react'
import { Sparkles, Menu, X } from 'lucide-react'
import '../styles/navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          <Sparkles className="navbar-logo-icon" />
          <span className="navbar-logo">Upfolio</span>
          <span className="navbar-badge">AI</span>
        </a>

        <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          <a href="#home" className="navbar-link">Home</a>
          <a href="#how-it-works" className="navbar-link">How It Works</a>
          <a href="#features" className="navbar-link">Features</a>
          <a href="#pricing" className="navbar-link">Pricing</a>
        </div>

        <div className="navbar-actions">
          <a href="#get-started" className="btn btn-primary navbar-cta">
            Get Started
          </a>
        </div>

        <button 
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar