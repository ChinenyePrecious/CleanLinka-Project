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

  const [nameError, setNameError] = useState("");
  const [ninError, setNinError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "NIN") setNinError("");
    if (e.target.name === "name") setNameError("");
    if (e.target.name === "email") setEmailError("");
    if (e.target.name === "phone") setPhoneError("");
    if (e.target.name === "address") setAddressError("");
    
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // // Validation Logic
  // const isFormValid = 
  //   form.NIN.length === 11 && 
  //   form.name.trim().length >= 8 && 
  //   form.email.includes("@") && 
  //   form.phone.trim().length === 10 &&
  //   form.address.trim().length > 0;

  // Validation Handler
  const handleContinue = () => {
    let isValid = true;

    if (form.NIN.length !== 11) {
      setNinError("NIN must be exactly 11 digits.");
      isValid = false;
    }
    if (form.name.trim().length < 8) {
      setNameError("Full name is required and must be at least 8 characters long.");
      isValid = false;
    }
     
    if (form.email && !form.email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }
    if (!form.phone.trim()) {
      setPhoneError("Phone number is required.");
      isValid = false;
    }
    if (!form.address.trim()) {
      setAddressError("Address is required.");
      isValid = false;
    }

    if (isValid) {
      sessionStorage.setItem("collectorStep1", JSON.stringify(form));
      navigate("/verify-step2");
    }
  };

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
        {ninError && <p className="error" style={{ color: "red", fontSize: "14px" }}>{ninError}</p>}
      </div>

      <div className="input-group">
        <label>Full Name</label>
        <input
          name="name"
          placeholder="E.g David Jones"
          onChange={handleChange}
          value={form.name}
        />
        {nameError && <p className="error" style={{ color: "red", fontSize: "14px" }}>{nameError}</p>}
      </div>

      <div className="input-group">
        <label>Email (if Any)</label>
        <input
          name="email"
          placeholder="E.g Davidjones@gmail.com"
          onChange={handleChange}
          value={form.email}
        />
        {emailError && <p className="error" style={{ color: "red", fontSize: "14px" }}>{emailError}</p>}
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
        {phoneError && <p className="error" style={{ color: "red", fontSize: "14px" }}>{phoneError}</p>}
      </div>

      <div className="input-group">
        <label>Residential/Office Address</label>
        <textarea
          name="address"
          placeholder="Street name, building number, apartment"
          onChange={handleChange}
          value={form.address}
          rows={5}
          cols={6}
        ></textarea>
        <p className="helper-text">Use Current location/address.</p>
        {addressError && <p className="error" style={{ color: "red", fontSize: "14px" }}>{addressError}</p>}
      </div>

      <button onClick={handleContinue}  className="continue-btn">
        Continue
      </button>

      <div className="login-prompt">
        Already have an account? <span onClick={() => navigate("/login")}>Log In</span>
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
