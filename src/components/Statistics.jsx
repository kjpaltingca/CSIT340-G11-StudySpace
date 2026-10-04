function Statistics({ subjects, tasks }) {
  // These numbers are CALCULATED from the data, so they stay correct
  // automatically whenever a task changes.
  const completedCount = tasks.filter((task) => task.completed).length
  const totalHours = subjects.reduce((sum, subject) => sum + subject.hours, 0)

  const stats = [
    { label: 'Subjects', value: subjects.length },
    { label: 'Tasks', value: tasks.length },
    { label: 'Completed', value: completedCount },
    { label: 'Study Hours', value: totalHours },
  ]

  return (
    <section className="stats">
      <div className="container">
        <h2>Your Study Statistics</h2>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
