// import React from 'react'

// const Footer = () => {
//   return (
//     <footer>
//         Designed And Developed By CodeWithZeeshu
//     </footer>
//   )
// }

// export default Footer
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">GymConnect</h2>
        <p className="footer-tagline">Your Fitness Journey Starts Here!</p>
        <div className="footer-links">
          <a href="#about" className="footer-link">About Us</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#contact" className="footer-link">Contact</a>
          <a href="#faq" className="footer-link">FAQs</a>
        </div>
        <div className="footer-socials">
          <a href="https://www.facebook.com" className="social-link" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com" className="social-link" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com" className="social-link" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <p className="footer-copyright">
        © 2024 GymConnect. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
