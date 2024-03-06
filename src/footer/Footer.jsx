import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <hr></hr>
      <section className="footer-content">
        <div className="footer-section">
          <h6 className="footer-heading">
            <span className="footer-icon">🔍</span>
            <strong>Infobytes Technosys</strong>
          </h6>
          <p>We Believe in Transparency!</p>
        </div>

        <div className="footer-section"></div>

        <div className="footer-section"></div>

        <div className="footer-section">
          <h6 className="footer-heading">
            <span className="footer-icon">✉️</span>
            <strong>Contact Us</strong>
          </h6>
          <p>infobytestechnosys@gmail.com</p>
        </div>
      </section>

      <div className="footer-bottom">
        <p className="copyright-text">
          © 2024 Copyright:
          <a className="footer-link" href="/">
            InfobytesTechnosys.in
          </a>
        </p>
      </div>
    </div>
  );
}
