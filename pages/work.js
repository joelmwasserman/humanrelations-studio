import Head from 'next/head'
import Nav from '../components/Nav'
import Link from 'next/link'
import projects from '../data/projects.json'

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
          <h1 className="page-h1">Sprints done in<br />just two weeks</h1>
          <div className="projects-grid">
            {projects.map((p) => (
              <Link key={p.slug} href={'/work/' + p.slug} className="project-card" style={{ background: p.bg }}>
                <div className="project-card-info">
                  <span className="project-card-name" style={{ color: p.dark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }}>
                    {p.name}
                  </span>
                  <span className="project-card-tag" style={{
                    background: p.dark ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.15)',
                    color: p.dark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.85)'
                  }}>
                    View project
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <section className="cta">
          <Link href="/contact" className="cta-pill">
            <div className="cta-bolt">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <span className="cta-pill-txt">Sprint past the competition</span>
          </Link>
        </section>
      </div>
    </>
  )
}
