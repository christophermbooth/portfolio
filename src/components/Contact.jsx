import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const Contact = () => {
  
  //states for form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //resets form upon submission
  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  }

  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
    //AXIOS CALL TO BACKEND EMAIL HANDLER
    //axios.post('/email/send', {name, email, message})
      //then if status === success, display success feedback on screen, resetForm()
      //else display error feedback on screen
      //catch erorrs, log to console, display error feedback to screen
  }
  
  return (
    <div>
      <div id="details">
        <h3>Let's Chat!</h3>
        <p>Phone: (504) 355-6898</p>
        <p>Email: booth.christopherm@gmail.com</p>
        <p>Location: New Orleans, La</p>
        <div id="online-presence">
          <h4>Find Me Online</h4>
          <p>GitHub SVG</p>
          <p>Twitter SVG</p>
          <p>Instagram SVG</p>
        </div>
      </div>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input type="text" className="form-field" className="form-field-name" required={true} value={name} onChange={ e => setName(e.target.value)} placeholder="Your Name" />
        <input type="email" className="form-field" className="form-field-email" required={true} value={email} onChange={ e => setEmail(e.target.value)} placeholder="Your Email" />
        <textarea className="form-field" className="form-field-message" required={true} value={message} onChange={ e => setMessage(e.target.value)} placeholder="Your Message" />
        <button className="form-button" type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
