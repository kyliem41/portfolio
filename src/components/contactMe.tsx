import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import '../assets/contact.css';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !message) {
      setError('Please fill out all fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Send form data to Formcarry
    fetch("https://formcarry.com/s/iW3irdaN5ls", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(response => {
      setIsSubmitting(false);
      
      if (response.code === 200) {
        // Success
        setSubmitted(true);
        setError('');
        
        // Reset form after submission
        setTimeout(() => {
          setName('');
          setEmail('');
          setMessage('');
          setSubmitted(false);
        }, 3000);
      }
      else if(response.code === 422){
        // Field validation failed
        setError(response.message);
      }
      else {
        // Other error from formcarry
        setError(response.message);
      }
    })
    .catch(error => {
      // Request related error
      setIsSubmitting(false);
      setError(error.message ? error.message : error);
    });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      
      <div className="contact-content">
        <p className="contact-intro">
          Please contact me directly at <a href="mailto:kylierhodus@gmail.com" className="email-link">kylierhodus@gmail.com</a> or through this form.
        </p>
        
        {submitted && (
          <div className="success-message">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              maxLength={50}
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <textarea maxLength={3500}
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-input"
              rows={6}
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'} <FaPaperPlane className="button-icon" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;