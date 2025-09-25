import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Contact.css";

const Contact = () => {
    const navigate = useNavigate();
  return (
    <div className="page-container">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-subtitle">We’d love to hear from you!</p>

      <div className="contact-details">
        <p><strong>Email:</strong> hunarbatra1414@gmail.com</p>
        <p><strong>Phone:</strong> +91 8572859545</p>
        <p><strong>Address:</strong> new delhi</p>
      </div>
      <div className="back-btn-wrapper">
          <button className="back-btn" onClick={() => navigate("/")}>
            ⬅ Back to Home
          </button>
        </div>
    </div>
  );
};

export default Contact;
