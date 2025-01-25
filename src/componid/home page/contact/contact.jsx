import React, { useState } from "react";
import "./contact.css";

const ContactSection = () => {
  const [theme, setTheme] = useState("theme1"); 

  const handleThemeChange = (themeName) => {
    setTheme(themeName);
  };

  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="theme-buttons">
        <button
          className="theme-button"
          onClick={() => handleThemeChange("theme1")}
        >
          Theme 1
        </button>
        <button
          className="theme-button"
          onClick={() => handleThemeChange("theme2")}
        >
          Theme 2
        </button>
        <button
          className="theme-button"
          onClick={() => handleThemeChange("theme3")}
        >
          Theme 3
        </button>
      </div>
      <form className={`contact-form ${theme}`}>
        <input type="text" placeholder="Your Name" className="contact-input" />
        <input
          type="email"
          placeholder="Your Email"
          className="contact-input"
        />
        <textarea
          placeholder="Your Message"
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
