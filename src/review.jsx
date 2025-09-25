import React, { use, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./review.css";

const Reviews = () => {
    const navigate = useNavigate();
  const [review, setReview] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review:", review, "Question:", question);
    alert("✅ Thank you for your feedback!");
    setReview("");
    setQuestion("");
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Reviews & Unanswered Questions</h1>
      <p className="page-subtitle">
        Share your feedback and questions that our chatbot/robot couldn’t answer.
      </p>

      <form className="form-container" onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>
        <textarea
          placeholder="Enter unanswered question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="cta-btn">Submit</button>
      </form>
      <div className="back-btn-wrapper">
          <button className="back-btn" onClick={() => navigate("/")}>
            ⬅ Back to Home
          </button>
        </div>
    </div>
    
  );
};

export default Reviews;
