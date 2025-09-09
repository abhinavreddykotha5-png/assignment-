import React from 'react'

const NAV_ITEMS = [
  { label: 'Work', dropdown: ['Projects', 'Case studies', 'Clients'] },
  { label: 'About', dropdown: ['Story', 'Team', 'Careers'] },
  { label: 'Services', dropdown: ['Design', 'Web', 'Brand'] },
  { label: 'Contact', dropdown: ['Say hello', 'Hire me'] }
]

export default function Navbar(){
  return (
    <header className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container nav-inner">
        <div className="logo">Leo9</div>

        <nav className="nav-links" aria-label="Primary">
          {NAV_ITEMS.map(item => (
            <div key={item.label} className="nav-item" tabIndex={0}>
              <div className="nav-link-box">
                <a className="nav-link" href={`#${item.label.toLowerCase()}`}>{item.label}</a>
              </div>

              {/* Dropdown / boxed panel */}
              <div className="nav-dropdown" role="menu" aria-hidden="true">
                <div className="dropdown-inner">
                  {item.dropdown.map(opt => (
                    <a key={opt} className="dropdown-link" href="#">{opt}</a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <a className="btn cta" href="#contact">Get in touch</a>
      </div>
    </header>
  )
}
