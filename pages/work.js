import Head from 'next/head'
import Nav from '../components/Nav'
import Link from 'next/link'

const projects = [
  { name: 'Lovable',   bg: 'linear-gradient(135deg, #d040b8 0%, #5040d8 100%)' },
  { name: 'Craft',     bg: '#b8dde8' },
  { name: 'Loti',      bg: 'linear-gradient(120deg, #8898a8 0%, #607080 100%)' },
  { name: 'Gist',      bg: '#111' },
  { name: 'Heron',     bg: 'linear-gradient(135deg, #a0c4ff 0%, #6080c0 100%)' },
  { name: 'Paper',     bg: '#e8e0d4' },
  { name: 'Titan',     bg: 'linear-gradient(135deg, #ff9060 0%, #c04020 100%)' },
  { name: 'Frame',     bg: '#2a2a2a' },
  { name: 'Rebel',     bg: '#c8f040' },
  { name: 'Stellar',   bg: 'linear-gradient(135deg, #c0a0ff 0%, #8060c0 100%)' },
]

export default function Work() {
  return (
    <>
      <Head>
        <title>Work | Human Relations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="site">
        <Nav />
        <div className="page-wrap">
          <div className="page-hero">
            <h1 className="page-h1">Sprints done in<br />just two weeks</h1>
            <p className="page-sub">Zero to full brand, every time.</p>
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.name} className="project-card" style={{ background: p.bg }}>
                <span className={`project-tag${p.bg === '#c8f040' || p.bg === '#e8e0d4' || p.bg === '#b8dde8' ? ' project-tag-dark' : ''}`}>
                  → {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="cta" id="contact">
          <div className="cta-pill">
            <div className="cta-bolt">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <span className="cta-pill-txt">Sprint past the competition</span>
          </div>
          <p className="cta-sub">Zero to full brand in two weeks. Let's get to work.</p>
          <Link href="/#contact" className="cta-btn">Reserve your spot</Link>
        </section>
      </div>
    </>
  )
}
