import { useState } from 'react'
import { saveToSupabase } from '../lib/supabase'
import './Contact.css'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    const data = {
      name: document.getElementById('c_name')?.value || '',
      email: document.getElementById('c_email')?.value || '',
      message: document.querySelector('#contactForm textarea')?.value || '',
      submitted_at: new Date().toISOString()
    }

    try {
      await saveToSupabase('contact_messages', data)
      setIsSubmitted(true)
    } catch (e) {
      console.error('Submission error:', e)
      alert('Message failed: ' + (e.message || 'Unknown error'))
      setIsSubmitting(false)
    }
  }

  return (
    <div className="wrapper">
      <div className="label animate-up">Get In Touch</div>
      <h1 className="page-title animate-up" style={{ animationDelay: '0.1s' }}>
        Let's <span className="accent">talk.</span>
      </h1>
      <p className="page-description animate-up" style={{ animationDelay: '0.15s' }}>
        Startup looking to hire or builder looking to get found — reach out.
      </p>

      <div className="contact-grid">
        <div className="reveal">
          <a href="mailto:hirelrecruit@gmail.com" className="contact-link">
            <div className="contact-icon"></div>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value">hirelrecruit@gmail.com</div>
            </div>
          </a>
          <a 
            href="https://www.linkedin.com/company/hirelrecruit/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-icon"></div>
            <div>
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">hirelRecruit Company Page</div>
            </div>
          </a>
          <a 
            href="https://www.youtube.com/@hirelRecruit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-icon"></div>
            <div>
              <div className="contact-label">YouTube</div>
              <div className="contact-value">@hirelRecruit</div>
            </div>
          </a>
          <a 
            href="https://www.linkedin.com/in/nashrae16/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-icon"></div>
            <div>
              <div className="contact-label">Founder</div>
              <div className="contact-value">Nash Rae on LinkedIn</div>
            </div>
          </a>
        </div>

        <div className="reveal">
          {!isSubmitted ? (
            <div className="form-box" id="contactForm">
              <div className="form-group">
                <label htmlFor="c_name">Name</label>
                <input type="text" id="c_name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="c_email">Email</label>
                <input type="email" id="c_email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="What's on your mind?" style={{ minHeight: '120px' }}></textarea>
              </div>
              <button 
                className="btn-primary" 
                style={{ width: '100%', padding: '14px', fontSize: '15px' }}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>
            </div>
          ) : (
            <div className="form-box" style={{ textAlign: 'center', padding: '60px 20px' }}>
              <h3 style={{ fontFamily: '"Syne", sans-serif', fontSize: '28px', fontWeight: 800, letterSpacing: '-1px', marginBottom: '10px' }}>
                Message sent.
              </h3>
              <p style={{ color: 'var(--t2)' }}>We'll get back to you shortly.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
