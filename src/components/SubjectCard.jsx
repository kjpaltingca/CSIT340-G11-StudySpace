import { btnOutline, btnSmall, card } from '../ui'

// SubjectCard receives its data through PROPS.
// The subject's color is passed to Tailwind as a CSS variable called --accent,
// because Tailwind can't build class names from data at runtime.

function SubjectCard({ subject, isSelected, onView }) {
  return (
    <article
      className={`${card} border-t-5 border-t-(color:--accent) ${
        isSelected ? 'ring-2 ring-(color:--accent)' : ''
      }`}
      style={{ '--accent': subject.color }}
    >
      <h3 className="mb-2 text-xl">{subject.name}</h3>
      <p className="mb-5 text-[0.95rem] text-soft">{subject.description}</p>

      <div className="mb-1.5 flex justify-between text-sm">
        <span>Progress</span>
        <strong>{subject.progress}%</strong>
      </div>
      <div
        className="mb-6 h-2.5 overflow-hidden rounded-full bg-paper"
        role="progressbar"
        aria-valuenow={subject.progress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`${subject.name} progress`}
      >
        {/* The width is a changing number, so it uses an inline style */}
        <div className="h-full rounded-full bg-(--accent)" style={{ width: `${subject.progress}%` }}></div>
      </div>

      <button className={`${btnOutline} ${btnSmall} mt-auto`} onClick={() => onView(subject.id)}>
        {isSelected ? 'Hide Subject' : 'View Subject'}
      </button>
    </article>
  )
}

export default SubjectCard
