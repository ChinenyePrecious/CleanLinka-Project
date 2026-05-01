import React from 'react';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Thank You!</h2>
      <p>Your application is officially Under Review. Our team typically verifies and approves accounts within 24-48 hours.</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
}

export default ThankYou;
