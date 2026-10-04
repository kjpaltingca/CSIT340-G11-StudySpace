import { Link } from 'react-router-dom'
import { container } from '../ui'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Subjects', to: '/#subjects' },
  { label: 'Tasks', to: '/#tasks' },
  { label: 'Timer', to: '/timer' },
  { label: 'About', to: '/#about' },
]

// Calculated once, outside the component, so it always shows the current year
const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="border-t border-line bg-white pt-12">
      <div className={`${container} flex flex-wrap justify-between gap-8 pb-8`}>
        <div>
          <h2 className="mb-1.5 text-2xl">StudySpace</h2>
          <p className="max-w-sm text-soft">A simple study space for organizing subjects, tasks, and focus time.</p>
        </div>

        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link key={link.label} to={link.to} className="font-medium text-soft transition-colors hover:text-blue">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="border-t border-line p-5 text-center text-sm text-soft">
        &copy; {year} StudySpace. Made for a school activity.
      </p>
    </footer>
  )
}

export default Footer
