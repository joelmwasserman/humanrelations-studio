import Head from 'next/head'
import Nav from '../components/Nav'

const deliverables = [
  'Logo',
  'Collateral',
  'Type & Color',
  'Photos & Illustration',
  'Social',
  'Mockups',
  'Web mockups',
]

const comparison = [
  { label: 'Price', us: 'Flat fee of $75k', them: '$125k – $500k+' },
  { label: 'Timeline', us: '2 weeks to brand', them: '3–9 months or more' },
  { label: 'Capacity', us: '1 project at a time', them: 'Many projects at a time' },
  { label: 'Team', us: 'Senior designers', them: 'Junior designers' },
]

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing | Human Relations. Strategic brand partner</title>
        <meta name="description" content="Top-tier branding for one clear price." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page pricing-page">
        <Nav />

        <div className="page-hero">
          <h1 className="page-hero-title fade-up">
            Top-tier branding<br />for one clear price
          </h1>
        </div>

        {/* Hero image placeholder */}
        <div className="pricing-hero-image">
          [Project showcase image]
        </div>

        {/* Value props */}
        <section style={{ padding: '80px 5%' }}>
          <ul className="benefits-list" style={{ maxWidth: 640 }}>
            {['Two brand options', 'Tons of detailed deliverables', 'One unbeatable price'].map((item) => (
              <li key={item}>
                {item} <span>→</span>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 32, fontSize: 18, color: '#444', maxWidth: 600 }}>
            No guesswork. No haggling. Just impressive work, lightning fast, for just $75k.
          </p>
        </section>

        {/* Comparison */}
        <section className="pricing-comparison">
          <div className="pricing-grid">
            {/* Headers */}
            <div className="pricing-col-header">
              <div style={{ height: 60 }} />
            </div>
            <div className="pricing-col-header">
              <div className="pricing-col-label">Human Relations Studio</div>
              <div className="pricing-col-price">$75k</div>
            </div>
            <div className="pricing-col-header">
              <div className="pricing-col-label">Traditional Agencies</div>
              <div className="pricing-col-price" style={{ color: '#999' }}>$125k+</div>
            </div>

            {/* Rows */}
            {comparison.map((row) => (
              <div className="pricing-row" key={row.label}>
                <div className="pricing-cell label">{row.label}</div>
                <div className="pricing-cell good">✓ {row.us}</div>
                <div className="pricing-cell bad">✗ {row.them}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="pricing-testimonial">
          <p className="pricing-testimonial-quote">
            "Why work with a big agency when we will get you from zero to hero so much faster and cheaper—without sacrificing quality. This is the studio to watch."
          </p>
          <p className="testimonial-author">
            <strong>Matthew Smith</strong>, Founder, Bunsen
          </p>
        </section>

        {/* Deliverables */}
        <section className="pricing-deliverables">
          <h3 className="pricing-deliverables-title">$75k goes a long way. All this plus much more:</h3>
          <div className="deliverables-grid">
            {deliverables.map((item) => (
              <div key={item} className="deliverable-item">
                <span>{item}</span>
                <span className="deliverable-arrow">→</span>
              </div>
            ))}
          </div>
        </section>

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
