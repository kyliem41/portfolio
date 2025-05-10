import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import '../assets/contact.css';

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !message) {
      setError('Please fill out all fields');
      return;
    }
    
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    setSubmitted(true);
    setError('');
    
    // Reset form after submission
    setTimeout(() => {
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      
      <div className="contact-content">
        <p className="contact-intro">
          Please contact me directly at <a href="mailto:your-email@example.com" className="email-link">your-email@example.com</a> or through this form.
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
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-input"
              rows={6}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button">
            Submit <FaPaperPlane className="button-icon" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;