import { Link } from 'react-router-dom'
import { btnPrimary, container } from '../ui'

// Shown when the address doesn't match any page
function NotFound() {
  return (
    <section className="py-24 text-center">
      <div className={container}>
        <h1 className="mb-3 text-5xl font-extrabold">Page not found</h1>
        <p className="mb-8 text-lg text-soft">That page doesn't exist. Head back home to keep studying.</p>
        <Link to="/" className={btnPrimary}>
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
