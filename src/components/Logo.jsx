import { Link } from 'react-router-dom'

export function Logo({ className = '' }) {
  return (
    <Link to="/" className={`logo ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#0066FF"/>
        <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <span>hirel<b>Recruit</b></span>
    </Link>
  )
}
