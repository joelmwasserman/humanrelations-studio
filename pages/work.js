import Head from 'next/head'
import Nav from '../components/Nav'
import Link from 'next/link'
import projects from '../data/projects.json'

export default function Work() {
  return (
    <>
      <Head>
        <title>Human Relations Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="site">
        <Nav />
        <div className="page-wrap">
          <h1 className="page-h1">Sprints done in<br />just two weeks</h1>
          <div className="projects-grid">
            {projects.map((p) => (
              <Link key={p.slug} href={'/work/' + p.slug} className="project-card project-card-placeholder">
                <div className="project-card-info">
                  <span className="project-card-name">
                    {p.name}
                  </span>
                  <span className="project-card-tag project-card-tag-placeholder">
                    Placeholder
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
