import Head from 'next/head'
import Nav from '../components/Nav'
import Link from 'next/link'

const projects = [
  { name: 'Lovable', slug: 'lovable', color: '#e8d5f5' },
  { name: 'Craft', slug: 'craft', color: '#d5e8f5' },
  { name: 'Loti', slug: 'loti', color: '#f5e8d5' },
  { name: 'Gist', slug: 'gist', color: '#d5f5e8' },
  { name: 'Heron', slug: 'heron', color: '#c8d8e8' },
  { name: 'Paper', slug: 'paper', color: '#f0f0e8' },
  { name: 'Titan', slug: 'titan', color: '#e8e8f0' },
  { name: 'Frame', slug: 'frame', color: '#f5d5d5' },
  { name: 'Alan', slug: 'alan', color: '#d5f5f5' },
  { name: 'Vagus', slug: 'vagus', color: '#f5f5d5' },
  { name: 'Incentiv', slug: 'incentiv', color: '#e8d5e8' },
  { name: 'Rebel', slug: 'rebel', color: '#d5e8d5' },
  { name: 'Longe', slug: 'longe', color: '#f5ddd5' },
  { name: 'Stellar', slug: 'stellar', color: '#d5ddf5' },
  { name: 'SliceSpace', slug: 'slicespace', color: '#f5e8e8' },
]

export default function Work() {
  return (
    <>
      <Head>
        <title>Work | Human Relations. Strategic brand partner</title>
        <meta name="description" content="Brand sprints done in just two weeks." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page work-page">
        <Nav />

        <div className="page-hero">
          <h1 className="page-hero-title fade-up">Sprints done in<br />just two weeks</h1>
        </div>

        <div className="work-projects">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className="project-card fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div
                className="project-card-image"
                style={{ background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}aa 100%)` }}
              >
                {project.name}
              </div>
              <div className="project-card-info">
                <span className="project-name">{project.name}</span>
                <span className="project-arrow">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <section className="cta-footer" id="contact">
          <div className="cta-footer-left">
            <h2 className="cta-footer-headline">Sprint past the competition</h2>
            <p className="cta-footer-sub">Zero to full brand in two weeks. Let's get to work.</p>
          </div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="cta-form"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="cta-form-field">
              <input type="text" name="name" placeholder="Your name" required />
            </div>
            <div className="cta-form-field">
              <input type="email" name="email" placeholder="Email address" required />
            </div>
            <div className="cta-form-field">
              <input type="text" name="company" placeholder="Company / startup name" />
            </div>
            <button type="submit" className="cta-form-submit">Send →</button>
          </form>
        </section>
      </div>
    </>
  )
}
