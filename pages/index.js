import Head from 'next/head'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Human Relations Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="site">
        <Nav />
        <section className="hero">
          <h1 className="hero-h1">Blazing fast brand<br />sprints for startups</h1>
          <div className="hero-stage">
            <div className="hero-main-placeholder">Hero Image Placeholder</div>
            <div className="hero-float hero-float-a">Placeholder</div>
            <div className="hero-float hero-float-b">Placeholder</div>
            <div className="hero-float hero-float-c">Placeholder</div>
          </div>
          <div className="hero-tags">
            <span className="htag">→ LOOK 10X BIGGER</span>
            <span className="htag">→ GET TO MARKET FASTER</span>
            <span className="htag">→ STAND OUT FROM THE CROWD</span>
          </div>
        </section>

        <section className="about">
          <DotGrid />
          <div>
            <p className="about-p">
              At Primary, we believe exceptional branding is possible without the wait.
              So we created Brand Sprints: timeless branding in just two weeks.
            </p>
            <div className="section-rule" />
          </div>
        </section>

        <section className="work-preview">
          <div className="wgrid">
            <div className="wc wc-placeholder"><span className="wc-tag">→ COMING SOON</span></div>
            <div className="wc wc-placeholder"><span className="wc-tag">→ COMING SOON</span></div>
            <div className="wc wc-placeholder"><span className="wc-tag">→ COMING SOON</span></div>
            <div className="wc wc-placeholder"><span className="wc-tag">→ COMING SOON</span></div>
          </div>
        </section>

        <section className="benefits">
          <DotGrid />
          <div className="ben-body">
            <h2 className="ben-h2">On your marks. Get set. Go-to-market. Quickly launch your company past the competition.</h2>
            <div className="them-you">
              <div className="ty-row">
                <span className="ty-lbl">THEM</span>
                <div className="ty-track"><div className="ty-fill" style={{ width: '25%', background: '#ccc' }} /></div>
              </div>
              <div className="ty-row">
                <span className="ty-lbl ty-you">YOU</span>
                <div className="ty-track"><div className="ty-fill" style={{ width: '90%', background: '#c8f040' }} /></div>
              </div>
            </div>
            <div className="ben-list">
              <div className="ben-row"><span>Look 10x bigger</span><span>Earn customer trust</span></div>
              <div className="ben-row"><span>Get to market faster</span><span>Stand out from the crowd</span></div>
              <div className="ben-row"><span>Raise a round</span><span>Save capital</span></div>
            </div>
          </div>
        </section>

        <section className="testimonial">
          <blockquote className="test-q">
            "From understanding our ambitions, to crafting the direction, to executing with speed, Primary nailed it from the beginning. We are in love with all of it."
          </blockquote>
          <p className="test-name">Elliot Rapaport</p>
          <p className="test-role">CEO, Birches Health</p>
        </section>

        <section className="journey">
          <DotGrid />
          <div className="jrn-body">
            <h2 className="jrn-h2">Your journey is short because<br />ours was long.</h2>
            <p className="jrn-p">
              Our speed isn't driven by luck. It's fueled by momentum and deep experience creating launch-ready brands.
            </p>
            <div className="logo-row">
              <span className="logo-pill">Logo Placeholder</span>
              <span className="logo-pill">Logo Placeholder</span>
              <span className="logo-pill">Logo Placeholder</span>
              <span className="logo-pill">Logo Placeholder</span>
              <span className="logo-pill">Logo Placeholder</span>
              <span className="logo-pill">Logo Placeholder</span>
            </div>
            <div className="tl">
              <span className="tl-yr">2004</span>
              <div className="tl-line" />
              <span className="tl-yr">Now</span>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden>
          <div className="mq-track">
            {Array(2).fill(['LOOK 10X BIGGER', 'GET TO MARKET FASTER', 'STAND OUT', 'EARN TRUST']).flat().map((t, i) => (
              <span key={i} className="mq-item">{t} <span className="mq-arr">→</span></span>
            ))}
          </div>
        </div>

        <section className="cta">
          <div className="cta-pill">
            <div className="cta-bolt">⚡</div>
            <span className="cta-pill-txt">Sprint past the competition</span>
          </div>
        </section>
      </div>
    </>
  )
}

function DotGrid() {
  return (
    <div className="dotgrid" aria-hidden>
      {Array(9).fill(0).map((_, i) => <span key={i} className="dot" />)}
    </div>
  )
}
