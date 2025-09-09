import React from 'react'

export default function Hero(){
  return (
    <section className="hero" id="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Crafting <span className="accent">digital experiences</span> that connect brands to people</h1>
          <p className="lead">We design and build websites and products with focus on aesthetics and interactions.</p>
          <div className="actions">
            <a className="btn primary" href="#work">View Work</a>
            <a className="btn" href="#contact">Let's Talk</a>
          </div>
        </div>
        <div className="hero-graphic">
          <div className="mockup">Mockup</div>
        </div>
      </div>
    </section>
  )
}
