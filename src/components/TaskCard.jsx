function TaskCard({ task, onToggle }) {
  return (
    <article className={task.completed ? 'card task-card is-done' : 'card task-card'}>
      <div className="task-top">
        <h3>{task.title}</h3>

        {/* Conditional rendering: the badge text and color depend on task.completed */}
        <span className={task.completed ? 'badge badge-done' : 'badge badge-pending'}>
          {task.completed ? 'Completed' : 'Pending'}
        </span>
      </div>

      <p className="task-meta">{task.subject}</p>
      <p className="task-meta">Due: {task.due}</p>

      {/* The click handler calls the function App gave us, with this task's id */}
      <button
        className={task.completed ? 'btn btn-small btn-outline' : 'btn btn-small btn-primary'}
        onClick={() => onToggle(task.id)}
      >
        {task.completed ? 'Undo' : 'Mark as Completed'}
      </button>
    </article>
  )
}

export default TaskCard
