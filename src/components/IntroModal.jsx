import { motion, AnimatePresence } from 'framer-motion'
import './IntroModal.css'

export function IntroModal({ isOpen, onClose, talentName }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay open" 
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="modal-box"
            initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.95, rotateX: -10 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            style={{ perspective: "1000px" }}
          >
            <button className="modal-close" onClick={onClose}>×</button>
            <h3>Request Intro</h3>
            <p>
              {talentName 
                ? `Interested in ${talentName}? Reach out directly and mention their name:` 
                : 'Interested in connecting with this talent? Reach out directly:'}
            </p>
            
            <a href="mailto:hirelrecruit@gmail.com" className="modal-contact-link">
              <div className="modal-icon">✉</div>
              <div>
                <b>hirelrecruit@gmail.com</b>
                <span>Email us to request an intro</span>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/company/hirelrecruit/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="modal-contact-link"
            >
              <div className="modal-icon">in</div>
              <div>
                <b>LinkedIn</b>
                <span>Message us on LinkedIn</span>
              </div>
            </a>
            
            <p className="modal-note">We typically respond within 24 hours.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
