import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    const storedData = localStorage.getItem("userProfile");

    if (storedData) {
      const user = JSON.parse(storedData);

      if (email === user.email && password === user.password) {
        setErrorMessage('');
        navigate('/'); // success login
      } else {
        setErrorMessage('Invalid email or password');
      }
    } else {
      setErrorMessage('No user found. Please sign up first.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="login-btn">Login</button>
          <p className="signup-link">
            Don’t have an account?{' '}
            <span onClick={() => navigate('/signup')} className="link-text">Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
