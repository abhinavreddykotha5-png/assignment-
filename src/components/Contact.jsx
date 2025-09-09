import React, {useState} from 'react'

export default function Contact(){
  const [status,setStatus] = useState('')
  const [form,setForm] = useState({name:'', email:'', message:''})

  function onChange(e){ setForm({...form, [e.target.name]: e.target.value}) }

  function onSubmit(e){
    e.preventDefault()
    // In this frontend-only version we do not send data to a server.
    setStatus('Message ready to send (no backend in this version).')
    setForm({name:'', email:'', message:''})
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <p className="muted">This version is frontend-only. The form shows how inputs are collected.</p>
        <form onSubmit={onSubmit} className="contact-form">
          <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required />
          <input name="email" value={form.email} onChange={onChange} placeholder="Your email" required />
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows="5" required />
          <button className="btn primary" type="submit">Send Message</button>
          <div className="status">{status}</div>
        </form>
      </div>
    </section>
  )
}
