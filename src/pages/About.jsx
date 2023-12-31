import React from 'react'
import '../style/About.css'
const About = () => {
  return (
    <div className="about-page">
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to Favorr website! We are a platform that connects freelancers
        and clients from all over the world, providing a marketplace for digital
        services. This website is done for educational purposes, and it
        deliberately clones the famous freelance services marketplace Fiverr.
      </p>

      <h2 className="about-subtitle">Our Mission</h2>
      <p>
        Our mission is to empower talented individuals to showcase their skills
        and earn a living by offering their services online. We believe in the
        power of remote work and the limitless possibilities it offers.
      </p>

      <h2 className="about-subtitle">How It Works</h2>
      <p>
        For freelancers, our platform provides an opportunity to create a
        profile, list their services, and market themselves to a global
        audience. They can set their own prices, define their service offerings,
        and collaborate with clients on projects.
      </p>
      <p>
        For clients, our platform offers a diverse selection of skilled
        freelancers across various fields. They can browse through profiles,
        compare services, and hire the perfect talent for their projects.
        Clients can communicate with freelancers, provide project requirements,
        and manage payments securely through our platform.
      </p>

      <h2 className="about-subtitle">Why Choose Us</h2>
      <ul className="about-list">
        <li>Wide range of talented freelancers</li>
        <li>Secure and easy-to-use platform</li>
        <li>Transparent pricing and payment system</li>
        <li>Efficient communication and collaboration tools</li>
        <li>Quality assurance and customer support</li>
      </ul>
    </div>
    </div>
  )
}

export default About
