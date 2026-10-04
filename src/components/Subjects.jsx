import { useState } from 'react'
import SubjectCard from './SubjectCard'
import { container, sectionTitle } from '../ui'

function Subjects({ subjects }) {
  // Remembers which subject is open. null means "none".
  const [selectedId, setSelectedId] = useState(null)

  // Clicking the same button again closes the panel.
  function handleView(id) {
    setSelectedId(selectedId === id ? null : id)
  }

  // Find the full subject object that matches the selected id
  const selectedSubject = subjects.find((subject) => subject.id === selectedId)

  return (
    <section id="subjects" className="scroll-mt-16 py-14 sm:py-20">
      <div className={container}>
        <div className="mb-8">
          <h2 className={sectionTitle}>Your Subjects</h2>
          <p className="text-soft">Pick a subject to see the topics you are working through.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* One SubjectCard is created for every item in the array */}
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              isSelected={subject.id === selectedId}
              onView={handleView}
            />
          ))}
        </div>

        {/* Conditional rendering: this panel exists only when a subject is selected */}
        {selectedSubject && (
          <div
            className="mt-6 rounded-2xl border-2 border-(color:--accent) bg-white p-6"
            style={{ '--accent': selectedSubject.color }}
          >
            <h3 className="mb-3.5 text-xl">{selectedSubject.name}: topics to review</h3>
            <ul className="mb-4 flex flex-wrap gap-2.5">
              {selectedSubject.topics.map((topic) => (
                <li key={topic} className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm">
                  {topic}
                </li>
              ))}
            </ul>
            <p className="text-[0.95rem] text-soft">Study time this week: {selectedSubject.hours} hours</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Subjects
