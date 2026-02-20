import Head from 'next/head'
import Nav from '../components/Nav'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'form-name': 'contact-full', ...form }).toString(),
    })
    setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>Contact | Human Relations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="site">
        <Nav />
        <div className="contact-wrap">
          <div className="contact-left">
            <h1 className="contact-h1">Let's sprint<br />together.</h1>
            <p className="contact-p">3 spots left this quarter. We work with one founder at a time — tell us about your vision.</p>
            <div className="contact-details">
              <p>joel@humanrelations.studio</p>
              <p>New York / Remote</p>
            </div>
          </div>

          <div className="contact-right">
            {submitted ? (
              <div className="contact-thanks">
                <h2>You're in the queue.</h2>
                <p>We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form
                name="contact-full"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact-full" />
                <input type="hidden" name="bot-field" />

                <div className="cf-field">
                  <label className="cf-label">Your name</label>
                  <input className="cf-input" type="text" name="name" required
                    value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                </div>
                <div className="cf-field">
                  <label className="cf-label">Email</label>
                  <input className="cf-input" type="email" name="email" required
                    value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                </div>
                <div className="cf-field">
                  <label className="cf-label">Company / Startup</label>
                  <input className="cf-input" type="text" name="company"
                    value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
                </div>
                <div className="cf-field">
                  <label className="cf-label">Tell us about your project</label>
                  <textarea className="cf-input cf-textarea" name="message" rows="5" required
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                </div>
                <button type="submit" className="cf-btn">Send it →</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
