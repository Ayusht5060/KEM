import React from "react";
import { useNavigate } from 'react-router-dom';
import "./About.css";

const About = () => {
    const navigate = useNavigate();
  return (
    <div className="page-container">
      <h1 className="page-title">About Us</h1>
      <p className="page-subtitle">Our Vision, Our Team & Our Robot</p>

      <div className="about-sections">
        <div className="card">
          <h2>Our Vision</h2>
          <p>
            To revolutionize learning and interaction by building an AI-powered
            NLP Robot that enables natural communication and smarter exploration.
          </p>
        </div>

        <div className="card">
          <h2>Our Team</h2>
          <p>
            A group of passionate students & innovators from diverse domains,
            united by the vision of transforming human-robot interaction.
          </p>
        </div>

        <div className="card">
          <h2>Our Robot</h2>
          <p>
            The KEM is a voice-activated assistant with contextual Q&A,
            multilingual support, and smart actions to enhance productivity.
          </p>
        </div>
        <div className="back-btn-wrapper">
          <button className="back-btn" onClick={() => navigate("/")}>
            ⬅ Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
