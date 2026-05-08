import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding1 from "./components/Onboarding1";
import Onboarding2 from "./components/Onboarding2";
import Onboarding3 from "./components/Onboarding3";
import Signup from "./components/Signup";
import CollectorVerificationStep1 from "./components/CollectorVerificationStep1";
import CollectorVerificationStep2 from "./components/CollectorVerificationStep2";
import VerifyPhone from "./components/VerifyPhone";
import ThankYou from "./components/ThankYou ";
import VerifiedCollector from "./components/VerifiedCollector";
import Login from "./components/Login";
import "./index.css";

function App() {
  return (
    <Router>
      <img src= "/src/assets/Cleanlinka Logo.png" alt="CleanlinkaLogo" className="CleanlinkaLogo"/>
      <Routes>
        <Route path="/" element={<Onboarding1 />} />
        <Route path="/onboarding2" element={<Onboarding2 />} />
        <Route path="/onboarding3" element={<Onboarding3 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-step1" element={<CollectorVerificationStep1 />} />
        <Route path="/verify-step2" element={<CollectorVerificationStep2 />} />
        <Route path="/verify-phone" element={<VerifyPhone />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/verified" element={<VerifiedCollector />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
