import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Subjects from './components/Subjects'
import Tasks from './components/Tasks'
import Statistics from './components/Statistics'
import About from './components/About'
import Footer from './components/Footer'

import { subjectsData, initialTasks } from './data'

function App() {
  // The task list lives HERE because two components need it:
  // Tasks (to show and change it) and Statistics (to count it).
  // Putting shared state in the closest common parent is called "lifting state up".
  const [tasks, setTasks] = useState(initialTasks)

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

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Subjects subjects={subjectsData} />
        <Tasks tasks={tasks} onToggleTask={toggleTask} />
        <Statistics subjects={subjectsData} tasks={tasks} />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
