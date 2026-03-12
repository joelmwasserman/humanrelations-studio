import Head from 'next/head'

import Nav from '../components/Nav'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Human Relations Studio</title>
        <meta name="description" content="Interested in a brand sprint? Get in touch!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="site">
        <Nav />
        <div className="page-wrap">
          <h1 className="page-h1">Contact</h1>
          <p className="page-sub">We are preparing this page. Please check back soon.</p>
          <div className="proj-hero-img proj-hero-placeholder" style={{ marginTop: '24px' }}>
            <span className="proj-hero-label">Contact Page Placeholder</span>
          </div>
        </div>
      </div>
    </>
  )
}
