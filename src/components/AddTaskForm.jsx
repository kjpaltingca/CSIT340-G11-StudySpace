import { useState } from 'react'
import { btnPrimary } from '../ui'

const fieldClass =
  'w-full rounded-xl border-2 border-line bg-white px-3.5 py-2.5 text-[0.95rem] transition-colors focus:border-blue'
const labelClass = 'mb-1 block text-sm font-semibold'

function AddTaskForm({ subjects, onAddTask }) {
  // "Controlled inputs": each input's value is stored in React state.
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState(subjects[0].name)
  const [due, setDue] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault() // stop the browser from reloading the page

    if (title.trim() === '' || due === '') {
      setError('Please enter a task name and a due date.')
      return
    }

    onAddTask({ title: title.trim(), subject, due })

    // Clear the form for the next task
    setTitle('')
    setDue('')
    setError('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 grid gap-4 rounded-2xl border border-line bg-paper p-5 sm:grid-cols-2 lg:grid-cols-[2fr_1.5fr_1fr_auto] lg:items-end"
    >
      <div>
        <label htmlFor="task-title" className={labelClass}>
          Task name
        </label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="e.g. Read Chapter 4"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="task-subject" className={labelClass}>
          Subject
        </label>
        <select
          id="task-subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          className={fieldClass}
        >
          {subjects.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="task-due" className={labelClass}>
          Due date
        </label>
        <input
          id="task-due"
          type="date"
          value={due}
          onChange={(event) => setDue(event.target.value)}
          className={fieldClass}
        />
      </div>

      <button type="submit" className={`${btnPrimary} sm:col-span-2 lg:col-span-1`}>
        Add Task
      </button>

      {/* Conditional rendering: the message only exists when there is an error */}
      {error && (
        <p className="text-sm font-medium text-red-600 sm:col-span-2 lg:col-span-4" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}

export default AddTaskForm
