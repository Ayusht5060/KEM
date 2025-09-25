import React from 'react';
import { useNavigate } from 'react-router-dom';
import './user.css';

const UserManual = () => {
  const navigate = useNavigate();

  return (
    <div className="manual-container">
      <h1 className="manual-title">🤖 Robot User Manual</h1>

      <div className="manual-sections">
        <div className="manual-card fade-in">
          <h2>1. Getting Started</h2>
          <p>Unpack the robot, ensure the battery is charged, and press the power button to begin operation.</p>
        </div>

        <div className="manual-card fade-in delay-1">
          <h2>2. Controls</h2>
          <p>Use the remote or mobile app to control the robot's movements, camera, and sensors.</p>
        </div>

        <div className="manual-card fade-in delay-2">
          <h2>3. Safety Instructions</h2>
          <p>Do not operate near water. Avoid obstacles and keep the robot away from edges or stairs.</p>
        </div>

        <div className="manual-card fade-in delay-3">
          <h2>4. Troubleshooting</h2>
          <p>If the robot is unresponsive, restart it or reset via the pinhole reset button on the back.</p>
        </div>

        <div className="manual-card fade-in delay-4">
          <h2>5. Maintenance</h2>
          <p>Clean the robot using a dry cloth. Charge it regularly and update firmware through the app.</p>
        </div>
      </div>

      <div className="manual-button-container fade-in delay-5">
        <button
          className="back-btn"
          onClick={() => navigate('/')}
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
};

export default UserManual;
