// controllers/meetingController.js
import asyncHandler from "../middlewares/asyncHandler.js";
import Meeting from "../models/Meeting.js";
import Contact from "../models/Contact.js";
import { sendMail } from "../utils/email.js";
import { findOrCreateContact } from "../utils/userUtils.js";
import { v4 as uuidv4 } from 'uuid';





// export const createMeeting = asyncHandler(async (req, res) => {
//   const { productId, date, time, contact, reschedule = false } = req.body;

//   if (!contact || !contact.email) {
//     return res.status(400).json({ status: "fail", message: "Contact email required" });
//   }

//   console.log(req.body);

//   contact.email = contact.email.toLowerCase();

//   const meetingDateTime = new Date(`${date}T${time}:00Z`);
//   if (isNaN(meetingDateTime.getTime())) {
//     return res.status(400).json({ status: "fail", message: "Invalid date or time" });
//   }

//   if (meetingDateTime < new Date()) {
//     return res.status(400).json({ status: "fail", message: "Cannot schedule a meeting in the past" });
//   }

//   // מציאת או יצירת איש קשר
//   const contactDoc = await findOrCreateContact(contact);
//   const userId = req.user ? req.user._id : null;

//   // בדיקה אם קיימת פגישה עם אותו email ואותו נכס
//   const existingMeeting = await Meeting.findOne({
//     email: contact.email,
//     productId,
//     status: { $ne: "cancelled" }
//   });

//   if (existingMeeting && !reschedule) {
//     return res.status(409).json({
//       status: "fail",
//       message: "You already have a meeting",
//       existingMeeting: {
//         _id: existingMeeting._id,
//         date: existingMeeting.date,
//         time: existingMeeting.time,
//         productId: existingMeeting.productId
//       }
//     });
//   }

//   // אם זו החלפה – מוחקים את הישנה
//   if (existingMeeting && reschedule) {
//     existingMeeting.status = "cancelled";
//     await existingMeeting.save();

//     const rescheduleMails = [
//       sendMail({
//         to: contact.email,
//         subject: "🗓️ Your meeting has been rescheduled",
//         html: `
//           <p>Your previous meeting on <strong>${existingMeeting.date}</strong> at <strong>${existingMeeting.time}</strong> has been replaced.</p>
//           <p>New meeting: <strong>${date}</strong> at <strong>${time}</strong>.</p>
//         `
//       }),
//       sendMail({
//         to: process.env.COMPANY_EMAIL,
//         subject: "🗓️ Meeting Rescheduled",
//         html: `
//           <p>Meeting for <strong>${contact.name}</strong> has been updated.</p>
//           <p>Previous: ${existingMeeting.date} at ${existingMeeting.time} (cancelled)</p>
//           <p>New: ${date} at ${time}</p>
//         `
//       })
//     ];

//     try {
//       await Promise.all(rescheduleMails);
//     } catch (err) {
//       console.error("Failed to send some emails", err);
//     }
//   }

//   // יוצרים את הפגישה החדשה
//   const meeting = await Meeting.create({
//     user: userId,
//     contact: contactDoc._id,
//     productId,
//     date,
//     time,
//     email: contact.email
//   });

//   // שולחים מיילים רגילים אם זו לא החלפה
//   if (!existingMeeting || !reschedule) {
//     const newMeetingMails = [
//       sendMail({
//         to: process.env.COMPANY_EMAIL,
//         subject: "🗓️ New Meeting Scheduled",
//         html: `
//           <h3>New meeting scheduled</h3>
//           <p><strong>Date:</strong> ${date}</p>
//           <p><strong>Time:</strong> ${time}</p>
//           <p><strong>Property:</strong> ${productId || "N/A"}</p>
//           <p><strong>Client:</strong> ${contact.name || "-"}<br/>
//              <strong>Email:</strong> ${contact.email || "-"}<br/>
//              <strong>Phone:</strong> ${contact.phone || "-"}</p>
//         `
//       }),
//       sendMail({
//         to: contact.email,
//         subject: `🗓️ Your Meeting is Scheduled`,
//         html: `
//           <h3>Your meeting is scheduled</h3>
//           <p><strong>Date:</strong> ${date}</p>
//           <p><strong>Time:</strong> ${time}</p>
//           <p><strong>Property:</strong> ${productId || "N/A"}</p>
//           <p>We look forward to seeing you!</p>
//         `
//       })
//     ];

//     try {
//       await Promise.all(newMeetingMails);
//     } catch (err) {
//       console.error("Failed to send some emails", err);
//     }
//   }

//   res.status(201).json({
//     status: "success",
//     message: "Meeting successfully scheduled",
//     data: meeting
//   });
// });
function parseMeetingDateTime(date, time) {
  // אם date כבר פורמט ISO מלא
  if (date.includes('T')) {
    const isoDate = new Date(date);
    if (!isNaN(isoDate.getTime())) return isoDate;
  }

  // אם date בפורמט YYYY-MM-DD ו־time נפרד
  if (!date || !time) return null; // בדיקה בסיסית
  const [year, month, day] = date.split('-').map(Number);
  const [hour, minute] = time.split(':').map(Number);
  const dt = new Date(year, month - 1, day, hour, minute);
  return isNaN(dt.getTime()) ? null : dt;
}






export const createMeeting = asyncHandler(async (req, res) => {
  const { productId, date, time, contact, reschedule = false } = req.body;

  if (!contact || !contact.email) {
    return res.status(400).json({ status: "fail", message: "Contact email required" });
  }

  // contact.email = contact.email.toLowerCase();
  // const meetingDateTime = new Date(`${date}T${time}:00Z`);
  // if (isNaN(meetingDateTime.getTime())) {
  //   return res.status(400).json({ status: "fail", message: "Invalid date or time" });
  // }

  contact.email = contact.email.toLowerCase();

  console.log(date,time)
const meetingDateTime = parseMeetingDateTime(date, time);
if (isNaN(meetingDateTime.getTime()) || meetingDateTime < new Date()) {
  return res.status(400).json({ status: "fail", message: "Invalid date or time", data: date, time ,m:"change"});
}


  if (meetingDateTime < new Date()) {
    return res.status(400).json({ status: "fail", message: "Cannot schedule a meeting in the past" });
  }

  // מציאת או יצירת איש קשר
  const contactDoc = await findOrCreateContact(contact);
  const userId = req.user ? req.user._id : null;

  // בדיקה אם קיימת פגישה עם אותו email ואותו נכס
  const existingMeeting = await Meeting.findOne({
    email: contact.email,
    productId,
    status: { $ne: "cancelled" }
  });

  if (existingMeeting && !reschedule) {
    return res.status(409).json({
      status: "fail",
      message: "You already have a meeting",
      existingMeeting: {
        _id: existingMeeting._id,
        date: existingMeeting.date,
        time: existingMeeting.time,
        productId: existingMeeting.productId
      }
    });
  }

  // אם זו החלפה – מבטלים את הישנה
  if (existingMeeting && reschedule) {
    existingMeeting.status = "cancelled";
    await existingMeeting.save();

    try {
      await Promise.all([
        sendMail({
          to: contact.email,
          subject: "🗓️ Your meeting has been rescheduled",
          html: `<p>Your previous meeting on <strong>${existingMeeting.date}</strong> at <strong>${existingMeeting.time}</strong> has been replaced.</p>
                 <p>New meeting: <strong>${date}</strong> at <strong>${time}</strong>.</p>`
        }),
        sendMail({
          to: process.env.COMPANY_EMAIL,
          subject: "🗓️ Meeting Rescheduled",
          html: `<p>Meeting for <strong>${contact.name}</strong> has been updated.</p>
                 <p>Previous: ${existingMeeting.date} at ${existingMeeting.time} (cancelled)</p>
                 <p>New: ${date} at ${time}</p>`
        })
      ]);
    } catch (err) {
      console.error("Failed to send reschedule emails:", err);
    }
  }

  // יצירת token לאישור/ביטול
  const approvalToken = uuidv4();

  // יוצרים את הפגישה החדשה
  const meeting = await Meeting.create({
    user: userId,
    contact: contactDoc._id,
    productId,
    date,
    time,
    email: contact.email,
    approvalToken,
    companyStatus: "pending",
    status: "pending"
  });

  // שליחת מייל לחברה עם כפתורי אישור/ביטול
  try {
    await sendMail({
      to: process.env.COMPANY_EMAIL,
      subject: "New Meeting Awaiting Approval",
      html: `
        <h3>Meeting Request</h3>
        <p>Client: ${contact.name} (${contact.email})</p>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
        <p>Property: ${productId || "N/A"}</p>
        <p>
          <a href="${process.env.FRONTEND_URL}/approve/${approvalToken}">✅ Approve</a> |
          <a href="${process.env.FRONTEND_URL}/reject/${approvalToken}">❌ Reject</a>
        </p>
      `
    });
  } catch (err) {
    console.error("Failed to send approval email to company:", err);
  }

  // מחזירים תשובה ללקוח מיידית
  res.status(201).json({
    status: "success",
    message: "Meeting successfully scheduled. Awaiting company approval.",
    data: meeting
  });
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


export const getAvailableMeetings = asyncHandler(async (req, res) => {
  // שולפים את כל הפגישות שלא בוטלו
  const meetings = await Meeting.find({ status: { $ne: 'cancelled' } })
    .select('date time')
    .sort({ date: 1 });

  // ממירים לפורמט נוח ל-frontend
  const availableDates = meetings.map(m => ({
    date: m.date.toISOString().split('T')[0], // YYYY-MM-DD
    time: m.time
  }));

  res.json({ status: 'success', data: availableDates });
});


export const rescheduleMeeting = asyncHandler(async (req, res) => {
  const { date, time, contact, productId } = req.body;
  const meetingId = req.params.id;

  // בדיקה ראשונית
  if (!contact || !contact.email) {
    return res.status(400).json({ status: "fail", message: "Contact email required" });
  }

  const existingMeeting = await Meeting.findById(meetingId);
  if (!existingMeeting) {
    return res.status(404).json({ status: "fail", message: "Meeting not found" });
  }

  // בדיקה אם הפגישה החדשה לא בעבר
const meetingDateTime = parseMeetingDateTime(date, time);
  if (meetingDateTime < new Date()) {
    return res.status(400).json({ status: "fail", message: "Cannot schedule a meeting in the past" });
  }

  // מחיקת הפגישה הישנה
  await Meeting.deleteOne({ _id: meetingId });

  // מציאת/יצירת איש הקשר
  const contactDoc = await findOrCreateContact(contact);

  // יצירת פגישה חדשה
  const newMeeting = await Meeting.create({
    user: req.user ? req.user._id : null,
    contact: contactDoc._id,
    productId: productId || existingMeeting.productId,
    date,
    time,
    email: contact.email.toLowerCase(),
  });

  // מחזירים תשובה ללקוח מיד כדי לא לחכות למיילים
  res.status(200).json({ status: "success", data: newMeeting });

  // שליחת מיילים ברקע (לא חוסם את הבקשה)
  Promise.all([
    sendMail({
      to: contact.email,
      subject: "🗓️ Your meeting has been rescheduled",
      html: `
        <p>Your previous meeting on <strong>${existingMeeting.date}</strong> at <strong>${existingMeeting.time}</strong> has been replaced.</p>
        <p>New meeting: <strong>${date}</strong> at <strong>${time}</strong>.</p>
      `,
    }),
    sendMail({
      to: process.env.COMPANY_EMAIL,
      subject: "🗓️ Meeting Rescheduled",
      html: `
        <p>Meeting for <strong>${contact.name}</strong> has been updated.</p>
        <p>Previous: ${existingMeeting.date} at ${existingMeeting.time} (cancelled)</p>
        <p>New: ${date} at ${time}</p>
      `,
    }),
  ]).catch((err) => console.error("Failed to send reschedule emails:", err));
});











export const approveMeeting = asyncHandler(async (req, res) => {
  const { token } = req.params;

  const meeting = await Meeting.findOne({ approvalToken: token });
  if (!meeting) {
    return res.status(404).send("<h2>Meeting not found</h2>");
  }

  meeting.companyStatus = "approved";
  meeting.status = "confirmed";
  await meeting.save();

  // מייל ללקוח על אישור
  try {
    await sendMail({
      to: meeting.email,
      subject: "🗓️ Your Meeting has been approved",
      html: `<p>Your meeting on <strong>${meeting.date}</strong> at <strong>${meeting.time}</strong> has been approved.</p>`
    });
  } catch (err) {
    console.error("Failed to send approval email:", err);
  }

  res.send("<h2>Meeting approved!</h2>");
});

export const rejectMeeting = asyncHandler(async (req, res) => {
  const { token } = req.params;

  const meeting = await Meeting.findOne({ approvalToken: token });
  if (!meeting) {
    return res.status(404).send("<h2>Meeting not found</h2>");
  }

  meeting.companyStatus = "rejected";
  meeting.status = "cancelled";
  await meeting.save();

  // מייל ללקוח על ביטול
  try {
    await sendMail({
      to: meeting.email,
      subject: "🗓️ Your Meeting has been cancelled",
      html: `<p>Your meeting on <strong>${meeting.date}</strong> at <strong>${meeting.time}</strong> has been cancelled.</p>`
    });
  } catch (err) {
    console.error("Failed to send rejection email:", err);
  }

  res.send("<h2>Meeting rejected!</h2>");
});
