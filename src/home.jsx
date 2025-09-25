import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState("👤");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("userProfile");
    if (storedData) {
      const userData = JSON.parse(storedData);
      if (userData.avatar) {
        setAvatar(userData.avatar);
      }
    }
  }, []);

  const goToUserManual = () => {
    navigate('/manual');
    setMenuOpen(false);
  };

  const goToAbout = () => {
    navigate('/about');
    setMenuOpen(false);
  };

  const goToContact = () => {
    navigate('/contact');
    setMenuOpen(false);
  };

  const goToFeatures = () => {
    navigate('/features');
    setMenuOpen(false);
  };

  const goToReviews = () => {
    navigate('/review'); 
    setMenuOpen(false);
  };

  const goToChatbot = () => {
    navigate('/chatbot'); 
    setMenuOpen(false);
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">KEM</div>

        {/* Hamburger menu */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li onClick={() => setMenuOpen(false)}>Home</li>
            <li onClick={goToAbout}>About</li>
            <li onClick={goToFeatures}>Features</li>
            <li onClick={goToContact}>Contact</li>
            <li onClick={goToUserManual}>User Manual</li>
            <li onClick={goToReviews}>Reviews & Questions</li>
          </ul>
          <div className="auth-buttons">
            <button
              className="login-btn"
              onClick={() => {
                navigate('/login');
                setMenuOpen(false);
              }}
            >
              Login
            </button>
            <button
              className="profile-icon"
              onClick={() => {
                navigate('/profile');
                setMenuOpen(false);
              }}
            >
              {avatar}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to KEM</h1>
        <p className="tagline">Smart Assistant for Learning, Exploration, and Innovation</p>
      </header>

      {/* Features Section */}
      <section className="hero-section">
        <div className="hero-glass">
          <h1>Empowering Conversations with AI</h1>
          <p className="tagline">
            KEM enables natural, intelligent, and human-like communication with machines.
          </p>
          <div className="hero-features">
            <div className="feature-card">
              <h2>Our Vision</h2>
              <p>
                To create intuitive interactions between humans and machines using language
                understanding.
              </p>
            </div>
            <div className="feature-card">
              <h2>Our Prototype</h2>
              <p>
                Voice-activated robot capable of contextual answers, smart actions, and real-time
                processing.
              </p>
            </div>
            <div className="feature-card">
              <h2>Key Functionalities</h2>
              <ul>
                <li>Voice Input / Output</li>
                <li>Contextual Q&A</li>
                <li>Multilingual Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <button className="chat-float-btn" onClick={goToChatbot}>
        💬 Start Chatting
      </button>
    </div>
  );
};

export default HomePage;
