import React from "react";

import { useNavigate } from "react-router-dom";

function Onboarding3() {
  const navigate = useNavigate();

  return (
    <div className="container onboarding3">
      <div className="onboarding3-icon">
        <div className="icon-wrapper"></div>
            
        <h2 className="onboarding3-h2">Recycle.Earn</h2>
      </div>
      <div className="onboarding3-content">
        <div className="onboarding3-text">
          <h1>Join The Recycling Evolution.</h1>
          <p>
            Transform your community by properly separating and recycling waste.
            Every bag counts towards a cleaner, greener future.
          </p>
        </div>
        <div className="btn-group">
          <button
            onClick={() => navigate("/signup")}
            className="onboarding3-btn"
          >
            {" "}
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding3;
