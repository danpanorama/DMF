import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../common/Modal";
import GlobalButton from "../../buttons/GlobalButton";
import {
  fetchAvailableDates,
  addSchedule,
} from "../../../redux/actions/scheduleActions";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../../css/ScheduleModal.css";
import VerifyModal from "../../common/VerifyModal";

function ScheduleModal({ isOpen, onClose, productId }) {
  const dispatch = useDispatch();
  const { availableDates = [], scheduled = [] } = useSelector(
    (state) => state.schedule || {}
  );

  const [showVerify, setShowVerify] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    if (isOpen) dispatch(fetchAvailableDates());
  }, [dispatch, isOpen]);

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(d.getDate()).padStart(2, "0")}`;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  const defaultTimes = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  // מחשב שעות פנויות לפי תאריכים קיימים
  const getAvailableTimesForDate = (date) => {
    const dayTimes = availableDates
      .filter((d) => formatDate(d.date) === date)
      .map((d) => d.time);

    let taken = [...dayTimes];

    // מוסיף את הפגישות שהמשתמש קבע כרגע
    scheduled.forEach((s) => {
      if (formatDate(s.date) === date) taken.push(s.time);
    });

    return defaultTimes.filter((t) => !taken.includes(t));
  };

  const availableTimes = selectedDate
    ? getAvailableTimesForDate(formatDate(selectedDate))
    : [];

  // ימים שבהם כל השעות תפוסות
  const fullyBookedDates = Object.entries(
    availableDates.reduce((acc, curr) => {
      const dateStr = formatDate(curr.date);
      acc[dateStr] = (acc[dateStr] || 0) + 1;
      return acc;
    }, {})
  )
    .filter(([date, count]) => {
      // בודק אם כל השעות תפוסות
      const takenTimes = availableDates
        .filter((d) => formatDate(d.date) === date)
        .map((d) => d.time);
      scheduled.forEach((s) => {
        if (formatDate(s.date) === date) takenTimes.push(s.time);
      });
      return takenTimes.length >= defaultTimes.length;
    })
    .map(([date]) => date);

  const handleSubmit = () => {
    if (!selectedDate || !selectedTime)
      return alert("Please select date and time");
    setShowVerify(true);
  };

  const handleVerifySuccess = (contact) => {
    const schedule = {
      productId,
      date: formatDate(selectedDate),
      time: selectedTime,
      contact, // { name, email, phone }
    };
    dispatch(addSchedule(schedule));
    setSelectedTime("");
    setSelectedDate(null);
    setShowVerify(false);
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
            tileDisabled={({ date }) =>
              fullyBookedDates.includes(formatDate(date))
            }
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
              {availableTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedDate && availableTimes.length === 0 && (
          <p style={{ color: "red" }}>No available times for this day</p>
        )}

        <GlobalButton
          label="Confirm"
          onClick={handleSubmit}
          variant="primary"
        />

        <VerifyModal
          isOpen={showVerify}
          onClose={() => setShowVerify(false)}
          onVerifySuccess={handleVerifySuccess}
          productId={productId}
          date={formatDate(selectedDate)}
          time={selectedTime}
        />
      </div>
    </Modal>
  );
}

export default ScheduleModal;
