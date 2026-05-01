import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { FiTruck } from "react-icons/fi";


function Signup() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (role === 'collector') navigate('/verify-step1');
    else alert('Please select a role');
  };

  return (
    <div className="signup-container">
      
      <h2>Create an account</h2>
      <p>Sign up now and be part of CleanLinka.</p>
     
      
<h1>Sign Up as...</h1>
      <div className="roles role-selection">
        <div className={`role ${role === 'pickup' ? 'active' : ''}`} onClick={() => setRole('pickup')}><IoHomeOutline className='role-icon' />

          Request Pick Up
        </div>
        <div className={`role ${role === 'admin' ? 'active' : ''}`} onClick={() => setRole('admin')}><MdAdminPanelSettings className='role-icon' />
        <div className='role-div'>
          <h1> Area Admin</h1>
          <p>Oversees zones, activated /Deactivate collectors</p> 
        </div>
         
        </div>
        <div className={`role ${role === 'collector' ? 'active' : ''}`} onClick={() => setRole('collector')}><FiTruck className='role-icon' />
        <div className='role-div'>
          <h1>Waste Collector</h1>
          <p>Receive , mark pickups and earn.</p> 
        </div>
          
        </div>
      </div>

      <button onClick={handleContinue} className="continue-btn">
        Continue
      </button>
    </div>
  );
}

export default Signup;
