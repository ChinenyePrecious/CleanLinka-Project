import React from 'react';
import { useNavigate } from 'react-router-dom';

function VerifiedCollector() {
  const navigate = useNavigate();

  return (
    <div className="container ">
      <div className="circles">
         <div className='green-circle'>
      <div className='orange-circle'>
          <img src="/src/assets/Frame 177.png" alt="" />
      </div>
    </div>
      </div>

      <div className="thankyou-text">
        <h2>You’re Verified!</h2>
        <p>
         Congratulations! Your account has been verified by your Zonal Admin. You can now accept collection jobs.
        </p>
      </div>

      <div className="collector-profile">
        <div className="collector-picture">
        <img src="/src/assets/Frame 170.png" alt="" />
        </div>
        <div className="collector-details">
          <h2>Ben Ade</h2>
          <h3>Yaba North Zone</h3>
          <p>Verified Collector</p>
          <p>ID #104</p>
        </div>
      </div>
     <div>
        <button onClick={() => navigate('/accept-jobs')} className='collector-btn'>Start Accepting Jobs</button>
     </div>
      
    </div>
  );
}

export default VerifiedCollector;
