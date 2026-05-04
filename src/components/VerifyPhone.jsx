import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function VerifyPhone() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(59);
  const inputs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => setTimer(prev => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (val, index) => {
    if (isNaN(val)) return;
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);
    if (val && index < 5) inputs.current[index + 1].focus();
  };

  const handleVerify = async () => {
    const res = await fetch("https://4543-102-0-6-206.ngrok-free.app/api/auth/verify-otp/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ otp: otp.join("") })
    });
    if (res.ok) navigate('/thank-you');
    else alert("Invalid OTP");
  };

  return (
    <div className="verify-phone-container">
      <h2>Verify Phone</h2>
      <div className="otp-input-wrapper">
        {otp.map((digit, index) => (
          <input key={index} ref={el => inputs.current[index] = el} className="otp-box"
                 maxLength="1" value={digit} onChange={(e) => handleChange(e.target.value, index)} />
        ))}
      </div>
      <p>Please wait 00:{timer < 10 ? `0${timer}` : timer} seconds to resend.</p>
      <button className="continue-btn" onClick={handleVerify}>Verify</button>
    </div>
  );
}
export default VerifyPhone;