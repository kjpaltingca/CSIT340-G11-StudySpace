import { useState } from 'react'
import TaskCard from './TaskCard'

const filters = ['All', 'Pending', 'Completed']

function Tasks({ tasks, onToggleTask }) {
  // Which filter button is active right now
  const [filter, setFilter] = useState('All')

  // Make a smaller list depending on the active filter
  const visibleTasks = tasks.filter((task) => {
    if (filter === 'Pending') return !task.completed
    if (filter === 'Completed') return task.completed
    return true // "All"
  })

  return (
    <section id="tasks" className="section section-tint">
      <div className="container">
        <div className="section-head">
          <h2>Your Tasks</h2>
          <p>Mark tasks as completed and watch your statistics update.</p>
        </div>

        <div className="filters" role="group" aria-label="Filter tasks">
          {filters.map((name) => (
            <button
              key={name}
              className={filter === name ? 'filter active' : 'filter'}
              onClick={() => setFilter(name)}
              aria-pressed={filter === name}
            >
              {name}
            </button>
          ))}
        </div>

        {visibleTasks.length === 0 ? (
          <p className="empty">No tasks here yet. Pick another filter to see more.</p>
        ) : (
          <div className="grid grid-3">
            {visibleTasks.map((task) => (
              <TaskCard key={task.id} task={task} onToggle={onToggleTask} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Tasks
