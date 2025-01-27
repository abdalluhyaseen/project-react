import React from "react";
import { FaLinkedin, FaGithub, FaReact } from "react-icons/fa";
import "./footer.css";
export default function footer() {
  return (
    <div className="footer">
      <footer>
        <div className="social-links">
          <div className="social-icons">
            <a href="https://www.linkedin.com" style={{ color: "#0072b1" }}>
              <FaLinkedin />
            </a>
            <a href="https://www.github.com" style={{ color: "#333" }}>
              <FaGithub />
            </a>
            <a href="https://reactjs.org" style={{ color: "#61dafb" }}>
              <FaReact />
            </a>
          </div>
        </div>
          <p className="top">&copy; 2025 SmartSchool. All rights reserved.</p>
      </footer>
    </div>
  );
}
