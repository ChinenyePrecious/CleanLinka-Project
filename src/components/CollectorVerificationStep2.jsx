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


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

function CollectorVerificationStep2() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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

      <button 
        onClick={() => isFormValid && navigate('/verify-phone')} 
        className='step2-continue-btn' 
        disabled={!isFormValid}
      >
        Continue
      </button>
    </div>
  );
}

export default CollectorVerificationStep2;