import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineSecurity } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";

function CollectorVerificationStep1() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    NIN: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  
    const [error, setError] = useState("");

  const handleChange = (e) =>{
     setError("");
      setForm({ ...form, [e.target.name]: e.target.value });
  }
   

  const handleContinue = () =>{ 
    if (form.NIN.length !== 11) {
      setError("NIN must be exactly 11 digits.");
      return;
    }
    if (!form.name.trim()) {
      setError("Full name is required.");
      return;
    }
    if (!form.phone.trim()) {
      setError("Phone number is required.");
      return;
    
  };

   sessionStorage.setItem(
      "collectorStep1",
      JSON.stringify({
        nin: form.NIN,
        full_name: form.name,
        email: form.email || null,
        phone: form.phone,
        address: form.address,
      })
    );
    navigate("/verify-step2");
  };

  const isFormValid =
    form.NIN.trim().length === 11 &&
    form.name.trim().length > 0 &&
    form.phone.trim().length > 0;

  return (
    <div className="verification-card">
      <div className="header-row">
        <IoArrowBack
          className="back-icon"
          onClick={() => navigate("/signup")}
        />
        <h2>Collector Verification</h2>
      </div>

      <div className="progress-container">
        <div className="progress-bar active"></div>
        <div className="progress-bar"></div>
      </div>
      <div className="input-group">
         <label>NIN (National Identification Number)</label>
        <input
          name="NIN"
          placeholder="11 digits"
          maxLength={11}
          inputMode="numeric"
          onChange={handleChange}
          value={form.NIN}
        />
      </div>
      <div className="input-group">
        <label>Full Name</label>
        <input
          name="name"
          placeholder="E.g David Jones"
          onChange={handleChange}
          value={form.name}
        />
      </div>
      <div className="input-group">
        <label>Email(if Any)</label>
        <input
          name="email"
          placeholder="E.g Davidjones@gmail.com"
          onChange={handleChange}
          value={form.email}
        />
      </div>
      <div className="input-group">
        <label>Phone Number</label>
        <div className="phone-contact">
          <div className="country-code">+234</div>
          <input
            name="phone"
            placeholder="XXXXXXXXXXXXXXX"
            onChange={handleChange}
            value={form.phone}
          />
        </div>
      </div>
      <div className="input-group">
        <label>Residential/Office Address</label>
        <input />
        <textarea
          name="address"
          placeholder="Street name, building number, apartment"
          onChange={handleChange}
          value={form.address}
          rows={5}
          cols={6}
        ></textarea>
        <p className="helper-text">Use Current location/address. </p>
      </div>
      {error && <p className="error">{error}</p>}
      
      <button onClick={handleContinue} disabled={!isFormValid} className="continue-btn">
        Continue
      </button>
      <div className="login-prompt">
        Already have an account? <span onClick={() => navigate('/login')}>Log In</span>
      </div>

      <div className="identity-protection">
        <div className="shield-icon">
          <MdOutlineSecurity />
        </div>
        <div className="identity-content">
          <h3>Identity Protection</h3>
          <p>Your data is encrypted and used only for institutional verification purposes.</p>
        </div>
      </div>
    </div>
  );
}

export default CollectorVerificationStep1;
