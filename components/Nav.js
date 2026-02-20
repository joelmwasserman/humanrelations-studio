import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Nav() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">Human Relations</Link>

        <div className="nav-links">
          <Link href="/work" className={router.pathname === '/work' ? 'active' : ''}>Work</Link>
          <Link href="/pricing" className={router.pathname === '/pricing' ? 'active' : ''}>Pricing</Link>
        </div>

        <Link href="#contact" className="nav-cta">
          <div className="nav-cta-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <div className="nav-cta-text">
            <span className="nav-cta-title">Reserve your spot</span>
            <span className="nav-cta-sub">3 slots left for this quarter</span>
          </div>
        </Link>

        <div className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/work" onClick={() => setMenuOpen(false)}>Work</Link>
        <Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
        <Link href="#contact" onClick={() => setMenuOpen(false)}>Reserve your spot</Link>
      </div>
    </>
  )
}
