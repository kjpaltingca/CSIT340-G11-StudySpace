import { container } from '../ui'

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
    <section className="bg-ink py-16 text-white">
      <div className={container}>
        <h2 className="mb-8 text-3xl font-extrabold sm:text-4xl">Your Study Statistics</h2>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col rounded-2xl border-2 border-white/25 p-4 transition duration-200 hover:-translate-y-1 hover:border-highlight sm:p-6 motion-reduce:transition-none"
            >
              <span className="mb-2 font-heading text-4xl leading-none font-extrabold text-highlight sm:text-5xl">
                {stat.value}
              </span>
              <span className="text-white/80">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
