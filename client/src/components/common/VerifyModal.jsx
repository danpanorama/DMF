// COMPONENTS/common/VerifyModal.jsx
import React, { useState } from "react";
import Modal from "./Modal";
import GlobalButton from "../buttons/GlobalButton";

function VerifyModal({ isOpen, onClose, onVerifySuccess }) {
  const [step, setStep] = useState("input"); // input | code | success
  const [contact, setContact] = useState("");
  const [sentCode, setSentCode] = useState("");
  const [userCode, setUserCode] = useState("");

  const sendVerification = () => {
    if (!contact.trim()) return alert("Please enter phone or email");
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setSentCode(code);
    setStep("code");
    console.log("📩 Fake code sent to", contact, "→", code);
  };

  const verifyCode = () => {
    if (userCode === sentCode) {
      setStep("success");
      setTimeout(() => {
        onVerifySuccess(contact);
        onClose();
        setStep("input");
        setContact("");
        setUserCode("");
      }, 800);
    } else {
      alert("Incorrect code. Try again.");
    }
  };

  return (
    <Modal title="Verify Identity" isOpen={isOpen} onClose={onClose}>
      {step === "input" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <label style={{ fontWeight: "bold" }}>Enter phone or email:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="example@email.com or +972..."
            style={{
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />
          <GlobalButton label="Send Code" onClick={sendVerification} variant="primary" />
        </div>
      )}

      {step === "code" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p>We’ve sent a 6-digit code to <strong>{contact}</strong></p>
          <input
            type="text"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="Enter code"
            maxLength={6}
            style={{
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "6px",
              textAlign: "center",
              fontSize: "18px",
              letterSpacing: "3px",
            }}
          />
          <GlobalButton label="Verify" onClick={verifyCode} variant="primary" />
        </div>
      )}

      {step === "success" && (
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <h3 style={{ color: "green" }}>✅ Verified Successfully</h3>
        </div>
      )}
    </Modal>
  );
}

export default VerifyModal;
