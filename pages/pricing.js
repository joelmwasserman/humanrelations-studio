import Head from 'next/head'
import Nav from '../components/Nav'
import Link from 'next/link'

const rows = [
  { label: 'Price',    us: 'Flat fee of $75k',    them: '$125k – $500k+' },
  { label: 'Timeline', us: '2 weeks to brand',     them: '3–9 months or more' },
  { label: 'Capacity', us: '1 project at a time',  them: 'Many projects at a time' },
  { label: 'Team',     us: 'Senior designers only', them: 'Junior teams, high turnover' },
  { label: 'Revisions',us: 'Unlimited',             them: 'Billed per round' },
  { label: 'Result',   us: 'Timeless brand',        them: 'Trend-chasing output' },
]

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing | Human Relations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="site">
        <Nav />
        <div className="page-wrap">
          <div className="page-hero">
            <h1 className="page-h1">Top-tier branding<br />for one clear price</h1>
            <p className="page-sub">No guesswork. No haggling. Just impressive work, lightning fast, for just $75k.</p>
          </div>

          {/* Comparison table */}
          <div className="price-table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th></th>
                  <th className="price-col-us">Human Relations<span className="price-badge">$75k</span></th>
                  <th className="price-col-them">Traditional Agencies<span className="price-badge price-badge-gray">$125k+</span></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label}>
                    <td className="price-row-label">{r.label}</td>
                    <td className="price-row-us"><span className="price-check">✓</span> {r.us}</td>
                    <td className="price-row-them"><span className="price-cross">✕</span> {r.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* What's included */}
          <div className="includes">
            <h2 className="includes-h2">What's included</h2>
            <div className="includes-grid">
              {[
                'Two brand directions',
                'Logo system',
                'Color palette',
                'Typography system',
                'Brand guidelines',
                'Business card design',
                'Social media templates',
                'Brand voice & messaging',
                'Final files (all formats)',
                'Unlimited revisions',
              ].map((item) => (
                <div key={item} className="include-item">
                  <span className="include-check">→</span> {item}
                </div>
              ))}
            </div>
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
