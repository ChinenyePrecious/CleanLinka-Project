import React from "react";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="container  thankyou-container">
      <div className="circles">
        <div className="green-circle">
          <div className="orange-circle">
            <img src="/src/assets/streamline-pixelinterface-essential-waiting-hourglass-loading.png" alt="waiting-hour" />
          </div>
        </div>
      </div>
      <div className="thankyou-text">
        <h2>Thank You!</h2>
        <p>
          Review. Our team typically verifies and approve accounts within 24–48
          hours.
        </p>
      </div>

      <div className="what-next">
        <h1>What happens next?</h1>
        

          <p>☑️ Admins reviews your credentials.</p>
          <p>☑️ Background check complete</p>
          <p>☑️ You recieve an approval SMS</p>
          <p>☑️ You can start Accepting jobs!</p>
        
      </div>
      <div className="home-btn-container">
 <button className="home-btn" onClick={() => navigate("/")}>Go to Home</button>
      </div>
    
     
    </div>
  );
}

export default ThankYou;
