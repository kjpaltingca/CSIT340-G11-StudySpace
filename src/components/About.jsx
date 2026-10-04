import { container, sectionTitle } from '../ui'

const benefits = [
  {
    title: 'See everything in one place',
    text: 'Your subjects and progress sit side by side, so you know where to focus next.',
  },
  {
    title: 'Keep tasks under control',
    text: 'Track what is due, mark work as done, and avoid last-minute surprises.',
  },
  {
    title: 'Stay motivated',
    text: 'Watching your completed tasks and study hours grow makes progress easy to see.',
  },
]

function About() {
  return (
    <section id="about" className="scroll-mt-16 py-14 sm:py-20">
      <div className={`${container} grid items-start gap-10 lg:grid-cols-2 lg:gap-14`}>
        <div>
          <h2 className={`${sectionTitle} mb-4`}>About StudySpace</h2>
          <p className="max-w-xl text-lg text-soft">
            StudySpace is a study hub built for students. School brings many
            subjects, deadlines, and activities at once, and it is easy to lose
            track. StudySpace puts your academic workload in one clear view so
            you can plan your time and finish what matters.
          </p>
        </div>

        <ul className="grid gap-4">
          {benefits.map((item) => (
            <li
              key={item.title}
              className="rounded-r-2xl border-l-[5px] border-highlight bg-white px-5 py-4 shadow-card"
            >
              <h3 className="mb-1 text-lg">{item.title}</h3>
              <p className="text-[0.95rem] text-soft">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
