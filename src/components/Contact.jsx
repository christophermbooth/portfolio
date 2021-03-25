import React, { useState, useEffect } from 'react';
import '../styles/Contact.scss';
import Axios from 'axios';
import Email from '../images/email.svg';
import GitHub from '../images/GitHub.svg';
import Linkedin from '../images/linkedin.svg';
import Location from '../images/location.svg';
import Phone from '../images/phone.svg';
import Twitter from '../images/twitter.svg';


const Contact = () => {

  useEffect(() => {
    document.title = "Contact || Christopher Booth"
    return () => {
      document.title = "Christopher Booth"
    }
  }, [])

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
    Axios.post('/email/send', { name, email, message })
      .then(res => {
        let { status } = res.data;
        if (status === "success") {
          resetForm();
          alert('Message sent');
        } else if (status === "fail") {
          alert('Message failed to send. Please try again');
        }
      })
      .catch(err => {
        console.warn('An error occurred sending the message:\n', err);
        alert('An error occurred sending the message. Check the console for details');
      })
  }

  return (
    <div className="content">
      <div className="container">
        <div id="details">
          <h1>Let's Chat!</h1>
          <p><Phone className="svg" />(504) 355-6898</p>
          <p><Email className="svg" />booth.christopherm@gmail.com</p>
          <p><Location className="svg" />New Orleans, La</p>
          <div id="online-presence">
            <h3>Find Me Online</h3>
            <a href="https://github.com/christophermbooth" alt="Chris's GitHub"><GitHub className="svg-logo" /></a>
            <a href="https://www.linkedin.com/in/christopherm-booth/" alt="Chris's LinkedIn"><Linkedin className="svg-logo" /></a>
            <a href="https://twitter.com/fairchildbooth" alt="Chris's Twitter"><Twitter className="svg-logo" /></a>
          </div>
        </div>
        <div className="form-container">
          <form id="contact-form" onSubmit={handleSubmit}>
            <input type="text" className="form-field" id="form-name" required={true} value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" />
            <br />
            <input type="email" className="form-field" id="form-email" required={true} value={email} onChange={e => setEmail(e.target.value)} placeholder="Your Email" />
            <br />
            <textarea id="form-message" required={true} value={message} onChange={e => setMessage(e.target.value)} placeholder="Your Message" />
            <br />
            <button className="btn" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
