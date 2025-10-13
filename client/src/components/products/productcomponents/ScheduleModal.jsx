

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Modal from "../../common/Modal";
// import GlobalButton from "../../buttons/GlobalButton";
// import { fetchAvailableDates, addSchedule } from "../../../redux/actions/scheduleActions";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "../../../css/ScheduleModal.css";

// function ScheduleModal({ isOpen, onClose, productId }) {
//   const dispatch = useDispatch();
//   const { availableDates = [], scheduled = [] } = useSelector(state => state.schedule || {});

//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState("");

//   useEffect(() => {
//     if (isOpen) dispatch(fetchAvailableDates());
//   }, [dispatch, isOpen]);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setSelectedTime("");
//   };

//   const handleSubmit = () => {
//     if (!selectedDate || !selectedTime) return alert("Please select date and time");

//     const schedule = {
//       productId,
//       date: formatDate(selectedDate),
//       time: selectedTime,
//     };

//     dispatch(addSchedule(schedule));
//     onClose();
//   };

//   const formatDate = (date) => {
//     const d = new Date(date);
//     return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
//   };

//   // ימים שלא פנויים בכלל → אדומים
//   const fullyBookedDates = availableDates
//     .filter(d => d.times.length === 0)
//     .map(d => d.date);

//   // ימים עם זמינות חלקית → נשמרים לבדיקה ל־select
//   const partialAvailableDates = availableDates
//     .filter(d => d.times.length > 0);

//   // שעות זמינות ביום שנבחר
//   const availableTimes = selectedDate
//     ? partialAvailableDates.find(d => d.date === formatDate(selectedDate))?.times || []
//     : [];

//   return (
//     <Modal title="Schedule a Visit" isOpen={isOpen} onClose={onClose}>
//       <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//         <div>
//           <label style={{ fontWeight: "bold" }}>Select Date:</label>
//           <Calendar
//             onChange={handleDateChange}
//             value={selectedDate}
//             minDate={new Date()}
//             tileDisabled={({ date }) => fullyBookedDates.includes(formatDate(date))}
//             tileClassName={({ date }) =>
//               fullyBookedDates.includes(formatDate(date))
//                 ? "react-calendar__tile--disabled"
//                 : "react-calendar__tile--available"
//             }
//           />
//         </div>

//         {selectedDate && availableTimes.length > 0 && (
//           <div>
//             <label style={{ fontWeight: "bold" }}>Select Time:</label>
//             <select
//               value={selectedTime}
//               onChange={(e) => setSelectedTime(e.target.value)}
//               style={{
//                 padding: "0.5rem",
//                 marginTop: "0.5rem",
//                 width: "100%",
//                 fontSize: "16px",
//               }}
//             >
//               <option value="">Select time</option>
//               {availableTimes.map(t => <option key={t} value={t}>{t}</option>)}
//             </select>
//           </div>
//         )}

//         {selectedDate && availableTimes.length === 0 && (
//           <p style={{ color: "red" }}>No available times for this day</p>
//         )}

//         <GlobalButton label="Confirm" onClick={handleSubmit} variant="primary" />
//       </div>
//     </Modal>
//   );
// }

// export default ScheduleModal;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../common/Modal";
import GlobalButton from "../../buttons/GlobalButton";
import { fetchAvailableDates, addSchedule } from "../../../redux/actions/scheduleActions";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../../css/ScheduleModal.css";
import VerifyModal from "../../common/VerifyModal";
function ScheduleModal({ isOpen, onClose, productId }) {
  const dispatch = useDispatch();
  const { scheduled = [] } = useSelector(state => state.schedule || {});
const [showVerify, setShowVerify] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    if (isOpen) dispatch(fetchAvailableDates());
  }, [dispatch, isOpen]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  };

  const defaultTimes = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00"];

  // רשימת ימים עם תפוסים מהשרת
  const notAvailableDates = [
    { date: "2025-10-10", times: ["10:00","12:00","14:00"] },
    { date: "2025-10-11", times: ["09:00","11:00","13:00"] },
  ];

  // פונקציה שמחשבת את השעות הפנויות לכל יום
  const getAvailableTimesForDate = (date) => {
    const day = notAvailableDates.find(d => d.date === date);
    let taken = day ? day.times : [];
    // מוסיפים את ה־scheduled מה־redux
    scheduled.forEach(s => {
      if (s.date === date) taken.push(s.time);
    });
    return defaultTimes.filter(t => !taken.includes(t));
  };

  const availableTimes = selectedDate ? getAvailableTimesForDate(formatDate(selectedDate)) : [];

  // ימים שבהם כל השעות תפוסות
  const fullyBookedDates = notAvailableDates
    .map(d => {
      const timesTaken = [...d.times];
      // מוסיפים גם מה־scheduled
      scheduled.forEach(s => {
        if (s.date === d.date) timesTaken.push(s.time);
      });
      return { date: d.date, takenCount: timesTaken.length };
    })
    .filter(d => d.takenCount >= defaultTimes.length)
    .map(d => d.date);

  const handleSubmit = () => {
    if (!selectedDate || !selectedTime) return alert("Please select date and time");
  setShowVerify(true);

 
  };

 const handleVerifySuccess = (contact) => {
  const schedule = {
    productId,
    date: formatDate(selectedDate),
    time: selectedTime,
    contact // { name, email, phone }
  };
  dispatch(addSchedule(schedule));
  setSelectedTime("");
  onClose();
};


  return (
    <Modal title="Schedule a Visit" isOpen={isOpen} onClose={onClose}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label style={{ fontWeight: "bold" }}>Select Date:</label>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
           
            minDate={new Date()}
            tileDisabled={({ date }) => fullyBookedDates.includes(formatDate(date))}
            tileClassName={({ date }) =>
              fullyBookedDates.includes(formatDate(date))
                ? "react-calendar__tile--disabled"
                : "react-calendar__tile--available"
            }
          />
        </div>

        {selectedDate && availableTimes.length > 0 && (
          <div>
            <label style={{ fontWeight: "bold" }}>Select Time:</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              style={{
                padding: "0.5rem",
                marginTop: "0.5rem",
                width: "100%",
                fontSize: "16px",
              }}
            >
              <option value="">Select time</option>
              {availableTimes.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        )}

        {selectedDate && availableTimes.length === 0 && (
          <p style={{ color: "red" }}>No available times for this day</p>
        )}

        <GlobalButton label="Confirm" onClick={handleSubmit} variant="primary" />
     
       <VerifyModal
        isOpen={showVerify}
        onClose={() => setShowVerify(false)}
        onVerifySuccess={handleVerifySuccess}
      />
     
      </div>
    </Modal>
  );
}

export default ScheduleModal;
