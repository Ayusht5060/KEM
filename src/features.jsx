import React, { use } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Features.css";

const Features = () => {
    const navigate = useNavigate();
  const featureList = [
    { title: "Personalized Learning:", desc: "Adapts responses to the child’s age, comprehension level, and preferred learning style." },
    { title: "Multi‑Modal Interaction:", desc: "Uses voice, visual cues, and gestures to improve understanding and engagement." },
    { title: "Consistent & Supportive: ", desc: "Offers patient, non‑judgmental assistance, building trust and confidence." },
    { title: "Stress-Free Learning: ", desc: "Learning: Reduces anxiety through friendly, interactive engagement and predictable routines" },
    { title: "Skill Development: ", desc: "Learning: Reduces anxiety through friendly, interactive engagement and predictable routines" },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Features</h1>
      <p className="page-subtitle">Explore what our robot can do!</p>

      <div className="features-grid">
        {featureList.map((f, index) => (
          <div key={index} className="card">
            <h2>{f.title}</h2>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="back-btn-wrapper">
          <button className="back-btn" onClick={() => navigate("/")}>
            ⬅ Back to Home
          </button>
        </div>
    </div>
  );
};

export default Features;
