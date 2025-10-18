// // COMPONENTS/common/VerifyModal.jsx
// import React, { useState } from "react";
// import Modal from "./Modal";
// import GlobalButton from "../buttons/GlobalButton";

// function VerifyModal({ isOpen, onClose, onVerifySuccess }) {
//   const [step, setStep] = useState("input"); // input | code | success
//   const [contact, setContact] = useState("");
//   const [sentCode, setSentCode] = useState("");
//   const [userCode, setUserCode] = useState("");
// const [name, setName] = useState("");
//   const sendVerification = () => {
//     if (!contact.trim()) return alert("Please enter phone or email");
//     const code = Math.floor(100000 + Math.random() * 900000).toString();
//     setSentCode(code);
//     setStep("code");
//     console.log("📩 Fake code sent to", contact, "→", code);
//   };

// //   const verifyCode = () => {
// //     if (userCode === sentCode) {
// //       setStep("success");
// //       setTimeout(() => {
// //         onVerifySuccess(contact);
// //         // VerifyModal.jsx
// // // onVerifySuccess({ name, email, phone });

// //         onClose();
// //         setStep("input");
// //         setContact("");
// //         setUserCode("");
// //       }, 800);
// //     } else {
// //       alert("Incorrect code. Try again.");
// //     }
// //   };





// // COMPONENTS/common/VerifyModal.jsx
// const verifyCode = () => {
//   if (userCode === sentCode) {
//     setStep("success");
//     setTimeout(() => {
//       onVerifySuccess({
//         name,
//         email: contact.includes("@") ? contact : "",
//         phone: contact.startsWith("+") ? contact : "",
//       });

//       onClose();
//       setStep("input");
//       setContact("");
//       setUserCode("");
//       setName("");
//     }, 800);
//   } else {
//     alert("Incorrect code. Try again.");
//   }
// };

//   return (
//     <Modal title="Verify Identity" isOpen={isOpen} onClose={onClose}>
//       {/* {step === "input" && (
//         <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//           <label style={{ fontWeight: "bold" }}>Enter phone or email:</label>
//           <input
//             type="text"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             placeholder="example@email.com or +972..."
//             style={{
//               padding: "0.5rem",
//               border: "1px solid #ccc",
//               borderRadius: "6px",
//             }}
//           />
//           <GlobalButton label="Send Code" onClick={sendVerification} variant="primary" />
//         </div>
//       )} */}




// {step === "input" && (
//   <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//     <label style={{ fontWeight: "bold" }}>Full Name:</label>
//     <input
//       type="text"
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//       placeholder="Your full name"
//       style={{
//         padding: "0.5rem",
//         border: "1px solid #ccc",
//         borderRadius: "6px",
//       }}
//     />
//     <label style={{ fontWeight: "bold" }}>Enter phone or email:</label>
//     <input
//       type="text"
//       value={contact}
//       onChange={(e) => setContact(e.target.value)}
//       placeholder="example@email.com or +972..."
//       style={{
//         padding: "0.5rem",
//         border: "1px solid #ccc",
//         borderRadius: "6px",
//       }}
//     />
//     <GlobalButton label="Send Code" onClick={sendVerification} variant="primary" />
//   </div>
// )}

//       {step === "code" && (
//         <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//           <p>We’ve sent a 6-digit code to <strong>{contact}</strong></p>
//           <input
//             type="text"
//             value={userCode}
//             onChange={(e) => setUserCode(e.target.value)}
//             placeholder="Enter code"
//             maxLength={6}
//             style={{
//               padding: "0.5rem",
//               border: "1px solid #ccc",
//               borderRadius: "6px",
//               textAlign: "center",
//               fontSize: "18px",
//               letterSpacing: "3px",
//             }}
//           />
//           <GlobalButton label="Verify" onClick={verifyCode} variant="primary" />
//         </div>
//       )}

//       {step === "success" && (
//         <div style={{ textAlign: "center", padding: "1rem" }}>
//           <h3 style={{ color: "green" }}>✅ Verified Successfully</h3>
//         </div>
//       )}
//     </Modal>
//   );
// }

// export default VerifyModal;


// COMPONENTS/common/VerifyModal.jsx
import React, { useState } from "react";
import Modal from "./Modal";
import GlobalButton from "../buttons/GlobalButton";
import api from "../../config/axiosConfig";

function VerifyModal({ isOpen, onClose, onVerifySuccess }) {
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");

  const sendVerification = async () => {
    if (!contact.trim()) return alert("Please enter phone or email");

    const payload = {
      name,
      email: contact.includes("@") ? contact : "",
      phone: contact.startsWith("+") ? contact : "",
    };

    try {
      console.log("📤 Sending contact data:", payload);
      const { data } = await api.post("/meetings", {
        // לדמו בלבד, שליחה ישירה
        productId: "demo123",
        date: new Date().toISOString(),
        time: "10:00",
        contact: payload,
      });

      console.log("✅ Server response:", data);
      alert("Data sent successfully!");
      onVerifySuccess(payload);
      onClose();
    } catch (err) {
      console.error("❌ Error sending data:", err.message);
      alert("Server error: " + err.message);
    }
  };

  return (
    <Modal title="Verify Identity" isOpen={isOpen} onClose={onClose}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label style={{ fontWeight: "bold" }}>Full Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          style={{
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />

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

        <GlobalButton
          label="Send to Server (Demo)"
          onClick={sendVerification}
          variant="primary"
        />
      </div>
    </Modal>
  );
}

export default VerifyModal;


