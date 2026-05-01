import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Onboarding1() {
  const navigate = useNavigate();

  return (
    <div className="container onboarding1">
      <div className="onboarding1-icon">
        <div className="icon-wrapper">
          <FaRegTrashAlt size={55} className="icon"/>
        </div>

        <h2 className="onboarding1-h2">Waste Management,<br /> Re-imagined.</h2>
      </div>
      <div className="onboarding1-content">
        <div className="onboarding1-text">
          <h1>Schedule Pickups Instantly</h1>
          <p>Request a waste pickup from your home or office in minutes.</p>
        </div>
        <div className="btn-group">
          <button onClick={() => navigate("/onboarding2")} className="onboarding1-btn">Get Started <FaAngleRight  /></button>
        <p className="skip" onClick={() => navigate("/signup")}>
          Skip
        </p>
        </div>
        
      </div>
    </div>
  );
}

export default Onboarding1;
