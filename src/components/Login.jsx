import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Replace with actual login logic
    if (phone && password) {
      navigate('/dashboard');
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="container login-container">
      <h2>Login</h2>
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
      </div>
      
     <div className="input-group">
      <label>Phone Number</label>
       <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
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
