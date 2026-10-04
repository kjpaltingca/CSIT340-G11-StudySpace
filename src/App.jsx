import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Subjects from './components/Subjects'
import Tasks from './components/Tasks'
import Statistics from './components/Statistics'
import About from './components/About'
import Footer from './components/Footer'

import { subjectsData, initialTasks } from './data'

const STORAGE_KEY = 'studyspace-tasks'

// Read saved tasks from the browser (localStorage).
// If nothing is saved yet, or the data is broken, use the sample tasks.
function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : initialTasks
  } catch {
    return initialTasks
  }
}

function App() {
  // The task list lives HERE because two components need it:
  // Tasks (to show and change it) and Statistics (to count it).
  // Putting shared state in the closest common parent is called "lifting state up".
  // Passing a function to useState means it only runs once, on the first render.
  const [tasks, setTasks] = useState(loadTasks)

  // Every time "tasks" changes, save it to the browser.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  // Flip one task between done and not done.
  // We build a NEW array with .map() instead of changing the old one,
  // because React only re-renders when it sees a new array.
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  // Add a new task at the top of the list
  function addTask({ title, subject, due }) {
    // The date input gives "2026-10-09". Turn it into "Oct 9" to match our sample data.
    const prettyDate = new Date(due + 'T00:00:00').toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    })

    const newTask = {
      id: Date.now(), // a unique number based on the current time
      title,
      subject,
      due: prettyDate,
      completed: false,
    }

    setTasks([newTask, ...tasks])
  }

  // Keep every task EXCEPT the one with this id
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function resetTasks() {
    setTasks(initialTasks)
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Subjects subjects={subjectsData} />
        <Tasks
          tasks={tasks}
          subjects={subjectsData}
          onToggleTask={toggleTask}
          onAddTask={addTask}
          onDeleteTask={deleteTask}
          onResetTasks={resetTasks}
        />
        <Statistics subjects={subjectsData} tasks={tasks} />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
