import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import './TalentCard.css'

export function TalentCard({ 
  name, 
  role, 
  initials, 
  status, 
  achievements, 
  skills, 
  onRequestIntro,
  onClick
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const statusClass = status === 'open' ? 'badge-open' : 'badge-soon'
  const statusLabel = status === 'open' ? 'Open to Work' : 'Available Soon'

  const handleClick = (e) => {
    e.stopPropagation()
    if (onRequestIntro) onRequestIntro(name)
  }

  return (
    <motion.div 
      className="talent-card" 
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div 
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="talent-card-header">
          <div className="avatar">{initials}</div>
          <span className={`badge ${statusClass}`}>{statusLabel}</span>
        </div>
        <div className="talent-card-name">{name}</div>
        <div className="talent-card-role">{role}</div>
        <ul className="talent-card-achievements">
          {achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
        <div className="talent-card-skills">
          {skills.map((skill, idx) => (
            <span key={idx} className="skill-tag">{skill}</span>
          ))}
        </div>
        <button className="talent-card-btn" onClick={handleClick}>
          Request Intro →
        </button>
      </div>
    </motion.div>
  )
}
