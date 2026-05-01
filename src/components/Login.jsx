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
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Phone Number"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;
