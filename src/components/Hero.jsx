import { Link } from 'react-router-dom'
import { btnOutline, btnPrimary, container } from '../ui'

// Data for the CSS dashboard picture, rendered with .map()
const weekBars = [40, 65, 50, 85, 70] // heights in percent
const mockTasks = [
  { done: true, width: 'w-[70%]' },
  { done: false, width: 'w-[55%]' },
  { done: false, width: 'w-[80%]' },
]

function Hero() {
  return (
    <section id="home" className="scroll-mt-16 bg-paper bg-graph-paper py-12 sm:py-20 lg:pb-24">
      <div className={`${container} grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12`}>
        <div>
          <h1 className="mb-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
            Study Smarter. Achieve More.
          </h1>
          <p className="mb-8 max-w-xl text-lg text-soft sm:text-xl">
            A simple study space designed to help students organize their
            subjects, manage tasks, and stay focused.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link to="/#tasks" className={btnPrimary}>
              Start Studying
            </Link>
            <Link to="/#subjects" className={btnOutline}>
              Explore Subjects
            </Link>
          </div>
        </div>

        {/* Dashboard picture built only with Tailwind classes - no image files */}
        <div
          className="relative mb-6 max-w-md rounded-2xl border-2 border-ink bg-white px-5 pb-6 pt-4 shadow-hard lg:mb-0 lg:max-w-none"
          aria-hidden="true"
        >
          <div className="mb-4 flex gap-1.5">
            <span className="size-[11px] rounded-full bg-line"></span>
            <span className="size-[11px] rounded-full bg-line"></span>
            <span className="size-[11px] rounded-full bg-line"></span>
          </div>

          <div className="mb-5 flex items-end gap-5">
            {/* Progress ring: a conic-gradient with a white circle (before:) on top */}
            <div className="relative grid size-25 shrink-0 place-items-center rounded-full bg-[conic-gradient(var(--color-blue)_0_72%,var(--color-line)_72%_100%)] before:absolute before:inset-3 before:rounded-full before:bg-white">
              <strong className="relative font-heading text-xl">72%</strong>
            </div>

            <div className="flex h-25 flex-1 items-end gap-2">
              {weekBars.map((height, index) => (
                <div
                  key={index}
                  className={`flex-1 rounded-t-md ${index === 3 ? 'bg-highlight' : 'bg-blue/85'}`}
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </div>

          {mockTasks.map((task, index) => (
            <div key={index} className="mt-2.5 flex items-center gap-3 rounded-[10px] bg-paper px-3 py-2.5">
              <span
                className={`size-[18px] shrink-0 rounded-[5px] border-2 ${
                  task.done ? 'border-blue bg-blue' : 'border-ink'
                }`}
              ></span>
              <span className={`block h-2 rounded-full bg-line ${task.width}`}></span>
            </div>
          ))}

          <div className="absolute -bottom-5 -right-3.5 -rotate-4 rounded-md bg-highlight px-4 py-2.5 text-sm font-semibold shadow-card">
            React Activity due Oct 9
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
