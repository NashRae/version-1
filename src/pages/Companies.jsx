import { useState } from 'react'
import { motion } from 'framer-motion'
import { saveToSupabase } from '../lib/supabase'
import './Companies.css'

export function Companies() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    const data = {
      company: document.getElementById('r_company')?.value || '',
      email: document.getElementById('r_email')?.value || '',
      role_title: document.getElementById('r_role')?.value || '',
      budget: document.getElementById('r_budget')?.value || '',
      skills: document.getElementById('r_skills')?.value || '',
      timeline: document.getElementById('r_timeline')?.value || '',
      work_type: document.getElementById('r_worktype')?.value || '',
      description: document.querySelector('#roleForm textarea')?.value || '',
      submitted_at: new Date().toISOString(),
      status: 'new'
    }

    try {
      await saveToSupabase('role_submissions', data)
      setIsSubmitted(true)
    } catch (e) {
      console.error('Submission error:', e)
      alert('Submission failed: ' + (e.message || 'Unknown error'))
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <motion.div 
      className="wrapper"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="label" variants={itemVariants}>For Early-Stage Startups</motion.div>
      <motion.h1 className="page-title" variants={itemVariants} style={{ maxWidth: '800px' }}>
        The misalignment<br />
        and stress<br />
        <span className="accent">is over.</span>
      </motion.h1>
      <motion.p className="page-description" variants={itemVariants}>
        Stop filtering by degree. We do the filtering — aggressively — and send you only builders who can do the job.
      </motion.p>

      <motion.div className="target-audience" variants={containerVariants}>
        <motion.div className="audience-card" variants={itemVariants}>
          <div className="audience-title">Early-stage startups</div>
          <div className="audience-text">Seed to Series A. Moving fast. Need operators who figure things out, not just follow instructions.</div>
        </motion.div>
        <motion.div className="audience-card" variants={itemVariants}>
          <div className="audience-title">Founders who hire on merit</div>
          <div className="audience-text">You don't care where someone studied. You care what they shipped. We were built for you.</div>
        </motion.div>
        <motion.div className="audience-card" variants={itemVariants}>
          <div className="audience-title">Teams tired of noise</div>
          <div className="audience-text">100 applications, 3 worth reading. We send you 3–5 curated profiles. That's it.</div>
        </motion.div>
      </motion.div>

      <motion.div className="label" variants={itemVariants}>Submit a Role</motion.div>
      <motion.h2 variants={itemVariants}>
        Tell us who<br />
        you need to <span className="accent">hire.</span>
      </motion.h2>

      <motion.div 
        style={{ maxWidth: '600px', marginBottom: '100px' }} 
        variants={itemVariants}
      >
        {!isSubmitted ? (
          <div className="form-box" id="roleForm">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="r_company">Company Name</label>
                <input type="text" id="r_company" placeholder="Your startup" />
              </div>
              <div className="form-group">
                <label htmlFor="r_email">Email</label>
                <input type="email" id="r_email" placeholder="founder@company.com" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="r_role">Role Title</label>
                <input type="text" id="r_role" placeholder="e.g. Full-Stack Engineer" />
              </div>
              <div className="form-group">
                <label htmlFor="r_budget">Budget</label>
                <input type="text" id="r_budget" placeholder="e.g. Rs.8-12L/yr" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="r_skills">Required Skills</label>
              <input type="text" id="r_skills" placeholder="e.g. React, Node.js, PostgreSQL" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="r_timeline">Timeline</label>
                <select id="r_timeline">
                  <option>ASAP</option>
                  <option>2 weeks</option>
                  <option>1 month</option>
                  <option>Flexible</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="r_worktype">Work Type</label>
                <select id="r_worktype">
                  <option>Remote</option>
                  <option>Onsite</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea placeholder="What you're building, who you need, what good looks like..."></textarea>
            </div>
            <motion.button 
              className="btn-primary" 
              style={{ width: '100%', padding: '16px', fontSize: '15px', fontWeight: 600 }}
              onClick={handleSubmit}
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Role →'}
            </motion.button>
          </div>
        ) : (
          <motion.div 
            className="form-box" 
            style={{ textAlign: 'center', padding: '60px 20px' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h3 style={{ fontFamily: '"Syne", sans-serif', fontSize: '28px', fontWeight: 800, letterSpacing: '-1px', marginBottom: '10px', color: 'var(--tx-heading)' }}>
              Role submitted.
            </h3>
            <p style={{ color: 'var(--tx)' }}>We'll send curated profiles within 72 hours.</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
