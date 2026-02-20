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
      <Link href="/contact" className="nav-contact-btn">Contact</Link>
    </nav>
  )
}
