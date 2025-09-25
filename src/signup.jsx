import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const SignupPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [avatar, setAvatar] = useState("😎");

  const handleSignup = (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = { fullName, username, email, phone, password, avatar };
    localStorage.setItem("userProfile", JSON.stringify(userData));
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <input type="text" name="fullName" required />
            <label>Full Name</label>
          </div>

          <div className="input-group">
            <input type="text" name="username" required />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input type="tel" name="phone" required />
            <label>Phone</label>
          </div>

          {/* Avatar Selection */}
          <div className="input-group">
            <label className="avatar-label">Select Avatar</label>
            <div className="selected-avatar">{avatar}</div>
            <select
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              className="avatar-select"
              required
            >
              <option value="😎">😎 Cool</option>
              <option value="💼">💼 Business</option>
              <option value="🧑‍💻">🧑‍💻 Coder</option>
              <option value="👩‍🚀">👩‍🚀 Astronaut</option>
              <option value="👨‍🎓">👨‍🎓 Student</option>
              <option value="🐱">🐱 Cat</option>
              <option value="🐶">🐶 Dog</option>
            </select>
          </div>

          {/* Password Field */}
          <div className="input-group password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
            />
            <label>Password</label>
            <span
              className="toggle-eye"
              onClick={() => setShowPassword(!showPassword)}
              role="button"
              tabIndex={0}
            >
              {/* {showPassword ? "🙈" : "👁️"} */}
            </span>
          </div>

          {/* Confirm Password Field */}
          <div className="input-group password-wrapper">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              required
            />
            <label>Confirm Password</label>
            <span
              className="toggle-eye"
              onClick={() => setShowConfirm(!showConfirm)}
              role="button"
              tabIndex={0}
            >
              {/* {showConfirm ? "🙈" : "👁️"} */}
            </span>
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>

          <p className="login-link">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")} className="link-text">Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
