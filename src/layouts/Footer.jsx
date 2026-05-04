import { Link } from 'react-router-dom'
import { Logo } from '../components/Logo'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo />
            <p className="footer-tagline">
              Curated hiring for early-stage startups. Proof over paper.
            </p>
          </div>
          
          <div className="footer-column">
            <h5>Platform</h5>
            <Link to="/talent">Talent</Link>
            <Link to="/companies">For Companies</Link>
            <Link to="/apply">Join Talent Pool</Link>
          </div>
          
          <div className="footer-column">
            <h5>Company</h5>
            <Link to="/mission">Mission</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          
          <div className="footer-column">
            <h5>Connect</h5>
            <a href="mailto:hirelrecruit@gmail.com">Email</a>
            <a href="https://www.linkedin.com/company/hirelrecruit/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.youtube.com/@hirelRecruit" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span className="footer-copyright">© 2025 hirelRecruit. All rights reserved.</span>
          <div className="footer-social">
            <a href="mailto:hirelrecruit@gmail.com">hirelrecruit@gmail.com</a>
            <a href="https://www.linkedin.com/company/hirelrecruit/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.youtube.com/@hirelRecruit" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://www.linkedin.com/in/nashrae16/" target="_blank" rel="noopener noreferrer" className="footer-founder">Nash Rae ↗</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
