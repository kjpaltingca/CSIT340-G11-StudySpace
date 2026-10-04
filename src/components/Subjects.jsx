import { useState } from 'react'
import SubjectCard from './SubjectCard'

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
    <section id="subjects" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Your Subjects</h2>
          <p>Pick a subject to see the topics you are working through.</p>
        </div>

        <div className="grid grid-3">
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
          <div className="subject-detail" style={{ '--accent': selectedSubject.color }}>
            <h3>{selectedSubject.name}: topics to review</h3>
            <ul>
              {selectedSubject.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <p className="detail-hours">Study time this week: {selectedSubject.hours} hours</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Subjects
