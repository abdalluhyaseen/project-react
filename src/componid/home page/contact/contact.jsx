import React, { useState } from "react";
import "./contact.css";
import Image from "../img/download.jpeg";
const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="Contact" className="contact-us-form">
      <div className="form-container">
        <div className="form-card">
          <h2 className="form-title">Contact Us</h2>

          {success && (
            <div className="success-message">
              Thank you! Your message has been sent.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="button" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <img src={Image} alt="a" />
    </div>
  );
};

export default ContactUsForm;
