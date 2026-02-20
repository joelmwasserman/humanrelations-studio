import Head from 'next/head'
import Nav from '../components/Nav'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(e.target)).toString(),
    })
    setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>Human Relations. Strategic brand partner</title>
        <meta name="description" content="Blazzzzzing fast brand sprints for startup." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="site">
        <Nav />

        {/* 1. HERO: headline, 2x2 mosaic image, 3 staggered tags */}
        <section className="hero">
          <h1 className="hero-h1">Farting fast brand<br />sprints for startup</h1>
          <div className="hero-video">
            <div className="hero-video-inner">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.15)"/>
                <polygon points="20,16 36,24 20,32" fill="white"/>
              </svg>
              <span className="hero-video-label">Your reel here</span>
            </div>
          </div>
          <div className="hero-tags">
            <span className="htag">→ LOOK 10X BIGGER</span>
            <span className="htag">→ GET TO MARKET FASTER</span>
            <span className="htag">→ STAND OUT FROM THE CROWD</span>
          </div>
        </section>

        {/* 2. ABOUT: dot grid + big copy */}
        <section className="about">
          <DotGrid />
          <p className="about-p">
            At Human Relations, we believe exceptional branding is possible without the wait.
            So we created Brand Sprints: timeless branding in just two weeks.
          </p>
        </section>

        {/* 3. WORK PREVIEW: slider bar + 2x2 grid */}
        <section className="work-preview">
          <div className="slider-bar">
            <span className="sl-label">Kickoff</span>
            <div className="sl-track"><div className="sl-knob" /></div>
            <span className="sl-label">Full Brand</span>
          </div>
          <div className="wgrid">
            <div className="wc wc-lovable"><span className="wc-tag">→ LOVABLE</span></div>
            <div className="wc wc-craft"><span className="wc-tag">→ CRAFT</span></div>
            <div className="wc wc-loti"><span className="wc-tag">→ LOTI</span></div>
            <div className="wc wc-gist"><span className="wc-tag wc-tag-inv">→ GIST</span></div>
          </div>
        </section>

        {/* 4. BENEFITS: dot grid + headline + THEM/YOU + 2-col list */}
        <section className="benefits">
          <DotGrid />
          <div className="ben-body">
            <h2 className="ben-h2">On your marks. Get set. Go-to-market. Quickly launch your company past the competition.</h2>
            <div className="them-you">
              <div className="ty-row">
                <span className="ty-lbl">THEM</span>
                <div className="ty-track ty-them"><div className="ty-fill" style={{width:'18%',background:'#ccc'}} /></div>
              </div>
              <div className="ty-row">
                <span className="ty-lbl ty-you">YOU</span>
                <div className="ty-track ty-you-track"><div className="ty-fill" style={{width:'88%',background:'#c8f040'}} /></div>
              </div>
            </div>
            <div className="ben-list">
              {[['Look 10x bigger','Earn customer trust'],['Get to market faster','Stand out from the crowd'],['Raise a round','Save capital']].map(([l,r],i) => (
                <div key={i} className="ben-row"><span>{l}</span><span>{r}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TESTIMONIAL: full-width black */}
        <section className="testimonial">
          <blockquote className="test-q">
            "From understanding our ambitions, to crafting the direction, to executing with speed, Human Relations nailed it from the beginning. We are in love with all of it."
          </blockquote>
          <p className="test-name">Elliott Rapaport</p>
          <p className="test-role">CEO, Birches Health</p>
        </section>

        {/* 6. JOURNEY: dot grid + headline + body + logos + timeline */}
        <section className="journey">
          <DotGrid />
          <div className="jrn-body">
            <h2 className="jrn-h2">Your journey is short because<br />ours was long.</h2>
            <p className="jrn-p">Our speed isn't driven by luck. It's fueled by the momentum of two decades at Pentagram and Milton Glaser, building brands for household names. We know the secret recipe to create exceptional, stand out brands.</p>
            <div className="logo-row">
              {['Shop Alpha','Redesign Health','Apple','ESPN','Asana','Nike'].map(c => <span key={c} className="logo-co">{c}</span>)}
            </div>
            <div className="tl">
              <span className="tl-yr">2004</span>
              <div className="tl-line" />
              <span className="tl-yr">Now</span>
            </div>
          </div>
        </section>

        {/* 7. LIME MARQUEE */}
        <div className="marquee" aria-hidden>
          <div className="mq-track">
            {Array(3).fill(['SPRINT PAST THE CROWD','SAVE CAPITAL','LOOK 10X BIGGER','GET TO MARKET FASTER','RAISE A ROUND','EARN CUSTOMER TRUST','STAND OUT FROM THE CROWD']).flat().map((t,i) => (
              <span key={i} className="mq-item">{t} <span className="mq-arr">→</span></span>
            ))}
          </div>
        </div>

        {/* 8. DARK CTA: centred pill + email form */}
        <section className="cta" id="contact">
          <div className="cta-pill">
            <div className="cta-bolt">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <span className="cta-pill-txt">Sprint past the competition</span>
          </div>
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="cta-form" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            {submitted ? (
              <p className="cta-thanks">Thanks! We'll be in touch soon.</p>
            ) : (
              <div className="cta-row">
                <input type="email" name="email" placeholder="Zero to full brand in two weeks. Let's get to work." required value={email} onChange={e => setEmail(e.target.value)} />
                <button type="submit">Save</button>
              </div>
            )}
          </form>
        </section>
      </div>
    </>
  )
}

function DotGrid() {
  return (
    <div className="dotgrid" aria-hidden>
      {Array(9).fill(0).map((_,i) => <span key={i} className="dot" />)}
    </div>
  )
}
