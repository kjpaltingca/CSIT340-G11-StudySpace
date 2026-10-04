import { useState } from 'react'
import TaskCard from './TaskCard'
import AddTaskForm from './AddTaskForm'
import { container, sectionTitle } from '../ui'

const filters = ['All', 'Pending', 'Completed']

const filterBase =
  'cursor-pointer rounded-full border-2 px-4 py-1.5 text-[0.95rem] font-semibold transition-colors motion-reduce:transition-none'
const filterOn = 'border-ink bg-ink text-white'
const filterOff = 'border-line bg-white text-soft hover:border-ink'

function Tasks({ tasks, subjects, onToggleTask, onAddTask, onDeleteTask, onResetTasks }) {
  // Which filter button is active right now
  const [filter, setFilter] = useState('All')

  // Make a smaller list depending on the active filter
  const visibleTasks = tasks.filter((task) => {
    if (filter === 'Pending') return !task.completed
    if (filter === 'Completed') return task.completed
    return true // "All"
  })

  return (
    <section id="tasks" className="scroll-mt-16 border-y border-line bg-white py-14 sm:py-20">
      <div className={container}>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className={sectionTitle}>Your Tasks</h2>
            <p className="text-soft">Add tasks, mark them as completed, and watch your statistics update.</p>
          </div>
          <button
            className="cursor-pointer text-sm font-medium text-soft underline underline-offset-4 transition-colors hover:text-blue"
            onClick={onResetTasks}
          >
            Reset sample tasks
          </button>
        </div>

        <AddTaskForm subjects={subjects} onAddTask={onAddTask} />

        <div className="mb-6 flex flex-wrap gap-2.5" role="group" aria-label="Filter tasks">
          {filters.map((name) => (
            <button
              key={name}
              className={`${filterBase} ${filter === name ? filterOn : filterOff}`}
              onClick={() => setFilter(name)}
              aria-pressed={filter === name}
            >
              {name}
            </button>
          ))}
        </div>

        {visibleTasks.length === 0 ? (
          <p className="rounded-2xl border-2 border-dashed border-line p-8 text-center text-soft">
            No tasks to show. Add a new task above or pick another filter.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleTasks.map((task) => (
              <TaskCard key={task.id} task={task} onToggle={onToggleTask} onDelete={onDeleteTask} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Tasks
