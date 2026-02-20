import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">Human Relations</Link>
      <div className="nav-links">
        <Link href="/work">Work</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <Link href="/contact" className="nav-cta">
        <div className="nav-cta-icon">
          <svg viewBox="0 0 24 24" fill="white" width="12" height="12"><circle cx="12" cy="12" r="4"/></svg>
        </div>
        <span>Reserve your spot &nbsp; 3 slots left</span>
      </Link>
    </nav>
  )
}
