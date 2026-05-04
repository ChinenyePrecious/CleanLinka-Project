import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack} from "react-icons/io5";

function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError,setPasswordError]=useState('');
  const [phoneError,setPhoneError]=useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
  let isValid = true;

  // Reset errors first
  setPasswordError("");
  setPhoneError("");


  if (!phone.trim()) {
    setPhoneError("Phone number is required.");
    isValid = false;
  }
  
  if (!password.trim()) {
    setPasswordError("Password is required.");
    isValid = false;
  }

  
  if (isValid) {
    // Add your API call/authentication logic here
    navigate('/dashboard');
  }
};

  return (
    <div className="container login-container">
      <div className="header-row">
              <IoArrowBack
                className="back-icon"
                onClick={() => navigate("/signup")}
              />
              <h2>Login</h2>
            </div>
      
      <p>Welcome back</p>
      
        <div className="input-group">
        <label>Phone Number</label>
        <div className="phone-contact">
          <div className="country-code">+234</div>
          <input
          type='number'
            name="phone"
            placeholder="Phone Number"
             onChange={(e) => setPhone(e.target.value)}
              value={phone}
          />
          
        </div>
         {phoneError && <p className="error" style={{ color: "red", fontSize: "14px",marginTop:"12px" }}>{phoneError}</p>}
      </div>
      
     <div className="input-group">
      <label>Password</label>
       <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
       {passwordError&& <p className="error" style={{ color: "red", fontSize: "14px",marginTop:"12px" }}>{passwordError}</p>}
      
      <div  className='login forget-btn'>Forgotten Password?</div>
     </div>
     
      <button className='continue-btn login-btn' onClick={handleLogin}>Log In</button>

      <div className="login-prompt">
        Already have an account? <span onClick={() => navigate('/signup')}>Sign Up</span>
      </div>
    </div>
  );
}

export default Login;
