import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './Splashscreen';
import HomePage from './home';
import LoginPage from './login';
import SignupPage from './signup';
import UserManual from './user';
import ProfilePage from './profile';
import Chatbot from './chatbot';
import About from './about';
import Contact from './contact';
import Features from './features';
import Reviews from './review';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/manual" element={<UserManual />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/review" element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export default App;