import { Link } from 'react-router-dom'

export function Logo({ className = '' }) {
  return (
    <Link to="/" className={`logo ${className}`}>
      <img src="/image.png" className='img-logo' alt="" />
      <span>hirel<b>Recruit</b></span>
    </Link>
  )
}
