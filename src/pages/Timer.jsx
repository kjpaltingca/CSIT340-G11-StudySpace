import { useEffect, useState } from 'react'
import { btnOutline, btnPrimary, container } from '../ui'

// The three timer modes (a Pomodoro-style study timer)
const modes = {
  focus: { label: 'Focus', minutes: 25 },
  short: { label: 'Short Break', minutes: 5 },
  long: { label: 'Long Break', minutes: 15 },
}

const tips = [
  'Study for 25 minutes, then take a 5 minute break.',
  'After 4 focus sessions, take a longer 15 minute break.',
  'Put your phone away while the timer is running.',
]

// Turn 1500 seconds into "25:00"
function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0')
  const seconds = String(totalSeconds % 60).padStart(2, '0')
  return `${minutes}:${seconds}`
}

function Timer() {
  const [mode, setMode] = useState('focus')
  const [secondsLeft, setSecondsLeft] = useState(modes.focus.minutes * 60)
  const [running, setRunning] = useState(false)
  const [sessions, setSessions] = useState(0)

  const totalSeconds = modes[mode].minutes * 60
  const percentDone = ((totalSeconds - secondsLeft) / totalSeconds) * 100
  const finished = secondsLeft === 0

  // While "running" is true, wait one second, then tick down by one.
  // Because secondsLeft is in the list at the bottom, this effect runs again
  // after every tick. The returned function is the "cleanup": it cancels the
  // old timeout so we never have two timers running at once.
  useEffect(() => {
    if (!running) return

    const timeoutId = setTimeout(() => {
      if (secondsLeft <= 1) {
        // Time is up: stop the clock, and count it if it was a focus session
        setSecondsLeft(0)
        setRunning(false)
        if (mode === 'focus') {
          setSessions((count) => count + 1)
        }
      } else {
        setSecondsLeft(secondsLeft - 1)
      }
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [running, secondsLeft, mode])

  function switchMode(newMode) {
    setMode(newMode)
    setSecondsLeft(modes[newMode].minutes * 60)
    setRunning(false)
  }

  function resetTimer() {
    setSecondsLeft(totalSeconds)
    setRunning(false)
  }

  return (
    <section className="bg-paper bg-graph-paper py-12 sm:py-20">
      <div className={`${container} grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]`}>
        <div className="rounded-2xl border-2 border-ink bg-white p-6 text-center shadow-hard sm:p-10">
          <h1 className="mb-2 text-4xl font-extrabold sm:text-5xl">Study Timer</h1>
          <p className="mb-6 text-soft">Pick a mode, press start, and stay focused.</p>

          <div className="mb-8 flex flex-wrap justify-center gap-2.5" role="group" aria-label="Timer mode">
            {Object.keys(modes).map((key) => (
              <button
                key={key}
                onClick={() => switchMode(key)}
                aria-pressed={mode === key}
                className={`cursor-pointer rounded-full border-2 px-4 py-1.5 text-[0.95rem] font-semibold transition-colors motion-reduce:transition-none ${
                  mode === key ? 'border-ink bg-ink text-white' : 'border-line bg-white text-soft hover:border-ink'
                }`}
              >
                {modes[key].label}
              </button>
            ))}
          </div>

          {/* The ring fills as time passes. The percentage changes every second,
              so it uses an inline style (Tailwind can't make classes from changing numbers). */}
          <div
            className="relative mx-auto mb-8 grid size-60 place-items-center rounded-full before:absolute before:inset-4 before:rounded-full before:bg-white sm:size-72"
            style={{
              background: `conic-gradient(var(--color-blue) ${percentDone}%, var(--color-line) 0)`,
            }}
          >
            <div className="relative">
              <p className="font-heading text-6xl font-extrabold tabular-nums sm:text-7xl" aria-live="off">
                {formatTime(secondsLeft)}
              </p>
              <p className="text-soft">{finished ? 'Time is up!' : modes[mode].label}</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3.5">
            <button
              className={btnPrimary}
              onClick={() => setRunning(!running)}
              disabled={finished}
            >
              {running ? 'Pause' : 'Start'}
            </button>
            <button className={btnOutline} onClick={resetTimer}>
              Reset
            </button>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <p className="mb-1 text-soft">Focus sessions completed</p>
            <p className="font-heading text-6xl font-extrabold text-blue">{sessions}</p>
          </div>

          <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <h2 className="mb-3 text-xl">How it works</h2>
            <ul className="grid gap-3">
              {tips.map((tip) => (
                <li key={tip} className="border-l-[5px] border-highlight pl-3.5 text-[0.95rem] text-soft">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timer
