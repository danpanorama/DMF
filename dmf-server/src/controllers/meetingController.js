// import asyncHandler from '../middlewares/asyncHandler.js';
// import Meeting from '../models/Meeting.js';
// import { sendMail } from '../utils/email.js';
// import logger from '../utils/logger.js';

// export const createMeeting = asyncHandler(async (req, res) => {
//   const payload = {
//     user: req.user._id,
//     subject: req.body.subject,
//     date: new Date(req.body.date),
//     location: req.body.location || ''
//   };

//   // אפשר להוסיף בדיקות ל-conflict כאן (פגישה כבר קיימת לאותו זמן)
//   const existing = await Meeting.findOne({ user: req.user._id, date: payload.date });
//   if (existing) return res.status(409).json({ status: 'fail', message: 'You already have a meeting at this time' });

//   const meeting = await Meeting.create(payload);

//   // שליחת מייל אישור ללקוח (אופציונלי)
//   try {
//     await sendMail({
//       to: req.user.email,
//       subject: `Meeting scheduled: ${payload.subject}`,
//       text: `Your meeting is scheduled on ${payload.date.toISOString()}`,
//       html: `<p>Your meeting is scheduled on <strong>${payload.date.toISOString()}</strong></p>`
//     });
//   } catch (err) {
//     logger.error('Failed to send meeting email', { err, userId: req.user._id });
//     // לא נהרוג את היצירה בגלל כשל במייל - רק נרשום
//   }

//   res.status(201).json({ status: 'success', data: meeting });
// });

// export const getMyMeetings = asyncHandler(async (req, res) => {
//   const meetings = await Meeting.find({ user: req.user._id }).sort({ date: 1 });
//   res.json({ status: 'success', data: meetings });
// });

// export const cancelMeeting = asyncHandler(async (req, res) => {
//   const meeting = await Meeting.findOneAndUpdate(
//     { _id: req.params.id, user: req.user._id },
//     { status: 'cancelled' },
//     { new: true }
//   );
//   if (!meeting) return res.status(404).json({ status: 'fail', message: 'Meeting not found' });
//   res.json({ status: 'success', data: meeting });
// });





// controllers/meetingController.js
import asyncHandler from "../middlewares/asyncHandler.js";
import Meeting from "../models/Meeting.js";
import Contact from "../models/Contact.js";
import { sendMail } from "../utils/email.js";
import { findOrCreateContact } from "../utils/userUtils.js";

export const createMeeting = asyncHandler(async (req, res) => {
  const { productId, date, time, contact } = req.body;
console.log( req.body)
  let userId = req.user ? req.user._id : null;
  let contactDoc = null;

  // אם אין משתמש מחובר - נשמור את פרטי הקשר
  if (!userId && contact) {
    // contactDoc = await Contact.create({
    //   name: contact.name || "",
    //   email: contact.email || "",
    //   phone: contact.phone || ""
    // });


        contactDoc = await findOrCreateContact(contact);

  }

  // לבדוק כפילויות באותו תאריך/שעה
  const conflict = await Meeting.findOne({ date, time });
  if (conflict) {
    return res.status(409).json({ status: "fail", message: "Time slot unavailable" });
  }

  // יצירת הפגישה
  const meeting = await Meeting.create({
    user: userId,
    contact: contactDoc ? contactDoc._id : null,
    productId,
    date,
    time
  });

  // שליחת מייל התראה למייל של החברה
  await sendMail({
    to: process.env.COMPANY_EMAIL, // מייל שלך
    subject: "🗓️ New Meeting Scheduled",
    html: `
      <h3>New meeting scheduled</h3>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Property:</strong> ${productId || "N/A"}</p>
      ${
        contact
          ? `<p><strong>Client:</strong> ${contact.name || "-"}<br/>
              <strong>Email:</strong> ${contact.email || "-"}<br/>
              <strong>Phone:</strong> ${contact.phone || "-"}</p>`
          : ""
      }
    `
  });

  res.status(201).json({ status: "success", data: meeting });
});


export const getMyMeetings = asyncHandler(async (req, res) => {
  const meetings = await Meeting.find({ user: req.user._id }).sort({ date: 1 });
  res.json({ status: 'success', data: meetings });
});

export const cancelMeeting = asyncHandler(async (req, res) => {
  const meeting = await Meeting.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    { status: 'cancelled' },
    { new: true }
  );
  if (!meeting)
    return res.status(404).json({ status: 'fail', message: 'Meeting not found' });

  res.json({ status: 'success', data: meeting });
});
