// A static component: no props and no state. It only describes what to show.

const weekBars = [40, 65, 50, 85, 70] // heights in percent for the little chart

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Study Smarter. Achieve More.</h1>
          <p>
            A simple study space designed to help students organize their
            subjects, manage tasks, and stay focused.
          </p>
          <div className="hero-buttons">
            <a href="#tasks" className="btn btn-primary">
              Start Studying
            </a>
            <a href="#subjects" className="btn btn-outline">
              Explore Subjects
            </a>
          </div>
        </div>

        {/* This dashboard picture is built with CSS only - no image files. */}
        <div className="mock" aria-hidden="true">
          <div className="mock-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="mock-row">
            <div className="mock-ring">
              <strong>72%</strong>
            </div>
            <div className="mock-chart">
              {weekBars.map((height, index) => (
                <div key={index} className="mock-bar" style={{ height: `${height}%` }}></div>
              ))}
            </div>
          </div>

          <div className="mock-task done">
            <span className="mock-check"></span>
            <span className="mock-line w70"></span>
          </div>
          <div className="mock-task">
            <span className="mock-check"></span>
            <span className="mock-line w55"></span>
          </div>
          <div className="mock-task">
            <span className="mock-check"></span>
            <span className="mock-line w80"></span>
          </div>

          <div className="mock-note">React Activity due Oct 9</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
