// SubjectCard receives its data through PROPS.
// Props are like function arguments: the parent decides what to pass in.

function SubjectCard({ subject, isSelected, onView }) {
  return (
    <article
      className={isSelected ? 'card subject-card selected' : 'card subject-card'}
      // We pass the subject's color to CSS as a variable called --accent
      style={{ '--accent': subject.color }}
    >
      <h3>{subject.name}</h3>
      <p>{subject.description}</p>

      <div className="progress-info">
        <span>Progress</span>
        <strong>{subject.progress}%</strong>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={subject.progress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`${subject.name} progress`}
      >
        <div className="progress-fill" style={{ width: `${subject.progress}%` }}></div>
      </div>

      <button className="btn btn-small btn-outline" onClick={() => onView(subject.id)}>
        {isSelected ? 'Hide Subject' : 'View Subject'}
      </button>
    </article>
  )
}

export default SubjectCard
