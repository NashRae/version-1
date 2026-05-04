import './Ticker.css'

const items = [
  { text: 'proof', highlight: 'resume' },
  { text: 'skill', highlight: 'degree' },
  { text: 'output', highlight: 'credentials' },
  { text: 'builders', highlight: 'applicants' },
  { text: 'signal', highlight: 'noise' },
  { text: 'execution', highlight: 'pedigree' },
]

export function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="ticker-item">
            {item.text} <b>›</b> {item.highlight}
          </span>
        ))}
      </div>
    </div>
  )
}
