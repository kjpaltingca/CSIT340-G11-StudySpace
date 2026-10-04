import Hero from '../components/Hero'
import Subjects from '../components/Subjects'
import Tasks from '../components/Tasks'
import Statistics from '../components/Statistics'
import About from '../components/About'

// The Home page is just our existing sections stacked together.
// App passes the data and functions down as props, and Home passes them along.
function Home({ subjects, tasks, onToggleTask, onAddTask, onDeleteTask, onResetTasks }) {
  return (
    <>
      <Hero />
      <Subjects subjects={subjects} />
      <Tasks
        tasks={tasks}
        subjects={subjects}
        onToggleTask={onToggleTask}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        onResetTasks={onResetTasks}
      />
      <Statistics subjects={subjects} tasks={tasks} />
      <About />
    </>
  )
}

export default Home
