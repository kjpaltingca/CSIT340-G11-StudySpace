import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { btnPrimary, container } from '../ui'

// "md:" means "from medium screens (768px) and up".
// Plain classes apply to mobile first, then md: classes change them for bigger screens.
const linkClass =
  'border-b border-line py-3 font-medium text-soft transition-colors hover:text-blue md:border-0 md:py-0'

// NavLink gives us "isActive", so the current page can look different.
function navLinkClass({ isActive }) {
  return `${linkClass} ${isActive ? 'text-blue' : ''}`
}

function Navbar() {
  // true  = mobile menu is open
  // false = mobile menu is closed
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <div className={`${container} flex h-16 items-center justify-between`}>
        <Link to="/" className="flex items-center gap-2.5 font-heading text-2xl font-extrabold">
          <span
            className="flex size-8 flex-col justify-center gap-1 rounded-[9px] bg-ink px-[7px]"
            aria-hidden="true"
          >
            <i className="block h-[3px] rounded-full bg-highlight"></i>
            <i className="block h-[3px] rounded-full bg-highlight"></i>
            <i className="block h-[3px] w-3/5 rounded-full bg-highlight"></i>
          </span>
          StudySpace
        </Link>

        {/* Mobile: hidden unless menuOpen. Desktop (md:): always a row. */}
        <nav
          className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-16 flex-col border-b border-line bg-paper px-5 pb-5 pt-3 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
          aria-label="Main"
        >
          <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>
            Home
          </NavLink>
          {/* "/#subjects" = the Home page, scrolled to the section with id="subjects" */}
          <Link to="/#subjects" className={linkClass} onClick={closeMenu}>
            Subjects
          </Link>
          <Link to="/#tasks" className={linkClass} onClick={closeMenu}>
            Tasks
          </Link>
          <NavLink to="/timer" className={navLinkClass} onClick={closeMenu}>
            Timer
          </NavLink>
          <Link to="/#about" className={linkClass} onClick={closeMenu}>
            About
          </Link>
          <Link
            to="/#subjects"
            className={`${btnPrimary} mt-4 text-center md:mt-0 md:px-5 md:py-2 md:text-[0.95rem]`}
            onClick={closeMenu}
          >
            Get Started
          </Link>
        </nav>

        <button
          className="cursor-pointer rounded-full border-2 border-ink px-4 py-1.5 text-sm font-semibold md:hidden"
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
