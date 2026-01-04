import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
       © {new Date().getFullYear()} Sonam Rathore
      </p>

      <div className="footer-links">
        <a href="https://github.com/SONAM750" target="_blank">GitHub</a>
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
