import React, { useState } from 'react';
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
