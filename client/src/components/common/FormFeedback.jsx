import React, { useEffect } from "react";

function FormFeedback({
  message,
  type = "info", // info | success | error
  className = "",
  duration = 3000, // זמן אוטומטי להסתלקות הודעה (ms), אם 0 – נשאר תמיד
  onClose, // פונקציה לקריאה אחרי שהודעה נעלמת
}) {
  const colors = {
    info: "#333",
    success: "green",
    error: "red",
  };

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div
      className={className}
      style={{
        padding: "1rem",
        backgroundColor: colors[type] + "22",
        color: colors[type],
        borderRadius: "6px",
        marginTop: "1rem",
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      {message}
    </div>
  );
}

export default FormFeedback;
