import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { TalentCard } from '../components/TalentCard'
import { IntroModal } from '../components/IntroModal'
import './Talent.css'

const allTalent = [
  {
    name: 'Aryan K.',
    role: 'Full-Stack Engineer',
    initials: 'A',
    status: 'open',
    achievements: [
      'Built logistics dashboard — ↓80% manual work',
      '3 SaaS MVPs shipped solo in under 6 weeks',
      '400+ GitHub stars on open source project',
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
      'Built full design system from scratch',
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
      'Prod ML pipeline deployed, 99.2% uptime',
    ],
    skills: ['Python', 'PyTorch', 'MLOps'],
  },
  {
    name: 'Priya N.',
    role: 'Growth Marketer',
    initials: 'P',
    status: 'open',
    achievements: [
      'Scaled D2C brand from 0 to Rs.40L MRR',
      'Cut CAC by 60% via funnel optimization',
      '8x organic traffic growth in 5 months',
    ],
    skills: ['SEO', 'Paid Ads', 'Analytics'],
  },
  {
    name: 'Karan D.',
    role: 'Backend Engineer',
    initials: 'K',
    status: 'open',
    achievements: [
      'Real-time event pipeline for 500k DAU',
      'API p99 latency: 800ms down to 40ms',
      'Multi-tenant SaaS infra architected solo',
    ],
    skills: ['Go', 'AWS', 'Kafka'],
  },
  {
    name: 'Meera T.',
    role: 'Content Strategist',
    initials: 'M',
    status: 'soon',
    achievements: [
      'Cold traffic conversion at 18%',
      'Content system generating 50k monthly visits',
      'Ghostwrote for 3 funded founders on LinkedIn',
    ],
    skills: ['Copywriting', 'SEO', 'Brand'],
  },
]

export function Talent() {
  const navigate = useNavigate()
  const [roleFilter, setRoleFilter] = useState('All Roles')
  const [statusFilter, setStatusFilter] = useState('All Availability')
  const [searchQuery, setSearchQuery] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTalent, setSelectedTalent] = useState('')

  const handleRequestIntro = (name) => {
    setSelectedTalent(name)
    setModalOpen(true)
  }

  const filteredTalent = allTalent.filter(talent => {
    const matchesRole = roleFilter === 'All Roles' || talent.role === roleFilter
    const matchesStatus = statusFilter === 'All Availability' || 
      (statusFilter === 'Open to Work' && talent.status === 'open') ||
      (statusFilter === 'Available Soon' && talent.status === 'soon')
    const matchesSearch = searchQuery === '' || 
      talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesRole && matchesStatus && matchesSearch
  })

  return (
    <div className="wrapper talent-page-wrapper">
      <div className="mesh-bg"></div>
      <motion.div 
        className="section-label"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Vetted Builders
      </motion.div>
      <motion.h1 
        className="page-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        High-agency talent.<br />
        <span className="accent">Proven by work.</span>
      </motion.h1>
      <motion.p 
        className="page-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        Every builder here is vetted manually. Request an intro — we handle the rest.
      </motion.p>

      <motion.div 
        className="filters"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <select 
          value={roleFilter} 
          onChange={(e) => setRoleFilter(e.target.value)}
          className="filter-select"
        >
          <option>All Roles</option>
          <option>Full-Stack Engineer</option>
          <option>Product Designer</option>
          <option>ML Engineer</option>
          <option>Growth Marketer</option>
          <option>Backend Engineer</option>
        </select>
        <select 
          value={statusFilter} 
          onChange={(e) => setStatusFilter(e.target.value)}
          className="filter-select"
        >
          <option>All Availability</option>
          <option>Open to Work</option>
          <option>Available Soon</option>
        </select>
        <input 
          type="text" 
          placeholder="Search skill or name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="filter-input"
        />
      </motion.div>

      <motion.div 
        className="talent-card-grid"
        layout
      >
        <AnimatePresence mode='popLayout'>
          {filteredTalent.map((talent, idx) => (
            <motion.div
              key={talent.name}
              layout
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ 
                duration: 0.4, 
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <TalentCard
                {...talent}
                onRequestIntro={handleRequestIntro}
                onClick={() => navigate('/contact')}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <IntroModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        talentName={selectedTalent}
      />
    </div>
  )
}
