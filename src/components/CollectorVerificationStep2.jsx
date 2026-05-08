/* import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

function CollectorVerificationStep2() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleContinue = () => {
    if (password === confirmPassword) {
      navigate('/verify-phone');
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="container">
      <h2>Collector Verification</h2>
      <div className="progress-container">
        <div className="progress-bar"></div>
        <div className="progress-bar active"></div>
      </div>
      
      <input
        type="password"
        placeholder="Password (min 8 characters)"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        minLength="8"
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        minLength="8"
        required
      />
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
}

export default CollectorVerificationStep2; */


/* import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"; */
/* 
function CollectorVerificationStep2() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
   const [error, setError] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) return setError("Passwords do not match!");
    if (password.length < 8) return setError("Password must be at least 8 characters.");
    
    const step1Data = JSON.parse(sessionStorage.getItem("collectorStep1"));
    const response = await fetch("https://4543-102-0-6-206.ngrok-free.app/api/auth/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...step1Data, password })
    });
    
    if (response.ok) {
        sessionStorage.removeItem("collectorStep1");
        navigate('/verify-phone');
    } else {
        setError("Registration failed.Please check your details.");
    }
  };


  const isFormValid = password.length >= 8 && password === confirmPassword;

  return (
    <div className="step2-container">
      <div className="step2-header">
        <IoArrowBack className="step2-back-icon" onClick={() => navigate(-1)} />
        <h2>Collector Verification</h2>
      </div>

      <div className="step2-progress-wrapper">
        <div className="step2-bar"></div>
        <div className="step2-bar step2-bar-active"></div>
      </div>

      <div className="step2-form-content">
        <div className="step2-input-group">
          <label>Password</label>
          <div className="step2-password-field">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <span className="step2-eye" onClick={() => setShowPass(!showPass)}>
              {showPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          </div>
          <p className="step2-helper">Password must be at least 8 characters</p>
        </div>

        <div className="step2-input-group">
          <label>Confirm password</label>
          <div className="step2-password-field">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <span className="step2-eye" onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          </div>
          <p className="step2-helper">Password must be at least 8 characters</p>
        </div>
      </div>
      {error && <p className="step2-error">{error}</p>}
      <button 
        onClick={() => handleRegister()} 
        className='step2-continue-btn' 
        
      >
        Continue
      </button>
    </div>
  );
}

export default CollectorVerificationStep2; */


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

function CollectorVerificationStep2() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    setError("");
    
    // 1. Basic validation
    if (password !== confirmPassword) return setError("Passwords do not match!");
    if (password.length < 8) return setError("Password must be at least 8 characters.");

    // 2. Check if data from Step 1 exists
    const rawData = sessionStorage.getItem("collectorStep1");
    if (!rawData) return setError("Session data missing. Please go back.");
    
    // 3. Simulate API call
    setIsLoading(true);
    
    setTimeout(() => {
      // Simulate success
      console.log("Registration data saved:", { ...JSON.parse(rawData), password });
      
      sessionStorage.removeItem("collectorStep1");
      setIsLoading(false);
      navigate('/verify-phone'); // Go to the next step
    }, 1500); // 1.5 second delay
  };

  return (
    <div className="step2-container">
      <div className="step2-header">
        <IoArrowBack className="step2-back-icon" onClick={() => navigate(-1)} />
        <h2>Collector Verification</h2>
      </div>

      <div className="step2-form-content">
        <div className="step2-input-group">
          <label>Password</label>
          <div className="step2-password-field">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter password"
              onChange={(e) => {setPassword(e.target.value); setError("");}}
              value={password}
            />
            <span className="step2-eye" onClick={() => setShowPass(!showPass)}>
              {showPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          </div>
        </div>

        <div className="step2-input-group">
          <label>Confirm password</label>
          <div className="step2-password-field">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              onChange={(e) => {setConfirmPassword(e.target.value); setError("");}}
              value={confirmPassword}
            />
            <span className="step2-eye" onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          </div>
        </div>
      </div>

      {error && <p className="step2-error" style={{ color: 'red' }}>{error}</p>}
      
      <button 
        onClick={handleRegister} 
        disabled={password.length < 8 || isLoading}
        className='step2-continue-btn' 
      >
        {isLoading ? "Simulating registration..." : "Continue"}
      </button>
    </div>
  );
}

export default CollectorVerificationStep2;