import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Subjects', href: '#subjects' },
  { label: 'Tasks', href: '#tasks' },
  { label: 'About', href: '#about' },
]

function Navbar() {
  // true  = mobile menu is open
  // false = mobile menu is closed
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="logo">
          <span className="logo-mark" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
          StudySpace
        </a>

        {/* The "open" class is added only when menuOpen is true */}
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#subjects" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
            Get Started
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  )
}

export default Navbar
