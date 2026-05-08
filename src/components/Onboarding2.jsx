import React from "react";
import { useNavigate } from "react-router-dom";
import handShake from "../assets/emojionehandshake.png";

function Onboarding2() {
  const navigate = useNavigate();

  return (
    <div className="container onboarding2">
      <div className="onboarding2-icon">
        <div className="icon-wrapper">
         <img src={handShake} alt="handshake" width={80}/>
        </div>

        <h2 className="onboarding2-h2">
           Verified.Trusted.Accountable
        </h2>
      </div>
      <div className="onboarding2-content">
        <div className="onboarding2-text">
          <h1>Trusted Collectors Only</h1>
          <p>
            Every waste collector on CleanLinka is vetted and supervised by a
            Zonal Admin. Only verified collectors earn your trust badge.
          </p>
        </div>
        <div className="btn-group">
          <button
            onClick={() => navigate("/onboarding3")}
            className="onboarding2-btn">
            Continue
          </button>
          <p className="skip" onClick={() => navigate("/signup")}>
            Skip
          </p>
        </div>
      </div>
    </div>
  );
}

export default Onboarding2;
