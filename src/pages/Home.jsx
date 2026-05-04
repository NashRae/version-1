import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Ticker } from '../components/Ticker'
import { TalentCard } from '../components/TalentCard'
import { IntroModal } from '../components/IntroModal'
import './Home.css'

const steps = [
  {
    number: '01',
    title: 'Submit Your Role',
    description: 'Tell us what you\'re building and who you need. Skills, budget, timeline. No fluff.',
    tag: 'for startups',
  },
  {
    number: '02',
    title: 'We Curate & Match',
    description: 'Manual matching. We filter aggressively — only builders with verified proof of work make it through.',
    tag: 'manual process',
  },
  {
    number: '03',
    title: 'Interview & Hire',
    description: 'Receive 3–5 curated profiles within 72 hours. Review proof of work. Interview. Hire.',
    tag: '72hr turnaround',
  },
]

const featuredTalent = [
  {
    name: 'Aryan K.',
    role: 'Full-Stack Engineer',
    initials: 'A',
    status: 'open',
    achievements: [
      'Built logistics dashboard — ↓80% manual work',
      '3 SaaS MVPs shipped solo in under 6 weeks',
    ],
    skills: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    name: 'Sara M.',
    role: 'Product Designer',
    initials: 'S',
    status: 'open',
    achievements: [
      'Fintech onboarding redesign — ↑44% completion',
      'Led design for 0→1 consumer app, 12k users',
    ],
    skills: ['Figma', 'UX Research', 'Design Systems'],
  },
  {
    name: 'Rohan V.',
    role: 'ML Engineer',
    initials: 'R',
    status: 'soon',
    achievements: [
      'Churn model flagged 23% of at-risk accounts',
      'NLP classifier trained on 2M+ records',
    ],
    skills: ['Python', 'PyTorch', 'MLOps'],
  },
]

const comparisonData = [
  { question: 'What gets you shortlisted?', traditional: 'Degree & brand names', hirel: 'Verified proof of work', yes: true },
  { question: 'How candidates apply?', traditional: 'Resume + cover letter', hirel: 'Work profile & proofs', yes: true },
  { question: 'Curation process?', traditional: 'Algorithm keyword match', hirel: 'Manual, aggressive filter', yes: true },
  { question: 'Time to profiles?', traditional: 'Weeks of back-and-forth', hirel: '72 hours, curated', yes: true },
  { question: 'Who wins?', traditional: 'The credentialed few', hirel: 'Anyone who can build', yes: true },
]

export function Home() {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTalent, setSelectedTalent] = useState('')

  // 3D Tilt for Hero Card
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const handleRequestIntro = (name) => {
    setSelectedTalent(name)
    setModalOpen(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="mesh-bg"></div>
        <div className="hero-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        <div className="hero-grid"></div>
        <div className="hero-inner">
          <motion.div 
            className="hero-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-tag">
              <span className="hero-tag-dot"></span>
              Curated hiring · Proof of work · India
            </div>
            <h1>
              Stop hiring<br />
              from resumes.<br />
              Start from <span className="tx-gradient">proof.</span>
            </h1>
            <p className="hero-description">
              We surface <strong>high-agency builders</strong> for early-stage startups. 
              No resumes. No guesswork. Verified proof of work — curated manually.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate('/companies')}>
                Hire Talent →
              </button>
              <button className="btn-secondary" onClick={() => navigate('/apply')}>
                Join Talent Pool
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="hero-visual" style={{ perspective: "1000px" }}>
              <motion.div 
                className="hero-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d"
                }}
              >
                <div style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}>
                  <div className="hero-card-header">
                    <div className="hero-card-logo">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" rx="6" fill="#533afd"/>
                        <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span>hirelRecruit</span>
                    </div>
                    <span className="badge badge-open">Vetted</span>
                  </div>
                  <div className="hero-card-name">Aryan K.</div>
                  <div className="hero-card-role">FULL-STACK ENGINEER · SELF-TAUGHT</div>
                  <div className="hero-card-proof">
                    <div className="hero-card-proof-label">Work Proof #1</div>
                    <div className="hero-card-proof-title">Built real-time dashboard for logistics startup</div>
                    <div className="hero-card-proof-outcome">↓ 80% manual work · shipped solo in 3 weeks</div>
                  </div>
                  <div className="hero-card-skills">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">PostgreSQL</span>
                    <span className="skill-tag">AWS</span>
                  </div>
                  <button className="hero-card-btn" onClick={() => handleRequestIntro('Aryan K.')}>
                    Request Intro →
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Ticker />

      {/* How It Works Section */}
      <section className="section section-dark">
        <div className="wrapper-small">
          <motion.div 
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Three steps.<br />
            <span className="tx-gradient">No gatekeeping.</span>
          </motion.h2>
          <motion.div 
            className="steps"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {steps.map((step, idx) => (
              <div key={idx} className="step">
                <div className="step-number">{step.number}</div>
                <div className="step-title">{step.title}</div>
                <div className="step-description">{step.description}</div>
                <span className="step-tag">{step.tag}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Talent Section */}
      <section className="section">
        <div className="wrapper-small">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="section-label">Featured Builders</div>
              <h2 style={{ marginBottom: 0 }}>Talent that <span className="accent">ships.</span></h2>
            </div>
            <button className="btn-secondary btn-small" onClick={() => navigate('/talent')}>
              View All →
            </button>
          </motion.div>
          <motion.div 
            className="talent-card-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {featuredTalent.map((talent, idx) => (
              <TalentCard
                key={idx}
                {...talent}
                onRequestIntro={handleRequestIntro}
                onClick={() => navigate('/contact')}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section section-dark">
        <div className="wrapper-small">
          <motion.div 
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We are not a<br />
            <span className="tx-gradient">job board.</span>
          </motion.h2>
          <motion.p 
            className="section-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            A curated hiring layer. We filter aggressively so you don't have to.
          </motion.p>
          <motion.div 
            className="comparison-table"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="comparison-row comparison-header">
              <div className="comparison-cell">Question</div>
              <div className="comparison-cell">Traditional</div>
              <div className="comparison-cell highlight">hirelRecruit</div>
            </div>
            {comparisonData.map((row, idx) => (
              <div key={idx} className="comparison-row">
                <div className="comparison-cell comparison-question">{row.question}</div>
                <div className="comparison-cell no">{row.traditional}</div>
                <div className="comparison-cell yes">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px', flexShrink: 0 }}>
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {row.hirel}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <motion.div 
          className="wrapper-small home-cta" 
          style={{ textAlign: 'center', maxWidth: '800px' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label" style={{ textAlign: 'center', justifyContent: 'center' }}>Get Started</div>
          <h2>
            Hire people<br />
            who <span className="accent">build.</span>
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--tx)', marginBottom: '40px', lineHeight: '1.6' }}>
            Submit your role. Get curated profiles in 72 hours. No resume pile. No noise.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
            <button className="btn-primary" onClick={() => navigate('/companies')}>
              Hire Talent →
            </button>
            <button className="btn-secondary" onClick={() => navigate('/apply')}>
              Join Talent Pool
            </button>
          </div>
        </motion.div>
      </section>

      <IntroModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        talentName={selectedTalent}
      />
    </>
  )
}
