import Head from 'next/head'
import Nav from '../../components/Nav'
import Link from 'next/link'
import projects from '../../data/projects.json'

export async function getStaticPaths() {
  return {
    paths: projects.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const project = projects.find(p => p.slug === params.slug)
  const idx = projects.indexOf(project)
  const next = projects[idx + 1] || projects[0]
  return { props: { project, next } }
}

export default function ProjectPage({ project, next }) {
  return (
    <>
      <Head>
        <title>{project.name} | Human Relations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="site">
        <Nav />
        <div className="proj-wrap">
          {/* Header */}
          <div className="proj-header">
            <div className="proj-meta">
              <span className="proj-cat">{project.category}</span>
              <span className="proj-year">{project.year}</span>
            </div>
            <h1 className="proj-h1">{project.name}</h1>
            <p className="proj-tagline">{project.tagline}</p>
          </div>

          {/* Hero image placeholder */}
          <div className="proj-hero-img" style={{ background: project.bg }}>
            <span className="proj-hero-label" style={{ color: project.dark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)' }}>
              Project images coming soon
            </span>
          </div>

          {/* Body */}
          <div className="proj-body">
            <div className="proj-desc">
              <p>{project.description}</p>
            </div>
            <div className="proj-deliverables">
              <h3 className="proj-del-title">Deliverables</h3>
              {project.deliverables.map(d => (
                <div key={d} className="proj-del-item">→ {d}</div>
              ))}
            </div>
          </div>

          {/* Next project */}
          <div className="proj-next">
            <span className="proj-next-label">Next project</span>
            <Link href={'/work/' + next.slug} className="proj-next-link" style={{ background: next.bg }}>
              <span className="proj-next-name" style={{ color: next.dark ? 'rgba(0,0,0,0.8)' : 'white' }}>
                {next.name} →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
