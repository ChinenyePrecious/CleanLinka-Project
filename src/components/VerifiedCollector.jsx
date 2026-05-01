import React from 'react';
import { useNavigate } from 'react-router-dom';

function VerifiedCollector() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>You’re Verified!</h2>
      <p>Congratulations! Your account has been verified by your Zonal Admin. You can now accept collection jobs.</p>
      <button onClick={() => navigate('/accept-jobs')}>Start Accepting Jobs</button>
    </div>
  );
}

export default VerifiedCollector;
