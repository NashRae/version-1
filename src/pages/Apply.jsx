import { useState } from 'react'
import { saveToSupabase } from '../lib/supabase'
import './Apply.css'

export function Apply() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    const data = {
      name: document.getElementById('a_name')?.value || '',
      role_focus: document.getElementById('a_role')?.value || '',
      achievement_1: document.getElementById('a_ach1')?.value || '',
      achievement_2: document.getElementById('a_ach2')?.value || '',
      achievement_3: document.getElementById('a_ach3')?.value || '',
      portfolio: document.getElementById('a_portfolio')?.value || '',
      resume_link: document.getElementById('a_resume')?.value || '',
      video_link: document.getElementById('a_video')?.value || '',
      availability: document.getElementById('a_avail')?.value || '',
      work_preference: document.getElementById('a_workpref')?.value || '',
      submitted_at: new Date().toISOString(),
      status: 'applied'
    }

    try {
      await saveToSupabase('candidate_applications', data)
      setIsSubmitted(true)
    } catch (e) {
      console.error('Submission error:', e)
      alert('Submission failed: ' + (e.message || 'Unknown error'))
      setIsSubmitting(false)
    }
  }

  return (
    <div className="wrapper">
      <div className="label animate-up">Join the Community</div>
      <h1 className="page-title animate-up" style={{ animationDelay: '0.1s' }}>
        Your work speaks<br />
        <span className="accent">louder</span> than<br />
        your background.
      </h1>
      <p className="page-description animate-up" style={{ animationDelay: '0.15s' }}>
        Apply to join the hirelRecruit talent community. We vet every applicant manually.
      </p>

      <div style={{ maxWidth: '580px' }} className="reveal">
        {!isSubmitted ? (
          <div className="form-box" id="applyForm">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="a_name">Full Name</label>
                <input type="text" id="a_name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="a_role">Role Focus</label>
                <input type="text" id="a_role" placeholder="e.g. Full-Stack Engineer" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="a_ach1">Achievement 1 — use metrics</label>
              <input type="text" id="a_ach1" placeholder="What did you build? What was the outcome?" />
            </div>
            <div className="form-group">
              <label htmlFor="a_ach2">Achievement 2</label>
              <input type="text" id="a_ach2" placeholder="Another proof of work" />
            </div>
            <div className="form-group">
              <label htmlFor="a_ach3">Achievement 3</label>
              <input type="text" id="a_ach3" placeholder="Third proof" />
            </div>
            <div className="form-group">
              <label htmlFor="a_portfolio">Portfolio / GitHub</label>
              <input type="text" id="a_portfolio" placeholder="github.com/you, yourportfolio.com..." />
            </div>
            <div className="form-group">
              <label htmlFor="a_resume">Resume (optional)</label>
              <input type="text" id="a_resume" placeholder="Link to resume" />
            </div>
            <div className="form-group">
              <label htmlFor="a_video">Intro Video (optional)</label>
              <input type="text" id="a_video" placeholder="Loom link — 2-3 min" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="a_avail">Availability</label>
                <select id="a_avail">
                  <option>Open Now</option>
                  <option>2 weeks</option>
                  <option>1 month</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="a_workpref">Work Preference</label>
                <select id="a_workpref">
                  <option>Remote</option>
                  <option>Onsite</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>
            <button 
              className="btn-primary" 
              style={{ width: '100%', padding: '14px', fontSize: '15px' }}
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Apply to Join →'}
            </button>
            <p className="form-note">
              We review every application manually. You'll hear back within 5 business days.
            </p>
          </div>
        ) : (
          <div className="form-box" style={{ textAlign: 'center', padding: '60px 20px' }}>
            <h3 style={{ fontFamily: '"Syne", sans-serif', fontSize: '28px', fontWeight: 800, letterSpacing: '-1px', marginBottom: '10px' }}>
              Application received.
            </h3>
            <p style={{ color: 'var(--t2)' }}>We review manually. Hear back within 5 business days.</p>
          </div>
        )}
      </div>
    </div>
  )
}
