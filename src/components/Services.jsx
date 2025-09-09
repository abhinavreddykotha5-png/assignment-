import React from 'react'

export default function Services(){
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Services</h2>
        <p className="muted">Design • Web Development • Branding</p>
        <div className="cards">
          <div className="card"><h3>Design</h3><p>UI, design systems, prototypes</p></div>
          <div className="card"><h3>Web</h3><p>Responsive and accessible websites</p></div>
          <div className="card"><h3>Brand</h3><p>Strategy and visual identity</p></div>
        </div>
      </div>
    </section>
  )
}
