

import React, { useState } from "react";
import Modal from "./Modal";
import GlobalButton from "../buttons/GlobalButton";
import api from "../../config/axiosConfig";
import { getDeviceId } from "../../components/utils/device";
import { useDispatch, useSelector } from "react-redux";
import { hideLoader, showLoader } from "../../redux/actions/loaderActions";

function VerifyModal({ isOpen, onClose, onVerifySuccess, productId, date, time }) {
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [conflictMeeting, setConflictMeeting] = useState(null); // לשמירת מידע על כפילות
  const [showConflictOptions, setShowConflictOptions] = useState(false);
const dispatch = useDispatch();
  const sendVerification = async () => {
    if (!contact.trim()) return alert("Please enter phone or email");

    const payload = {
      name,
      email: contact.includes("@") ? contact : "",
      phone: contact.startsWith("+") ? contact : "",
      deviceId: getDeviceId(),
    };
dispatch(showLoader())
    
    try {
      const { data } = await api.post("/meetings", {
        productId,
        date,
        time,
        contact: payload,
      });
      // אין כפילות
      onVerifySuccess(payload);
      setContact("");
      setName("");
      onClose();
      dispatch(hideLoader())
    } catch (err) {
     console.log(err)
      if (err.response?.status === 409) {
      
        // פגישה קיימת - מציג אפשרויות למשתמש
        setConflictMeeting(err.response.data.existingMeeting || {
          date: date,
          time: time
        }); // אם אין נתונים מהשרת
        setShowConflictOptions(true);
       
        
      } else {
        
       
        alert("Server error: " + err.message);
        
      }
    } finally {
  dispatch(hideLoader());
}
  };

  // const replaceMeeting = async () => {
  //   if (!conflictMeeting || !contact) return;
  //   try {
  //     await api.put(`/meetings/${conflictMeeting._id}`, {
  //       date,
  //       time,
  //     });
  //     alert("Meeting replaced successfully!");
  //     onVerifySuccess({ name, email: contact.includes("@") ? contact : "", phone: contact.startsWith("+") ? contact : "" });
  //     setShowConflictOptions(false);
  //     onClose();
  //   } catch (err) {
  //     alert("Failed to replace meeting: " + err.message);
  //   }
  // };



  const replaceMeeting = async () => {
  if (!conflictMeeting || !contact) return;

  try {
    await api.put(`/meetings/${conflictMeeting._id}/reschedule`, {
      productId,
      date,
      time,
      contact: {
        name,
        email: contact.includes("@") ? contact : "",
        phone: contact.startsWith("+") ? contact : "",
      },
      reschedule: true
    });

    alert("Meeting replaced successfully!");
    onVerifySuccess({
      name,
      email: contact.includes("@") ? contact : "",
      phone: contact.startsWith("+") ? contact : "",
    });
    setShowConflictOptions(false);
    onClose();
  } catch (err) {
    alert("Failed to replace meeting: " + err.message);
  }
};

  const keepExistingMeeting = () => {
    alert("Kept existing meeting. No changes made.");
    setShowConflictOptions(false);
    onClose();
  };

  if (showConflictOptions) {
    return (
      <Modal title="Meeting Conflict" isOpen={isOpen} onClose={onClose}>
        <p>
          You already have a meeting scheduled on <strong>{conflictMeeting.date}</strong> at <strong>{conflictMeeting.time}</strong>.
        </p>
        <p>Do you want to replace it with the new date & time?</p>
        <GlobalButton label="Replace Meeting" onClick={replaceMeeting} variant="primary" />
        <GlobalButton label="Keep Existing Meeting" onClick={keepExistingMeeting} variant="secondary" />
      </Modal>
    );
  }

  return (
    <Modal title="Verify Identity" isOpen={isOpen} onClose={onClose}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label style={{ fontWeight: "bold" }}>Full Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          style={{ padding: "0.5rem", border: "1px solid #ccc", borderRadius: "6px" }}
        />

        <label style={{ fontWeight: "bold" }}>Enter phone or email:</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="example@email.com or +972..."
          style={{ padding: "0.5rem", border: "1px solid #ccc", borderRadius: "6px" }}
        />

        <GlobalButton label="Send to Server" onClick={sendVerification} variant="primary" />
      </div>
    </Modal>
  );
}

export default VerifyModal;
