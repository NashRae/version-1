import './About.css'

export function About() {
  return (
    <div className="wrapper" style={{ maxWidth: '860px' }}>
      <div className="label animate-up">About</div>
      <h1 className="page-title animate-up" style={{ animationDelay: '0.1s' }}>
        Proof beats<br />
        <span className="accent">paper.</span> Always.
      </h1>

      <div className="about-grid reveal">
        <div>
          <div className="label">What hirelRecruit Is</div>
          <p className="about-text">
            A curated hiring layer for early-stage startups. We connect founders with high-agency builders who have proof of work — not polished resumes.
          </p>
          <p className="about-text">
            We manually vet every candidate. No algorithm. Human judgment on real output.
          </p>
        </div>
        <div>
          <div className="label">Why It Exists</div>
          <p className="about-text">
            The best builders in India — self-taught, non-pedigree, high-output — keep getting filtered out by a system that was never built for them.
          </p>
          <p className="about-text">
            And startups keep hiring wrong because they're reading the wrong signals.
          </p>
        </div>
      </div>

      <div className="founder-card reveal">
        <div className="founder-avatar">
          <div className="founder-avatar-placeholder">N</div>
        </div>
        <div>
          <div className="founder-name">Nash Rae</div>
          <div className="founder-title">FOUNDER & CEO, HIRELRECRUIT</div>
          <p className="founder-bio">
            Building hirelRecruit to fix the signal problem in Indian startup hiring. The best operators in this country are being ignored by a system that rewards credentials over capability.
          </p>
          <a 
            href="https://www.linkedin.com/in/nashrae16/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: '13px', padding: '9px 18px', display: 'inline-flex' }}
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </div>
  )
}
