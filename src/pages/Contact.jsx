import React, { useState } from 'react'
import '../style/Contact.css'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="container" style={{ padding: '50px 0 50px 0' }}>
      <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
      <br />
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-label" htmlFor="name">
          Name:
        </label>
        <input
          id="name"
          className="contact-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="contact-label" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          className="contact-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="contact-label" htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          className="contact-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button className="contact-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
