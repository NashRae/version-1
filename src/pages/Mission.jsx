import './Mission.css'

export function Mission() {
  return (
    <div className="wrapper" style={{ maxWidth: '760px' }}>
      <div className="label animate-up">Our Mission</div>
      <h1 className="page-title animate-up" style={{ animationDelay: '0.1s' }}>
        Hiring is<br />
        <span className="accent">broken.</span>
      </h1>

      <div className="mission-content">
        <div className="mission-section reveal">
          <div className="label">The Problem</div>
          <p className="mission-text">
            Early-stage startups drown in resumes. High-agency young builders get filtered out because they don't have pedigree, brand names, or "5+ years experience."
          </p>
          <p className="mission-text">
            The system rewards keywords. It ignores proof.
          </p>
        </div>

        <div className="mission-section reveal">
          <div className="label">What We Believe</div>
          <div className="mission-quote">
            <p>Execution matters more than credentials.</p>
          </div>
          <div className="mission-quote">
            <p>Proof of work matters more than formatted resumes.</p>
          </div>
          <div className="mission-quote">
            <p>Builders should be evaluated by what they've shipped, not where they studied.</p>
          </div>
        </div>

        <div className="mission-section reveal">
          <div className="label">Who We're Built For</div>
          <p className="mission-text">
            Early-stage startups that move fast and need operators, not placeholders. Our job: Surface high-agency talent. Filter aggressively. Remove noise from hiring.
          </p>
        </div>

        <div className="mission-section reveal">
          <div className="label">What We Are Not</div>
          <div className="not-grid">
            <div className="not-card">A job board</div>
            <div className="not-card">A resume marketplace</div>
            <div className="not-card">Built for corporate HR</div>
          </div>
          <p className="mission-highlight">hirelRecruit is a curated hiring layer for serious builders.</p>
        </div>

        <div className="mission-section reveal">
          <div className="label">Long-Term Vision</div>
          <p className="mission-text">
            Make high-agency Indian talent visible to ambitious startups — and make hiring based on proof the default, not the exception.
          </p>
          <p className="mission-quote-text">
            "If you are building something real, we want to help you hire people who build."
          </p>
          <p className="mission-attribution">— That's the mission.</p>
        </div>
      </div>
    </div>
  )
}
