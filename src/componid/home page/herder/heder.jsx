// src/Header.js
import React from "react";
import "../About us/About.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html" className="active">
              About Us
            </a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
