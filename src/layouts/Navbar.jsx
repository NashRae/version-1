import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
import './Navbar.css'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const closeMenu = () => setMobileMenuOpen(false)

  const navItems = [
    { to: '/talent', label: 'Talent' },
    { to: '/companies', label: 'For Companies' },
    { to: '/mission', label: 'Mission' },
    { to: '/about', label: 'About' },
  ]

  return (
    <>
      <nav className="navbar">
        <Logo />
        
        <div className="nav-menu">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <button className="nav-btn-ghost" onClick={() => navigate('/contact')}>
            Contact
          </button>
          <button className="nav-btn-primary" onClick={() => navigate('/companies')}>
            Hire Talent
          </button>
          <button 
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}
            onClick={closeMenu}
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink to="/contact" className="mobile-link mobile-cta" onClick={closeMenu}>
          Contact
        </NavLink>
        <NavLink to="/apply" className="mobile-link mobile-cta-secondary" onClick={closeMenu}>
          Join Talent Pool
        </NavLink>
        <NavLink to="/companies" className="mobile-link mobile-cta-primary" onClick={closeMenu}>
          Hire Talent
        </NavLink>
      </div>
    </>
  )
}
