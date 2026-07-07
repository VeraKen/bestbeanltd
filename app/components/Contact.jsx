// FILE: components/Contact.jsx
'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks — your message has been noted. This form needs a form-handling service (e.g. Formspree) connected before it can send live emails.');
  }

  return (
    <section className="contact section-pad" id="contact">
      <div className="wrap">
        <div className="kicker on-dark mono">Contact</div>
        <h2 className="section-title on-dark">Start with a consultation</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p>Tell us what you&apos;re working on — a classroom rollout, a ministry deployment, or an AI strategy for your organization — and we&apos;ll come back with a clear next step, not a sales pitch.</p>
            <div className="contact-detail"><span className="mono">Email</span><div className="value">hello@bestbeanltd.com</div></div>
            <div className="contact-detail"><span className="mono">Office</span><div className="value">Victoria Garden City, Lagos, Nigeria</div></div>
            <div className="contact-detail"><span className="mono">Response Time</span><div className="value">Within 2 business days</div></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div><label htmlFor="name">Name</label><input id="name" name="name" type="text" placeholder="Your full name" required /></div>
              <div><label htmlFor="org">Organization</label><input id="org" name="org" type="text" placeholder="Company, school, or agency" /></div>
            </div>
            <div className="form-row">
              <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="you@organization.com" required /></div>
              <div><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" placeholder="+234" /></div>
            </div>
            <div><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="What are you looking to solve?" required /></div>
            <div>
              <button type="submit" className="btn btn-primary" style={{ border: 'none', cursor: 'pointer' }}>Send Message</button>
              <p className="form-note" style={{ marginTop: '10px' }}>We respond within two business days.</p>
            </div>
            <div id="formStatus">{status}</div>
          </form>
        </div>
      </div>
    </section>
  );
}
