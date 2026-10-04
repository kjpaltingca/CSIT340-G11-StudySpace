const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Subjects', href: '#subjects' },
  { label: 'Tasks', href: '#tasks' },
  { label: 'About', href: '#about' },
]

// Calculated once, outside the component, so it always shows the current year
const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h2>StudySpace</h2>
          <p>A simple study space for organizing subjects, tasks, and focus time.</p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="copyright">&copy; {year} StudySpace. Made for a school activity.</p>
    </footer>
  )
}

export default Footer
