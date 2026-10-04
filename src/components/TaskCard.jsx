import { btnOutline, btnPrimary, btnSmall, card } from '../ui'

function TaskCard({ task, onToggle, onDelete }) {
  return (
    <article className={card}>
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className={`text-lg ${task.completed ? 'text-soft line-through' : ''}`}>{task.title}</h3>

        {/* Conditional rendering: badge text and color depend on task.completed */}
        <span
          className={`shrink-0 rounded-full px-3 py-0.5 text-xs font-semibold ${
            task.completed ? 'bg-done-bg text-done-text' : 'bg-pending-bg text-pending-text'
          }`}
        >
          {task.completed ? 'Completed' : 'Pending'}
        </span>
      </div>

      <p className="text-[0.92rem] text-soft">{task.subject}</p>
      <p className="text-[0.92rem] text-soft">Due: {task.due}</p>

      <div className="mt-4 flex items-center justify-between gap-3">
        {/* The click handler calls the function App gave us, with this task's id */}
        <button
          className={`${task.completed ? btnOutline : btnPrimary} ${btnSmall}`}
          onClick={() => onToggle(task.id)}
        >
          {task.completed ? 'Undo' : 'Mark as Completed'}
        </button>

        <button
          className="cursor-pointer rounded-full px-3 py-1.5 text-sm font-medium text-soft transition-colors hover:bg-red-50 hover:text-red-600"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete ${task.title}`}
        >
          Delete
        </button>
      </div>
    </article>
  )
}

export default TaskCard
