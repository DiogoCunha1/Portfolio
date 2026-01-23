import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const ref = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error from field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Valid form - here you can send data to a server
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Clear form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" ref={ref} className="contact fade-in">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind? Let's work together!
        </p>
        
        <div className="contact-content">
          <div className="contact-info glass">
            <h3 className="contact-info-title">Let's Talk!</h3>
            <p className="contact-info-text">
              I'm always open to new projects and opportunities.
              Get in touch with me!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-item-content">
                  <h4>Email</h4>
                  <a href="mailto:diogortcunha@gmail.com">diogortcunha@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-item-content">
                  <h4>Location</h4>
                  <p>Remote / Europe</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form glass" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Your name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="Your email"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                placeholder="Your message"
                rows="5"
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            
            {submitted && (
              <div className="success-message">
                Message sent successfully! Thank you for reaching out.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
