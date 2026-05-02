/* import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VerifyPhone() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    // Replace with actual verification logic
    if (otp.length === 6) {
      navigate('/thank-you');
    } else {
      alert("Please enter a valid OTP.");
    }
  };

  return (
    <div className="container">
      <h2>Verify Phone</h2>
      <p>Enter the OTP sent to your phone:</p>
      <input
        type="text"
        placeholder="OTP"
        onChange={(e) => setOtp(e.target.value)}
        value={otp}
        maxLength="6"
      />
      <button onClick={handleVerify}>Verify</button>
    </div>
  );
}

export default VerifyPhone;

 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function VerifyPhone() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleVerify = async () => {
    const code = otp.join("");

    if (code.length !== 6) {
      alert("Enter complete OTP");
      return;
    }

    // POST to backend
    const res = await fetch("http://localhost:5000/api/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ otp: code })
    });

    const data = await res.json();

    if (res.ok) {
      navigate('/thank-you');
    } else {
      alert(data.message || "Invalid OTP");
    }
  };

  return (
    <div className="container">
      <h2 className="verify-title">Verify Phone</h2>
      <p className="verify-text">Enter the OTP sent to your phone</p>

      <div className="otp-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            className="otp-input"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
          />
        ))}
      </div>

      <button className="verify-btn" onClick={handleVerify}>
        Verify
      </button>

      <button className="resend-btn">
        Resend Code
      </button>
    </div>
  );
}

export default VerifyPhone;