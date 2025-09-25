import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("userProfile");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  if (!userData) {
    return <div className="profile-container">No profile data found.</div>;
  }

  const isImage = userData.avatar && userData.avatar.startsWith("http");

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              {isImage ? (
                <img src={userData.avatar} alt="Avatar" className="avatar-img" />
              ) : (
                <span className="avatar-emoji">{userData.avatar || '👤'}</span>
              )}
            </div>
            <h2>{userData.fullName}</h2>
            <p>@{userData.username}</p>
          </div>
          <div className="profile-details">
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone:</strong> {userData.phone}</p>
            <p><strong>Password:</strong> {userData.password}</p>
          </div>
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

export default ProfilePage;
