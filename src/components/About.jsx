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
    <section id="about" className="section">
      <div className="container about-inner">
        <div className="about-text">
          <h2>About StudySpace</h2>
          <p>
            StudySpace is a study hub built for students. School brings many
            subjects, deadlines, and activities at once, and it is easy to lose
            track. StudySpace puts your academic workload in one clear view so
            you can plan your time and finish what matters.
          </p>
        </div>

        <ul className="benefits">
          {benefits.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
