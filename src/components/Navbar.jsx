import { useState } from 'react'
import { btnPrimary, container } from '../ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Subjects', href: '#subjects' },
  { label: 'Tasks', href: '#tasks' },
  { label: 'About', href: '#about' },
]

// "md:" means "from medium screens (768px) and up".
// Plain classes apply to mobile first, then md: classes change them for bigger screens.
const linkClass =
  'border-b border-line py-3 font-medium text-soft transition-colors hover:text-blue md:border-0 md:py-0'

function Navbar() {
  // true  = mobile menu is open
  // false = mobile menu is closed
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <div className={`${container} flex h-16 items-center justify-between`}>
        <a href="#home" className="flex items-center gap-2.5 font-heading text-2xl font-extrabold">
          <span
            className="flex size-8 flex-col justify-center gap-1 rounded-[9px] bg-ink px-[7px]"
            aria-hidden="true"
          >
            <i className="block h-[3px] rounded-full bg-highlight"></i>
            <i className="block h-[3px] rounded-full bg-highlight"></i>
            <i className="block h-[3px] w-3/5 rounded-full bg-highlight"></i>
          </span>
          StudySpace
        </a>

        {/* Mobile: hidden unless menuOpen. Desktop (md:): always a row. */}
        <nav
          className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-16 flex-col border-b border-line bg-paper px-5 pb-5 pt-3 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
          aria-label="Main"
        >
          {links.map((link) => (
            <a key={link.label} href={link.href} className={linkClass} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="#subjects"
            className={`${btnPrimary} mt-4 text-center md:mt-0 md:px-5 md:py-2 md:text-[0.95rem]`}
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>
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
