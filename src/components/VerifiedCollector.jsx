import React from 'react';
import { useNavigate } from 'react-router-dom';

function VerifiedCollector() {
  const navigate = useNavigate();

  return (
    <div className="container ">
      <div className="circles">
         <div className='green-circle'>
      <div className='orange-circle'></div>
    </div>
      </div>

      <div className="thankyou-text">
        <h2>You’re Verified!</h2>
        <p>
         Congratulations! Your account has been verified by your Zonal Admin. You can now accept collection jobs.
        </p>
      </div>
     <div>
        <button onClick={() => navigate('/accept-jobs')}>Start Accepting Jobs</button>
     </div>
      
    </div>
  );
}

export default VerifiedCollector;
